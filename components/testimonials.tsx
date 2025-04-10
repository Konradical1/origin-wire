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
    name: "Jesse Mullins",
    role: "Founder, Mullins-Taylor Group",
    content: "OriginWire transformed our financial advisory practice with a professional website that perfectly represents our brand. Their attention to detail and understanding of our industry made all the difference.",
    image: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "Erin Murray",
    role: "Interior Designer, erinconnovermurray.com",
    content: "Working with OriginWire was a game-changer for my interior design business. They created a beautiful, user-friendly website that showcases my portfolio in the best possible way.",
    image: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "Adam Szabo",
    role: "Owner, Excelerate Athletic Training",
    content: "The website OriginWire built for our athletic training business has significantly improved our online presence. Their expertise in creating engaging content and easy navigation has helped us attract more clients.",
    image: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "Lauren Olson",
    role: "Photographer, Photography by Lauren Olson",
    content: "OriginWire created a stunning photography portfolio website that perfectly showcases my work. Their understanding of visual presentation and user experience has helped me connect with more clients.",
    image: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "Scott Horstmeyer",
    role: "Owner, Eagle Creek Custom Builders",
    content: "Our custom home building business needed a website that could showcase our projects effectively. OriginWire delivered exactly what we needed - a professional, easy-to-navigate site that highlights our work.",
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
