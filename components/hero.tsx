"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 z-0"></div>

      {/* Abstract shapes */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-purple-800/20 -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-800/20 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/2 w-[800px] h-[400px] rounded-full bg-indigo-800/15 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Digital Experiences <br />
              That Transform Brands
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-lg">
              We blend creativity and technology to build powerful digital solutions that help businesses thrive in the
              digital landscape.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Link href="#portfolio">See Our Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="#contact">Let&apos;s Talk</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="aspect-video bg-white/20 rounded-lg mb-6"></div>
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/30"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
