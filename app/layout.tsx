import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import GoogleAnalytics from "@/components/google-analytics"

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: "OriginWire - Web Development & Design",
  description: "Professional web development and design services specializing in modern, responsive websites and custom web applications. Transform your digital presence with our expert team.",
  keywords: "web development, web design, custom websites, responsive design, digital agency, web applications, UI/UX design",
  authors: [{ name: "OriginWire" }],
  creator: "OriginWire",
  publisher: "OriginWire",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://originwire.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      }
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://originwire.com',
    title: "OriginWire - Web Development & Design",
    description: "Professional web development and design services specializing in modern, responsive websites and custom web applications.",
    siteName: "OriginWire",
    images: [
      {
        url: "/images/MainWebImage.png",
        width: 1152,
        height: 768,
        alt: "OriginWire Web Design Illustration"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "OriginWire - Web Development & Design",
    description: "Professional web development and design services specializing in modern, responsive websites and custom web applications.",
    creator: "@originwire",
    images: [
      {
        url: "/images/MainWebImage.png",
        alt: "OriginWire Web Design Illustration"
      }
    ]
  },
  verification: {
    google: "your-google-site-verification", // Add your Google Search Console verification code
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        manrope.variable
      )}>
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'