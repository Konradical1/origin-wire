"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function IECStudiosPage() {
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
            <h1 className="text-4xl font-bold mb-4">IEC Studios</h1>
            <p className="text-xl text-muted-foreground mb-6">
              A dynamic web presence for a game development company
            </p>
            <div className="flex gap-4 mb-8">
              <Button asChild>
                <Link href="https://ieatchicken.com" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Website
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop"
              alt="IEC Studios Website"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Project Overview</h2>
            <p className="text-muted-foreground">
              IEC Studios needed a modern, engaging website to showcase their game development projects and services.
              The project involved creating a dynamic web presence that reflects the company's innovative approach
              to game development.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Key Features</h2>
            <ul className="space-y-2">
              {[
                "Portfolio showcase of game projects",
                "WebGL Game Library",
                "Genre Tags",
                "Minimalist Layout",
                "Search Functionality",
                "Comment Sections",
                "Mobile Integration",
                "Custom solutions for game development",
                "Performance optimization for media-rich content"
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
              The website was built with performance in mind, ensuring smooth loading of game previews and media
              content. We implemented custom solutions for showcasing game projects and integrated digital marketing
              tools to help promote the company's work.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Digital Marketing Strategy</h2>
            <p className="text-muted-foreground">
              We developed a comprehensive digital marketing strategy to increase visibility and engagement with
              potential clients and gamers. This included SEO optimization, social media integration, and content
              marketing initiatives.
            </p>
          </Card>

          <Card className="p-6 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Results</h2>
            <p className="text-muted-foreground">
              The new website has successfully positioned IEC Studios as a professional game development company,
              attracting new clients and showcasing their projects effectively. The combination of technical
              excellence and marketing strategy has led to increased visibility and project inquiries.
            </p>
          </Card>
        </div>
      </motion.div>
    </main>
  )
} 