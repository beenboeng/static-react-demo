import { Avatar, Card } from '@heroui/react'
import { TESTIMONIALS } from '#/data/site'
import { StarIcon } from './icons'

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="border-y border-border bg-cream-deep/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-sage uppercase">Reviews</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-bark sm:text-4xl lg:text-5xl">
            Twelve thousand people, one shared shelf.
          </h2>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <li key={item.id}>
              <Card className="flex h-full flex-col p-6">
                <div className="flex gap-0.5 text-clay" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={i} className="size-4" aria-hidden />
                  ))}
                </div>

                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-balance text-bark/80">
                  “{item.quote}”
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <Avatar color="accent" size="sm">
                    <Avatar.Fallback>{item.initials}</Avatar.Fallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-bark">{item.name}</p>
                    <p className="text-xs text-bark/55">{item.role}</p>
                  </div>
                </figcaption>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
