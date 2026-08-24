'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FileText, ArrowRight, Zap, Palette, Layout, ShieldCheck, File, FileCode } from 'lucide-react'
import { useResumeStore, PaperSize } from '@/store/useResumeStore'

export default function LandingPage() {
  const router = useRouter()
  const { setPaperSize } = useResumeStore()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSelectPaper = (size: PaperSize) => {
    setPaperSize(size)
    router.push('/editor')
  }

  return (
    <div className="min-h-screen w-full bg-neo text-slate-700 font-sans selection:bg-blue-200">
      
      {/* Paper Size Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-neo shadow-neo-convex rounded-3xl p-8 max-w-lg w-full flex flex-col relative border border-white/40">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
            
            <h2 className="text-2xl font-bold text-slate-700 mb-2">Choose Paper Size</h2>
            <p className="text-slate-500 mb-8">Select the default format for your resume. You can change this later.</p>
            
            <div className="grid grid-cols-2 gap-6">
              <button 
                onClick={() => handleSelectPaper('a4')}
                className="flex flex-col items-center gap-4 p-6 bg-neo shadow-neo-convex hover:shadow-neo-convex-sm active:shadow-neo-active rounded-2xl transition-all border border-white/20 group"
              >
                <div className="w-16 h-20 bg-neo shadow-neo-concave rounded-md border border-white/50 flex items-center justify-center group-hover:text-blue-500 transition-colors">
                  <File className="h-8 w-8 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">A4</h3>
                  <p className="text-xs text-slate-500 mt-1">210 × 297 mm</p>
                </div>
              </button>

              <button 
                onClick={() => handleSelectPaper('letter')}
                className="flex flex-col items-center gap-4 p-6 bg-neo shadow-neo-convex hover:shadow-neo-convex-sm active:shadow-neo-active rounded-2xl transition-all border border-white/20 group"
              >
                <div className="w-[72px] h-[92px] bg-neo shadow-neo-concave rounded-md border border-white/50 flex items-center justify-center group-hover:text-blue-500 transition-colors">
                  <FileCode className="h-8 w-8 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">US Letter</h3>
                  <p className="text-xs text-slate-500 mt-1">8.5 × 11 in</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="w-full px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-full shadow-neo-convex bg-neo">
            <FileText className="h-6 w-6 text-blue-500" />
          </div>
          <span className="text-xl font-bold tracking-wide">RésuméFlow</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-semibold text-slate-500">
          <Link href="#features" className="hover:text-blue-500 transition-colors">Features</Link>
          <span className="hover:text-blue-500 transition-colors cursor-pointer">How it Works</span>
          <span className="hover:text-blue-500 transition-colors cursor-pointer">FAQ</span>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2.5 bg-neo shadow-neo-convex hover:shadow-neo-convex-sm active:shadow-neo-active rounded-full font-bold text-blue-600 transition-all text-sm"
        >
          Go to Editor
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-16 pb-24 md:pt-24 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          <div className="px-4 py-1.5 mb-6 rounded-full shadow-neo-convex-sm bg-neo text-sm font-bold text-blue-500 tracking-wide uppercase">
            100% Free & Open Source
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-slate-700">
            Build your <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">dream resume</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium mb-10 max-w-xl leading-relaxed">
            Stand out from the crowd with a beautifully crafted, ATS-friendly resume. Designed with stunning Neumorphism. No sign-up required.
          </p>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative flex items-center gap-3 px-8 py-4 bg-neo shadow-neo-convex hover:shadow-neo-convex-sm active:shadow-neo-active rounded-full font-bold text-lg text-blue-600 transition-all"
            >
              <span>Start Building Now</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right: Visual Mockup */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-12 lg:mt-0 pointer-events-none select-none">
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full flex items-center justify-center">
            {/* Background decorative circles */}
            <div className="absolute w-[80%] h-[80%] rounded-full shadow-neo-concave bg-neo"></div>
            <div className="absolute w-[50%] h-[50%] rounded-full shadow-neo-convex bg-neo"></div>
            
            {/* Floating Resume Element */}
            <div className="absolute w-[55%] h-[75%] bg-neo shadow-neo-convex rounded-2xl p-6 flex flex-col gap-4 overflow-hidden border-2 border-white/20 transform rotate-6 hover:rotate-0 transition-transform duration-700 ease-out z-20">
              <div className="flex gap-4 items-center border-b border-slate-300/30 pb-4">
                <div className="w-12 h-12 rounded-full shadow-neo-concave bg-neo shrink-0"></div>
                <div className="space-y-2 w-full">
                  <div className="h-4 w-3/4 bg-blue-400/20 rounded-full"></div>
                  <div className="h-3 w-1/2 bg-slate-400/20 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3 mt-2">
                <div className="h-3 w-full bg-slate-400/10 rounded-full"></div>
                <div className="h-3 w-full bg-slate-400/10 rounded-full"></div>
                <div className="h-3 w-4/5 bg-slate-400/10 rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="h-16 rounded-xl shadow-neo-convex-sm bg-neo"></div>
                <div className="h-16 rounded-xl shadow-neo-convex-sm bg-neo"></div>
              </div>
            </div>
            
            {/* Floating Pill */}
            <div className="absolute bottom-[10%] left-[10%] px-6 py-3 bg-neo shadow-neo-convex rounded-full z-30 transform -rotate-6 flex items-center gap-3 border border-white/30">
              <div className="w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
              <span className="font-bold text-slate-600 text-sm">ATS Optimized</span>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="w-full bg-neo py-24 border-t border-white/40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-700">Everything you need</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">Create a professional portfolio in minutes with powerful tools disguised in a simple, beautiful interface.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="h-6 w-6 text-yellow-500" />}
              title="Lightning Fast"
              description="Real-time live preview updates instantly as you type. No loading screens, no waiting."
            />
            <FeatureCard 
              icon={<Palette className="h-6 w-6 text-purple-500" />}
              title="Custom Themes"
              description="Choose from multiple professional templates and customize colors to match your personal brand."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-6 w-6 text-green-500" />}
              title="ATS Friendly"
              description="Our PDF exports are structured perfectly for Applicant Tracking Systems to read your data accurately."
            />
            <FeatureCard 
              icon={<Layout className="h-6 w-6 text-blue-500" />}
              title="Neumorphic UI"
              description="Enjoy a beautiful, tactile editing experience with soft shadows and protruding elements."
            />
            <FeatureCard 
              icon={<FileText className="h-6 w-6 text-red-500" />}
              title="Pixel Perfect PDF"
              description="What you see is exactly what you get. High-resolution PDF exports perfect for printing or emailing."
            />
            <FeatureCard 
              icon={<div className="font-bold text-indigo-500 text-xl leading-none">100%</div>}
              title="Free Forever"
              description="No paywalls, no watermarks, no sign-ups. Your data stays locally on your device."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-slate-500 font-medium border-t border-slate-300/30 bg-neo">
        <p>© {new Date().getFullYear()} RésuméFlow. Built with Neumorphism.</p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-neo shadow-neo-convex rounded-3xl p-8 flex flex-col items-start gap-4 border border-white/20 transition-transform hover:-translate-y-1 hover:shadow-neo-convex-sm duration-300">
      <div className="p-4 rounded-full shadow-neo-concave bg-neo mb-2">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-700">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </div>
  )
}
