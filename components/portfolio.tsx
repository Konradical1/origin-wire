"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"
import { caseStudiesData } from "@/data/case-studies"

// Use the first 6 case studies from our data
const projects = caseStudiesData.slice(0, 6)

const allTags = ["Web Design", "Videography", "Social Media", "Content Creation", "Brand Identity", "Custom Solutions"]

export default function Portfolio() {
  // Remove filter state and logic
  // const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Always show all projects
  const filteredProjects = projects;

  return (
    <section id="portfolio" className="py-10 sm:py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-3 sm:mb-4">
            Featured Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto italic">
            Real results from real clients. See how we've transformed content marketing into revenue-generating systems.
          </p>
        </motion.div>

        {/* Removed filter buttons */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play button overlay for video content */}
                {(project.category === "Videography" || project.category === "Social Media") && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Logo overlay on hover */}
                {project.logo && (
                  <div className="absolute bottom-4 left-4 w-32 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Image
                      src={project.logo}
                      alt={project.title + ' logo'}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Results preview */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 dark:bg-black/90 rounded-lg p-2 text-xs">
                    {Object.entries(project.results).slice(0, 1).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold text-green-600">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  {project.secondaryCategory && (
                    <Badge variant="outline" className="text-xs">
                      {project.secondaryCategory}
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-primary mb-2">{project.goal}</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Case Study
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
