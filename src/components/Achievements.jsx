import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const achievements = [
  {
    title: 'Participated in Hackathon',
    description: 'Built real-world project under time constraints',
    icon: '🏆'
  },
  {
    title: 'Solved 100+ LeetCode Problems',
    description: 'Improved problem-solving skills and algorithmic thinking',
    icon: '💻'
  },
  {
    title: 'Developed Multiple Projects',
    description: 'Hands-on experience with React, Framer Motion, and APIs',
    icon: '🚀'
  }
]

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionLabel>Milestones</SectionLabel>
      <SectionTitle>
        My <span className="gradient-text-cyan">Achievements</span>
      </SectionTitle>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginTop: 48 }}>
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, borderColor: 'rgba(34,211,238,0.3)' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card"
            style={{ padding: '32px 28px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
          >
            <div style={{ fontSize: 42, marginBottom: 20, background: 'linear-gradient(135deg, rgba(34,211,238,0.1), rgba(14,165,233,0.1))', padding: '12px', borderRadius: 16 }}>{item.icon}</div>
            <h3 className="font-poppins" style={{ fontSize: 19, fontWeight: 700, marginBottom: 12, color: '#f8fafc', lineHeight: 1.3 }}>{item.title}</h3>
            <p className="font-inter" style={{ fontSize: 14.5, color: '#94a3b8', lineHeight: 1.7, margin: 0 }}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
