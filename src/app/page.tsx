import { Editor } from '@/components/editor/Editor'
import { Preview } from '@/components/preview/Preview'
import { FileText } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full overflow-hidden bg-zinc-100">
      
      {/* Top App Header */}
      <header className="h-14 bg-slate-900 text-slate-50 flex items-center px-6 shrink-0 z-20 shadow-md print:hidden">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <FileText className="h-5 w-5 text-blue-400" />
          <span>RésuméFlow</span>
        </div>
      </header>

      {/* Main Content Split */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Pane - Editor (Dark Mode) */}
        <div className="w-[500px] xl:w-[600px] border-r border-slate-800 bg-slate-950 text-slate-300 print:hidden overflow-hidden flex flex-col dark">
          <Editor />
        </div>

        {/* Right Pane - Preview */}
        <div className="flex-1 bg-zinc-200/50 print:bg-white print:w-full flex flex-col">
          <Preview />
        </div>
      </div>
    </main>
  )
}
