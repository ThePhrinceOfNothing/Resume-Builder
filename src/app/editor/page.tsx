import { Editor } from '@/components/editor/Editor'
import { Preview } from '@/components/preview/Preview'
import { TourGuide } from '@/components/TourGuide'

export default function EditorPage() {
  return (
    <main className="flex h-screen w-full bg-neo overflow-hidden selection:bg-blue-200">
      <div className="w-1/2 h-full border-r border-white/20 shadow-[10px_0_15px_-3px_rgba(163,177,198,0.2)] z-10 tour-step-data">
        <Editor />
      </div>
      
      <div className="w-1/2 h-full bg-neo tour-step-preview">
        <Preview />
      </div>

      <TourGuide />
    </main>
  )
}
