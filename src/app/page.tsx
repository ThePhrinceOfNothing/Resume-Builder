import Link from 'next/link'
import { FileText, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen w-full bg-neo flex flex-col items-center justify-center p-6 text-slate-700">
      
      {/* Central Card */}
      <div className="w-full max-w-2xl bg-neo shadow-neo-convex rounded-3xl p-12 md:p-16 flex flex-col items-center text-center">
        
        {/* Logo/Icon */}
        <div className="p-5 rounded-full shadow-neo-convex bg-neo mb-8">
          <FileText className="h-12 w-12 text-blue-500" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-700">
          RésuméFlow
        </h1>
        
        <p className="text-lg text-slate-500 font-medium mb-12 max-w-lg">
          Craft professional, ATS-friendly resumes in minutes using our beautiful Neumorphic editor. Free, simple, and absolutely magic.
        </p>
        
        {/* Call to Action Button */}
        <Link href="/editor">
          <button className="group relative flex items-center gap-3 px-8 py-4 bg-neo shadow-neo-convex hover:shadow-neo-convex-sm active:shadow-neo-active rounded-full font-bold text-lg text-blue-600 transition-all">
            <span>Create Your Résumé</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
        
      </div>
      
    </main>
  )
}
