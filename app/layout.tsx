import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ICDMB 2026 | International Conference on Advanced Design, Materials, and Biomedical Engineering",
  description:
    "International Conference on Advanced Design, Materials & Biomedical Engineering - October 08-09, 2026 at MANIT Bhopal, India. First Announcement and Call for Papers.",
  generator: "v0.app",
  icons: {
    icon: "/images/icdmb-logo.png",
    apple: "/images/icdmb-logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
