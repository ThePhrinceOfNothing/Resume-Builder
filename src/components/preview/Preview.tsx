'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useResumeStore, Theme } from '@/store/useResumeStore'
import { MinimalTheme } from './MinimalTheme'
import { ProfessionalTheme } from './ProfessionalTheme'
import { CreativeTheme } from './CreativeTheme'
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
  const { data, theme, setTheme, accentColor, setAccentColor, fontFamily, setFontFamily, paperSize, setPaperSize } = useResumeStore()
  const componentRef = useRef<HTMLDivElement>(null)
  const [showPdfInstruction, setShowPdfInstruction] = useState(false)

  const doPrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `${data.personalInfo.fullName.replace(/\s+/g, '_')}_Resume`,
  })

  return (
    <div className="h-full w-full flex flex-col">
      
      {/* Top Toolbar */}
      <div className="h-16 flex items-center justify-between px-6 shrink-0 z-10 print:hidden mb-2 overflow-x-auto pb-1 gap-4">
        <div className="flex items-center gap-6 shrink-0 tour-step-customize">
          {/* Theme Selector */}
          <div className="flex items-center gap-2">
            <LayoutTemplate className="h-4 w-4 text-blue-500" />
            <Select value={theme} onValueChange={(v) => v && setTheme(v as Theme)}>
              <SelectTrigger className="w-[140px] h-9 bg-neo shadow-neo-convex-sm border-none text-slate-700 dark:text-slate-200 font-medium">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="minimal">Minimal</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="creative">Creative</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Font Selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Font:</span>
            <Select value={fontFamily} onValueChange={(v) => v && setFontFamily(v)}>
              <SelectTrigger className="w-[120px] h-9 bg-neo shadow-neo-convex-sm border-none text-slate-700 dark:text-slate-200 font-medium">
                <SelectValue placeholder="Font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="font-sans">Sans-serif</SelectItem>
                <SelectItem value="font-serif">Serif</SelectItem>
                <SelectItem value="font-mono">Monospace</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Paper Size Selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Size:</span>
            <Select value={paperSize} onValueChange={(v) => v && setPaperSize(v as any)}>
              <SelectTrigger className="w-[110px] h-9 bg-neo shadow-neo-convex-sm border-none text-slate-700 dark:text-slate-200 font-medium">
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a4">A4</SelectItem>
                <SelectItem value="letter">US Letter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Color Picker */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Color:</span>
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
        
        <Button onClick={() => setShowPdfInstruction(true)} size="sm" className="gap-2 text-blue-600 px-6 h-9 shrink-0 tour-step-download">
          <Download className="h-4 w-4" /> Download PDF
        </Button>
      </div>

      {/* Preview Area (Scrollable) */}
      <div className="flex-1 overflow-auto p-4 lg:p-8 flex justify-start lg:justify-center items-start print:p-0 print:overflow-visible custom-scrollbar tour-step-preview">
        {/* Paper Wrapper */}
        <div 
          className="bg-white print:shadow-none print:scale-100 origin-top shrink-0 relative"
          style={{
            width: paperSize === 'a4' ? '210mm' : '8.5in',
            minHeight: paperSize === 'a4' ? '297mm' : '11in',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1), 0 0 10px rgba(0,0,0,0.05)',
            transform: 'scale(0.85)',
            transformOrigin: 'top center',
            transition: 'transform 0.2s ease-in-out',
            '--theme-color': accentColor,
          } as React.CSSProperties}
        >
          <style>{`
            @media print {
              @page {
                size: ${paperSize === 'a4' ? 'A4' : 'letter'};
                margin: 0;
              }
            }
          `}</style>
          <div ref={componentRef} className={`w-full h-full bg-white print:m-0 ${fontFamily}`}>
            {theme === 'minimal' && <MinimalTheme data={data} />}
            {theme === 'professional' && <ProfessionalTheme data={data} />}
            {theme === 'creative' && <CreativeTheme data={data} />}
          </div>
        </div>
      </div>

      {/* PDF Instruction Modal */}
      <AnimatePresence>
        {showPdfInstruction && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm print:hidden">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-neo shadow-neo-convex rounded-3xl p-8 max-w-md w-full relative border border-white/20"
            >
              <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4">Downloading your PDF</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                To generate a <strong>High-Quality, ATS-Friendly</strong> soft copy of your resume, we use your browser's native engine.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6 text-sm">
                <p className="text-blue-700 dark:text-blue-300 font-medium">
                  When the print window opens, simply change the <strong>Destination / Printer</strong> to <span className="font-bold">"Save as PDF"</span>.
                </p>
              </div>
              <div className="flex gap-4 justify-end">
                <Button variant="outline" onClick={() => setShowPdfInstruction(false)}>Cancel</Button>
                <Button onClick={() => { setShowPdfInstruction(false); setTimeout(() => doPrint(), 300); }} className="bg-blue-600 text-white hover:bg-blue-700 border-none shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  Continue
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
