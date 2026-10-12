// Single source of truth for personal info, links, and copy.
// Edit values here — components read from this file.

export const site = {
  name: 'Srijit Santra',
  firstName: 'Srijit',
  wordmark: 'SS.',
  role: 'App Developer',
  company: 'Astfast Infotech',
  email: 'srijitsantra904@gmail.com',
  status: 'Available for interesting projects',

  hero: {
    lines: ['Building ideas.', 'Shipping experiences.'],
    intro:
      'I’m Srijit — an app developer crafting cross-platform mobile experiences with Flutter, thoughtful UI/UX, and AI-assisted development.',
  },

  about: {
    lines: ['Curious by nature.', 'Developer by choice.'],
    paragraphs: [
      'I build mobile apps — mostly with Flutter — and I enjoy the part where a rough idea turns into something people can actually tap, scroll, and use every day.',
      'I care about the small things that make an app feel right: clear layouts, sensible flows, and interfaces that don’t get in the way. AI-assisted tools are part of how I work — they help me explore ideas and move faster, while the decisions about what to build and how it should feel stay with me.',
    ],
    facts: [
      { label: 'Currently', value: 'App Developer at Astfast Infotech' },
      { label: 'Main focus', value: 'Flutter & cross-platform development' },
      { label: 'Exploring', value: 'Better development workflows with AI' },
      { label: 'Outside code', value: 'Photography & bike riding' },
    ],
  },

  ai: {
    lines: ['Human creativity.', 'AI acceleration.'],
    body: 'I use AI-assisted development tools to explore ideas, speed up repetitive work, and get unstuck during implementation. They’re a collaborator in the workflow — not a replacement for engineering judgment. The goal stays the same: useful software and user experiences that feel considered.',
    steps: [
      { title: 'Idea', note: 'Define the problem and who it’s for.' },
      { title: 'Design', note: 'Sketch flows, layouts, and interactions.' },
      { title: 'Build', note: 'Implement in Flutter, with AI as a pair.' },
      { title: 'Test', note: 'Try it on real devices, fix what feels off.' },
      { title: 'Ship', note: 'Release, gather feedback, iterate.' },
    ],
  },

  contact: {
    lines: ['Have an idea?', 'Let’s build it.'],
    body: 'Interested in mobile apps, creative collaborations, or building something useful? Feel free to reach out.',
  },

  footer: 'Designed with intention · Built with curiosity',
} as const

export type SocialKey = 'email' | 'github' | 'linkedin' | 'instagram'

export const socials: { key: SocialKey; label: string; handle: string; href: string }[] = [
  { key: 'email', label: 'Email', handle: site.email, href: `mailto:${site.email}` },
  { key: 'github', label: 'GitHub', handle: '@Riju5380', href: 'https://github.com/Riju5380' },
  { key: 'linkedin', label: 'LinkedIn', handle: 'in/srijit-santra', href: 'https://www.linkedin.com/in/srijit-santra/' },
  { key: 'instagram', label: 'Instagram', handle: '@srijit_santra', href: 'https://instagram.com/srijit_santra' },
]

export const githubUrl = 'https://github.com/Riju5380'

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
] as const

export type TechId = 'flutter' | 'dart' | 'laravel' | 'php' | 'cpp'

export const stack: {
  group: string
  code: string
  items: { id: TechId; name: string; description: string }[]
}[] = [
  {
    group: 'Mobile development',
    code: 'MOB',
    items: [
      { id: 'flutter', name: 'Flutter', description: 'One codebase for Android and iOS, with full control over every pixel.' },
      { id: 'dart', name: 'Dart', description: 'The language behind Flutter — typed, fast, and pleasant to write.' },
    ],
  },
  {
    group: 'Backend development',
    code: 'API',
    items: [
      { id: 'laravel', name: 'Laravel', description: 'Building APIs and back-office logic that apps can rely on.' },
      { id: 'php', name: 'PHP', description: 'The foundation under Laravel, used for server-side work.' },
    ],
  },
  {
    group: 'Programming',
    code: 'SYS',
    items: [
      { id: 'cpp', name: 'C++', description: 'Where I sharpen fundamentals — data structures, algorithms, and problem solving.' },
    ],
  },
]
