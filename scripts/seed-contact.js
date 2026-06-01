import {getCliClient} from 'sanity/cli'

import {contact} from '../sanity/schemaTypes/documents/contact.js'

const client = getCliClient({apiVersion: '2026-06-01'})

async function seedContact() {
  await client.createOrReplace({
    _id: 'contact',
    _type: 'contact',
    ...contact.initialValue,
  })

  console.log(
    `Seeded Contact with ${contact.initialValue.contactMethods.length} contact methods, ${contact.initialValue.offices.length} offices, and ${contact.initialValue.socialLinks.length} social links.`,
  )
}

seedContact().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
