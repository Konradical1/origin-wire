"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Paintbrush, Rocket, Search, ShoppingCart, Smartphone } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Web Development",
    description: "Custom websites built with modern technologies and best practices",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that engage visitors",
    icon: Paintbrush,
  },
  {
    title: "E-commerce Solutions",
    description: "Powerful online stores that drive sales and growth",
    icon: ShoppingCart,
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    icon: Smartphone,
  },
  {
    title: "SEO Optimization",
    description: "Improve your visibility and reach in search engines",
    icon: Search,
  },
  {
    title: "Performance Optimization",
    description: "Fast-loading websites that provide the best user experience",
    icon: Rocket,
  },
]

const Services = () => {
  return (
    <section className="container py-24" id="services">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          We offer a comprehensive range of digital services to help your business succeed online
        </p>
      </div>
      <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className="relative overflow-hidden">
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
        ))}
      </div>
    </section>
  )
}

export default Services
