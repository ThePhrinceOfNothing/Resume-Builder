'use client'

import { ResumeData } from '@/store/useResumeStore'
import { Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react'

export function MinimalTheme({ data }: { data: ResumeData }) {
  const { personalInfo, experience, education, skills, projects } = data

  return (
    <div className="bg-white text-black p-8 max-w-[800px] mx-auto min-h-[1056px] shadow-sm font-sans" id="resume-preview">
      {/* Header */}
      <header className="border-b-4 pb-6 mb-6" style={{ borderColor: 'var(--theme-color)' }}>
        <h1 className="text-4xl font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--theme-color)' }}>{personalInfo.fullName}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{personalInfo.jobTitle}</h2>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" style={{ color: 'var(--theme-color)' }} /> {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" style={{ color: 'var(--theme-color)' }} /> {personalInfo.phone}
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" style={{ color: 'var(--theme-color)' }} /> {personalInfo.location}
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-1">
              <LinkIcon className="h-4 w-4" style={{ color: 'var(--theme-color)' }} /> {personalInfo.website}
            </div>
          )}
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h3 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">{exp.role}</h4>
                  <span className="text-sm text-gray-500 font-medium">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div className="text-gray-700 font-medium mb-2">{exp.company}</div>
                <p className="text-gray-600 text-sm whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-8">
          <h3 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">Education</h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">{edu.degree}</h4>
                  <span className="text-sm text-gray-500 font-medium">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <div className="text-gray-700 font-medium mb-1">{edu.school}</div>
                <p className="text-gray-600 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-8">
          <h3 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">Projects</h3>
          <div className="space-y-4">
            {projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">{proj.title}</h4>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: 'var(--theme-color)' }}>
                      {proj.link}
                    </a>
                  )}
                </div>
                <p className="text-gray-600 text-sm whitespace-pre-line">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section>
          <h3 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-sm text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
