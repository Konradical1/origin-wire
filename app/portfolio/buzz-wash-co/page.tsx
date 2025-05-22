"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function BuzzWashCoPage() {
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
              src="https://skbuildingservices.com/wp-content/uploads/2023/06/Is-Powerwashing-driveway-worth-it-scaled.jpg"
              alt="Buzz Wash Co Website"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-3 left-3 w-24 h-12 md:w-32 md:h-16 opacity-80 pointer-events-none">
              <Image
                src="/images/Buzzwash.png"
                alt="Buzz Wash Co Logo Overlay"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Buzz Wash Co</h1>
            <p className="text-lg text-muted-foreground mb-4">
              A modern car wash service with online booking and loyalty program
            </p>
            <Button asChild size="lg" className="mb-2">
              <Link href="https://buzzwashco.com" target="_blank">
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
            Buzz Wash Co needed a modern website that would showcase their car wash services and implement a loyalty
            program. The project included online booking, membership management, and a clean, user-friendly interface.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Key Features</h2>
          <ul className="space-y-2">
            {[
              "Online Booking System",
              "Loyalty Program",
              "Service Packages",
              "Mobile App Integration",
              "Real-time Queue Status",
              "Payment Processing",
              "Service History",
              "Promotional Offers",
              "Customer Dashboard"
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
            The website was built with a focus on user experience and functionality. We implemented a custom booking
            system with real-time queue status and a loyalty program that rewards regular customers.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Brand Identity</h2>
          <p className="text-muted-foreground">
            We created a modern and energetic brand identity for Buzz Wash Co, including a custom logo that reflects
            their commitment to quick, efficient service. The design emphasizes speed and quality.
          </p>
        </Card>
        <Card className="p-6 md:col-span-2">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Results</h2>
          <p className="text-muted-foreground">
            The new website has significantly improved Buzz Wash Co's online presence, making it easier for
            customers to book services and track their loyalty points. The modern design and seamless booking
            process have helped increase customer engagement and retention.
          </p>
        </Card>
      </div>
    </main>
  )
} 