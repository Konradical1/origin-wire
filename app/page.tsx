import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
// import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Stats from "@/components/stats"
import CompanyLogos from "@/components/company-logos"
import Founder from "@/components/founder"
import HowItDrivesSales from "@/components/how-it-drives-sales"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <CompanyLogos />
      <Services />
      <HowItDrivesSales />
      <Founder />
      <Portfolio />
      <Stats />
      <CTASection />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  )
}
