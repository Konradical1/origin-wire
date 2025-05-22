"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Precision Detailing",
    description: "Created a comprehensive website for a premium car detailing service, featuring custom booking system, email integration, and brand identity design.",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1000&auto=format&fit=crop",
    logo: "/images/PrecisionDetailing.png",
    category: "Web Design",
    secondaryCategory: "Brand Identity",
    link: "/portfolio/precision-detailing"
  },
  {
    title: "Buzz Wash Co",
    description: "Developed a modern website for a power washing company, including booking functionality, custom email system, and marketing materials design.",
    image: "https://skbuildingservices.com/wp-content/uploads/2023/06/Is-Powerwashing-driveway-worth-it-scaled.jpg",
    logo: "/images/Buzzwash.png",
    category: "Web Design",
    secondaryCategory: "Digital Marketing",
    link: "/portfolio/buzz-wash-co"
  },
  {
    title: "Elevate Exteriors",
    description: "Built a professional website for an exterior services company, featuring custom branding, logo design, and service showcase.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    logo: "/images/Elevate-01.png",
    category: "Web Design",
    secondaryCategory: "Brand Identity",
    link: "/portfolio/elevate-exteriors"
  },
  {
    title: "GH Cardetailing",
    description: "Created a website handling booking and advertising for a premium auto detailing service, featuring online scheduling and service showcase.",
    image: "https://www.nuviewautosalon.com/images/auto-detailing.jpg",
    logo: "/images/GH.png",
    category: "Custom Solutions",
    secondaryCategory: "Digital Marketing",
    link: "/portfolio/gh-cardetailing"
  },
  {
    title: "Peaceful Path Massage",
    description: "Developed a comprehensive web presence for a massage therapy business, including content creation, web design, and graphic design elements.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop",
    logo: "/images/Pathmassge.png",
    category: "Web Design",
    secondaryCategory: "Content Creation",
    link: "/portfolio/peaceful-path-massage"
  },
  {
    title: "Jewels and Jigsaws",
    description: "Built an online storefront for a puzzle and retail business, implementing e-commerce solutions and engaging web design.",
    image: "https://images.unsplash.com/photo-1611329857570-f02f340e7378?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    logo: "/images/JewelsandJigsaws.png",
    category: "Web Design",
    secondaryCategory: "Custom Solutions",
    link: "/portfolio/jewels-and-jigsaws"
  },
  // {
  //   title: "IEC Studios",
  //   description: "Created a dynamic web presence for a game development company, featuring custom solutions and digital marketing strategies.",
  //   image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop",
  //   logo: "/images/IEC.png",
  //   category: "Web Design",
  //   secondaryCategory: "Digital Marketing",
  //   link: "/portfolio/iec-studios"
  // },
]

const allTags = ["Web Design", "Digital Marketing", "Graphic Design", "Content Creation", "Analytics", "Custom Solutions"]

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
            Our Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto italic">
            Explore OriginWire's latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        {/* Removed filter buttons */}

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
                {/* Logo overlay on hover - bigger size */}
                {project.logo && (
                  <div className="absolute bottom-4 left-4 w-36 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Image
                      src={project.logo}
                      alt={project.title + ' logo'}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
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
