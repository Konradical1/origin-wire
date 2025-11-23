"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Target,
  Video,
  Send,
  BarChart3
} from "lucide-react"

const steps = [
  {
    title: "Plan",
    description: "Audience research, offer strategy, channel mix, and content calendar development.",
    icon: Target,
    details: [
      "Target audience analysis",
      "Content pillar strategy", 
      "Platform optimization",
      "Publishing schedule"
    ]
  },
  {
    title: "Produce",
    description: "Professional video production, editing, motion graphics, and thumbnail design.",
    icon: Video,
    details: [
      "Script writing & storyboards",
      "Professional filming",
      "Color grading & sound",
      "Multiple format delivery"
    ]
  },
  {
    title: "Publish",
    description: "Platform-native posting, optimal timing, hashtags, and UTM tracking.",
    icon: Send,
    details: [
      "Platform-specific formatting",
      "Optimal posting times",
      "Strategic hashtag use",
      "Link tracking & UTMs"
    ]
  },
  {
    title: "Perfect",
    description: "Continuous refinement and optimization based on performance and feedback.",
    icon: BarChart3,
    details: [
      "Content optimization",
      "Strategy refinement", 
      "Client feedback integration",
      "Ongoing improvements"
    ]
  }
]

const HowItDrivesSales = () => {
  return (
    <section className="container py-24 bg-muted/20">
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          How It Drives Sales
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 italic">
          Our proven 4-step process turns content creation into a revenue-generating system
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Card className="h-full relative overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="mb-4 mx-auto inline-block rounded-full bg-primary/10 p-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="mb-2">
                  <span className="inline-block w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <CardDescription className="text-sm">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HowItDrivesSales
