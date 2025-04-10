"use client"

import { motion } from "framer-motion"
import { Check, Users, Award } from "lucide-react"

const stats = [
  {
    value: "100+",
    label: "Projects Completed",
    icon: Check,
  },
  {
    value: "95%",
    label: "Client Satisfaction",
    icon: Users,
  },
  {
    value: "10+",
    label: "Industry Awards",
    icon: Award,
  },
]

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-800/20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-800/20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
