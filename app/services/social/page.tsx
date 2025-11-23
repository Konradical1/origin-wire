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

const socialService = servicesData.social

const faqs = [
  {
    question: "Which platforms do you manage?",
    answer: "We specialize in TikTok, Instagram, YouTube Shorts, and Facebook. We can also manage LinkedIn and Twitter based on your audience."
  },
  {
    question: "Do you provide the content or do we?",
    answer: "We handle all content creation, from video production to captions and hashtags. You just need to provide access and feedback."
  },
  {
    question: "How do you measure success?",
    answer: "We track engagement rate, reach, saves, shares, website clicks, and most importantly - leads and conversions generated."
  },
  {
    question: "What if I want to review posts before they go live?",
    answer: "Absolutely! We can set up an approval process where you review all content before publishing."
  },
  {
    question: "Do you handle community management?",
    answer: "Yes, we respond to comments, DMs, and engage with your audience to build genuine relationships."
  }
]

export default function SocialPage() {
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
          {socialService.headline}
        </h1>
        <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
          {socialService.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/book">Book a Call</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/work">View Results</Link>
          </Button>
        </div>
      </motion.div>

      {/* Services Overview */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">What We Handle</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {socialService.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{service.split(' - ')[0]}</CardTitle>
                  <CardDescription>{service.split(' - ')[1]}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Plans Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Plans</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {socialService.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
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
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    From ${plan.priceFrom.toLocaleString()}
                    <span className="text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                      {plan.postsPerWeek} posts per week
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                      {plan.communityHours} hours community management
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                      {plan.reporting}
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                      Content strategy & planning
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                      Hashtag research & optimization
                    </li>
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

      {/* Integrations Section */}
      <section className="mb-20">
        <div className="bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Platform Integrations</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {socialService.integrations.map((integration, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <p className="text-sm font-medium">{integration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { title: "Strategy", description: "Audience research and content planning" },
            { title: "Creation", description: "Content production and optimization" },
            { title: "Publishing", description: "Scheduled posting and community management" },
            { title: "Analysis", description: "Performance tracking and optimization" }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
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
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Social Media?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's create a social media strategy that turns followers into customers and builds lasting relationships.
          </p>
          <Button size="lg" asChild>
            <Link href="/book">Book Your Strategy Call</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
