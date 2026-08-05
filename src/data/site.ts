export type Product = {
  id: string
  name: string
  tagline: string
  price: number
  rating: number
  reviews: number
  badge: string
  tint: string
  cap: string
}

export type Benefit = {
  id: string
  title: string
  body: string
}

export type Step = {
  id: string
  step: string
  title: string
  body: string
}

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  initials: string
}

export type Faq = {
  id: string
  question: string
  answer: string
}

export const NAV_LINKS = [
  { id: 'products', label: 'Shop', href: '#products' },
  { id: 'benefits', label: 'Why Lumira', href: '#benefits' },
  { id: 'ritual', label: 'The Ritual', href: '#ritual' },
  { id: 'reviews', label: 'Reviews', href: '#reviews' },
] as const

export const MARQUEE_ITEMS = [
  'Vogue',
  'Allure',
  'Byrdie',
  'Harper’s Bazaar',
  'Refinery29',
  'Elle',
] as const

export const PRODUCTS: Product[] = [
  {
    id: 'dew',
    name: 'Morning Dew Serum',
    tagline: 'Vitamin C + hyaluronic acid for first-light radiance.',
    price: 48,
    rating: 4.9,
    reviews: 1284,
    badge: 'Bestseller',
    tint: 'oklch(0.88 0.06 150)',
    cap: 'oklch(0.48 0.072 155)',
  },
  {
    id: 'calm',
    name: 'Calm Barrier Cream',
    tagline: 'Ceramides and oat milk to quiet reactive skin.',
    price: 42,
    rating: 4.8,
    reviews: 942,
    badge: 'New',
    tint: 'oklch(0.92 0.04 88)',
    cap: 'oklch(0.72 0.086 52)',
  },
  {
    id: 'renew',
    name: 'Overnight Renewal Oil',
    tagline: 'Cold-pressed rosehip and squalane, worn while you sleep.',
    price: 56,
    rating: 4.9,
    reviews: 763,
    badge: 'Limited',
    tint: 'oklch(0.9 0.05 60)',
    cap: 'oklch(0.55 0.09 40)',
  },
  {
    id: 'clarify',
    name: 'Clarifying Clay Mask',
    tagline: 'Kaolin and green tea to draw out a long week.',
    price: 36,
    rating: 4.7,
    reviews: 508,
    badge: 'Restocked',
    tint: 'oklch(0.89 0.035 200)',
    cap: 'oklch(0.45 0.06 210)',
  },
]

export const BENEFITS: Benefit[] = [
  {
    id: 'clean',
    title: 'Clean by formula',
    body: 'No sulfates, parabens, or synthetic fragrance. Every ingredient earns its place on the label.',
  },
  {
    id: 'clinical',
    title: 'Clinically balanced',
    body: 'Actives held at concentrations dermatologists actually recommend — potent, never punishing.',
  },
  {
    id: 'sourced',
    title: 'Traceably sourced',
    body: 'Cold-pressed botanicals from named farms, harvested in small seasonal batches.',
  },
  {
    id: 'kind',
    title: 'Kind on every level',
    body: 'Cruelty-free, refillable glass, and carbon-neutral delivery on every single order.',
  },
]

export const STEPS: Step[] = [
  {
    id: 'cleanse',
    step: '01',
    title: 'Cleanse',
    body: 'Start with lukewarm water and a pea-sized amount. Ninety seconds, no scrubbing.',
  },
  {
    id: 'treat',
    step: '02',
    title: 'Treat',
    body: 'Press the serum into damp skin so the hyaluronic acid has something to hold onto.',
  },
  {
    id: 'seal',
    step: '03',
    title: 'Seal',
    body: 'Lock it in with barrier cream while skin is still slightly tacky to the touch.',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'maya',
    quote:
      'Six weeks in and the redness along my jaw has genuinely settled. It is the first routine I have not abandoned by week three.',
    name: 'Maya Okonjo',
    role: 'Verified buyer',
    initials: 'MO',
  },
  {
    id: 'ines',
    quote:
      'The oil smells like a garden after rain and absorbs completely. My pillowcase is somehow cleaner than before.',
    name: 'Inés Alvarez',
    role: 'Verified buyer',
    initials: 'IA',
  },
  {
    id: 'theo',
    quote:
      'I have sensitive skin and a short attention span. Three steps, no stinging, visible difference. That is the whole review.',
    name: 'Theo Lindqvist',
    role: 'Verified buyer',
    initials: 'TL',
  },
]

export const FAQS: Faq[] = [
  {
    id: 'sensitive',
    question: 'Is this suitable for sensitive skin?',
    answer:
      'Yes. Every formula is fragrance-free and patch-tested under dermatological supervision. We still recommend testing on your inner forearm for two days before applying to the face.',
  },
  {
    id: 'results',
    question: 'How long until I see results?',
    answer:
      'Hydration is usually visible within a week. Tone and texture changes follow the skin cell cycle, so give it a full four to six weeks before judging.',
  },
  {
    id: 'refill',
    question: 'How do refills work?',
    answer:
      'Keep the glass bottle and order a refill pouch at 30% off. Send five empty pouches back with the prepaid label and your next refill is free.',
  },
  {
    id: 'shipping',
    question: 'What does shipping cost?',
    answer:
      'Carbon-neutral shipping is free on orders over $50. Everything else is a flat $5, delivered in two to four working days.',
  },
]

export const STATS = [
  { id: 'reviews', value: '12k+', label: 'Five-star reviews' },
  { id: 'natural', value: '94%', label: 'Naturally derived' },
  { id: 'tested', value: '0', label: 'Animal testing, ever' },
] as const
