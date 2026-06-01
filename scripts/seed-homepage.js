import {createReadStream} from 'node:fs'
import path from 'node:path'
import {getCliClient} from 'sanity/cli'

import {homepage} from '../sanity/schemaTypes/documents/homepage.js'

const client = getCliClient({apiVersion: '2026-06-01'})

const logos = [
  ['ag', 'AG', 'AG logo', 'AG LOGO.png'],
  ['bh', 'BH', 'BH logo', 'BH logo.webp'],
  ['cg', 'CG', 'CG logo', 'CG-Logo-550.png'],
  ['tech-build', 'Tech Build', 'Tech Build logo', 'Company Logo tech build.avif'],
  ['newport', 'Newport', 'Newport logo', 'Newport-logo.webp'],
  ['rapid-doors', 'Rapid Doors', 'Rapid Doors logo', 'Rapid doors logo.webp'],
  ['ufd', 'UFD', 'UFD logo', 'UFD_logo.jpg'],
  [
    'builders-of-metro-atlanta',
    'Builders of Metro Atlanta',
    'Builders of Metro Atlanta logo',
    'builders of metro atlanta.avif',
  ],
  ['doorways', 'Doorways', 'Doorways logo', 'doorways logo.webp'],
  ['hynes', 'Hynes', 'Hynes logo', 'hynes-50-years-logo-1.webp'],
  ['smart-shield', 'Smart Shield', 'Smart Shield logo', 'logo smart shield.png'],
]

async function getOrUploadLogo(filename) {
  const existingAsset = await client.fetch(
    '*[_type == "sanity.imageAsset" && originalFilename == $filename][0]{_id}',
    {filename},
  )

  if (existingAsset?._id) {
    return existingAsset._id
  }

  const filePath = path.join(process.cwd(), 'public', 'client', filename)
  const asset = await client.assets.upload('image', createReadStream(filePath), {
    filename,
  })

  return asset._id
}

async function seedHomepage() {
  const clienteleLogos = []

  for (const [key, name, alt, filename] of logos) {
    const assetId = await getOrUploadLogo(filename)

    clienteleLogos.push({
      _key: key,
      name,
      alt,
      logo: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: assetId,
        },
      },
    })
  }

  const initialValue = homepage.initialValue

  await client.createIfNotExists({
    _id: 'homepage',
    _type: 'homepage',
    ...initialValue,
  })

  const draft = await client.getDocument('drafts.homepage')
  const documentIds = ['homepage', ...(draft ? ['drafts.homepage'] : [])]

  for (const documentId of documentIds) {
    await client
      .patch(documentId)
      .set({
        statsSection: initialValue.statsSection,
        clienteleSection: {
          ...initialValue.clienteleSection,
          logos: clienteleLogos,
        },
      })
      .commit()
  }

  console.log(
    `Seeded homepage stats and ${clienteleLogos.length} clientele logos in ${documentIds.length} document(s).`,
  )
}

seedHomepage().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
