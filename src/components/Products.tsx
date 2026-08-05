import { Button, Card, Chip } from '@heroui/react'
import { PRODUCTS } from '#/data/site'
import { Bottle } from './Bottle'
import { StarIcon } from './icons'

export function Products() {
  return (
    <section
      id="products"
      className="border-y border-border bg-cream-deep/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.2em] text-sage uppercase">The range</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-bark sm:text-4xl lg:text-5xl">
              Small collection. Nothing filler.
            </h2>
          </div>
          <Button variant="outline" size="md" className="self-start sm:self-auto">
            View all products
          </Button>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <li key={product.id}>
              <Card className="group flex h-full flex-col overflow-hidden p-0">
                <div className="relative flex aspect-4/5 items-center justify-center bg-cream-deep p-8">
                  <Chip
                    color="accent"
                    variant="soft"
                    size="sm"
                    className="absolute top-4 left-4"
                  >
                    <Chip.Label>{product.badge}</Chip.Label>
                  </Chip>
                  <Bottle
                    tint={product.tint}
                    cap={product.cap}
                    label={product.name.split(' ')[0].toUpperCase()}
                    className="h-full w-auto transition-transform duration-500 group-hover:-translate-y-2"
                  />
                </div>

                <Card.Content className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg leading-snug text-bark">
                      {product.name}
                    </h3>
                    <p className="shrink-0 font-display text-lg text-bark">
                      ${product.price}
                    </p>
                  </div>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-bark/60">
                    {product.tagline}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5">
                    <StarIcon className="size-4 text-clay" />
                    <span className="text-sm font-medium text-bark">{product.rating}</span>
                    <span className="text-sm text-bark/50">
                      ({product.reviews.toLocaleString()})
                    </span>
                  </div>

                  <Button variant="primary" size="md" fullWidth className="mt-5">
                    Add to bag
                  </Button>
                </Card.Content>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
