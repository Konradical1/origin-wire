"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function PeacefulPathMassagePage() {
  return (
    <main className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-4">Peaceful Path Massage</h1>
            <p className="text-xl text-muted-foreground mb-6">
              A comprehensive web presence for a massage therapy business
            </p>
            <div className="flex gap-4 mb-8">
              <Button asChild>
                <Link href="https://peacefulpathmassage.com" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Website
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop"
              alt="Peaceful Path Massage Website"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Project Overview</h2>
            <p className="text-muted-foreground">
              Peaceful Path Massage needed a professional website that would effectively communicate their services
              and create a calming, inviting online presence. The project encompassed web design, content creation,
              and graphic design to create a cohesive brand experience.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Key Features</h2>
            <ul className="space-y-2">
              {[
                "Service descriptions and pricing information",
                "Online appointment scheduling system",
                "Professional photography and imagery",
                "Custom graphic design elements",
                "Booking Integration",
                "Contact Information",
                "Responsive Design",
                "Newsletter Signup",
                "Social Media Links",
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Design Approach</h2>
            <p className="text-muted-foreground">
              The design focused on creating a serene and professional atmosphere that reflects the calming nature
              of massage therapy. We used a soothing color palette and carefully selected imagery to convey trust
              and professionalism while maintaining a peaceful aesthetic.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Content Strategy</h2>
            <p className="text-muted-foreground">
              We developed comprehensive content that clearly communicates the benefits of different massage services,
              helping potential clients understand the value of each treatment. The content was crafted to be both
              informative and engaging, with a focus on the therapeutic benefits and professional expertise of the
              practitioners.
            </p>
          </Card>

          <Card className="p-6 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Results</h2>
            <p className="text-muted-foreground">
              The new website has helped Peaceful Path Massage establish a strong online presence, making it easier
              for clients to book appointments and learn about their services. The professional design and comprehensive
              content have contributed to increased bookings and improved client engagement.
            </p>
          </Card>
        </div>
      </motion.div>
    </main>
  )
} 