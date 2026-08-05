import { Card } from '@heroui/react'
import { BENEFITS } from '#/data/site'
import { FlaskIcon, HeartIcon, LeafIcon, SproutIcon } from './icons'

const ICONS = {
  clean: LeafIcon,
  clinical: FlaskIcon,
  sourced: SproutIcon,
  kind: HeartIcon,
}

export function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-xs tracking-[0.2em] text-sage uppercase">Why Lumira</p>
        <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-bark sm:text-4xl lg:text-5xl">
          Four promises we can actually put on the bottle.
        </h2>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((benefit) => {
          const Icon = ICONS[benefit.id as keyof typeof ICONS]
          return (
            <Card key={benefit.id} variant="secondary" className="h-full p-6">
              <Card.Header className="p-0">
                <span className="mb-5 flex size-11 items-center justify-center rounded-full bg-sage/10 text-sage">
                  <Icon className="size-5" />
                </span>
                <Card.Title className="font-display text-xl text-bark">
                  {benefit.title}
                </Card.Title>
              </Card.Header>
              <Card.Content className="p-0">
                <p className="mt-3 text-sm leading-relaxed text-bark/65">{benefit.body}</p>
              </Card.Content>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
