"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function JewelsAndJigsawsPage() {
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
              src="https://images.unsplash.com/photo-1611329857570-f02f340e7378?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Jewels and Jigsaws Website"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-3 left-3 w-24 h-12 md:w-32 md:h-16 opacity-80 pointer-events-none">
              <Image
                src="/images/JewelsandJigsaws.png"
                alt="Jewels and Jigsaws Logo Overlay"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Jewels and Jigsaws</h1>
            <p className="text-lg text-muted-foreground mb-4">
              A boutique jewelry and puzzle store with online shopping and custom design services
            </p>
            <Button asChild size="lg" className="mb-2">
              <Link href="https://jewelsandjigsaws.com" target="_blank">
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
            Jewels and Jigsaws needed an elegant e-commerce website that would showcase their unique jewelry
            collections and puzzle offerings. The project included online shopping, custom design consultations,
            and a sophisticated user interface.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Key Features</h2>
          <ul className="space-y-2">
            {[
              "E-commerce Platform",
              "Custom Design Tool",
              "Product Catalog",
              "Shopping Cart",
              "Secure Checkout",
              "Order Tracking",
              "Customer Reviews",
              "Gift Registry",
              "Newsletter Integration"
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
            The website was built with a focus on user experience and functionality. We implemented a custom
            e-commerce platform with secure payment processing and an intuitive product browsing experience.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Brand Identity</h2>
          <p className="text-muted-foreground">
            We created a distinctive brand identity for Jewels and Jigsaws, including a custom logo that reflects
            their unique combination of jewelry and puzzles. The design emphasizes elegance and creativity.
          </p>
        </Card>
        <Card className="p-6 md:col-span-2">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Results</h2>
          <p className="text-muted-foreground">
            The new website has significantly improved Jewels and Jigsaws' online presence, making it easier for
            customers to browse and purchase products. The elegant design and seamless shopping experience have
            helped increase sales and customer engagement.
          </p>
        </Card>
      </div>
    </main>
  )
} 