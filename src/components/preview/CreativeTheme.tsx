'use client'

import { ResumeData } from '@/store/useResumeStore'
import { Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

export function CreativeTheme({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills, projects } = data

  return (
    <div className="text-slate-800 flex h-full font-sans" id="resume-preview">
      {/* Left Colored Sidebar */}
      <div className="w-1/3 text-white p-8 flex flex-col gap-8" style={{ backgroundColor: 'var(--theme-color)' }}>
        <div>
          <h1 className="text-3xl font-extrabold uppercase tracking-widest leading-tight mb-2">{personalInfo.fullName}</h1>
          <h2 className="text-lg font-medium opacity-90">{personalInfo.jobTitle}</h2>
        </div>

        <div className="space-y-4 text-sm opacity-90 font-medium">
          {personalInfo.email && (
            <div className="flex items-center gap-3 break-all">
              <Mail className="h-5 w-5 shrink-0 opacity-80" /> 
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 opacity-80" /> 
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 opacity-80" /> 
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-3 break-all">
              <LinkIcon className="h-5 w-5 shrink-0 opacity-80" /> 
              <span>{personalInfo.website}</span>
            </div>
          )}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-4">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4 border-b border-white/30 pb-2">Expertise</h3>
            <div className="flex flex-col gap-2 text-sm font-medium">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="w-2/3 p-10 bg-white">
        
        {/* Profile */}
        {personalInfo.summary && (
          <div className="mb-10">
            <h3 className="text-xl font-extrabold uppercase tracking-widest mb-4" style={{ color: 'var(--theme-color)' }}>Profile</h3>
            <div className="text-slate-700 text-sm leading-relaxed prose prose-sm prose-slate max-w-none">
              <ReactMarkdown>{personalInfo.summary}</ReactMarkdown>
            </div>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xl font-extrabold uppercase tracking-widest mb-6" style={{ color: 'var(--theme-color)' }}>Experience</h3>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l-2" style={{ borderColor: 'var(--theme-color)' }}>
                  <div className="absolute w-3 h-3 rounded-full -left-[7px] top-1.5 bg-white border-2" style={{ borderColor: 'var(--theme-color)' }} />
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-slate-800 text-lg">{exp.role}</h4>
                    <span className="text-sm font-bold opacity-70" style={{ color: 'var(--theme-color)' }}>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <div className="text-slate-600 font-semibold mb-3">{exp.company}</div>
                  <div className="text-slate-700 text-sm prose prose-sm prose-slate max-w-none">
                    <ReactMarkdown>{exp.description}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xl font-extrabold uppercase tracking-widest mb-6" style={{ color: 'var(--theme-color)' }}>Projects</h3>
            <div className="space-y-6">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-800 text-lg mb-1">{proj.title}</h4>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold hover:underline block mb-3" style={{ color: 'var(--theme-color)' }}>
                      {proj.link}
                    </a>
                  )}
                  <div className="text-slate-700 text-sm prose prose-sm prose-slate max-w-none">
                    <ReactMarkdown>{proj.description}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div>
            <h3 className="text-xl font-extrabold uppercase tracking-widest mb-6" style={{ color: 'var(--theme-color)' }}>Education</h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-slate-800 text-lg">{edu.degree}</h4>
                    <span className="text-sm font-bold opacity-70" style={{ color: 'var(--theme-color)' }}>
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <div className="text-slate-600 font-semibold mb-2">{edu.school}</div>
                  <div className="text-slate-700 text-sm prose prose-sm prose-slate max-w-none">
                    <ReactMarkdown>{edu.description || ''}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
