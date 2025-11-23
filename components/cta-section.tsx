"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CTASection = () => {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Ready to make video your top channel?
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
          Let's turn your content into a revenue-generating machine that works 24/7.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" asChild className="text-lg px-8 py-6">
            <Link href="/book">Book a Call</Link>
          </Button>
        </motion.div>
        <p className="mt-4 text-sm text-muted-foreground">
          Serving Cincinnati & beyond
        </p>
      </motion.div>
    </section>
  )
}

export default CTASection
