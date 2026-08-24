'use client'

import { useState } from 'react'
import { Editor } from '@/components/editor/Editor'
import { Preview } from '@/components/preview/Preview'
import { TourGuide } from '@/components/TourGuide'
import { FileText, Edit2 } from 'lucide-react'

export default function EditorPage() {
  const [showPreviewOnMobile, setShowPreviewOnMobile] = useState(false)

  return (
    <main className="flex h-screen w-full bg-neo overflow-hidden selection:bg-blue-200 relative">
      {/* 
        On large screens (lg): Both are visible, each takes 50%.
        On small screens: Only one is visible based on state. 
      */}
      
      {/* Left side: Editor */}
      <div 
        className={`w-full lg:w-1/2 h-full border-r border-white/20 shadow-[10px_0_15px_-3px_rgba(163,177,198,0.2)] z-10 tour-step-data relative flex-col min-w-0
        ${showPreviewOnMobile ? 'hidden lg:flex' : 'flex'}`}
      >
        <Editor />
      </div>
      
      {/* Right side: Preview */}
      <div 
        className={`w-full lg:w-1/2 h-full bg-neo tour-step-preview flex-col min-w-0
        ${showPreviewOnMobile ? 'flex' : 'hidden lg:flex'}`}
      >
        <Preview />
      </div>

      <TourGuide />

      {/* Floating Action Button (Mobile Only) */}
      <button
        onClick={() => setShowPreviewOnMobile(!showPreviewOnMobile)}
        className="lg:hidden fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 text-white shadow-[0_10px_20px_-10px_rgba(37,99,235,0.8)] z-50 flex items-center justify-center hover:bg-blue-700 transition-colors"
        title={showPreviewOnMobile ? "Switch to Editor" : "Switch to Preview"}
      >
        {showPreviewOnMobile ? <Edit2 className="h-6 w-6" /> : <FileText className="h-6 w-6" />}
      </button>
    </main>
  )
}
