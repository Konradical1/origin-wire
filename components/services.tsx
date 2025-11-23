"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Code2, 
  BarChart3, 
  Palette, 
  Video, 
  LineChart, 
  Share2 
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Videography",
    description: "Full-funnel video content: product showcases, short-form social media, ads, and testimonials that drive results.",
    icon: Video,
    href: "/services/videography"
  },
  {
    title: "Social Media Marketing", 
    description: "Content calendars, posting, community management, and paid advertising to grow your audience.",
    icon: Share2,
    href: "/services/social"
  },
  {
    title: "Web Design & Development",
    description: "High-converting websites and landing pages to host and convert your content traffic.",
    icon: Code2,
    href: "/services/web"
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
      
      {/* Services Grid */}
      <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={service.href}>
              <Card className="relative overflow-hidden cursor-pointer transition-shadow hover:shadow-lg h-full">
                <CardHeader>
                  <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 transform">
                    <div className="h-20 w-20 rounded-full bg-primary/10" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
