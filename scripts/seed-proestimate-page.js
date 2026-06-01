import {createReadStream, readFileSync} from 'node:fs'
import path from 'node:path'
import {getCliClient} from 'sanity/cli'

import {proestimatePage} from '../sanity/schemaTypes/documents/proestimatePage.js'

const client = getCliClient({apiVersion: '2026-06-01'})

const imageReference = (assetId) => ({
  _type: 'image',
  asset: {
    _type: 'reference',
    _ref: assetId,
  },
})

const sleep = (duration) =>
  new Promise((resolve) => {
    setTimeout(resolve, duration)
  })

async function withRateLimitRetry(operation, retries = 4) {
  try {
    return await operation()
  } catch (error) {
    if (error.statusCode !== 429 || retries === 0) {
      throw error
    }

    await sleep(1100)
    return withRateLimitRetry(operation, retries - 1)
  }
}

async function getOrUploadImage(filename) {
  const existingAsset = await withRateLimitRetry(() =>
    client.fetch(
      '*[_type == "sanity.imageAsset" && originalFilename == $filename][0]{_id}',
      {filename},
    ),
  )

  if (existingAsset?._id) {
    return imageReference(existingAsset._id)
  }

  const filePath = path.join(process.cwd(), 'public', 'proestimate', filename)
  const asset = await withRateLimitRetry(() =>
    client.assets.upload('image', createReadStream(filePath), {
      filename,
    }),
  )

  return imageReference(asset._id)
}

function readCurrentDivisions() {
  const source = readFileSync(
    path.join(process.cwd(), 'components', 'proestimate', 'proestimate-divisions.jsx'),
    'utf8',
  )
  const match = source.match(
    /const divisions = (\[[\s\S]*?\n\]);\n\nexport default function ProEstimateDivisions/,
  )

  if (!match) {
    throw new Error('Could not read the current ProEstimate divisions.')
  }

  return Function(`"use strict"; return ${match[1]}`)()
}

async function seedProestimatePage() {
  const document = structuredClone(proestimatePage.initialValue)
  const divisions = readCurrentDivisions()

  document.divisionsSection.divisions = []

  for (const division of divisions) {
    const number = Number(division.title.match(/Division\s+(\d+)/)?.[1])

    if (!number) {
      throw new Error(`Could not read a division number from "${division.title}".`)
    }

    document.divisionsSection.divisions.push({
      _key: `division-${number}`,
      number,
      title: division.title,
      lead: division.lead,
      items: division.items,
      image: await getOrUploadImage(`division${number}.png`),
      imageAlt: division.title,
    })

    await sleep(80)
  }

  await client.createOrReplace({
    _id: 'proestimatePage',
    _type: 'proestimatePage',
    ...document,
  })

  console.log(
    `Seeded ProEstimate page with ${document.divisionsSection.divisions.length} divisions.`,
  )
}

seedProestimatePage().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
