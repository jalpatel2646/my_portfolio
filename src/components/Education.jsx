import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const entries = [
  {
    icon: '🎓',
    year: '2024 — Present',
    degree: 'Bachelor of Technology',
    institution: 'Swaminarayan University, Kalol, Gujarat',
    desc: 'Focus on Computer Science and Engineering — building a strong foundation in algorithms, data structures, and modern software development.',
  },
  {
    icon: '📚',
    year: 'Completed 2024',
    degree: 'Higher Secondary Education',
    institution: 'Vidya Mandir Trust, Palanpur',
    desc: 'Strong academic foundation with a focus on science and mathematics, laying the groundwork for engineering studies.',
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
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#667eea,#764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0, border: '2px solid rgba(99,179,237,0.3)', zIndex: 1 }}>
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
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
