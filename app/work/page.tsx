"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { caseStudiesData } from "@/data/case-studies"

const filters = ["All", "Web Design", "Videography", "Social Media", "Content Creation"]

export default function WorkPage() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  
  const filteredProjects = selectedFilter === "All" 
    ? caseStudiesData 
    : caseStudiesData.filter(project => 
        project.category === selectedFilter || project.secondaryCategory === selectedFilter
      )

  return (
    <main className="container py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
          Our Work
        </h1>
        <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
          Real results from real clients. See how we've transformed content marketing into revenue-generating systems.
        </p>
      </motion.div>

      {/* Filters */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter)}
              className="min-w-fit"
            >
              {filter}
            </Button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 6}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
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

                {/* Results overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 dark:bg-black/90 rounded-lg p-2 text-xs">
                    {Object.entries(project.results).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <span className="font-bold text-green-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  {project.secondaryCategory && (
                    <Badge variant="outline" className="text-xs">
                      {project.secondaryCategory}
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{project.goal}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Key Results Preview */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(project.results).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-muted/50 rounded">
                        <div className="font-bold text-green-600">{value}</div>
                        <div className="text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={project.link}
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  View Case Study
                  <svg
                    className="w-4 h-4 ml-2"
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
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="bg-primary/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">Want results like these?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every project starts with understanding your goals and audience. Let's discuss how we can create similar success for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/book">Book a Call</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/process">See Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
