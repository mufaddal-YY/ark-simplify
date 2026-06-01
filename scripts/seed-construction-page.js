import {createReadStream, readdirSync} from 'node:fs'
import path from 'node:path'
import {getCliClient} from 'sanity/cli'

import {constructionPage} from '../sanity/schemaTypes/documents/constructionPage.js'

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

const constructionImages = {
  subcontractors: ['construction', 'subconstractor.jpg'],
  generalContractors: ['construction', 'general contractor.jpg'],
  manufacturers: ['construction', 'manufacturer.jpg'],
  detailing: ['construction', 'detailing.jpg'],
  projectSupport: ['construction', 'project-management.jpg'],
  caseStudies: ['construction_industry.jpg'],
}

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

async function seedConstructionPage() {
  const document = structuredClone(constructionPage.initialValue)

  const [
    subcontractors,
    generalContractors,
    manufacturers,
    detailing,
    projectSupport,
    caseStudies,
  ] = await Promise.all(
    Object.values(constructionImages).map((pathSegments) =>
      getOrUploadImage(pathSegments),
    ),
  )

  const estimatingImages = [subcontractors, generalContractors, manufacturers]
  document.estimating.tabs = document.estimating.tabs.map((tab, index) => ({
    ...tab,
    image: estimatingImages[index],
  }))

  const audienceImages = [generalContractors, subcontractors, manufacturers]
  document.audiences.audiences = document.audiences.audiences.map(
    (audience, index) => ({
      ...audience,
      image: audienceImages[index],
    }),
  )

  document.detailing.image = detailing
  document.projectSupport.image = projectSupport
  document.caseStudies.items = document.caseStudies.items.map((item) => ({
    ...item,
    image: caseStudies,
  }))

  document.partners.partners = await Promise.all(
    partnerLogos.map(async ([key, name, alt, filename]) => ({
      _key: key,
      name,
      alt,
      logo: await getOrUploadImage(['client', filename]),
    })),
  )

  const softwareFilenames = readdirSync(
    path.join(process.cwd(), 'public', 'construction', 'software'),
  )
    .filter((filename) => filename.endsWith('.png'))
    .sort()

  document.softwareTools.tools = await Promise.all(
    document.softwareTools.tools.map(async (tool, index) => ({
      ...tool,
      image: await getOrUploadImage([
        'construction',
        'software',
        softwareFilenames[index],
      ]),
    })),
  )

  await client.createOrReplace({
    _id: 'constructionPage',
    _type: 'constructionPage',
    ...document,
  })

  console.log(
    `Seeded construction page with ${document.partners.partners.length} partners and ${document.softwareTools.tools.length} software tools.`,
  )
}

seedConstructionPage().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
