'use client'

import { useResumeStore, Experience } from '@/store/useResumeStore'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react'

export function ExperienceForm() {
  const { data: { experience }, addExperience, updateExperience, removeExperience, moveExperience } = useResumeStore()

  const handleAdd = () => {
    const newExp: Experience = {
      id: crypto.randomUUID(),
      company: 'New Company',
      role: 'Role',
      startDate: 'MM/YYYY',
      endDate: 'MM/YYYY',
      description: ''
    }
    addExperience(newExp)
  }

  return (
    <div className="space-y-6">
      {experience.map((exp, index) => (
        <div key={exp.id} className="relative p-4 border rounded-lg bg-card space-y-4">
          <div className="absolute top-2 right-2 flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-slate-500 hover:text-slate-700"
              onClick={() => moveExperience(index, 'up')}
              disabled={index === 0}
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-slate-500 hover:text-slate-700"
              onClick={() => moveExperience(index, 'down')}
              disabled={index === experience.length - 1}
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-red-500 hover:text-red-600"
              onClick={() => removeExperience(exp.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          
          <h4 className="font-bold text-slate-700">Experience {index + 1}</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Company</Label>
              <Input 
                value={exp.company} 
                onChange={(e) => updateExperience(exp.id, { company: e.target.value })} 
              />
            </div>
            <div className="space-y-2">
              <Label>Role / Title</Label>
              <Input 
                value={exp.role} 
                onChange={(e) => updateExperience(exp.id, { role: e.target.value })} 
              />
            </div>
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Input 
                value={exp.startDate} 
                onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })} 
              />
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <Input 
                value={exp.endDate} 
                onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })} 
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea 
              value={exp.description} 
              onChange={(e) => updateExperience(exp.id, { description: e.target.value })} 
              className="h-24"
            />
          </div>
        </div>
      ))}
      <Button type="button" variant="outline" className="w-full" onClick={handleAdd}>
        <Plus className="mr-2 h-4 w-4" /> Add Experience
      </Button>
    </div>
  )
}
