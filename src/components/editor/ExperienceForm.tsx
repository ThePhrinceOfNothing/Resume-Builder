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
    <div className="space-y-8">
      {experience.map((exp, index) => (
        <div key={exp.id} className="relative p-6 bg-neo shadow-neo-convex rounded-2xl space-y-5 border-none">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <Button 
              variant="default" 
              size="icon" 
              className="h-8 w-8 text-slate-500 dark:text-slate-400 hover:text-blue-500 rounded-full"
              onClick={() => moveExperience(index, 'up')}
              disabled={index === 0}
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
            <Button 
              variant="default" 
              size="icon" 
              className="h-8 w-8 text-slate-500 dark:text-slate-400 hover:text-blue-500 rounded-full"
              onClick={() => moveExperience(index, 'down')}
              disabled={index === experience.length - 1}
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button 
              variant="default" 
              size="icon" 
              className="h-8 w-8 text-red-400 hover:text-red-500 rounded-full"
              onClick={() => removeExperience(exp.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          
          <h4 className="font-bold text-slate-600 dark:text-slate-300 text-lg">Experience {index + 1}</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-slate-500 dark:text-slate-400 ml-1">Company</Label>
              <Input 
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                className="rounded-xl border-none"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-500 dark:text-slate-400 ml-1">Role</Label>
              <Input 
                value={exp.role}
                onChange={(e) => updateExperience(exp.id, { role: e.target.value })}
                className="rounded-xl border-none"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-500 dark:text-slate-400 ml-1">Start Date</Label>
              <Input 
                value={exp.startDate}
                onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                placeholder="MM/YYYY"
                className="rounded-xl border-none"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-500 dark:text-slate-400 ml-1">End Date</Label>
              <Input 
                value={exp.endDate}
                onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                placeholder="MM/YYYY or Present"
                className="rounded-xl border-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-slate-500 dark:text-slate-400 ml-1">Description (Markdown supported)</Label>
            <Textarea 
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
              rows={4}
              className="rounded-xl border-none"
            />
          </div>
        </div>
      ))}
      <Button onClick={handleAdd} className="w-full gap-2 rounded-xl h-12 text-blue-600 font-semibold" variant="default">
        <Plus className="h-5 w-5" /> Add Experience
      </Button>
    </div>
  )
}
