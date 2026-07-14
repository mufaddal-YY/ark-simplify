import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About us page',
  type: 'document',
  fields: [
    defineField({
      name: 'banner',
      title: 'Banner',
      type: 'aboutBanner',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'aboutIntro',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whoWeAre',
      title: 'Who we are',
      type: 'aboutWhoWeAre',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'values',
      title: 'Values',
      type: 'aboutValues',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'leadership',
      title: 'Leadership team',
      type: 'aboutLeadership',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectManagementTeam',
      title: 'Project management team',
      type: 'aboutProjectManagementTeam',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: {
    banner: {
      eyebrow: 'About Us',
      title: 'About Us',
    },
    intro: {
      eyebrow: 'About Us',
      title: 'Built for teams operating inside real complexity.',
      lead: 'Ark Simplify was built to support organizations operating in complex, execution-heavy environments where growth is often constrained by skill gaps, fragile processes, or over-dependence on individuals.',
      paragraphs: [
        'We work with construction, manufacturing, and growing businesses that need dependable support across project delivery and operational finance. Our focus is on taking ownership of clearly defined responsibilities and building systems that continue to perform as teams evolve.',
        'Ark Simplify brings together construction and finance capabilities under one parent brand to reduce fragmentation across critical workflows. This helps clients manage planning, execution, and day-to-day operations with greater continuity and confidence as they scale.',
        'We work in close coordination with client teams, embedding into existing workflows and contributing as a trusted extension of their operations. Accountability, follow-through, and consistency define how we support our clients, project after project.',
      ],
    },
    whoWeAre: {
      title: 'Who we are',
      lead: 'We are a team of 50+ dynamic professionals working across construction delivery, finance, and operational support.',
      paragraphs: [
        'Our work is shaped by hands-on experience in live project environments and process-driven businesses.',
        'We combine technical understanding with a disciplined approach to execution. Clear communication, respect for structure, and attention to detail guide how we plan, review, and deliver our work.',
        'The way Ark Simplify operates reflects how the company was built. There is a strong belief in shared responsibility, steady collaboration, and doing the work properly even when it is complex or unseen. This balance of operational rigor and human understanding defines how our teams work together and how they show up for clients every day.',
      ],
      imageAlt: 'ARK Simplify team collaboration',
    },
    values: {
      principles: [
        {
          _key: 'vision',
          label: 'Vision',
          title:
            'Enabling businesses to grow without limits of skills, structure, or geography.',
          description:
            'We envision businesses scaling with confidence, supported by dependable systems and teams that perform consistently, even as people, markets, and conditions change.',
          icon: 'compass',
        },
        {
          _key: 'mission',
          label: 'Mission',
          title: 'Building systems and teams that make work scale reliably.',
          description:
            'We work closely with organizations to understand how their work flows. By combining capable teams with well-structured systems, we help work scale smoothly as demands grow.',
          icon: 'rocket',
        },
        {
          _key: 'purpose',
          label: 'Purpose',
          title: 'To help organizations simplify complex internal processes.',
          description:
            'We exist to remove unnecessary complexity from how work gets done. By simplifying internal processes, we help teams operate with more clarity, focus, and confidence in their day-to-day work.',
          icon: 'target',
        },
      ],
      coreValuesTitle: 'Core values',
      coreValues: [
        {
          _key: 'prepared-for-complexity',
          title: 'Prepared for Complexity',
          description:
            'We work with clarity in environments where details matter and conditions change.',
          icon: 'badge-check',
        },
        {
          _key: 'structure-over-chaos',
          title: 'Structure Over Chaos',
          description:
            'We believe clear structure makes complex work easier to manage.',
          icon: 'layers',
        },
        {
          _key: 'ownership-of-work',
          title: 'Ownership of Work',
          description:
            'We take responsibility for what we deliver and stay accountable from start to finish.',
          icon: 'blocks',
        },
        {
          _key: 'one-team-mindset',
          title: 'One Team Mindset',
          description:
            'We work with clients and colleagues as one team, built on trust and shared growth.',
          icon: 'handshake',
        },
        {
          _key: 'enjoy-the-work',
          title: 'Enjoy the Work',
          description:
            'We take our work seriously, while creating an environment that is positive and human.',
          icon: 'smile',
        },
      ],
    },
    leadership: {
      eyebrow: 'Leadership',
      title: 'Leadership team',
      description:
        'The people leading Ark Simplify across delivery, finance, growth, and client relationships.',
      members: [
        {
          _key: 'rohit-purohit',
          name: 'Rohit Purohit',
          role: 'MD Ark Simplify',
        },
        {
          _key: 'aditya-purohit',
          name: 'Aditya Purohit',
          role: 'CIO Ark Simplify',
        },
        {
          _key: 'amandeep-kaur',
          name: 'Amandeep Kaur',
          role: 'Head Ark Finance',
        },
        {
          _key: 'keshav',
          name: 'Keshav',
          role: 'Business Development Manager, Ark Simplify',
        },
        {
          _key: 'gagandeep-kaur',
          name: 'Gagandeep Kaur',
          role: 'Head of Growth & Strategy, Ark Simplify',
        },
      ],
    },
    projectManagementTeam: {
      eyebrow: 'Delivery team',
      title: 'Project management team',
      description:
        'The team supporting day-to-day project coordination, follow-through, and delivery rhythm across Ark Simplify engagements.',
      members: [
        {_key: 'pawan', name: 'Pawan', role: 'Project Management'},
        {_key: 'abhishek', name: 'Abhishek', role: 'Project Management'},
        {_key: 'sanika', name: 'Sanika', role: 'Project Management'},
        {_key: 'mamta', name: 'Mamta', role: 'Project Management'},
        {_key: 'harsh', name: 'Harsh', role: 'Project Management'},
        {_key: 'vinny', name: 'Vinny', role: 'Project Management'},
        {_key: 'isha', name: 'Isha', role: 'Project Management'},
        {_key: 'rutuja', name: 'Rutuja', role: 'Project Management'},
      ],
    },
  },
  preview: {
    prepare() {
      return {title: 'About us page'}
    },
  },
})
