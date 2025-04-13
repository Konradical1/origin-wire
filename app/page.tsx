import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
// import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Stats from "@/components/stats"

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Services />
      <Portfolio />
      <Stats />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  )
}
