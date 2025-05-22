import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
// import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Stats from "@/components/stats"
import CompanyLogos from "@/components/company-logos"
import Founder from "@/components/founder"

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <CompanyLogos />
      <Services />
      <Founder />
      <Portfolio />
      <Stats />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  )
}
