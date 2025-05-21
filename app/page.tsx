import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
// import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Stats from "@/components/stats"
import CompanyLogos from "@/components/company-logos"

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <CompanyLogos />
      <Services />
      <Portfolio />
      <Stats />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  )
}
