"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ElevateExteriorsPage() {
  return (
    <main className="container py-10 max-w-5xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/#portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="relative w-full md:w-1/2 aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
              alt="Elevate Exteriors Website"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-3 left-3 w-24 h-12 md:w-32 md:h-16 opacity-80 pointer-events-none">
              <Image
                src="/images/Elevate-01.png"
                alt="Elevate Exteriors Logo Overlay"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Elevate Exteriors</h1>
            <p className="text-lg text-muted-foreground mb-4">
              A professional exterior services company with custom branding and web presence
            </p>
            <Button asChild size="lg" className="mb-2">
              <Link href="https://elevate-exteriors.com" target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Website
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Overview</h2>
          <p className="text-muted-foreground">
            Elevate Exteriors needed a professional website that would showcase their exterior services and establish
            their brand identity. The project included custom logo design, website development, and service
            presentation.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Key Features</h2>
          <ul className="space-y-2">
            {[
              "Custom Logo Design",
              "Service Showcase",
              "Mobile-Responsive Design",
              "Contact Form",
              "Service Pricing",
              "Project Gallery",
              "Brand Identity",
              "Professional Photography",
              "Customer Testimonials"
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Technical Implementation</h2>
          <p className="text-muted-foreground">
            The website was built with a focus on showcasing the company's services and projects. We implemented
            a modern, responsive design that highlights their work and makes it easy for potential customers to
            get in touch.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Brand Identity</h2>
          <p className="text-muted-foreground">
            We created a distinctive brand identity for Elevate Exteriors, including a custom logo that reflects
            their commitment to quality and professionalism. The design emphasizes their expertise in exterior
            services and attention to detail.
          </p>
        </Card>
        <Card className="p-6 md:col-span-2">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Results</h2>
          <p className="text-muted-foreground">
            The new website and brand identity have significantly improved Elevate Exteriors' professional image
            and online presence. The modern design and clear service presentation have helped increase customer
            inquiries and establish the company as a leader in exterior services.
          </p>
        </Card>
      </div>
    </main>
  )
} 