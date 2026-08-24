'use client'

import { useRef } from 'react'
import { useResumeStore, Theme } from '@/store/useResumeStore'
import { MinimalTheme } from './MinimalTheme'
import { ProfessionalTheme } from './ProfessionalTheme'
import { Button } from '@/components/ui/button'
import { Download, LayoutTemplate } from 'lucide-react'
import { useReactToPrint } from 'react-to-print'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Preview() {
  const { data, theme, setTheme, accentColor, setAccentColor, fontFamily, setFontFamily } = useResumeStore()
  const componentRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `${data.personalInfo.fullName.replace(/\s+/g, '_')}_Resume`,
  })

  return (
    <div className="h-full w-full flex flex-col">
      
      {/* Top Toolbar */}
      <div className="h-16 flex items-center justify-between px-6 shrink-0 z-10 print:hidden mb-2 overflow-x-auto no-scrollbar gap-4">
        <div className="flex items-center gap-6 shrink-0">
          {/* Theme Selector */}
          <div className="flex items-center gap-2">
            <LayoutTemplate className="h-4 w-4 text-blue-500" />
            <Select value={theme} onValueChange={(v) => setTheme(v as Theme)}>
              <SelectTrigger className="w-[140px] h-9 bg-neo shadow-neo-convex-sm border-none text-slate-700 font-medium">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="minimal">Minimal</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Font Selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-500">Font:</span>
            <Select value={fontFamily} onValueChange={setFontFamily}>
              <SelectTrigger className="w-[120px] h-9 bg-neo shadow-neo-convex-sm border-none text-slate-700 font-medium">
                <SelectValue placeholder="Font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="font-sans">Sans-serif</SelectItem>
                <SelectItem value="font-serif">Serif</SelectItem>
                <SelectItem value="font-mono">Monospace</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Color Picker */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-500">Color:</span>
            <div className="h-9 w-9 rounded-full bg-neo shadow-neo-convex-sm overflow-hidden flex items-center justify-center p-1">
              <input 
                type="color" 
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-full h-full border-0 p-0 cursor-pointer bg-transparent rounded-full" 
                style={{ appearance: 'none', WebkitAppearance: 'none' }}
              />
            </div>
          </div>
        </div>
        
        <Button onClick={handlePrint} size="sm" className="gap-2 text-blue-600 px-6 h-9 shrink-0">
          <Download className="h-4 w-4" /> Download PDF
        </Button>
      </div>

      {/* Preview Area (Scrollable) */}
      <div className="flex-1 overflow-auto p-8 flex justify-center items-start print:p-0 print:overflow-visible custom-scrollbar">
        {/* A4 Paper Wrapper */}
        <div 
          className="bg-white print:shadow-none print:scale-100 origin-top shrink-0 relative"
          style={{
            width: '210mm',
            minHeight: '297mm',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1), 0 0 10px rgba(0,0,0,0.05)',
            transform: 'scale(0.85)',
            transformOrigin: 'top center',
            transition: 'transform 0.2s ease-in-out',
            '--theme-color': accentColor,
          } as React.CSSProperties}
        >
          <div ref={componentRef} className={`w-full h-full bg-white print:m-0 ${fontFamily}`}>
            {theme === 'minimal' && <MinimalTheme data={data} />}
            {theme === 'professional' && <ProfessionalTheme data={data} />}
          </div>
        </div>
      </div>
    </div>
  )
}
