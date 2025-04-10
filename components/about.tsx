"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Konrad Fischer, Founder of OriginWire"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-600 to-blue-500 p-6 rounded-2xl shadow-xl">
                <p className="text-white font-bold">10+ Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-6">
              About OriginWire
            </h2>

            <p className="text-lg mb-6">
              Founded by Konrad Fischer, OriginWire is a full-service digital media agency dedicated to helping
              businesses establish a powerful online presence and connect with their audience.
            </p>

            <Card className="border-none bg-gradient-to-br from-background to-muted/50 mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p>
                  To create digital experiences that transform brands and drive meaningful connections between
                  businesses and their customers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-gradient-to-br from-background to-muted/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Our Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-500">•</span>
                    <span>Innovation: We embrace new technologies and creative approaches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-500">•</span>
                    <span>Quality: We deliver excellence in every project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-500">•</span>
                    <span>Partnership: We build lasting relationships with our clients</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
