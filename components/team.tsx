"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-12 text-center">
              Meet Our Team
            </h2>

            {/* Konrad's Section */}
            <div className="flex flex-col items-center mb-16">
              <img
                src="/images/Konrad.jpg"
                alt="Konrad Fischer"
                className="w-48 h-48 rounded-full object-cover mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Konrad Fischer</h3>
              <p className="text-lg font-semibold mb-1">Founder & Lead Developer</p>
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
              <p className="text-muted-foreground text-center mb-6">
                Web design. Visual media. Always original.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none bg-gradient-to-br from-background to-muted/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Lucy Redman</h3>
                  <p className="text-muted-foreground mb-4">Creative Director & Photographer</p>
                  <p>Crafting visually stunning designs and capturing the essence of our clients' brands through photography.</p>
                </CardContent>
              </Card>

              <Card className="border-none bg-gradient-to-br from-background to-muted/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Rylen Dean</h3>
                  <p className="text-muted-foreground mb-4">Business Development Strategist</p>
                  <p>Driving client relationships and business growth through strategic partnerships and innovative solutions.</p>
                </CardContent>
              </Card>

              <Card className="border-none bg-gradient-to-br from-background to-muted/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Kyle Fischer</h3>
                  <p className="text-muted-foreground mb-4">Backend Developer</p>
                  <p>Building robust and scalable backend systems to power our clients' digital solutions.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 