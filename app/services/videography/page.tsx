"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { servicesData } from "@/data/services"

const videographyService = servicesData.videography

const faqs = [
  {
    question: "What's your typical turnaround time?",
    answer: "Most video projects are completed within 5-7 business days. Rush jobs can be accommodated for an additional fee."
  },
  {
    question: "How many revision rounds are included?",
    answer: "We include 2 rounds of revisions with each package. Additional revisions can be purchased if needed."
  },
  {
    question: "Do I own the usage rights to the videos?",
    answer: "Yes, you receive full commercial usage rights to all videos we create for you."
  },
  {
    question: "Can you work with existing brand guidelines?",
    answer: "Absolutely! We'll ensure all content aligns with your brand colors, fonts, and messaging guidelines."
  },
  {
    question: "What equipment do you use?",
    answer: "We use professional-grade cameras including Canon R6 and Nikon Z6 for both photo and video, along with high-quality audio equipment to ensure cinema-quality results."
  }
]

export default function VideographyPage() {
  return (
    <main className="container py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
          {videographyService.headline}
        </h1>
        <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
          {videographyService.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/book">Book a Call</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/work">View Our Work</Link>
          </Button>
        </div>
      </motion.div>

      {/* Packages Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Packages</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {videographyService.packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden group hover:shadow-lg transition-shadow">
                {index === 1 && (
                  <div className="absolute top-0 right-0">
                    <Badge className="rounded-none rounded-bl-lg">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    From ${pkg.priceFrom.toLocaleString()}
                    <span className="text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.deliverables.map((deliverable, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/book">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What's Included Section */}
      <section className="mb-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {videographyService.whatsIncluded.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Proven Outcomes</h2>
            <div className="space-y-4">
              {videographyService.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bullets Section */}
      <section className="mb-20">
        <div className="bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Video Production Process</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {videographyService.bullets.map((bullet, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {index + 1}
                </div>
                <p className="text-sm">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="bg-primary/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your video content goals and create a strategy that drives real results for your business.
          </p>
          <Button size="lg" asChild>
            <Link href="/book">Book Your Strategy Call</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
