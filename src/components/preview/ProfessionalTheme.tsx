'use client'

import { ResumeData } from '@/store/useResumeStore'
import { Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react'

export function ProfessionalTheme({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills, projects } = data

  return (
    <div className="bg-white text-slate-800 p-8 max-w-[800px] mx-auto min-h-[1056px] shadow-sm flex" id="resume-preview">
      
      {/* Left Column */}
      <div className="w-1/3 pr-6 border-r" style={{ borderColor: 'var(--theme-color)' }}>
        <h1 className="text-3xl font-bold leading-tight mb-2" style={{ color: 'var(--theme-color)' }}>{personalInfo.fullName}</h1>
        <h2 className="text-lg font-medium mb-6" style={{ color: 'var(--theme-color)', opacity: 0.8 }}>{personalInfo.jobTitle}</h2>
        
        <div className="space-y-3 text-sm text-slate-600 mb-8">
          {personalInfo.email && (
            <div className="flex items-center gap-2 break-all">
              <Mail className="h-4 w-4 shrink-0" /> 
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" /> 
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" /> 
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-2 break-all">
              <LinkIcon className="h-4 w-4 shrink-0" /> 
              <span>{personalInfo.website}</span>
            </div>
          )}
        </div>

        {/* Education (moved to sidebar) */}
        {education.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold border-b-2 pb-1 mb-4 uppercase tracking-widest" style={{ color: 'var(--theme-color)', borderColor: 'var(--theme-color)' }}>Education</h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h4 className="font-bold text-slate-800">{edu.degree}</h4>
                  <div className="text-sm text-slate-600 font-medium">{edu.school}</div>
                  <div className="text-xs text-slate-500 italic mt-1">{edu.startDate} - {edu.endDate}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h3 className="text-lg font-bold border-b-2 pb-1 mb-4 uppercase tracking-widest" style={{ color: 'var(--theme-color)', borderColor: 'var(--theme-color)' }}>Skills</h3>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="w-2/3 pl-6">
        
        {/* Summary */}
        {personalInfo.summary && (
          <div className="mb-8">
            <h3 className="text-lg font-bold border-b-2 pb-1 mb-4 uppercase tracking-widest" style={{ color: 'var(--theme-color)', borderColor: 'var(--theme-color)' }}>Profile</h3>
            <p className="text-slate-700 text-sm leading-relaxed">{personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold border-b-2 pb-1 mb-4 uppercase tracking-widest" style={{ color: 'var(--theme-color)', borderColor: 'var(--theme-color)' }}>Experience</h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{exp.role}</h4>
                      <div className="text-slate-600 font-medium">{exp.company}</div>
                    </div>
                    <span className="text-sm text-slate-500 italic whitespace-nowrap ml-4">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm mt-2 whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div>
            <h3 className="text-lg font-bold border-b-2 pb-1 mb-4 uppercase tracking-widest" style={{ color: 'var(--theme-color)', borderColor: 'var(--theme-color)' }}>Projects</h3>
            <div className="space-y-5">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <h4 className="font-bold text-slate-800 text-lg">
                    {proj.title}
                    {proj.link && (
                      <span className="text-sm font-normal text-slate-500 ml-2">
                        | <a href={proj.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{proj.link}</a>
                      </span>
                    )}
                  </h4>
                  <p className="text-slate-700 text-sm mt-1 whitespace-pre-line">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
