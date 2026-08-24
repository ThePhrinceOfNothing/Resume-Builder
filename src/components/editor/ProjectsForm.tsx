'use client'

import { useResumeStore, Project } from '@/store/useResumeStore'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react'

export function ProjectsForm() {
  const { data: { projects }, addProject, updateProject, removeProject, moveProject } = useResumeStore()

  const handleAdd = () => {
    const newProj: Project = {
      id: crypto.randomUUID(),
      title: 'New Project',
      description: '',
      link: ''
    }
    addProject(newProj)
  }

  return (
    <div className="space-y-8">
      {projects.map((proj, index) => (
        <div key={proj.id} className="relative p-6 bg-neo shadow-neo-convex rounded-2xl space-y-5 border-none">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <Button 
              variant="default" 
              size="icon" 
              className="h-8 w-8 text-slate-500 dark:text-slate-400 hover:text-blue-500 rounded-full"
              onClick={() => moveProject(index, 'up')}
              disabled={index === 0}
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
            <Button 
              variant="default" 
              size="icon" 
              className="h-8 w-8 text-slate-500 dark:text-slate-400 hover:text-blue-500 rounded-full"
              onClick={() => moveProject(index, 'down')}
              disabled={index === projects.length - 1}
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button 
              variant="default" 
              size="icon" 
              className="h-8 w-8 text-red-400 hover:text-red-500 rounded-full"
              onClick={() => removeProject(proj.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          
          <h4 className="font-bold text-slate-600 dark:text-slate-300 text-lg">Project {index + 1}</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-slate-500 dark:text-slate-400 ml-1">Project Title</Label>
              <Input 
                value={proj.title}
                onChange={(e) => updateProject(proj.id, { title: e.target.value })}
                className="rounded-xl border-none"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-500 dark:text-slate-400 ml-1">Link / URL (Optional)</Label>
              <Input 
                value={proj.link}
                onChange={(e) => updateProject(proj.id, { link: e.target.value })}
                placeholder="https://..."
                className="rounded-xl border-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-slate-500 dark:text-slate-400 ml-1">Description</Label>
            <Textarea 
              value={proj.description}
              onChange={(e) => updateProject(proj.id, { description: e.target.value })}
              rows={4}
              className="rounded-xl border-none"
            />
          </div>
        </div>
      ))}
      <Button onClick={handleAdd} className="w-full gap-2 rounded-xl h-12 text-blue-600 font-semibold" variant="default">
        <Plus className="h-5 w-5" /> Add Project
      </Button>
    </div>
  )
}
