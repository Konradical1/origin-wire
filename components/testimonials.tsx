"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "OriginWire transformed our online presence completely. Their attention to detail and innovative solutions helped us achieve our digital goals.",
    image: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    content: "Working with OriginWire was a game-changer for our business. Their team delivered a beautiful, functional website that exceeded our expectations.",
    image: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, FreshFoods",
    content: "The e-commerce solution provided by OriginWire helped us increase our online sales by 200%. Their expertise and support were invaluable.",
    image: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Owner, FitLife Gym",
    content: "Our mobile app developed by OriginWire has received amazing feedback from our clients. It's intuitive, fast, and exactly what we needed.",
    image: "/placeholder-user.jpg",
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="container py-24" id="testimonials">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          What Our Clients Say
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Don't just take our word for it - hear from some of our satisfied clients
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials
