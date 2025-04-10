import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Paintbrush, Rocket, Search, ShoppingCart, Smartphone } from "lucide-react"
import Link from "next/link"

const servicesData = [
  {
    title: "Web Development",
    description: "Custom websites built with modern technologies and best practices",
    icon: Code2,
    features: [
      "Custom website development",
      "Progressive Web Apps (PWA)",
      "Web application development",
      "API integration",
      "Content Management Systems",
      "Website maintenance and support",
    ],
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that engage visitors",
    icon: Paintbrush,
    features: [
      "User Interface Design",
      "User Experience Design",
      "Wireframing and Prototyping",
      "Design Systems",
      "Mobile App Design",
      "Responsive Design",
    ],
  },
  {
    title: "E-commerce Solutions",
    description: "Powerful online stores that drive sales and growth",
    icon: ShoppingCart,
    features: [
      "Custom e-commerce development",
      "Shopping cart integration",
      "Payment gateway integration",
      "Inventory management",
      "Order processing systems",
      "Analytics and reporting",
    ],
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    icon: Smartphone,
    features: [
      "iOS app development",
      "Android app development",
      "Cross-platform development",
      "Mobile app testing",
      "App store optimization",
      "App maintenance and updates",
    ],
  },
  {
    title: "SEO Optimization",
    description: "Improve your visibility and reach in search engines",
    icon: Search,
    features: [
      "Technical SEO",
      "On-page optimization",
      "Content strategy",
      "Keyword research",
      "Performance optimization",
      "SEO reporting and analytics",
    ],
  },
  {
    title: "Performance Optimization",
    description: "Fast-loading websites that provide the best user experience",
    icon: Rocket,
    features: [
      "Website speed optimization",
      "Core Web Vitals improvement",
      "Caching implementation",
      "Image optimization",
      "Code minification",
      "Server optimization",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="container py-24">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Our Services
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          We offer a comprehensive range of digital services to help your business succeed online
        </p>
      </div>

      <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <Card key={index} className="relative overflow-hidden" id={service.title.toLowerCase().replace(/\s+/g, "-")}>
            <CardHeader>
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2 text-sm text-gray-500 dark:text-gray-400">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <Button asChild className="mt-6 w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 