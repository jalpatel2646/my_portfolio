import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const certifications = [
  {
    title: 'Sangam University Certification',
    issuer: 'Sangam University',
    date: '2026',
    desc: 'Demonstrated hands-on engineering and software design competency through accredited university evaluation.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
    link: 'https://kommodo.ai/i/8otj1o61yieDYt7sUvXS'
  },
  {
    title: 'Artpark ProtoDash Challenge',
    issuer: 'Artpark',
    date: '2026',
    desc: 'Engineered rapid interactive software prototypes emphasizing user-centric workflows and client-side responsiveness.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    ),
    link: 'https://kommodo.ai/i/xTxWWQvnvRFVXlEgRol0'
  },
  {
    title: 'Data Sprint 2026',
    issuer: 'Data Sprint',
    date: '2026',
    desc: 'Architected data-driven dashboard interfaces and visualization pipelines for structured dataset exploration.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
    link: 'https://kommodo.ai/i/igqzpD6xuNyK6wPLoTza'
  },
  {
    title: 'Blueprint - 2026',
    issuer: 'Blueprint',
    date: '2026',
    desc: 'Designed modular full-stack system architectures under high-pressure hackathon sprint deadlines with modern React & APIs.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
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
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(168,85,247,0.14)', border: '1px solid rgba(168,85,247,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
