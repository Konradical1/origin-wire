import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import About from "@/components/about"
import Contact from "@/components/contact"
import FAQ from "@/components/faq"
import Stats from "@/components/stats"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Stats />
      <About />
      <Contact />
      <FAQ />
    </main>
  )
}
