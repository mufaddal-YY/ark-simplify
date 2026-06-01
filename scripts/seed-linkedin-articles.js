import {getCliClient} from 'sanity/cli'

import {linkedinArticles} from '../sanity/schemaTypes/documents/linkedinArticles.js'

const client = getCliClient({apiVersion: '2026-06-01'})

async function seedLinkedinArticles() {
  await client.createOrReplace({
    _id: 'linkedinArticles',
    _type: 'linkedinArticles',
    ...linkedinArticles.initialValue,
  })

  console.log(
    `Seeded ${linkedinArticles.initialValue.articles.length} LinkedIn articles.`,
  )
}

seedLinkedinArticles().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
