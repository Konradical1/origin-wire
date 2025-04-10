"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex">
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <span className="text-xl font-bold transition-all duration-300 group-hover:text-primary group-hover:scale-105">OriginWire</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                  pathname === item.href ? "text-primary" : "text-foreground/70"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
                  pathname === item.href ? "w-full" : "group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hover:scale-110 transition-transform duration-300">
              <ThemeToggle />
            </div>
            <Button 
              asChild
              className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              <Link href="/book">Book a Call</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <div className="hover:scale-110 transition-transform duration-300">
            <ThemeToggle />
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "max-h-screen opacity-100" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                pathname === item.href 
                  ? "bg-accent text-accent-foreground" 
                  : "text-foreground/70 hover:bg-accent hover:text-accent-foreground hover:translate-x-1"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="px-3 py-2">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
            >
              <Link href="/book">Book a Call</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
