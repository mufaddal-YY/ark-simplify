import {getCliClient} from 'sanity/cli'

import {seoSettings} from '../sanity/schemaTypes/documents/seoSettings.js'

const client = getCliClient({apiVersion: '2026-06-01'})

async function seedSeoSettings() {
  await client.createIfNotExists({
    _id: 'seoSettings',
    _type: 'seoSettings',
    ...seoSettings.initialValue,
  })

  console.log('Seeded SEO settings document.')
}

seedSeoSettings().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
