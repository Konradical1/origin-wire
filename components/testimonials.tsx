"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Elevate Fitness",
    quote:
      "OriginWire transformed our online presence. Our booking system is now seamless, and our website perfectly captures our brand essence. Highly recommend!",
    image: "/placeholder.svg?height=100&width=100",
    logo: "/placeholder.svg?height=50&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "TechNova Solutions",
    quote:
      "Working with Konrad and the OriginWire team was a game-changer for our startup. They delivered a website that exceeded our expectations and helped establish our brand identity.",
    image: "/placeholder.svg?height=100&width=100",
    logo: "/placeholder.svg?height=50&width=100",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    company: "Coastal Cuisine Restaurant",
    quote:
      "Our restaurant's online bookings increased by 45% after OriginWire redesigned our website and implemented their booking system. The ROI has been incredible.",
    image: "/placeholder.svg?height=100&width=100",
    logo: "/placeholder.svg?height=50&width=100",
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Artisan Crafts",
    quote:
      "The e-commerce solution OriginWire built for us has streamlined our operations and significantly boosted our online sales. Their ongoing support is exceptional.",
    image: "/placeholder.svg?height=100&width=100",
    logo: "/placeholder.svg?height=50&width=100",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const visibleTestimonials = () => {
    if (width >= 1024) return 3 // Large screens
    if (width >= 768) return 2 // Medium screens
    return 1 // Small screens
  }

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - visibleTestimonials() ? 0 : prev + 1))
    setAutoplay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - visibleTestimonials() : prev - 1))
    setAutoplay(false)
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / visibleTestimonials())}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`px-4 ${
                    visibleTestimonials() === 3 ? "w-1/3" : visibleTestimonials() === 2 ? "w-1/2" : "w-full"
                  } flex-shrink-0`}
                >
                  <Card className="h-full border-none bg-gradient-to-br from-background to-muted/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="mb-6">
                        <Quote className="h-8 w-8 text-purple-500/30" />
                      </div>
                      <p className="text-muted-foreground">{testimonial.quote}</p>
                      <div className="mt-6 h-8">
                        <img
                          src={testimonial.logo || "/placeholder.svg"}
                          alt={`${testimonial.company} logo`}
                          className="h-full object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background rounded-full p-2 shadow-lg hover:bg-muted transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background rounded-full p-2 shadow-lg hover:bg-muted transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
