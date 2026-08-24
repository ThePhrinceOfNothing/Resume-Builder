'use client'

import { useState } from 'react'
import { useResumeStore } from '@/store/useResumeStore'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export function SkillsForm() {
  const { data: { skills }, updateSkills } = useResumeStore()
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault()
      if (!skills.includes(inputValue.trim())) {
        updateSkills([...skills, inputValue.trim()])
      }
      setInputValue('')
    }
  }

  const removeSkill = (skillToRemove: string) => {
    updateSkills(skills.filter(skill => skill !== skillToRemove))
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="skills">Add Skill (Press Enter)</Label>
        <Input 
          id="skills"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. React, TypeScript, Project Management..."
        />
      </div>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill) => (
          <div 
            key={skill} 
            className="flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
          >
            <span>{skill}</span>
            <button 
              type="button" 
              onClick={() => removeSkill(skill)}
              className="text-muted-foreground hover:text-foreground focus:outline-none"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
