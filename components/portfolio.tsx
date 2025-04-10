"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Mullins-Taylor Group",
    description: "Custom-built website and digital marketing package for a local financial advisor to establish trust, improve accessibility, and showcase services clearly.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
    category: "Web Design",
    secondaryCategory: "Digital Marketing",
    link: "/portfolio/mullins-taylor-group"
  },
  {
    title: "ErinConoverMurray.com",
    description: "Elegant and modern website redesign for a Cincinnati-based interior designer, optimized for mobile and portfolio presentation.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    category: "Web Design",
    secondaryCategory: "Graphic Design",
    link: "/portfolio/erinconovermurray"
  },
  {
    title: "Excelerate Athletic Training",
    description: "Website and branding package for a personal training brand, focused on clear service offerings and lead generation.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    category: "Web Design",
    secondaryCategory: "Content Creation",
    link: "/portfolio/excelerate-athletic"
  },
  {
    title: "Photography by Lauren Olson",
    description: "Minimalist photography portfolio showcasing creative work with an intuitive layout and contact options.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    category: "Graphic Design",
    secondaryCategory: "Content Creation",
    link: "/portfolio/lauren-olson"
  },
  {
    title: "Eagle Creek Custom Builders",
    description: "Full website design for a custom home building company, featuring project galleries, testimonials, and service breakdowns.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    category: "Web Design",
    secondaryCategory: "Analytics",
    link: "/portfolio/eagle-creek"
  },
  {
    title: "GH Cardetailing",
    description: "Created a website handling booking and advertising for a premium auto detailing service, featuring online scheduling and service showcase.",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1000&auto=format&fit=crop",
    category: "Custom Solutions",
    secondaryCategory: "Digital Marketing",
    link: "/portfolio/gh-cardetailing"
  }
]

const allTags = ["Web Design", "Digital Marketing", "Graphic Design", "Content Creation", "Analytics", "Custom Solutions"]

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredProjects = selectedTag
    ? projects.filter((project) => 
        project.category === selectedTag || 
        project.secondaryCategory === selectedTag
      )
    : projects

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-3 sm:mb-4">
            Our Portfolio
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto italic">
            Explore OriginWire's latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        {/* Mobile-friendly filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            size="sm"
            className="text-xs sm:text-sm"
            onClick={() => setSelectedTag(null)}
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              className="text-xs sm:text-sm"
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
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
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-1 mb-1">
                  <span className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400">
                    {project.category}
                  </span>
                  {project.secondaryCategory && (
                    <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
                      • {project.secondaryCategory}
                    </span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mt-1 sm:mt-2 mb-1 sm:mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project
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
