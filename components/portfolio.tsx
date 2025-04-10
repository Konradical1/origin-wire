"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = ["All", "Websites", "Graphic Design", "Social Media", "Booking Systems"]

const projects = [
  {
    id: 1,
    title: "Luxury Resort Website",
    summary: "Modern website with booking functionality for a high-end resort",
    category: "Websites",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Tech Startup Rebrand",
    summary: "Complete visual identity redesign for an emerging tech company",
    category: "Graphic Design",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Restaurant Online Presence",
    summary: "Website and social media strategy for a fine dining establishment",
    category: "Social Media",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Fitness Studio Booking System",
    summary: "Custom class scheduling and payment solution",
    category: "Booking Systems",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    summary: "Full-featured online store with inventory management",
    category: "Websites",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Corporate Social Campaign",
    summary: "Multi-platform social media campaign for brand awareness",
    category: "Social Media",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and see how we&apos;ve helped businesses transform their digital presence.
          </p>
        </motion.div>

        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-background/50 backdrop-blur-sm">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-none hover:shadow-xl transition-all duration-300 h-full bg-background">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                          <h3 className="text-xl font-bold text-white">{project.title}</h3>
                          <p className="text-gray-200 mt-2">{project.summary}</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground mt-2">{project.summary}</p>
                      <div className="mt-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
