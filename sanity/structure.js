// https://www.sanity.io/docs/structure-builder-cheat-sheet

const singletonItem = (S, {title, schemaType, documentId = schemaType}) =>
  S.listItem()
    .title(title)
    .id(documentId)
    .child(S.document().schemaType(schemaType).documentId(documentId))

export const structure = (S) =>
  S.list()
    .title('ARK Simplify')
    .items([
      S.listItem()
        .title('SEO & site configuration')
        .id('siteConfiguration')
        .child(
          S.list()
            .title('SEO & site configuration')
            .items([
              singletonItem(S, {
                title: 'SEO settings',
                schemaType: 'seoSettings',
              }),
              singletonItem(S, {
                title: 'Head code',
                schemaType: 'headCodeSettings',
              }),
            ]),
        ),

      S.listItem()
        .title('Website pages')
        .id('websitePages')
        .child(
          S.list()
            .title('Website pages')
            .items([
              singletonItem(S, {
                title: 'Homepage',
                schemaType: 'homepage',
              }),
              singletonItem(S, {
                title: 'About us',
                schemaType: 'aboutPage',
              }),
              singletonItem(S, {
                title: 'Construction',
                schemaType: 'constructionPage',
              }),
              singletonItem(S, {
                title: 'Construction landing',
                schemaType: 'constructionLandingPage',
              }),
              singletonItem(S, {
                title: 'Finance',
                schemaType: 'financePage',
              }),
              singletonItem(S, {
                title: 'Finance landing',
                schemaType: 'financeLandingPage',
              }),
              singletonItem(S, {
                title: 'ProEstimate',
                schemaType: 'proestimatePage',
              }),
              singletonItem(S, {
                title: 'Life at ARK',
                schemaType: 'lifeAtArkPage',
              }),
              singletonItem(S, {
                title: 'Contact',
                schemaType: 'contact',
              }),
            ]),
        ),

      S.listItem()
        .title('Content & publishing')
        .id('contentPublishing')
        .child(
          S.list()
            .title('Content & publishing')
            .items([
              singletonItem(S, {
                title: 'Job openings',
                schemaType: 'jobOpenings',
              }),
              S.listItem()
                .title('Blogs')
                .id('blogs')
                .child(S.documentTypeList('blog').title('Blogs')),
              singletonItem(S, {
                title: 'LinkedIn articles',
                schemaType: 'linkedinArticles',
              }),
              singletonItem(S, {
                title: 'Testimonials',
                schemaType: 'testimonials',
              }),
            ]),
        ),
    ])
