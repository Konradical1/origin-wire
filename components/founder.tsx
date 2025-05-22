"use client"

import { motion } from "framer-motion"

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
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl" />
                <img
                  src="/images/Konrad.jpg"
                  alt="Konrad Fischer"
                  className="w-48 h-48 rounded-full object-cover relative z-10 border-4 border-background shadow-xl"
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 