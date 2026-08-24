'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useResumeStore } from '@/store/useResumeStore'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useEffect } from 'react'

const schema = z.object({
  fullName: z.string().min(1, 'Name is required'),
  jobTitle: z.string(),
  email: z.string().email('Invalid email'),
  phone: z.string(),
  location: z.string(),
  website: z.string(),
  summary: z.string(),
})

type FormData = z.infer<typeof schema>

export function PersonalInfoForm() {
  const { data: { personalInfo }, updatePersonalInfo } = useResumeStore()
  
  const { register, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: personalInfo,
  })

  // Watch for changes and update store
  useEffect(() => {
    const subscription = watch((value) => {
      // Cast is safe here because we know it matches partial of FormData
      updatePersonalInfo(value as Partial<FormData>)
    })
    return () => subscription.unsubscribe()
  }, [watch, updatePersonalInfo])

  return (
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" {...register('fullName')} placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="jobTitle">Job Title</Label>
          <Input id="jobTitle" {...register('jobTitle')} placeholder="Software Engineer" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register('email')} placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" {...register('phone')} placeholder="+1 (555) 000-0000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" {...register('location')} placeholder="San Francisco, CA" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Website / Link</Label>
          <Input id="website" {...register('website')} placeholder="https://github.com/..." />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea 
          id="summary" 
          {...register('summary')} 
          placeholder="Briefly describe your professional background..." 
          className="h-32"
        />
      </div>
    </form>
  )
}
