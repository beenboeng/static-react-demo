import { Separator } from '@heroui/react'
import { LeafIcon } from './icons'

const COLUMNS = [
  {
    id: 'shop',
    title: 'Shop',
    links: ['Serums', 'Moisturisers', 'Masks', 'Refills', 'Gift sets'],
  },
  {
    id: 'about',
    title: 'About',
    links: ['Our story', 'Ingredients', 'Sustainability', 'Journal'],
  },
  {
    id: 'help',
    title: 'Help',
    links: ['Contact', 'Shipping', 'Returns', 'FAQ'],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream-deep/50">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <a
              href="#top"
              className="flex items-center gap-2 font-display text-2xl text-bark"
            >
              <LeafIcon className="size-6 text-sage" />
              Lumira
            </a>
            <p className="mt-4 text-sm leading-relaxed text-bark/60">
              Botanical skin care, formulated in small batches and shipped carbon
              neutral.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.id} aria-labelledby={`footer-${column.id}`}>
              <h2
                id={`footer-${column.id}`}
                className="text-sm font-medium text-bark"
              >
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-bark/60 transition-colors hover:text-sage"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-4 text-sm text-bark/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lumira Skin Care. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#top" className="transition-colors hover:text-sage">
                Privacy
              </a>
            </li>
            <li>
              <a href="#top" className="transition-colors hover:text-sage">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
