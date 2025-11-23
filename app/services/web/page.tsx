"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { servicesData } from "@/data/services"

const webService = servicesData.web

const features = [
  {
    title: "Campaign Landing Pages",
    description: "Custom-designed pages optimized for specific campaigns and traffic sources."
  },
  {
    title: "Speed Optimization",
    description: "Lightning-fast loading times to reduce bounce rates and improve conversions."
  },
  {
    title: "SEO & Schema Markup",
    description: "Search engine optimization and structured data for better visibility."
  },
  {
    title: "Lead Capture & Conversion",
    description: "Strategically placed forms and CTAs to maximize conversions."
  }
]

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Typical websites are completed in 2-4 weeks, depending on complexity and content requirements."
  },
  {
    question: "Will my website work on mobile devices?",
    answer: "Yes, all websites are fully responsive and optimized for mobile, tablet, and desktop viewing."
  },
  {
    question: "Can you integrate with my existing marketing tools?",
    answer: "Absolutely! We integrate with popular tools like Google Analytics, Facebook Pixel, email marketing platforms, and CRMs."
  },
  {
    question: "Do you provide website maintenance?",
    answer: "Yes, we offer ongoing maintenance plans to keep your site updated, secure, and performing optimally."
  },
  {
    question: "How does web design support my video content?",
    answer: "We create landing pages specifically designed to host and showcase your video content, with optimized layouts for conversion."
  }
]

export default function WebPage() {
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
          {webService.headline}
        </h1>
        <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
          {webService.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/book">Book a Call</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/work">View Websites</Link>
          </Button>
        </div>
      </motion.div>

      {/* Supporting Content Message */}
      <section className="mb-20">
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">
            The Perfect Complement to Your Content Strategy
          </h2>
          <p className="text-blue-800 dark:text-blue-200 max-w-3xl mx-auto">
            While video and social media drive attention and engagement, your website is where that 
            attention converts into customers. We build high-converting websites that work seamlessly 
            with your content marketing efforts.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Focus Areas</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {webService.focus.map((focus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{focus}</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">What We Deliver</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Content Integration Section */}
      <section className="mb-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Built for Content Marketing</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                <div>
                  <strong>Video-First Design:</strong> Layouts optimized for video content and engagement
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                <div>
                  <strong>Social Media Integration:</strong> Seamless connection with your social channels
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                <div>
                  <strong>Lead Capture:</strong> Strategic forms and CTAs to convert traffic into leads
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                <div>
                  <strong>Performance Tracking:</strong> Built-in analytics to measure content performance
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Perfect for:</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0" />
                Campaign landing pages
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0" />
                Service showcase websites
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0" />
                Portfolio & case studies
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0" />
                E-commerce integrations
              </li>
            </ul>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Convert Your Traffic?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's build a website that turns your content marketing efforts into measurable business results.
          </p>
          <Button size="lg" asChild>
            <Link href="/book">Book Your Strategy Call</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
