import {getCliClient} from 'sanity/cli'

import {testimonials} from '../sanity/schemaTypes/documents/testimonials.js'

const client = getCliClient({apiVersion: '2026-06-01'})

async function seedTestimonials() {
  await client.createOrReplace({
    _id: 'testimonials',
    _type: 'testimonials',
    ...testimonials.initialValue,
  })

  console.log(
    `Seeded ${testimonials.initialValue.items.length} homepage testimonials.`,
  )
}

seedTestimonials().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
