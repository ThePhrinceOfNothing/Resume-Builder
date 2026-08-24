'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Briefcase, Code, PenTool, Award, Sparkles, Layout } from 'lucide-react'

export function BackgroundParticles() {
  const [mounted, setMounted] = useState(false)

  // Wait until mounted to render to avoid hydration mismatch with SSR
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Deterministic positions to beautifully cover the screen
  const icons = [
    { Icon: FileText, top: '15%', left: '10%', size: 40, duration: 12, delay: 0 },
    { Icon: Briefcase, top: '25%', left: '85%', size: 50, duration: 15, delay: 1 },
    { Icon: Code, top: '65%', left: '8%', size: 35, duration: 14, delay: 2 },
    { Icon: Award, top: '75%', left: '85%', size: 45, duration: 16, delay: 0.5 },
    { Icon: Sparkles, top: '40%', left: '15%', size: 30, duration: 13, delay: 1.5 },
    { Icon: Layout, top: '50%', left: '80%', size: 55, duration: 17, delay: 2.5 },
    { Icon: PenTool, top: '85%', left: '30%', size: 40, duration: 14, delay: 0.8 },
    { Icon: FileText, top: '10%', left: '70%', size: 35, duration: 12, delay: 1.2 },
    { Icon: Briefcase, top: '90%', left: '60%', size: 45, duration: 15, delay: 0.3 },
  ]

  const shapes = [
    { top: '20%', left: '5%', size: 100, duration: 20, delay: 0, type: 'convex' },
    { top: '60%', left: '90%', size: 150, duration: 25, delay: 2, type: 'concave' },
    { top: '80%', left: '10%', size: 80, duration: 18, delay: 1, type: 'convex' },
    { top: '15%', left: '60%', size: 120, duration: 22, delay: 3, type: 'concave' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Icons */}
      {icons.map((p, i) => {
        const Icon = p.Icon
        return (
          <motion.div
            key={`icon-${i}`}
            className="absolute text-slate-400 dark:text-slate-500 opacity-20 dark:opacity-10"
            style={{ top: p.top, left: p.left }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay
            }}
          >
            <Icon size={p.size} strokeWidth={1.5} />
          </motion.div>
        )
      })}
      
      {/* Floating Neumorphic Orbs */}
      {shapes.map((s, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute rounded-full bg-neo opacity-40 dark:opacity-20 ${s.type === 'convex' ? 'shadow-neo-convex' : 'shadow-neo-concave'}`}
          style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
          animate={{
            y: [0, -50, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay
          }}
        />
      ))}
    </div>
  )
}
