import {defineField, defineType} from 'sanity'

export const lifeAtArkPage = defineType({
  name: 'lifeAtArkPage',
  title: 'Life at Ark page',
  type: 'document',
  fields: [
    defineField({
      name: 'banner',
      title: 'Banner',
      type: 'lifeAtArkBanner',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'lifeAtArkIntro',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'lifeAtArkGallery',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'workstyle',
      title: 'How we work',
      type: 'lifeAtArkWorkstyle',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'careers',
      title: 'Careers section',
      type: 'lifeAtArkCareers',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'lifeAtArkBenefits',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    banner: {
      eyebrow: 'Life at ARK',
      title: 'Life at ARK',
      titleAccent: 'ARK',
    },
    intro: {
      eyebrow: 'Life at ARK',
      title: 'A team built around ownership, collaboration, and steady growth.',
      lead: 'Life at Ark is shaped by real work, shared responsibility, and a culture that values doing things properly.',
      paragraphs: [
        'We work across construction delivery, finance, and operational support, so our teams stay close to the kind of work that matters in live business environments. That means learning by doing, staying structured under pressure, and supporting one another through complex projects.',
        'This page also serves as our careers page. It gives a closer look at how we work, what we value, and the kind of people who tend to thrive at Ark Simplify.',
      ],
      imageAlt: 'Life at ARK Simplify',
    },
    gallery: {
      eyebrow: 'Inside ARK',
      title: 'Work, people, and everyday momentum.',
      images: [
        {
          _key: 'group-outing',
          alt: 'ARK Simplify team members during a group outing',
          featured: true,
        },
        {
          _key: 'outdoor-gathering',
          alt: 'ARK Simplify team gathering outdoors',
          featured: false,
        },
        {
          _key: 'work-culture',
          alt: 'Work culture at ARK Simplify',
          featured: false,
        },
      ],
    },
    workstyle: {
      eyebrow: 'How We Work',
      title: 'What it feels like to work here.',
      cards: [
        {
          _key: 'structured-work',
          title: 'Structured Work',
          description:
            'We value clear systems, thoughtful planning, and dependable execution in the work we take on.',
          icon: 'book',
        },
        {
          _key: 'shared-ownership',
          title: 'Shared Ownership',
          description:
            'People are trusted with real responsibilities and expected to follow through with consistency.',
          icon: 'badge-check',
        },
        {
          _key: 'collaborative-teams',
          title: 'Collaborative Teams',
          description:
            'We work closely across functions, support one another, and keep communication straightforward and useful.',
          icon: 'users',
        },
        {
          _key: 'human-work-culture',
          title: 'Human Work Culture',
          description:
            'We take work seriously without losing warmth, respect, and the ability to enjoy building things together.',
          icon: 'handshake',
        },
      ],
    },
    careers: {
      eyebrow: 'Careers at ARK',
      title: 'Open positions',
      paragraphs: [
        "We're interested in people who care about doing thoughtful work, staying accountable, and growing inside environments where structure and adaptability both matter.",
        'We are currently hiring for two openings. Open roles can be updated here as the team grows.',
      ],
      applyLabel: 'Apply',
      applyHref: '/contact-us',
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'Benefits at ARK',
      items: [
        {
          _key: 'growth',
          title: 'Growth',
          description:
            'We are growing steadily and scaling towards new milestones, creating an environment where employees regularly gain exposure to new responsibilities, challenges, and opportunities that support both personal and professional growth.',
          icon: 'trending-up',
        },
        {
          _key: 'work-life-balance',
          title: 'Work/Life Balance',
          description:
            'At ARK Simplifiq Private Limited, we value the impact our employees create more than the hours they spend at work. We encourage a healthy work-life balance through a flexible, supportive, and result-oriented environment.',
          icon: 'scale',
        },
        {
          _key: 'vibrant-office',
          title: 'Vibrant Office',
          description:
            'Our workplace is designed to provide a comfortable and positive atmosphere that supports productivity and well-being. With a welcoming workspace, collaborative culture, and pantry facilities, we ensure employees feel motivated and valued every day.',
          icon: 'building',
        },
        {
          _key: 'performance-incentives',
          title: 'Performance Incentives',
          description:
            'We recognize and reward excellence. Employees are offered performance-based variable incentives that reflect their individual contributions, achievements, and overall impact on business success.',
          icon: 'trophy',
        },
        {
          _key: 'events-and-celebrations',
          title: 'Events and Celebrations',
          description:
            'We believe in working hard and celebrating achievements together. Regular team outings, quarterly parties, and festive celebrations help create a fun, engaging, and connected workplace culture.',
          icon: 'celebration',
        },
        {
          _key: 'relocation-allowance',
          title: 'Relocation Allowance',
          description:
            'We understand that relocating can be challenging. To make the transition smoother, we provide relocation support and allowances for eligible employees joining us from different locations.',
          icon: 'location',
        },
        {
          _key: 'health-benefits',
          title: 'Health Benefits',
          description:
            'Employee wellness is important to us. We provide health insurance coverage and support initiatives that help employees maintain their overall well-being.',
          icon: 'health',
        },
        {
          _key: 'no-hierarchy-structure',
          title: 'No Hierarchy Structure',
          description:
            'We follow an open and collaborative work culture with a flat organizational structure. We believe in leadership through ideas and teamwork, fostering transparency and easy communication across all levels.',
          icon: 'network',
        },
        {
          _key: 'spot-award',
          title: 'Spot Award',
          description:
            'Outstanding performance deserves recognition. Our quarterly Spot Award program rewards top performers with appreciation and cash incentives for their exceptional contributions.',
          icon: 'award',
        },
        {
          _key: 'career-development-discussions',
          title: 'Career Development Discussions',
          description:
            'We are committed to helping our employees grow. Regular career development discussions are conducted to understand goals, guide progress, and create opportunities for long-term success.',
          icon: 'discussion',
        },
      ],
      ctaEyebrow: 'Join ARK',
      ctaTitle: 'Build your next role with us.',
      ctaDescription:
        'Explore our current openings and apply for a role where thoughtful work, ownership, and growth are part of the day.',
      ctaLabel: 'View open jobs',
      ctaHref: '#open-jobs',
    },
  },
  preview: {
    prepare() {
      return {title: 'Life at Ark page'}
    },
  },
})
