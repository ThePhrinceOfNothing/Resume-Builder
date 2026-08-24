'use client'

import { useState } from 'react'
import { Joyride, Step } from 'react-joyride'
import { HelpCircle } from 'lucide-react'

export function TourGuide() {
  const [run, setRun] = useState(false)

  const steps: Step[] = [
    {
      target: 'body',
      content: 'Welcome to ResumeFlow! Let\'s take a quick tour of how to build your perfect resume.',
      placement: 'center',
    },
    {
      target: '#theme-toggle',
      content: 'Toggle Dark Mode for a sleek Neumorphic editing experience.',
      placement: 'bottom',
    },
    {
      target: '.tour-step-data',
      content: 'Fill out your personal details, experience, and education here. You can use markdown like **bold** or *italics*!',
      placement: 'right',
    },
    {
      target: '.tour-step-preview',
      content: 'Watch your resume update in real-time as you type.',
      placement: 'left',
    },
    {
      target: '.tour-step-customize',
      content: 'Customize your template, font, paper size, and color to match your personal brand.',
      placement: 'bottom',
    },
    {
      target: '.tour-step-download',
      content: 'When you\'re ready, download a pixel-perfect, ATS-friendly PDF!',
      placement: 'bottom',
    }
  ]

  return (
    <>
      <button 
        onClick={() => setRun(true)}
        className="fixed bottom-6 right-6 p-4 bg-neo shadow-neo-convex hover:shadow-neo-convex-sm active:shadow-neo-active rounded-full text-blue-500 hover:text-blue-600 transition-all z-50 flex items-center justify-center border border-white/20"
        title="Start Tour"
      >
        <HelpCircle className="h-6 w-6" />
      </button>

      <Joyride
        steps={steps}
        run={run}
        continuous
        showSkipButton
        hideCloseButton
        disableOverlayClose
        spotlightPadding={4}
        callback={(data: any) => {
          if (data.status === 'finished' || data.status === 'skipped') {
            setRun(false)
          }
        }}
      />
    </>
  )
}
