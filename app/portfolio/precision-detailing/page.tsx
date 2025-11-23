"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, CheckCircle2, Play } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { caseStudiesData } from "@/data/case-studies"

const caseStudy = caseStudiesData.find(study => study.id === "precision-detailing")!

export default function PrecisionDetailingPage() {
  return (
    <main className="container py-10 max-w-5xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>
        </Button>
        
        <div className="text-center mb-8">
          <div className="flex gap-2 justify-center mb-4">
            <Badge>{caseStudy.category}</Badge>
            <Badge variant="outline">{caseStudy.secondaryCategory}</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-primary mb-2">{caseStudy.goal}</p>
          <p className="text-muted-foreground max-w-3xl mx-auto">{caseStudy.description}</p>
        </div>
      </motion.div>

      {/* Teaser Reel */}
      <section className="mb-16">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted/50 mb-8">
          <Image
            src={caseStudy.image}
            alt={`${caseStudy.title} showcase`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Button size="lg" className="gap-2">
              <Play className="h-6 w-6" />
              Watch Case Study
            </Button>
          </div>
          <div className="absolute bottom-4 left-4 w-32 h-16">
            <Image
              src={caseStudy.logo}
              alt={`${caseStudy.title} logo`}
              fill
              className="object-contain opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Results</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(caseStudy.results).map(([key, value]) => (
            <Card key={key}>
              <CardContent className="text-center p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{value}</div>
                <div className="text-sm text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tactics */}
      <section className="mb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Content Tactics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {caseStudy.tactics.map((tactic, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                    {tactic}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Production Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {caseStudy.stack.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <div className="bg-primary/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">Want results like this?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every successful campaign starts with understanding your goals and audience. Let's discuss how we can create similar success for your business.
          </p>
          <Button size="lg" asChild>
            <Link href="/book">Book a Call</Link>
          </Button>
        </div>
      </section>
    </main>
  )
} 