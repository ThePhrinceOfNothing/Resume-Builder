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
  const { data, theme, setTheme } = useResumeStore()
  const componentRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${data.personalInfo.fullName.replace(/\s+/g, '_')}_Resume`,
  })

  return (
    <div className="h-full w-full flex flex-col">
      
      {/* Top Toolbar */}
      <div className="h-14 border-b border-zinc-200 bg-white/80 backdrop-blur-sm flex items-center justify-between px-6 shrink-0 z-10 print:hidden">
        <div className="flex items-center gap-4">
          <div className="flex items-center text-sm font-medium text-slate-500 gap-2">
            <LayoutTemplate className="h-4 w-4" />
            <span>Theme:</span>
          </div>
          <Select value={theme} onValueChange={(v) => setTheme(v as Theme)}>
            <SelectTrigger className="w-[180px] h-9 bg-white">
              <SelectValue placeholder="Select Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="minimal">Minimal</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button onClick={handlePrint} size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
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
          }}
        >
          <div ref={componentRef} className="w-full h-full bg-white print:m-0">
            {theme === 'minimal' && <MinimalTheme data={data} />}
            {theme === 'professional' && <ProfessionalTheme data={data} />}
          </div>
        </div>
      </div>
    </div>
  )
}
