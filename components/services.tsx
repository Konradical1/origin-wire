"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Palette, Share2, Calendar, Server } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Website Creation",
    description: "Custom-designed, responsive websites that reflect your brand and engage your audience.",
    icon: Globe,
  },
  {
    title: "Website Management & Hosting",
    description:
      "Reliable hosting, regular updates, and ongoing maintenance to keep your site secure and performing optimally.",
    icon: Server,
  },
  {
    title: "Graphic Design",
    description: "Eye-catching visuals that communicate your message and strengthen your brand identity.",
    icon: Palette,
  },
  {
    title: "Social Media Management",
    description: "Strategic content creation and community engagement to build your online presence.",
    icon: Share2,
  },
  {
    title: "Booking Management Systems",
    description: "Streamlined booking solutions that make scheduling easy for you and your clients.",
    icon: Calendar,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business stand out and succeed online.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-gradient-to-br from-background to-muted/50 hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
          >
            <Link href="#portfolio">See What We&apos;ve Built</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
