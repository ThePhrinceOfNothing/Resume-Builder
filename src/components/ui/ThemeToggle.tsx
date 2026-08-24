'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  const toggleTheme = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const isDark = resolvedTheme === 'dark'
    const newTheme = isDark ? 'light' : 'dark'
    
    if (!document.startViewTransition) {
      setTheme(newTheme)
      return
    }

    const x = e.clientX
    const y = e.clientY
    
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )

    const transition = document.startViewTransition(() => {
      setTheme(newTheme)
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ]
      
      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: isDark
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)'
        }
      )
    })
  }

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      className="p-2.5 bg-neo shadow-neo-convex hover:shadow-neo-convex-sm active:shadow-neo-active rounded-full text-slate-500 hover:text-blue-500 transition-all flex items-center justify-center z-50"
      aria-label="Toggle Dark Mode"
      title="Toggle Theme"
    >
      {resolvedTheme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
