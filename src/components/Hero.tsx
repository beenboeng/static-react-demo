import { Button, Chip } from '@heroui/react'
import { PRODUCTS, STATS } from '#/data/site'
import { Bottle } from './Bottle'
import { ArrowIcon, StarIcon } from './icons'

export function Hero() {
  const [hero, second] = PRODUCTS

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Organic background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 size-112 rounded-full bg-sage-soft/50 blur-3xl sm:size-144"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-32 size-80 rounded-full bg-clay/20 blur-3xl sm:size-96"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-12 pb-16 sm:px-8 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-8 lg:pt-20 lg:pb-24">
        <div className="max-w-xl">
          <Chip color="accent" size="sm" variant="soft">
            <Chip.Label>New — Overnight Renewal Oil</Chip.Label>
          </Chip>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] tracking-tight text-balance text-bark sm:text-5xl lg:text-6xl">
            Skin care that reads like a garden, not a lab report.
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-bark/70 sm:text-lg">
            Cold-pressed botanicals held at clinically useful strengths. Potent enough
            to work, gentle enough for the skin you actually have.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="primary" size="lg" className="group">
              Shop the range
              <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button variant="outline" size="lg">
              Take the skin quiz
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex text-clay" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} className="size-4" />
              ))}
            </div>
            <p className="text-sm text-bark/60">
              <span className="font-medium text-bark">4.9/5</span> from 12,000+ reviews
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:max-w-md sm:gap-6">
            {STATS.map((stat) => (
              <div key={stat.id}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl text-bark sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs text-bark/60 sm:text-sm">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Product composition */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-square rounded-[2.5rem] bg-linear-to-br from-sage-soft/70 via-cream-deep to-cream-deep p-8 sm:p-12">
            <div
              aria-hidden
              className="absolute inset-8 rounded-full border border-white/50 sm:inset-12"
            />
            <Bottle
              tint={hero.tint}
              cap={hero.cap}
              label="DEW"
              className="relative h-full w-full drop-shadow-2xl"
            />
          </div>

          <div className="absolute -bottom-6 -left-2 w-40 rounded-2xl bg-white/90 p-4 shadow-lg ring-1 ring-black/5 backdrop-blur sm:-left-6 sm:w-48">
            <div className="flex items-center gap-3">
              <Bottle
                tint={second.tint}
                cap={second.cap}
                label="CALM"
                className="h-12 w-auto shrink-0"
              />
              <div className="min-w-0">
                <p className="truncate font-display text-sm text-bark">{second.name}</p>
                <p className="text-xs text-bark/60">${second.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
