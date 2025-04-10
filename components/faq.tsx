"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the typical timeline for a website project?",
    answer:
      "Our website projects typically take 4-8 weeks from start to finish, depending on the complexity and scope. Simple landing pages may be completed in as little as 2 weeks, while more complex e-commerce or custom functionality sites can take 8-12 weeks.",
  },
  {
    question: "How is pricing structured for your services?",
    answer:
      "We offer both project-based and retainer pricing models. Website projects typically start at $5,000, with the final cost depending on complexity, features, and design requirements. We provide detailed quotes after an initial consultation to understand your specific needs.",
  },
  {
    question: "Who owns the website after completion?",
    answer:
      "You do! Once the project is completed and final payment is received, you own all rights to your website. We provide all necessary files and access credentials, ensuring you have full ownership and control of your digital assets.",
  },
  {
    question: "Is website maintenance included in your services?",
    answer:
      "Basic maintenance is included for the first 30 days after launch. For ongoing support, we offer monthly maintenance packages that include updates, security monitoring, backups, and technical support. These packages ensure your site remains secure, up-to-date, and performing optimally.",
  },
  {
    question: "Do you offer hosting services?",
    answer:
      "Yes, we provide reliable hosting solutions optimized for performance and security. Our hosting packages include regular backups, security monitoring, and technical support. We can also work with your existing hosting provider if preferred.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and pricing.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-muted">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-purple-500 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
