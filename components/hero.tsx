"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

const Hero = () => {
  const [displayText1, setDisplayText1] = useState("")
  const [displayText2, setDisplayText2] = useState("")
  const fullText1 = "Wiring Your Business"
  const fullText2 = "for the Digital Future"
  const [isTyping1, setIsTyping1] = useState(true)
  const [isTyping2, setIsTyping2] = useState(false)
  const [currentPhase, setCurrentPhase] = useState(1)

  useEffect(() => {
    let currentIndex1 = 0
    let currentIndex2 = 0
    let timeout: NodeJS.Timeout

    const typeText1 = () => {
      if (currentIndex1 < fullText1.length) {
        setDisplayText1(fullText1.slice(0, currentIndex1 + 1))
        currentIndex1++
        timeout = setTimeout(typeText1, 100)
      } else {
        setIsTyping1(false)
        setCurrentPhase(2)
        // Start typing the second line
        timeout = setTimeout(() => {
          setIsTyping2(true)
          typeText2()
        }, 500)
      }
    }

    const typeText2 = () => {
      if (currentIndex2 < fullText2.length) {
        setDisplayText2(fullText2.slice(0, currentIndex2 + 1))
        currentIndex2++
        timeout = setTimeout(typeText2, 100)
      } else {
        setIsTyping2(false)
        setCurrentPhase(3)
        // Wait before starting to erase
        timeout = setTimeout(() => {
          eraseText2()
        }, 2000)
      }
    }

    const eraseText2 = () => {
      if (currentIndex2 > 0) {
        setDisplayText2(fullText2.slice(0, currentIndex2 - 1))
        currentIndex2--
        timeout = setTimeout(eraseText2, 50)
      } else {
        setCurrentPhase(4)
        // Start erasing the first line
        timeout = setTimeout(() => {
          eraseText1()
        }, 500)
      }
    }

    const eraseText1 = () => {
      if (currentIndex1 > 0) {
        setDisplayText1(fullText1.slice(0, currentIndex1 - 1))
        currentIndex1--
        timeout = setTimeout(eraseText1, 50)
      } else {
        // Reset everything and start over
        setCurrentPhase(1)
        timeout = setTimeout(() => {
          setIsTyping1(true)
          typeText1()
        }, 500)
      }
    }

    // Start the animation
    typeText1()

    return () => clearTimeout(timeout)
  }, [])

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center">
        <div className="space-y-4">
          <motion.h1 
            className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block min-h-[1.2em]">
              {displayText1}
              <span className={`inline-block w-[2px] h-[1em] bg-primary ml-1 ${isTyping1 ? 'animate-blink' : ''}`} />
            </span>
            <span className="block text-primary min-h-[1.2em]">
              {displayText2}
              <span className={`inline-block w-[2px] h-[1em] bg-primary ml-1 ${isTyping2 ? 'animate-blink' : ''}`} />
            </span>
          </motion.h1>
          <motion.p 
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At OriginWire, we create stunning websites and digital experiences that help businesses grow and succeed in the digital age.
          </motion.p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" asChild>
              <Link href="/book">Book a Call</Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="outline" onClick={scrollToPortfolio}>
              View Our Work
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
    </div>
  )
}

export default Hero
