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

const services = [
  {
    title: "Web Design & Development",
    description: "Custom websites built with modern technologies, responsive design, and optimal user experience.",
    icon: Code2
  },
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
    title: "Content Creation",
    description: "Engaging content that tells your story and connects with your target audience.",
    icon: PenTool
  },
  {
    title: "Analytics",
    description: "Data-driven insights to optimize your digital strategy and improve performance.",
    icon: LineChart
  },
  {
    title: "Custom Solutions",
    description: "Tailored digital solutions to meet your specific business needs and challenges.",
    icon: Puzzle
  }
]

const Services = () => {
  return (
    <section className="container py-24" id="services">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 italic">
          At OriginWire, we offer a comprehensive range of digital services to help your business succeed online
        </p>
      </div>
      <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="relative overflow-hidden cursor-pointer transition-shadow hover:shadow-lg">
              <CardHeader>
                <motion.div 
                  className="mb-4 inline-block rounded-lg bg-primary/10 p-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <service.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div 
                  className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 transform"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-24 w-24 rounded-full bg-primary/10" />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
