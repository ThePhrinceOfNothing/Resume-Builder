'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PersonalInfoForm } from './PersonalInfoForm'
import { ExperienceForm } from './ExperienceForm'
import { EducationForm } from './EducationForm'
import { SkillsForm } from './SkillsForm'
import { ProjectsForm } from './ProjectsForm'
import { Upload, Download } from 'lucide-react'
import { useResumeStore } from '@/store/useResumeStore'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function Editor() {
  const [activeTab, setActiveTab] = useState('personal')
  const { data } = useResumeStore()

  const tabs = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ]

  const handleExport = () => {
    const dataStr = JSON.stringify(data, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `resume_backup_${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target?.result as string)
        useResumeStore.setState({ data: importedData })
      } catch (error) {
        console.error("Failed to parse JSON file", error)
      }
    }
    reader.readAsText(file)
  }

  return (
    <div className="h-full w-full flex flex-col bg-transparent">
      <div className="p-4 md:p-6 pb-2 shrink-0 flex justify-between items-start">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-200 mb-1">Edit Résumé</h1>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium hidden sm:block">Your changes are saved automatically.</p>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <label className="cursor-pointer p-2 bg-neo shadow-neo-convex hover:shadow-neo-convex-sm active:shadow-neo-active rounded-full text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-all" title="Import JSON Backup">
            <Upload className="h-4 w-4" />
            <input type="file" accept=".json" className="hidden" onChange={handleImport} />
          </label>
          <button 
            onClick={handleExport}
            className="p-2 bg-neo shadow-neo-convex hover:shadow-neo-convex-sm active:shadow-neo-active rounded-full text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-all"
            title="Export JSON Backup"
          >
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
        <div className="px-4 md:px-6 shrink-0 py-2 w-full max-w-full">
          <TabsList className="bg-transparent h-auto p-1.5 flex gap-2 overflow-x-auto overscroll-x-contain pb-1 justify-start border-none bg-neo shadow-neo-concave-sm rounded-full w-full">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.id}
                value={tab.id} 
                className="relative px-4 py-2 rounded-full border-none data-active:!bg-transparent data-active:text-blue-600 data-active:!shadow-none text-slate-500 dark:text-slate-400 font-semibold z-10 transition-colors shrink-0 whitespace-nowrap"
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-neo shadow-neo-convex-sm rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-20">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
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
