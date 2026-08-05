import { useEffect, useState } from 'react'
import { Button } from '@heroui/react'
import { NAV_LINKS } from '#/data/site'
import { BagIcon, CloseIcon, LeafIcon, MenuIcon } from './icons'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent the page scrolling behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-cream/85 border-b border-border backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8"
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-xl tracking-tight text-bark sm:text-2xl"
        >
          <LeafIcon className="size-5 text-sage sm:size-6" />
          Lumira
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="text-sm text-bark/70 transition-colors hover:text-sage"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" aria-label="Open cart" isIconOnly>
            <BagIcon className="size-5" />
          </Button>
          <Button variant="primary" size="sm">
            Shop the range
          </Button>
        </div>

        <Button
          className="lg:hidden"
          variant="ghost"
          size="sm"
          isIconOnly
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onPress={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </Button>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-cream px-5 pt-8 sm:top-20 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 font-display text-2xl text-bark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button className="mt-8" variant="primary" size="lg" fullWidth>
            Shop the range
          </Button>
        </div>
      )}
    </header>
  )
}
