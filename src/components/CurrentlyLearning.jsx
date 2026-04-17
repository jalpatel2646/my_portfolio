import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const learningItems = [
  {
    tech: "GraphQL",
    desc: "Building a unified API layer for a headless e-commerce project.",
    color: "#e535ab",
    bg: "rgba(229, 53, 171, 0.1)"
  },
  {
    tech: "Docker & AWS",
    desc: "Exploring containerization and deploying scalable web services.",
    color: "#049ef4",
    bg: "rgba(4, 158, 244, 0.1)"
  },
  {
    tech: "Web3 & Blockchain",
    desc: "Studying smart contract development and decentralized apps.",
    color: "#8a2be2",
    bg: "rgba(138, 43, 226, 0.1)"
  }
]

export default function CurrentlyLearning() {
  return (
    <SectionWrapper id="learning" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <SectionLabel>Always Growing</SectionLabel>
        <SectionTitle>
          Currently <span className="gradient-text-pink">Learning</span> 📚
        </SectionTitle>
        <p style={{ color: '#94a3b8', fontSize: 16, maxWidth: 600, margin: '16px auto 0', lineHeight: 1.6 }}>
          Technology moves fast. Here’s what I’m actively exploring and building with right now to expand my horizons.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        {learningItems.map((item, index) => (
          <motion.div
            key={item.tech}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ y: -8, boxShadow: `0 12px 30px -10px ${item.bg}` }}
            style={{
              padding: '28px',
              borderRadius: 20,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = item.color
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            }}
          >
            <div
              className="font-poppins"
              style={{
                display: 'inline-block',
                background: item.bg,
                color: item.color,
                padding: '6px 16px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 600,
                alignSelf: 'flex-start'
              }}
            >
              {item.tech}
            </div>
            <p className="font-inter" style={{ fontSize: 15, color: '#e2e8f0', lineHeight: 1.7 }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
