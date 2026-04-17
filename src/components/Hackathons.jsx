import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const hackathons = [
  {
    name: 'Sangam University',
    role: 'Participant',
    project: 'Smart Factory',
    desc: 'Built a sustainable lifestyle platform that tracks carbon footprint and rewards eco-friendly choices.',
    tags: ['React', 'Node.js', 'MongoDB', 'tailwindcss'],
    date: '14-15 march 2026',
    gradient: 'linear-gradient(135deg, rgba(161,140,209,0.14), rgba(251,194,235,0.1))',
    projectLink: '',
    certLink: '#'
  },
  {
    name: 'Artpark ProtoDash Challenge',
    role: 'Participant',
    project: 'ProtoDash',
    desc: 'Participated in the Artpark ProtoDash Challenge.',
    tags: ['Innovation', 'Prototyping'],
    date: '2026',
    gradient: 'linear-gradient(135deg, rgba(251,194,235,0.1), rgba(161,140,209,0.14))',
    projectLink: '',
    certLink: 'https://kommodo.ai/i/xTxWWQvnvRFVXlEgRol0'
  },
  {
    name: 'Data Sprint 2026',
    role: 'Participant',
    project: 'Data Sprint',
    desc: 'Participated in the Data Sprint 2026.',
    tags: ['Data Science', 'Machine Learning'],
    date: '2026',
    gradient: 'linear-gradient(135deg, rgba(99,179,237,0.1), rgba(160,174,192,0.1))',
    projectLink: ''
  },
  {
    name: 'Blueprint - 2026',
    role: 'Participant',
    project: 'Blueprint',
    desc: 'Participated in the Blueprint - 2026 hackathon.',
    tags: ['Innovation', 'Development'],
    date: '2026',
    gradient: 'linear-gradient(135deg, rgba(161,140,209,0.14), rgba(102,126,234,0.18))',
    projectLink: ''
  }
]

function HackathonCard({ hackathon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(102,126,234,0.18)' }}
      className="glass-card"
      style={{ borderRadius: 18, overflow: 'hidden', padding: '24px', transition: 'border-color 0.3s, box-shadow 0.3s', position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,179,237,0.28)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 className="font-poppins" style={{ fontSize: 20, fontWeight: 700, margin: 0, color: '#fff' }}>{hackathon.name}</h3>
          <p className="font-inter" style={{ fontSize: 13, color: '#63b3ed', margin: '4px 0 0 0', fontWeight: 600 }}>{hackathon.role}</p>
        </div>
        <span style={{ fontSize: 13, color: '#a0aec0', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: 20 }}>{hackathon.date}</span>
      </div>

      <div style={{ padding: '16px', background: hackathon.gradient, borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
        <h4 className="font-poppins" style={{ fontSize: 16, fontWeight: 600, margin: '0 0 8px 0', color: '#e2e8f0' }}>Project: {hackathon.project}</h4>
        <p style={{ fontSize: 14, color: '#a0aec0', lineHeight: 1.6, margin: 0 }}>{hackathon.desc}</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {hackathon.tags.map(tag => (
          <span
            key={tag}
            className="font-inter"
            style={{ fontSize: 10.5, padding: '3px 10px', borderRadius: 100, background: 'rgba(99,179,237,0.1)', border: '1px solid rgba(99,179,237,0.2)', color: '#63b3ed', letterSpacing: '0.03em' }}
          >
            {tag}
          </span>
        ))}
      </div>

      {hackathon.projectLink && (
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <motion.a
            href={hackathon.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontSize: 13, padding: '8px 16px', borderRadius: 8, background: 'rgba(99,179,237,0.15)', color: '#90cdf4', textDecoration: 'none', border: '1px solid rgba(99,179,237,0.2)' }}
          >
            View Project
          </motion.a>
        </div>
      )}
    </motion.div>
  )
}

export default function Hackathons() {
  return (
    <SectionWrapper id="hackathons">
      <SectionLabel>Competitions</SectionLabel>
      <SectionTitle>
        <span className="gradient-text-blue">Hackathons</span>
      </SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24, marginTop: 48 }}>
        {hackathons.map((h, i) => (
          <HackathonCard key={h.name} hackathon={h} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
