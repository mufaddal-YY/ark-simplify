// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .id('homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),
      S.listItem()
        .title('Contact')
        .id('contact')
        .child(S.document().schemaType('contact').documentId('contact')),
      S.listItem()
        .title('About us page')
        .id('aboutPage')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('Construction page')
        .id('constructionPage')
        .child(
          S.document()
            .schemaType('constructionPage')
            .documentId('constructionPage'),
        ),
      S.listItem()
        .title('Finance page')
        .id('financePage')
        .child(S.document().schemaType('financePage').documentId('financePage')),
      S.listItem()
        .title('ProEstimate page')
        .id('proestimatePage')
        .child(
          S.document()
            .schemaType('proestimatePage')
            .documentId('proestimatePage'),
        ),
      S.listItem()
        .title('Life at Ark page')
        .id('lifeAtArkPage')
        .child(
          S.document()
            .schemaType('lifeAtArkPage')
            .documentId('lifeAtArkPage'),
        ),
      S.listItem()
        .title('Job openings')
        .id('jobOpenings')
        .child(
          S.document().schemaType('jobOpenings').documentId('jobOpenings'),
        ),
      S.listItem()
        .title('Testimonials')
        .id('testimonials')
        .child(
          S.document().schemaType('testimonials').documentId('testimonials'),
        ),
      S.listItem()
        .title('LinkedIn articles')
        .id('linkedinArticles')
        .child(
          S.document()
            .schemaType('linkedinArticles')
            .documentId('linkedinArticles'),
        ),
    ])
