"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Search,
  Target,
  FileText,
  Video,
  Share2,
  BarChart3
} from "lucide-react"
import { processData } from "@/data/process"

const iconMap = {
  "Search": Search,
  "Target": Target,
  "FileText": FileText,
  "Video": Video,
  "Share2": Share2,
  "BarChart3": BarChart3
}

export default function ProcessPage() {
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
          {processData.title}
        </h1>
        <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
          {processData.subtitle}
        </p>
        <Button size="lg" asChild>
          <Link href="/book">Start Your Project</Link>
        </Button>
      </motion.div>

      {/* Timeline Overview */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Project Timeline</h2>
        <div className="bg-muted/50 rounded-2xl p-8">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {Object.entries(processData.timeline).map(([phase, duration], index) => (
              <div key={phase} className="text-center">
                <Badge variant="outline" className="mb-2">
                  {duration}
                </Badge>
                <p className="text-sm font-medium capitalize">{phase.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="mb-20">
        <div className="space-y-12">
          {processData.steps.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap]
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid gap-8 lg:grid-cols-2 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">{step.number}</Badge>
                          <CardTitle className="text-2xl">{step.title}</CardTitle>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardHeader>
                  </Card>
                </div>
                
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">What You Do</h4>
                      <ul className="space-y-2">
                        {step.whatYouDo.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">What We Do</h4>
                      <ul className="space-y-2">
                        {step.whatWeDo.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-green-600 mr-3 mt-2 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Why This Process Works */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why This Process Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Systematic Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Every step builds on the previous one, ensuring nothing falls through the cracks and every decision is data-driven.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Clear Communication</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You always know what's happening, what's expected of you, and what we're working on next.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Measurable Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Every phase includes specific deliverables and metrics so you can track progress and ROI.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mb-20">
        <div className="bg-primary/10 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book a strategy call to discuss your goals and see how our proven process can transform your content marketing results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/book">Book Strategy Call</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services/videography">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How long does the entire process take?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The initial setup (Discovery through Production) typically takes 3-4 weeks. Distribution and Reporting are ongoing monthly processes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What if I need to make changes during the process?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We build in review points at each stage and include revision rounds. Major scope changes can be accommodated with timeline adjustments.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How involved do I need to be?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Your involvement is mainly during Discovery, approvals, and providing feedback. We handle the heavy lifting of production and distribution.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
