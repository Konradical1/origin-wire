import Contact from "@/components/contact"

export default function ContactPage() {
  return (
    <div className="container py-24">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Ready to start your project? Get in touch with us today.
        </p>
      </div>
      <Contact />
    </div>
  )
} 