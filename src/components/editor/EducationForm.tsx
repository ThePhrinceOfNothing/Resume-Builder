'use client'

import { useResumeStore, Education } from '@/store/useResumeStore'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Plus, Trash2 } from 'lucide-react'

export function EducationForm() {
  const { data: { education }, addEducation, updateEducation, removeEducation } = useResumeStore()

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
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div key={edu.id} className="relative p-4 border rounded-lg bg-card space-y-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 text-destructive"
            onClick={() => removeEducation(edu.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          
          <h4 className="font-medium text-sm">Education {index + 1}</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>School / University</Label>
              <Input 
                value={edu.school} 
                onChange={(e) => updateEducation(edu.id, { school: e.target.value })} 
              />
            </div>
            <div className="space-y-2">
              <Label>Degree / Program</Label>
              <Input 
                value={edu.degree} 
                onChange={(e) => updateEducation(edu.id, { degree: e.target.value })} 
              />
            </div>
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Input 
                value={edu.startDate} 
                onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })} 
              />
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <Input 
                value={edu.endDate} 
                onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })} 
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Description / Honors</Label>
            <Textarea 
              value={edu.description} 
              onChange={(e) => updateEducation(edu.id, { description: e.target.value })} 
              className="h-24"
            />
          </div>
        </div>
      ))}
      <Button type="button" variant="outline" className="w-full" onClick={handleAdd}>
        <Plus className="mr-2 h-4 w-4" /> Add Education
      </Button>
    </div>
  )
}
