import { Button } from '@heroui/react'
import { PRODUCTS, STEPS } from '#/data/site'
import { Bottle } from './Bottle'
import { ArrowIcon } from './icons'

export function Ritual() {
  return (
    <section id="ritual" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Visual */}
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] bg-linear-to-br from-sage/90 to-sage/70 sm:aspect-square lg:aspect-4/3">
            <div
              aria-hidden
              className="absolute -top-16 -right-10 size-64 rounded-full bg-white/10"
            />
            <div
              aria-hidden
              className="absolute -bottom-20 -left-12 size-72 rounded-full bg-white/10"
            />

            <div className="relative flex h-full items-end justify-center gap-4 p-8 sm:gap-6 sm:p-12">
              {PRODUCTS.slice(0, 3).map((product, i) => (
                <Bottle
                  key={product.id}
                  tint={product.tint}
                  cap={product.cap}
                  label={product.name.split(' ')[0].toUpperCase()}
                  className={`w-1/4 drop-shadow-xl ${i === 1 ? 'mb-6 w-1/3' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Steps */}
        <div>
          <p className="text-xs tracking-[0.2em] text-sage uppercase">The ritual</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-bark sm:text-4xl lg:text-5xl">
            Three steps. Four minutes. Twice a day.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-bark/70">
            Most routines fail because they ask too much. This one is built to survive a
            Tuesday night.
          </p>

          <ol className="mt-10 space-y-8">
            {STEPS.map((step) => (
              <li
                key={step.id}
                className="flex gap-5 border-b border-border pb-8 last:border-0 last:pb-0"
              >
                <span className="font-display text-2xl text-sage/50 tabular-nums">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-xl text-bark">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark/65">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <Button variant="primary" size="lg" className="group mt-10">
            Build my routine
            <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
