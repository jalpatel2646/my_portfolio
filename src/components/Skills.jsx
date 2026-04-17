import React from 'react'
import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const skillsMatrix = [
  {
    row: 1,
    skills: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' }
    ]
  },
  {
    row: 2,
    skills: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' }
    ]
  },
  {
    row: 3,
    lines: true,
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
    ]
  },
  {
    row: 4,
    lines: true,
    skills: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invert: true },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' }
    ]
  },
  {
    row: 5,
    skills: [
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true }
    ]
  }
]

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <SectionLabel>Expertise</SectionLabel>
        <SectionTitle>
          Skills & <span className="gradient-text-cyan">Technologies</span> 🔧
        </SectionTitle>
        <p style={{ color: '#94a3b8', fontSize: 16, maxWidth: 600, margin: '16px auto 0', lineHeight: 1.6 }}>
          A comprehensive toolkit of modern technologies and frameworks that I use to bring ideas to life.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, paddingTop: 20 }}>
        {skillsMatrix.map((rowObj, rowIndex) => (
          <div key={rowObj.row} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {rowObj.skills.map((skill, idx) => (
              <React.Fragment key={skill.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: rowIndex * 0.1 + idx * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
                  whileHover={{ y: -6, scale: 1.05, borderColor: 'rgba(244, 114, 182, 0.4)', boxShadow: '0 10px 30px -10px rgba(244, 114, 182, 0.2)' }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 20,
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    zIndex: 2,
                    cursor: 'default',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    style={{ 
                      width: 44, 
                      height: 44, 
                      objectFit: 'contain',
                      filter: skill.invert ? 'invert(1) brightness(1.5)' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))'
                    }} 
                  />
                  <span className="font-poppins" style={{ fontSize: 13, fontWeight: 500, color: '#e2e8f0', letterSpacing: '0.02em' }}>
                    {skill.name}
                  </span>
                </motion.div>

                {/* Connecting Line or Spacer */}
                {idx < rowObj.skills.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: rowIndex * 0.1 + 0.3, duration: 0.6 }}
                    style={{
                      width: rowObj.lines ? 40 : 24,
                      height: rowObj.lines ? 2 : 0,
                      background: 'linear-gradient(90deg, rgba(244, 114, 182, 0.1), rgba(244, 114, 182, 0.6), rgba(244, 114, 182, 0.1))',
                      margin: '0 8px',
                      transformOrigin: 'left',
                      zIndex: 1
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
