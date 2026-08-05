import { MARQUEE_ITEMS } from '#/data/site'

export function Marquee() {
  // Rendered twice so the -50% keyframe loops seamlessly.
  const track = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <section
      aria-label="As featured in"
      className="border-y border-border bg-cream-deep/60 py-6 sm:py-8"
    >
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-12 sm:gap-20">
          {track.map((item, i) => (
            <li
              key={`${item}-${i}`}
              aria-hidden={i >= MARQUEE_ITEMS.length}
              className="font-display text-lg whitespace-nowrap text-bark/45 sm:text-2xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
