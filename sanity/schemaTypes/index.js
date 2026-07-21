import {aboutPage} from './documents/aboutPage'
import {blog} from './documents/blog'
import {contact} from './documents/contact'
import {constructionPage} from './documents/constructionPage'
import {constructionLandingPage} from './documents/constructionLandingPage'
import {financePage} from './documents/financePage'
import {financeLandingPage} from './documents/financeLandingPage'
import {headCodeSettings} from './documents/headCodeSettings'
import {homepage} from './documents/homepage'
import {jobOpenings} from './documents/jobOpenings'
import {lifeAtArkPage} from './documents/lifeAtArkPage'
import {linkedinArticles} from './documents/linkedinArticles'
import {proestimatePage} from './documents/proestimatePage'
import {seoSettings} from './documents/seoSettings'
import {testimonials} from './documents/testimonials'
import {aboutPageSectionTypes} from './objects/aboutPageSections'
import {clienteleSection} from './objects/clienteleSection'
import {clientLogo} from './objects/clientLogo'
import {constructionPageSectionTypes} from './objects/constructionPageSections'
import {contactDetailTypes} from './objects/contactDetails'
import {financePageSectionTypes} from './objects/financePageSections'
import {heroBanner} from './objects/heroBanner'
import {heroSlide} from './objects/heroSlide'
import {industriesWeServe} from './objects/industriesWeServe'
import {industry} from './objects/industry'
import {jobOpening} from './objects/jobOpening'
import {lifeAtArkPageSectionTypes} from './objects/lifeAtArkPageSections'
import {link} from './objects/link'
import {linkedinArticle} from './objects/linkedinArticle'
import {proestimatePageSectionTypes} from './objects/proestimatePageSections'
import {stat} from './objects/stat'
import {statsSection} from './objects/statsSection'
import {testimonial} from './objects/testimonial'

export const schema = {
  types: [
    aboutPage,
    blog,
    contact,
    constructionPage,
    constructionLandingPage,
    financePage,
    financeLandingPage,
    headCodeSettings,
    homepage,
    jobOpenings,
    lifeAtArkPage,
    linkedinArticles,
    proestimatePage,
    seoSettings,
    testimonials,
    ...aboutPageSectionTypes,
    clienteleSection,
    clientLogo,
    ...contactDetailTypes,
    ...constructionPageSectionTypes,
    ...financePageSectionTypes,
    heroBanner,
    heroSlide,
    industriesWeServe,
    industry,
    jobOpening,
    ...lifeAtArkPageSectionTypes,
    link,
    linkedinArticle,
    ...proestimatePageSectionTypes,
    stat,
    statsSection,
    testimonial,
  ],
}
