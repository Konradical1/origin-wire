"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { servicesData } from "@/data/services"

const analyticsService = servicesData.analytics

export default function AnalyticsPage() {
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
          {analyticsService.headline}
        </h1>
        <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
          {analyticsService.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/book">Book a Call</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/work">Sample Reports</Link>
          </Button>
        </div>
      </motion.div>

      {/* KPIs Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Metrics We Track</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {analyticsService.kpis.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <CardTitle className="text-lg">{kpi}</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What's Included Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Dashboards</CardTitle>
              <CardDescription>Comprehensive performance tracking across all platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  Platform-specific metrics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  Content performance analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  Audience growth tracking
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  Engagement rate analysis
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Impact Reports</CardTitle>
              <CardDescription>Connect content performance to business results</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  Lead generation tracking
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  Conversion rate analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  Cost per acquisition
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  ROI calculations
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Reporting Process</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { title: "Data Collection", description: "Gather metrics from all platforms and tools" },
            { title: "Analysis", description: "Identify trends, patterns, and opportunities" },
            { title: "Insights", description: "Translate data into actionable recommendations" },
            { title: "Optimization", description: "Implement changes to improve performance" }
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

      {/* Sample Dashboard Preview */}
      <section className="mb-20">
        <div className="bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sample Dashboard Metrics</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">+245%</div>
              <div className="text-sm text-muted-foreground">Watch Time Increase</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8%</div>
              <div className="text-sm text-muted-foreground">Average CTR</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">85</div>
              <div className="text-sm text-muted-foreground">Leads This Month</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">$42</div>
              <div className="text-sm text-muted-foreground">Cost Per Lead</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="bg-primary/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">Get Clear on What's Working</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Stop guessing and start optimizing with data-driven insights that show exactly how your content drives business results.
          </p>
          <Button size="lg" asChild>
            <Link href="/book">Book Your Strategy Call</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
