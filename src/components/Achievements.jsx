import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const achievements = [
  {
    title: 'Participated in Hackathons',
    description: 'Built real-world projects under time constraints and collaborated in high-pressure environments',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1 .45-1 1v1h12v-1c0-.55-.45-1-1-1h-2c-.55 0-1-.45-1-1v-2.34"></path>
        <path d="M6 4h12v6c0 3.31-2.69 6-6 6s-6-2.69-6-6V4z"></path>
      </svg>
    ),
    link: '#hackathon-projects',
    linkLabel: 'View Builds ↗'
  },
  {
    title: 'Solved 235 LeetCode Problems',
    description: 'Active problem solver across 178 Easy, 53 Medium, and 4 Hard DSA algorithmic challenges',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
        <line x1="14" y1="4" x2="10" y2="20"></line>
      </svg>
    ),
    link: 'https://leetcode.com/u/jall_patel/',
    external: true,
    linkLabel: 'View Profile ↗'
  },
  {
    title: 'Developed Multiple Projects',
    description: 'Hands-on experience building full-stack applications with React, Node.js, and modern APIs',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
    link: '#projects',
    linkLabel: 'Explore Work ↗'
  }
]

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionLabel>Milestones</SectionLabel>
      <SectionTitle>
        My <span className="gradient-text-cyan">Achievements</span>
      </SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {achievements.map((item, i) => {
          const CardContent = (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, borderColor: 'rgba(192,132,252,0.45)', boxShadow: '0 12px 30px rgba(168,85,247,0.15)' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card"
              style={{
                padding: '32px 28px',
                borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                height: '100%',
                cursor: item.link ? 'pointer' : 'default',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>{item.icon}</div>
              <h3 className="font-poppins" style={{ fontSize: 19, fontWeight: 700, marginBottom: 12, color: '#f8fafc', lineHeight: 1.3 }}>{item.title}</h3>
              <p className="font-inter" style={{ fontSize: 14.5, color: '#94a3b8', lineHeight: 1.7, margin: '0 0 16px 0', flex: 1 }}>{item.description}</p>
              {item.link && (
                <span className="font-inter" style={{ fontSize: 13, color: '#c084fc', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  {item.linkLabel}
                </span>
              )}
            </motion.div>
          )

          return item.link ? (
            <a
              key={item.title}
              href={item.link}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              {CardContent}
            </a>
          ) : (
            <div key={item.title}>{CardContent}</div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
