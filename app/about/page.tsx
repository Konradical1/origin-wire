"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Palette, Users, Server, User, Lightbulb, Target, Rocket, Heart, Briefcase } from "lucide-react"

const team = [
  {
    name: "Lucy Redman",
    role: "Creative Director & Photographer",
    description: "Crafting visually stunning designs and capturing the essence of our clients' brands through photography.",
    icon: Palette
  },
  {
    name: "Rylen Dean",
    role: "Business Development Strategist",
    description: "Driving client relationships and business growth through strategic partnerships and innovative solutions.",
    icon: Users
  },
  {
    name: "Kyle Fischer",
    role: "Backend Developer",
    description: "Building robust and scalable backend systems to power our clients' digital solutions.",
    icon: Server
  }
]

const values = [
  {
    title: "Innovation",
    description: "We stay at the forefront of technology to deliver cutting-edge solutions",
    icon: Lightbulb,
    color: "border-purple-500 dark:border-purple-400"
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients to ensure their vision becomes reality",
    icon: Users,
    color: "border-blue-500 dark:border-blue-400"
  },
  {
    title: "Quality",
    description: "We maintain the highest standards in everything we create",
    icon: Target,
    color: "border-green-500 dark:border-green-400"
  },
  {
    title: "Growth",
    description: "We help businesses scale and achieve their full potential",
    icon: Rocket,
    color: "border-orange-500 dark:border-orange-400"
  },
  {
    title: "Passion",
    description: "We love what we do and it shows in our work",
    icon: Heart,
    color: "border-pink-500 dark:border-pink-400"
  },
  {
    title: "Expertise",
    description: "Our team brings years of experience across various technologies",
    icon: Briefcase,
    color: "border-indigo-500 dark:border-indigo-400"
  }
]

export default function AboutPage() {
  return (
    <main className="container py-24">
      {/* Konrad's Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row items-center gap-12 mb-24"
      >
        {/* Left side - Image */}
        <div className="lg:w-1/3 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
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
              className="w-96 h-96 rounded-full object-cover relative z-10 border-4 border-background shadow-xl transition-transform duration-300 group-hover:rotate-3"
            />
          </motion.div>
        </div>

        {/* Right side - Content */}
        <div className="lg:w-2/3 text-left">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Konrad Fischer
              </h1>
              <p className="text-xl font-semibold mb-1">Founder & Lead Developer</p>
              <p className="text-lg text-muted-foreground">Age 16 | Web Designer, Videographer, Photographer</p>
            </div>

            <div className="space-y-3">
              <p className="flex items-center text-lg">
                <span className="mr-2">🎥</span>
                Quill & Scroll National Award (Videography)
              </p>
              <p className="flex items-center text-lg">
                <span className="mr-2">🎮</span>
                Games For Change Finalist (2025)
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xl italic">
                Creative work that speaks louder than my age.
              </p>
              <p className="text-lg text-muted-foreground">
                Web design. Visual media. Always original.
              </p>
            </div>

            <p className="text-gray-500 md:text-lg dark:text-gray-400">
              At OriginWire, we're committed to delivering exceptional digital solutions that help businesses thrive in the modern world. Our team combines technical expertise with creative innovation to create websites and digital experiences that make a lasting impact.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-24"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Our Values
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            The principles that guide everything we do at OriginWire
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className={`p-6 rounded-xl border-2 ${value.color} h-full flex flex-col items-center text-center`}>
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            We're a passionate team of developers, designers, and strategists working together to bring your digital vision to life.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                    <member.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
} 