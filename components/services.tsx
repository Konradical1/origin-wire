"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Code2, 
  BarChart3, 
  Palette, 
  PenTool, 
  LineChart, 
  Puzzle 
} from "lucide-react"
import Link from "next/link"

const topServices = [
  {
    title: "Web Design & Development",
    description: "Custom websites built with modern technologies, responsive design, and optimal user experience.",
    icon: Code2
  },
  {
    title: "Content Creation",
    description: "Award-winning videographers and photographers crafting compelling visual stories that elevate your brand and engage your audience.",
    icon: PenTool
  }
]

const bottomServices = [
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions to increase your online presence and drive business growth.",
    icon: BarChart3
  },
  {
    title: "Graphic Design",
    description: "Professional visual designs that capture your brand's essence and engage your audience.",
    icon: Palette
  },
  {
    title: "Analytics",
    description: "Data-driven insights to optimize your digital strategy and improve performance.",
    icon: LineChart
  }
]

const Services = () => {
  return (
    <section className="container py-24" id="services">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Do</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 italic">
          Discover how we can help transform your business with our comprehensive range of digital solutions
        </p>
      </div>
      
      {/* Top Row - Larger Cards */}
      <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2">
        {topServices.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="relative overflow-hidden cursor-pointer transition-shadow hover:shadow-lg h-full">
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-lg">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 transform">
                  <div className="h-32 w-32 rounded-full bg-primary/10" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom Row - Smaller Cards */}
      <div className="mx-auto mt-8 grid gap-8 sm:grid-cols-3">
        {bottomServices.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="relative overflow-hidden cursor-pointer transition-shadow hover:shadow-lg h-full">
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 transform">
                  <div className="h-24 w-24 rounded-full bg-primary/10" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
