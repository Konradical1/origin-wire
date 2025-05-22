"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">OriginWire</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Creating exceptional digital experiences that drive business growth.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="https://www.instagram.com/originwiredevelopment/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-1 space-y-1">
              <li>
                <Link href="/services#web-design" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services#digital-marketing" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#graphic-design" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="/services#content-creation" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/services#analytics" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/services#custom-solutions" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} OriginWire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
