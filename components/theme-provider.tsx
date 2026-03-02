"use client"
import { useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export { useTheme } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render children without theme provider on initial mount to avoid script tag error
    return <>{children}</>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
