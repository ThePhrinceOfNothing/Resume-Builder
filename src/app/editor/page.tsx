import { Editor } from '@/components/editor/Editor'
import { Preview } from '@/components/preview/Preview'
import { TourGuide } from '@/components/TourGuide'

export default function EditorPage() {
  return (
    <main className="flex flex-col lg:flex-row h-screen w-full bg-neo overflow-auto lg:overflow-hidden selection:bg-blue-200">
      <div className="w-full lg:w-1/2 min-h-screen lg:min-h-0 lg:h-full border-b lg:border-b-0 lg:border-r border-white/20 shadow-[10px_0_15px_-3px_rgba(163,177,198,0.2)] z-10 tour-step-data relative">
        <Editor />
      </div>
      
      <div className="w-full lg:w-1/2 min-h-screen lg:min-h-0 lg:h-full bg-neo tour-step-preview">
        <Preview />
      </div>

      <TourGuide />
    </main>
  )
}
