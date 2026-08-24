'use client'

import { useResumeStore, Education } from '@/store/useResumeStore'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react'

export function EducationForm() {
  const { data: { education }, addEducation, updateEducation, removeEducation, moveEducation } = useResumeStore()

  const handleAdd = () => {
    const newEdu: Education = {
      id: crypto.randomUUID(),
      school: 'New School',
      degree: 'Degree',
      startDate: 'MM/YYYY',
      endDate: 'MM/YYYY',
      description: ''
    }
    addEducation(newEdu)
  }

  return (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <div key={edu.id} className="relative p-6 bg-neo shadow-neo-convex rounded-2xl space-y-5 border-none">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <Button 
              variant="default" 
              size="icon" 
              className="h-8 w-8 text-slate-500 hover:text-blue-500 rounded-full"
              onClick={() => moveEducation(index, 'up')}
              disabled={index === 0}
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
            <Button 
              variant="default" 
              size="icon" 
              className="h-8 w-8 text-slate-500 hover:text-blue-500 rounded-full"
              onClick={() => moveEducation(index, 'down')}
              disabled={index === education.length - 1}
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button 
              variant="default" 
              size="icon" 
              className="h-8 w-8 text-red-400 hover:text-red-500 rounded-full"
              onClick={() => removeEducation(edu.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          
          <h4 className="font-bold text-slate-600 text-lg">Education {index + 1}</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-slate-500 ml-1">School</Label>
              <Input 
                value={edu.school}
                onChange={(e) => updateEducation(edu.id, { school: e.target.value })}
                className="rounded-xl border-none"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-500 ml-1">Degree / Major</Label>
              <Input 
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                className="rounded-xl border-none"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-500 ml-1">Start Date</Label>
              <Input 
                value={edu.startDate}
                onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })}
                placeholder="MM/YYYY"
                className="rounded-xl border-none"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-500 ml-1">End Date</Label>
              <Input 
                value={edu.endDate}
                onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })}
                placeholder="MM/YYYY or Present"
                className="rounded-xl border-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-slate-500 ml-1">Description</Label>
            <Textarea 
              value={edu.description}
              onChange={(e) => updateEducation(edu.id, { description: e.target.value })}
              rows={4}
              className="rounded-xl border-none"
            />
          </div>
        </div>
      ))}
      <Button onClick={handleAdd} className="w-full gap-2 rounded-xl h-12 text-blue-600 font-semibold" variant="default">
        <Plus className="h-5 w-5" /> Add Education
      </Button>
    </div>
  )
}
