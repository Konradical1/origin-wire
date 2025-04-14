"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function GHCardetailingPage() {
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
            <h1 className="text-4xl font-bold mb-4">GH Cardetailing</h1>
            <p className="text-xl text-muted-foreground mb-6">
              A premium auto detailing service website with online booking capabilities
            </p>
            <div className="flex gap-4 mb-8">
              <Button asChild>
                <Link href="https://ghcardetailing.com" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Website
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1000&auto=format&fit=crop"
              alt="GH Cardetailing Website"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Project Overview</h2>
            <p className="text-muted-foreground">
              GH Cardetailing needed a professional website that would showcase their premium auto detailing services
              and allow customers to book appointments online. The project involved creating a modern, user-friendly
              interface that highlights their services and expertise.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Key Features</h2>
            <ul className="space-y-2">
              {[
                "Responsive Design",
                "Service Section with Icon-Based Cards",
                "Online Booking Integration",
                "Custom Domain & Branding",
                "Contact Section",
                "Customer testimonials section",
                "Mobile-responsive design",
                "Integration with business management tools"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Technical Implementation</h2>
            <p className="text-muted-foreground">
              The website was built using modern web technologies to ensure fast loading times and smooth user experience.
              We implemented a custom booking system that integrates with the business's scheduling software, allowing
              for real-time availability updates and instant booking confirmations.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Design Elements</h2>
            <p className="text-muted-foreground">
              The design emphasizes the premium nature of GH Cardetailing's services through high-quality imagery
              and a sophisticated color palette. The layout prioritizes easy access to booking and service information,
              with clear calls-to-action throughout the site.
            </p>
          </Card>

          <Card className="p-6 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Results</h2>
            <p className="text-muted-foreground">
              The new website has significantly improved GH Cardetailing's online presence, making it easier for
              customers to book services and learn about the company's offerings. The professional design and
              seamless booking process have helped increase customer engagement and streamline the appointment
              process.
            </p>
          </Card>
        </div>
      </motion.div>
    </main>
  )
} 