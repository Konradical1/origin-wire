"use client"

import { motion } from "framer-motion"
import BookingForm from "@/components/booking-form"

export default function BookPage() {
  return (
    <main className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
          Book a Call
        </h1>
        <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400">
          Schedule a free consultation with our team to discuss your project and how we can help your business succeed.
        </p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">What to Expect</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-primary text-sm font-medium">1</span>
              </div>
              <div>
                <h3 className="font-medium">Discovery Call</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We'll discuss your business goals, challenges, and what you're looking to achieve.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-primary text-sm font-medium">2</span>
              </div>
              <div>
                <h3 className="font-medium">Solution Overview</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We'll outline how our services can address your specific needs and help you achieve your goals.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-primary text-sm font-medium">3</span>
              </div>
              <div>
                <h3 className="font-medium">Next Steps</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We'll discuss the next steps in the process and how we can move forward together.
                </p>
              </div>
            </li>
          </ul>

          <div className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">How long is the consultation call?</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our initial consultation calls typically last 30-45 minutes.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Do I need to prepare anything?</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  It's helpful to have a brief overview of your project goals and any specific questions you'd like to address.
                </p>
              </div>
              <div>
                <h3 className="font-medium">What happens after the call?</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We'll follow up with a summary of our discussion and a proposal tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card p-6 rounded-xl shadow-sm"
        >
          <BookingForm />
        </motion.div>
      </div>
    </main>
  )
} 