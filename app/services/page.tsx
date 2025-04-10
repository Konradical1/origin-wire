"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Code2, 
  BarChart3, 
  Palette, 
  PenTool, 
  LineChart, 
  Puzzle 
} from "lucide-react"

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

export default function ServicesPage() {
  return (
    <main className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
          Our Services
        </h1>
        <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400">
          We offer a comprehensive range of digital services to help your business succeed online. Our team of experts is ready to bring your vision to life.
        </p>
      </motion.div>

      <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          >
            <Card className="relative overflow-hidden h-full">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
          Ready to Get Started?
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Contact us today to discuss how we can help your business thrive in the digital world.
        </p>
      </motion.div>
    </main>
  )
} 