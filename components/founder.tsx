"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Founder() {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            {/* Left side - Image */}
            <div className="lg:w-1/3 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(147, 51, 234, 0.4)",
                      "0 0 0 20px rgba(147, 51, 234, 0)",
                      "0 0 0 0 rgba(147, 51, 234, 0.4)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img
                  src="/images/Konrad.jpg"
                  alt="Konrad Fischer"
                  className="w-64 h-64 rounded-full object-cover relative z-10 border-4 border-background shadow-xl transition-all duration-300 group-hover:rotate-3 group-hover:border-purple-500/50"
                />
              </motion.div>
            </div>

            {/* Right side - Content */}
            <div className="lg:w-2/3 text-left">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Meet the Founder
                  </h2>
                  <p className="text-xl font-semibold">Konrad Fischer</p>
                  <p className="text-muted-foreground">Age 16 | Web Designer, Videographer, Photographer</p>
                </div>

                <div className="space-y-2">
                  <p className="text-lg italic">
                    Creative work that speaks louder than my age.
                  </p>
                  <p className="text-muted-foreground">
                    Web design. Visual media. Always original.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                    🎥  Nationally Recognized
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                    🎮  Games For Change Finalist
                  </span>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pt-4"
                >
                  <Button asChild variant="outline" className="group">
                    <Link href="/about">
                      About Us
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 