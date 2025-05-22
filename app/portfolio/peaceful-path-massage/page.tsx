"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function PeacefulPathMassagePage() {
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
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop"
              alt="Peaceful Path Massage Website"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-3 left-3 w-24 h-12 md:w-32 md:h-16 opacity-80 pointer-events-none">
              <Image
                src="/images/Pathmassge.png"
                alt="Peaceful Path Massage Logo Overlay"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Peaceful Path Massage</h1>
            <p className="text-lg text-muted-foreground mb-4">
              A holistic massage therapy practice with online booking and wellness resources
            </p>
            <Button asChild size="lg" className="mb-2">
              <Link href="https://peacefulpathmassage.com" target="_blank">
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
            Peaceful Path Massage needed a calming website that would showcase their massage therapy services and
            allow clients to book appointments online. The project included wellness resources, service packages,
            and a serene user interface.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Key Features</h2>
          <ul className="space-y-2">
            {[
              "Online Booking System",
              "Service Packages",
              "Wellness Blog",
              "Client Portal",
              "Gift Certificates",
              "Health History Forms",
              "Service Descriptions",
              "Testimonials",
              "Contact Form"
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
            system that handles appointment scheduling and client health history forms for a seamless experience.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Brand Identity</h2>
          <p className="text-muted-foreground">
            We created a soothing brand identity for Peaceful Path Massage, including a custom logo that reflects
            their commitment to holistic wellness. The design emphasizes tranquility and professional care.
          </p>
        </Card>
        <Card className="p-6 md:col-span-2">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Results</h2>
          <p className="text-muted-foreground">
            The new website has significantly improved Peaceful Path Massage's online presence, making it easier for
            clients to book appointments and learn about services. The calming design and seamless booking process
            have helped increase client engagement and streamline the appointment process.
          </p>
        </Card>
      </div>
    </main>
  )
} 