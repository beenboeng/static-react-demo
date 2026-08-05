import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button, Input, TextField } from '@heroui/react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  // No backend in this demo — swap for a real subscribe call.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return
    setSent(true)
    setEmail('')
  }

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-sage px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -left-16 size-72 rounded-full bg-white/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -bottom-24 size-80 rounded-full bg-white/10"
        />

        <div className="relative mx-auto max-w-xl">
          <h2 className="font-display text-3xl leading-tight text-balance text-white sm:text-4xl">
            Ten percent off, and a note worth opening.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
            Seasonal skin advice from our formulators. One email a month, no filler.
          </p>

          {sent ? (
            <p
              role="status"
              className="mt-8 font-display text-lg text-white"
            >
              You're on the list — check your inbox.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <TextField
                className="flex-1"
                aria-label="Email address"
                value={email}
                onChange={setEmail}
                type="email"
                isRequired
                fullWidth
              >
                <Input placeholder="you@example.com" />
              </TextField>
              <Button type="submit" variant="secondary" size="lg">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
