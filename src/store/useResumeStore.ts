import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Experience = {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string
  description: string
}

export type Education = {
  id: string
  school: string
  degree: string
  startDate: string
  endDate: string
  description: string
}

export type Project = {
  id: string
  title: string
  description: string
  link: string
}

export type ResumeData = {
  personalInfo: {
    fullName: string
    jobTitle: string
    email: string
    phone: string
    location: string
    website: string
    summary: string
  }
  experience: Experience[]
  education: Education[]
  skills: string[]
  projects: Project[]
}

const initialData: ResumeData = {
  personalInfo: {
    fullName: 'John Doe',
    jobTitle: 'Software Engineer',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    website: 'johndoe.dev',
    summary: 'Passionate software engineer with 5+ years of experience building scalable web applications.'
  },
  experience: [
    {
      id: '1',
      company: 'Tech Corp',
      role: 'Senior Developer',
      startDate: 'Jan 2020',
      endDate: 'Present',
      description: 'Led the frontend team in migrating to Next.js, improving load times by 40%.'
    }
  ],
  education: [
    {
      id: '1',
      school: 'University of Technology',
      degree: 'B.S. Computer Science',
      startDate: 'Sep 2015',
      endDate: 'May 2019',
      description: 'Graduated with honors. President of the Computer Science Club.'
    }
  ],
  skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  projects: [
    {
      id: '1',
      title: 'Portfolio Builder',
      description: 'An interactive resume and portfolio builder.',
      link: 'github.com/johndoe/portfolio'
    }
  ]
}

export type Theme = 'minimal' | 'professional' | 'creative'

type ResumeStore = {
  data: ResumeData
  theme: Theme
  accentColor: string
  fontFamily: string
  updatePersonalInfo: (info: Partial<ResumeData['personalInfo']>) => void
  addExperience: (exp: Experience) => void
  updateExperience: (id: string, exp: Partial<Experience>) => void
  removeExperience: (id: string) => void
  moveExperience: (index: number, direction: 'up' | 'down') => void
  addEducation: (edu: Education) => void
  updateEducation: (id: string, edu: Partial<Education>) => void
  removeEducation: (id: string) => void
  moveEducation: (index: number, direction: 'up' | 'down') => void
  addProject: (proj: Project) => void
  updateProject: (id: string, proj: Partial<Project>) => void
  removeProject: (id: string) => void
  moveProject: (index: number, direction: 'up' | 'down') => void
  updateSkills: (skills: string[]) => void
  setTheme: (theme: Theme) => void
  setAccentColor: (color: string) => void
  setFontFamily: (font: string) => void
  resetData: () => void
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      data: initialData,
      theme: 'minimal',
      accentColor: '#3b82f6', // default blue
      fontFamily: 'font-sans',
      updatePersonalInfo: (info) =>
        set((state) => ({
          data: {
            ...state.data,
            personalInfo: { ...state.data.personalInfo, ...info },
          },
        })),
      addExperience: (exp) =>
        set((state) => ({
          data: { ...state.data, experience: [...state.data.experience, exp] },
        })),
      updateExperience: (id, exp) =>
        set((state) => ({
          data: {
            ...state.data,
            experience: state.data.experience.map((e) => (e.id === id ? { ...e, ...exp } : e)),
          },
        })),
      removeExperience: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            experience: state.data.experience.filter((e) => e.id !== id),
          },
        })),
      moveExperience: (index, direction) =>
        set((state) => {
          const newExp = [...state.data.experience]
          if (direction === 'up' && index > 0) {
            ;[newExp[index - 1], newExp[index]] = [newExp[index], newExp[index - 1]]
          } else if (direction === 'down' && index < newExp.length - 1) {
            ;[newExp[index + 1], newExp[index]] = [newExp[index], newExp[index + 1]]
          }
          return { data: { ...state.data, experience: newExp } }
        }),
      addEducation: (edu) =>
        set((state) => ({
          data: { ...state.data, education: [...state.data.education, edu] },
        })),
      updateEducation: (id, edu) =>
        set((state) => ({
          data: {
            ...state.data,
            education: state.data.education.map((e) => (e.id === id ? { ...e, ...edu } : e)),
          },
        })),
      removeEducation: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            education: state.data.education.filter((e) => e.id !== id),
          },
        })),
      moveEducation: (index, direction) =>
        set((state) => {
          const newEdu = [...state.data.education]
          if (direction === 'up' && index > 0) {
            ;[newEdu[index - 1], newEdu[index]] = [newEdu[index], newEdu[index - 1]]
          } else if (direction === 'down' && index < newEdu.length - 1) {
            ;[newEdu[index + 1], newEdu[index]] = [newEdu[index], newEdu[index + 1]]
          }
          return { data: { ...state.data, education: newEdu } }
        }),
      addProject: (proj) =>
        set((state) => ({
          data: { ...state.data, projects: [...state.data.projects, proj] },
        })),
      updateProject: (id, proj) =>
        set((state) => ({
          data: {
            ...state.data,
            projects: state.data.projects.map((p) => (p.id === id ? { ...p, ...proj } : p)),
          },
        })),
      removeProject: (id) =>
        set((state) => ({
          data: {
            ...state.data,
            projects: state.data.projects.filter((p) => p.id !== id),
          },
        })),
      moveProject: (index, direction) =>
        set((state) => {
          const newProj = [...state.data.projects]
          if (direction === 'up' && index > 0) {
            ;[newProj[index - 1], newProj[index]] = [newProj[index], newProj[index - 1]]
          } else if (direction === 'down' && index < newProj.length - 1) {
            ;[newProj[index + 1], newProj[index]] = [newProj[index], newProj[index + 1]]
          }
          return { data: { ...state.data, projects: newProj } }
        }),
      updateSkills: (skills) =>
        set((state) => ({
          data: { ...state.data, skills },
        })),
      setTheme: (theme) => set({ theme }),
      setAccentColor: (accentColor) => set({ accentColor }),
      setFontFamily: (fontFamily) => set({ fontFamily }),
      resetData: () => set({ data: initialData }),
    }),
    {
      name: 'resume-storage', // unique name
    }
  )
)
