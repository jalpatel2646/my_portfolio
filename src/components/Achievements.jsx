import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const achievements = [
  {
    title: 'Participated in Hackathons',
    description: 'Built real-world projects under time constraints and collaborated in high-pressure environments',
    icon: '🏆',
    link: '#hackathon-projects',
    linkLabel: 'View Builds ↗'
  },
  {
    title: 'Solved 170+ LeetCode Problems',
    description: 'Strengthened problem-solving skills, data structures, and algorithmic thinking',
    icon: '💻',
    link: 'https://leetcode.com/u/jall_patel/',
    external: true,
    linkLabel: 'View Profile ↗'
  },
  {
    title: 'Developed Multiple Projects',
    description: 'Hands-on experience building full-stack applications with React, Node.js, and modern APIs',
    icon: '🚀',
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
              <div style={{ fontSize: 42, marginBottom: 20, background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(14,165,233,0.1))', padding: '12px', borderRadius: 16 }}>{item.icon}</div>
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
