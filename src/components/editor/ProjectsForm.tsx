'use client'

import { useResumeStore, Project } from '@/store/useResumeStore'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Plus, Trash2 } from 'lucide-react'

export function ProjectsForm() {
  const { data: { projects }, addProject, updateProject, removeProject } = useResumeStore()

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
    <div className="space-y-6">
      {projects.map((proj, index) => (
        <div key={proj.id} className="relative p-4 border rounded-lg bg-card space-y-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 text-destructive"
            onClick={() => removeProject(proj.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          
          <h4 className="font-medium text-sm">Project {index + 1}</h4>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Project Title</Label>
                <Input 
                  value={proj.title} 
                  onChange={(e) => updateProject(proj.id, { title: e.target.value })} 
                />
              </div>
              <div className="space-y-2">
                <Label>Link / URL</Label>
                <Input 
                  value={proj.link} 
                  onChange={(e) => updateProject(proj.id, { link: e.target.value })} 
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea 
                value={proj.description} 
                onChange={(e) => updateProject(proj.id, { description: e.target.value })} 
                className="h-24"
              />
            </div>
          </div>
        </div>
      ))}
      <Button type="button" variant="outline" className="w-full" onClick={handleAdd}>
        <Plus className="mr-2 h-4 w-4" /> Add Project
      </Button>
    </div>
  )
}
