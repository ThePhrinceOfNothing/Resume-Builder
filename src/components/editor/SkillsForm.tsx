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
    <div className="space-y-6 p-6 bg-neo shadow-neo-convex rounded-2xl border-none">
      <div className="space-y-2">
        <Label htmlFor="skills" className="text-slate-500 dark:text-slate-400 ml-1">Add Skill (Press Enter)</Label>
        <Input 
          id="skills"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. React, TypeScript, Project Management..."
          className="rounded-xl border-none"
        />
      </div>
      
      <div className="flex flex-wrap gap-3 mt-6">
        {skills.map((skill) => (
          <div 
            key={skill} 
            className="flex items-center gap-2 bg-neo shadow-neo-convex px-4 py-2 rounded-full text-sm font-semibold text-slate-600 dark:text-slate-300"
          >
            <span>{skill}</span>
            <button 
              type="button" 
              onClick={() => removeSkill(skill)}
              className="text-slate-400 hover:text-red-500 transition-colors focus:outline-none"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
