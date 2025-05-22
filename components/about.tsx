"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center mb-12">
              <img
                src="/images/Konrad.jpg"
                alt="Konrad Fischer"
                className="w-48 h-48 rounded-full object-cover mb-6"
              />
              <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2">
                Konrad Fischer
              </h2>
              <p className="text-lg font-semibold mb-1">Founder, Origin Wire</p>
              <p className="text-muted-foreground mb-4">Age 16 | Web Designer, Videographer, Photographer</p>
              
              <div className="flex flex-col items-center space-y-2 mb-6">
                <p className="flex items-center">
                  <span className="mr-2">🎥</span>
                  Quill & Scroll National Award (Videography)
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🎮</span>
                  Games For Change Finalist (2025)
                </p>
              </div>

              <p className="text-lg italic text-center mb-2">
                I build experiences that connect — through pixels, light, and story.
              </p>
              <p className="text-muted-foreground text-center">
                Web design. Visual media. Always original.
              </p>
            </div>

            <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-6">
              About OriginWire
            </h2>

            <p className="text-lg mb-6 italic">
              Founded by Konrad Fischer, OriginWire is a full-service digital media agency dedicated to helping
              businesses establish a powerful online presence and connect with their audience.
            </p>

            <Card className="border-none bg-gradient-to-br from-background to-muted/50 mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="italic">
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
