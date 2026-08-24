'use client'

import { useResumeStore } from '@/store/useResumeStore'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function PersonalInfoForm() {
  const { data: { personalInfo }, updatePersonalInfo } = useResumeStore()
  
  return (
    <div className="space-y-8 p-6 bg-neo shadow-neo-convex rounded-2xl border-none">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-slate-500 dark:text-slate-400 ml-1">Full Name</Label>
          <Input 
            value={personalInfo.fullName}
            onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
            placeholder="John Doe"
            className="rounded-xl border-none"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-slate-500 dark:text-slate-400 ml-1">Job Title</Label>
          <Input 
            value={personalInfo.jobTitle}
            onChange={(e) => updatePersonalInfo({ jobTitle: e.target.value })}
            placeholder="Frontend Developer"
            className="rounded-xl border-none"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-slate-500 dark:text-slate-400 ml-1">Email</Label>
          <Input 
            type="email"
            value={personalInfo.email}
            onChange={(e) => updatePersonalInfo({ email: e.target.value })}
            placeholder="john@example.com"
            className="rounded-xl border-none"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-slate-500 dark:text-slate-400 ml-1">Phone</Label>
          <Input 
            type="tel"
            value={personalInfo.phone}
            onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
            placeholder="+1 234 567 8900"
            className="rounded-xl border-none"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-slate-500 dark:text-slate-400 ml-1">Location</Label>
          <Input 
            value={personalInfo.location}
            onChange={(e) => updatePersonalInfo({ location: e.target.value })}
            placeholder="New York, NY"
            className="rounded-xl border-none"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-slate-500 dark:text-slate-400 ml-1">Website / Portfolio</Label>
          <Input 
            type="url"
            value={personalInfo.website}
            onChange={(e) => updatePersonalInfo({ website: e.target.value })}
            placeholder="https://..."
            className="rounded-xl border-none"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label className="text-slate-500 dark:text-slate-400 ml-1">Professional Summary</Label>
        <Textarea 
          value={personalInfo.summary}
          onChange={(e) => updatePersonalInfo({ summary: e.target.value })}
          placeholder="Brief overview of your professional background and goals..."
          rows={5}
          className="rounded-xl border-none"
        />
      </div>
    </div>
  )
}
