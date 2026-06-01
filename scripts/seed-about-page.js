import {createReadStream} from 'node:fs'
import path from 'node:path'
import {getCliClient} from 'sanity/cli'

import {aboutPage} from '../sanity/schemaTypes/documents/aboutPage.js'

const client = getCliClient({apiVersion: '2026-06-01'})

const imageReference = (assetId) => ({
  _type: 'image',
  asset: {
    _type: 'reference',
    _ref: assetId,
  },
})

async function getOrUploadImage(filename) {
  const existingAsset = await client.fetch(
    '*[_type == "sanity.imageAsset" && originalFilename == $filename][0]{_id}',
    {filename},
  )

  if (existingAsset?._id) {
    return imageReference(existingAsset._id)
  }

  const filePath = path.join(process.cwd(), 'public', filename)
  const asset = await client.assets.upload('image', createReadStream(filePath), {
    filename,
  })

  return imageReference(asset._id)
}

async function seedAboutPage() {
  const document = structuredClone(aboutPage.initialValue)

  document.whoWeAre.image = await getOrUploadImage('construction_stats.jpg')

  await client.createOrReplace({
    _id: 'aboutPage',
    _type: 'aboutPage',
    ...document,
  })

  console.log(
    `Seeded About us page with ${document.values.principles.length} principles and ${document.values.coreValues.length} core values.`,
  )
}

seedAboutPage().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
