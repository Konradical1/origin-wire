"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function JewelsAndJigsawsPage() {
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
            <h1 className="text-4xl font-bold mb-4">Jewels and Jigsaws</h1>
            <p className="text-xl text-muted-foreground mb-6">
              An engaging online storefront for puzzles and retail items
            </p>
            <div className="flex gap-4 mb-8">
              <Button asChild>
                <Link href="https://jewelsandjigsaws.com" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Website
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1611329857570-f02f340e7378?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Jewels and Jigsaws Website"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Project Overview</h2>
            <p className="text-muted-foreground">
              Jewels and Jigsaws needed a modern e-commerce platform to showcase and sell their collection of puzzles
              and retail items. The project focused on creating an intuitive shopping experience with engaging product
              presentations.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Key Features</h2>
            <ul className="space-y-2">
              {[
                "E-commerce functionality with secure payment processing",
                "Shopping cart and wishlist features",
                "Product search and filtering options",
                "Mobile-responsive design",
                "Inventory management system",
                "Product Catalog",
                "Product Customization",
                "Minimalist Layout",
                "Responsive Design",
                "Product Backstories"
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
              The website was built using modern e-commerce technologies, ensuring secure transactions and smooth
              user experience. We implemented a robust product management system that allows for easy updates and
              inventory tracking.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Design Elements</h2>
            <p className="text-muted-foreground">
              The design focused on creating an engaging shopping experience with high-quality product images and
              clear navigation. We used a clean, modern layout that highlights the products while maintaining
              easy accessibility to all shopping features.
            </p>
          </Card>

          <Card className="p-6 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Results</h2>
            <p className="text-muted-foreground">
              The new online store has successfully transformed Jewels and Jigsaws' retail presence, making it
              easier for customers to browse and purchase products. The intuitive design and smooth shopping
              experience have led to increased sales and customer satisfaction.
            </p>
          </Card>
        </div>
      </motion.div>
    </main>
  )
} 