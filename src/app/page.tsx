import { Editor } from '@/components/editor/Editor'
import { Preview } from '@/components/preview/Preview'
import { FileText } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full overflow-hidden bg-neo text-slate-700">
      
      {/* Top App Header */}
      <header className="h-16 px-6 shrink-0 z-20 print:hidden flex items-center bg-neo shadow-neo-convex m-4 rounded-xl">
        <div className="flex items-center gap-2 font-bold text-lg tracking-wide text-slate-700">
          <div className="p-2 rounded-full shadow-neo-convex-sm bg-neo">
            <FileText className="h-5 w-5 text-blue-500" />
          </div>
          <span className="ml-2">RésuméFlow</span>
        </div>
      </header>

      {/* Main Content Split */}
      <div className="flex flex-1 overflow-hidden p-4 gap-6 pt-0">
        
        {/* Left Pane - Editor */}
        <div className="w-[500px] xl:w-[600px] print:hidden overflow-hidden flex flex-col rounded-2xl bg-neo shadow-neo-convex">
          <Editor />
        </div>

        {/* Right Pane - Preview */}
        <div className="flex-1 flex flex-col rounded-2xl bg-neo shadow-neo-convex overflow-hidden print:shadow-none print:bg-white">
          <Preview />
        </div>
      </div>
    </main>
  )
}
