import { Accordion } from '@heroui/react'
import { FAQS } from '#/data/site'

export function Faq() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs tracking-[0.2em] text-sage uppercase">Questions</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-bark sm:text-4xl">
            The things you asked before buying.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-bark/70">
            Still unsure? Our team answers every message within a working day.
          </p>
        </div>

        <Accordion variant="surface">
          {FAQS.map((faq) => (
            <Accordion.Item key={faq.id} id={faq.id}>
              <Accordion.Heading>
                <Accordion.Trigger className="font-display text-lg text-bark">
                  {faq.question}
                  <Accordion.Indicator />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body className="text-sm leading-relaxed text-bark/65">
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
