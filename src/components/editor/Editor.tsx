'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PersonalInfoForm } from './PersonalInfoForm'
import { ExperienceForm } from './ExperienceForm'
import { EducationForm } from './EducationForm'
import { SkillsForm } from './SkillsForm'
import { ProjectsForm } from './ProjectsForm'

export function Editor() {
  return (
    <div className="h-full w-full flex flex-col bg-transparent">
      <div className="p-6 pb-2 shrink-0">
        <h1 className="text-2xl font-bold text-slate-700 mb-1">Edit Résumé</h1>
        <p className="text-sm text-slate-500 font-medium">Your changes are saved automatically.</p>
      </div>

      <Tabs defaultValue="personal" className="flex-1 flex flex-col overflow-hidden">
        <div className="px-6 shrink-0 border-b border-transparent shadow-[0_10px_10px_-10px_rgba(163,177,198,0.3)]">
          <TabsList className="bg-transparent h-auto p-0 flex gap-6 overflow-x-auto no-scrollbar justify-start border-none">
            <TabsTrigger 
              value="personal" 
              className="px-0 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:!bg-transparent data-[state=active]:text-blue-600 data-[state=active]:!shadow-none text-slate-500 font-semibold"
            >
              Personal Info
            </TabsTrigger>
            <TabsTrigger 
              value="experience" 
              className="px-0 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:!bg-transparent data-[state=active]:text-blue-600 data-[state=active]:!shadow-none text-slate-500 font-semibold"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger 
              value="education" 
              className="px-0 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:!bg-transparent data-[state=active]:text-blue-600 data-[state=active]:!shadow-none text-slate-500 font-semibold"
            >
              Education
            </TabsTrigger>
            <TabsTrigger 
              value="skills" 
              className="px-0 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:!bg-transparent data-[state=active]:text-blue-600 data-[state=active]:!shadow-none text-slate-500 font-semibold"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger 
              value="projects" 
              className="px-0 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:!bg-transparent data-[state=active]:text-blue-600 data-[state=active]:!shadow-none text-slate-500 font-semibold"
            >
              Projects
            </TabsTrigger>
          </TabsList>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          <TabsContent value="personal" className="mt-0">
            <PersonalInfoForm />
          </TabsContent>
          <TabsContent value="experience" className="mt-0">
            <ExperienceForm />
          </TabsContent>
          <TabsContent value="education" className="mt-0">
            <EducationForm />
          </TabsContent>
          <TabsContent value="skills" className="mt-0">
            <SkillsForm />
          </TabsContent>
          <TabsContent value="projects" className="mt-0">
            <ProjectsForm />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
