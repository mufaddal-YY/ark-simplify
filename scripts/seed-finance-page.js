import {createReadStream} from 'node:fs'
import path from 'node:path'
import {getCliClient} from 'sanity/cli'

import {financePage} from '../sanity/schemaTypes/documents/financePage.js'

const client = getCliClient({apiVersion: '2026-06-01'})

const partnerLogos = [
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

const serviceImages = [
  ['finance', 'inventory.jpg'],
  ['finance', 'procurement.jpg'],
  ['finance', 'bookkeeping.jpg'],
  ['finance', 'invoicing.jpg'],
]

const softwareLogos = [
  ['ZohoBooks.png'],
  ['odoo.png'],
  ['xero.png'],
  ['QuickBooks-Logo.png'],
]

const imageReference = (assetId) => ({
  _type: 'image',
  asset: {
    _type: 'reference',
    _ref: assetId,
  },
})

async function getOrUploadImage(pathSegments) {
  const filePath = path.join(process.cwd(), 'public', ...pathSegments)
  const filename = path.basename(filePath)
  const existingAsset = await client.fetch(
    '*[_type == "sanity.imageAsset" && originalFilename == $filename][0]{_id}',
    {filename},
  )

  if (existingAsset?._id) {
    return imageReference(existingAsset._id)
  }

  const asset = await client.assets.upload('image', createReadStream(filePath), {
    filename,
  })

  return imageReference(asset._id)
}

async function seedFinancePage() {
  const document = structuredClone(financePage.initialValue)

  document.services.items = await Promise.all(
    document.services.items.map(async (service, index) => ({
      ...service,
      image: await getOrUploadImage(serviceImages[index]),
    })),
  )

  document.partners.partners = await Promise.all(
    partnerLogos.map(async ([key, name, alt, filename]) => ({
      _key: key,
      name,
      alt,
      logo: await getOrUploadImage(['client', filename]),
    })),
  )

  document.softwareTools.tools = await Promise.all(
    document.softwareTools.tools.map(async (tool, index) => ({
      ...tool,
      logo: await getOrUploadImage(softwareLogos[index]),
    })),
  )

  await client.createOrReplace({
    _id: 'financePage',
    _type: 'financePage',
    ...document,
  })

  console.log(
    `Seeded finance page with ${document.services.items.length} services, ${document.partners.partners.length} partners, and ${document.softwareTools.tools.length} software tools.`,
  )
}

seedFinancePage().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
