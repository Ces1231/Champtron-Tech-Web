import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Champtron Systems LLC - IT Services & Solutions",
  description:
    "Champtron Systems LLC provides advanced IT solutions including automation, networking, infrastructure as code, and AI solutions in Sanford, FL.",
  keywords: [
    "IT services",
    "automation",
    "networking",
    "infrastructure as code",
    "AI solutions",
    "zero trust",
    "Sanford FL",
    "IT company",
  ],
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
