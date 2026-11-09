import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const entries = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
    year: '2025 — 2029',
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'Swaminarayan University, Kalol, Gujarat',
    desc: 'Deep focus on core computer science foundations, algorithms, modern databases, and scalable software systems.',
    coursework: ['Data Structures & Algorithms (DSA)', 'Database Management Systems (DBMS)', 'Object-Oriented Programming (OOP)', 'PostgreSQL & SQL'],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    year: 'Completed 2024',
    degree: 'Higher Secondary Education (Science & Mathematics)',
    institution: 'Vidya Mandir Trust, Palanpur',
    desc: 'Strong academic foundation with a focus on science and advanced mathematics, laying the groundwork for engineering studies.',
  },
]

export default function Education() {
  return (
    <SectionWrapper>
      <SectionLabel>My Background</SectionLabel>
      <SectionTitle>
        Edu<span className="gradient-text-blue">cation</span>
      </SectionTitle>

      <div style={{ marginTop: 48, position: 'relative' }}>
        {/* Vertical line */}
        <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, #63b3ed, #b794f4, transparent)', opacity: 0.5 }} />

        {entries.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: 28, marginBottom: 32 }}
          >
            {/* Dot */}
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(18, 12, 32, 0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1.5px solid rgba(168, 85, 247, 0.45)', boxShadow: '0 0 16px rgba(168,85,247,0.2)', zIndex: 1 }}>
              {e.icon}
            </div>

            {/* Card */}
            <motion.div
              whileHover={{ x: 5, borderColor: 'rgba(99,179,237,0.25)' }}
              className="glass-card"
              style={{ borderRadius: 14, padding: '22px 24px', flex: 1, transition: 'all 0.25s' }}
            >
              <div className="font-inter" style={{ fontSize: 11.5, color: '#63b3ed', letterSpacing: '0.06em', marginBottom: 6 }}>{e.year}</div>
              <div className="font-poppins" style={{ fontSize: 17, fontWeight: 700, marginBottom: 5 }}>{e.degree}</div>
              <div style={{ fontSize: 13.5, color: '#718096', marginBottom: 10 }}>{e.institution}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{e.desc}</div>
              {e.coursework && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14 }}>
                  {e.coursework.map(c => (
                    <span
                      key={c}
                      className="font-inter"
                      style={{
                        fontSize: 11.5,
                        fontWeight: 500,
                        padding: '4px 10px',
                        borderRadius: 8,
                        background: 'rgba(99, 179, 237, 0.08)',
                        color: '#90cdf4',
                        border: '1px solid rgba(99, 179, 237, 0.2)'
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
