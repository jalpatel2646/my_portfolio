import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const certifications = [
  {
    title: 'Sangam University Certification',
    issuer: 'Sangam University',
    date: '2026',
    desc: 'Certification from Sangam University.',
    icon: '🎓',
    link: 'https://kommodo.ai/i/8otj1o61yieDYt7sUvXS'
  },
  {
    title: 'Artpark ProtoDash Challenge',
    issuer: 'Artpark',
    date: '2026',
    desc: 'Participation and completion of the Artpark ProtoDash Challenge.',
    icon: '🏆',
    link: 'https://kommodo.ai/i/xTxWWQvnvRFVXlEgRol0'
  },
  {
    title: 'Data Sprint 2026',
    issuer: 'Data Sprint',
    date: '2026',
    desc: 'Participation and completion of the Data Sprint 2026 hackathon.',
    icon: '📊',
    link: 'https://kommodo.ai/i/igqzpD6xuNyK6wPLoTza'
  },
  {
    title: 'Blueprint - 2026',
    issuer: 'Blueprint',
    date: '2026',
    desc: 'Participation and completion of the Blueprint - 2026 hackathon.',
    icon: '🚀',
    link: 'https://kommodo.ai/i/0CkN9eBefuNo47j4Iiel'
  }
]

export default function Certifications() {
  return (
    <SectionWrapper>
      <SectionLabel>Continuous Learning</SectionLabel>
      <SectionTitle>
        Certifi<span className="gradient-text-blue">cations</span>
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              whileHover={{ y: -6, borderColor: 'rgba(99,179,237,0.25)', boxShadow: '0 20px 60px rgba(102,126,234,0.15)' }}
              className="glass-card"
              style={{ borderRadius: 16, padding: '28px 24px', height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg,#667eea,#764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, border: '2px solid rgba(99,179,237,0.3)' }}>
                  {cert.icon}
                </div>
                <div className="font-inter" style={{ fontSize: 11.5, color: '#63b3ed', letterSpacing: '0.06em', background: 'rgba(99,179,237,0.1)', padding: '4px 10px', borderRadius: 12, fontWeight: 500 }}>
                  {cert.date}
                </div>
              </div>
              
              <div className="font-poppins" style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, lineHeight: 1.35 }}>{cert.title}</div>
              <div className="font-inter" style={{ fontSize: 13.5, color: '#b794f4', marginBottom: 14, fontWeight: 500, letterSpacing: '0.02em' }}>{cert.issuer}</div>
              <div style={{ fontSize: 14, color: '#718096', lineHeight: 1.6, flexGrow: 1, marginBottom: 24 }}>{cert.desc}</div>
              
              <a href={cert.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'inline-block' }}>
                <div className="font-inter" style={{ fontSize: 13.5, color: '#e2e8f0', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s', cursor: 'pointer' }}
                     onMouseOver={(e) => e.currentTarget.style.color = '#63b3ed'}
                     onMouseOut={(e) => e.currentTarget.style.color = '#e2e8f0'}>
                  View Certificate <span style={{ fontSize: 16 }}>→</span>
                </div>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
