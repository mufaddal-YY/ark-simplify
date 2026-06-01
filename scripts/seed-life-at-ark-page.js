import {createReadStream} from 'node:fs'
import path from 'node:path'
import {getCliClient} from 'sanity/cli'

import {jobOpenings} from '../sanity/schemaTypes/documents/jobOpenings.js'
import {lifeAtArkPage} from '../sanity/schemaTypes/documents/lifeAtArkPage.js'

const client = getCliClient({apiVersion: '2026-06-01'})

const galleryImages = [
  'WhatsApp Image 2026-04-29 at 8.09.28 PM.jpeg',
  'WhatsApp Image 2026-04-29 at 8.09.27 PM.jpeg',
  'life3.png',
]

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

async function seedLifeAtArkPage() {
  const page = structuredClone(lifeAtArkPage.initialValue)

  page.intro.image = await getOrUploadImage('life1.png')
  page.gallery.images = await Promise.all(
    page.gallery.images.map(async (image, index) => ({
      ...image,
      image: await getOrUploadImage(galleryImages[index]),
    })),
  )

  await client.createOrReplace({
    _id: 'lifeAtArkPage',
    _type: 'lifeAtArkPage',
    ...page,
  })

  await client.createOrReplace({
    _id: 'jobOpenings',
    _type: 'jobOpenings',
    ...jobOpenings.initialValue,
  })

  console.log(
    `Seeded Life at Ark page with ${page.gallery.images.length} gallery images, ${page.workstyle.cards.length} workstyle cards, ${page.benefits.items.length} benefits, and ${jobOpenings.initialValue.jobs.length} job openings.`,
  )
}

seedLifeAtArkPage().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
