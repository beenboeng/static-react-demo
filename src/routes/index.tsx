import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '#/components/Navbar'
import { Hero } from '#/components/Hero'
import { Marquee } from '#/components/Marquee'
import { Benefits } from '#/components/Benefits'
import { Products } from '#/components/Products'
import { Ritual } from '#/components/Ritual'
import { Testimonials } from '#/components/Testimonials'
import { Faq } from '#/components/Faq'
import { Newsletter } from '#/components/Newsletter'
import { Footer } from '#/components/Footer'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Benefits />
        <Products />
        <Ritual />
        <Testimonials />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
