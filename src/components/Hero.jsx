import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackCTAClick } from '../utils/analytics'

const roles = [
  'Full Stack Developer',
  'React & Node.js Specialist',
  'UI/UX Craftsman',
  'Hackathon Builder',
  'Problem Solver',
]

const primaryTech = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invert: true },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
]

function RoleFlippingText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="font-inter"
      style={{
        fontSize: 'clamp(16px, 2.2vw, 22px)',
        color: '#94a3b8',
        marginBottom: 24,
        minHeight: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 8,
        letterSpacing: '0.01em',
      }}
    >
      <span>Building modern products as a</span>
      <div style={{ position: 'relative', display: 'inline-block', minWidth: 200, textAlign: 'left' }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ y: 14, opacity: 0, filter: 'blur(4px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: -14, opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-semibold"
            style={{
              color: '#c084fc',
              display: 'inline-block',
              textShadow: '0 0 24px rgba(192, 132, 252, 0.45)',
            }}
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-20 pt-32 pb-20 w-full max-w-none lg:max-w-4xl mx-auto relative"
    >
      {/* 2026-Style Status Pill with Pulsing Glow */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: 'rgba(18, 12, 32, 0.65)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          boxShadow: '0 0 24px -4px rgba(168, 85, 247, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(16px)',
          borderRadius: 9999,
          padding: '7px 20px',
          marginBottom: 28,
        }}
      >
        <span style={{ position: 'relative', display: 'flex', width: 8, height: 8 }}>
          <span
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: '#4ade80',
              opacity: 0.75,
              animation: 'ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite',
            }}
          />
          <span
            style={{
              position: 'relative',
              borderRadius: '50%',
              width: 8,
              height: 8,
              background: '#22c55e',
            }}
          />
        </span>
        <span
          className="font-inter"
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: '#cbd5e1',
            letterSpacing: '0.04em',
          }}
        >
          Available for Opportunities <span style={{ color: '#475569', margin: '0 4px' }}>•</span> <span style={{ color: '#c084fc', fontWeight: 600 }}>Full Stack Developer</span>
        </span>
      </motion.div>

      {/* Main Heading with Modern Tight Tracking */}
      <motion.h1
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="font-poppins"
        style={{
          fontSize: 'clamp(38px, 7.5vw, 84px)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.035em',
          marginBottom: 16,
          color: '#ffffff',
        }}
      >
        Hello, I'm{' '}
        <span className="gradient-text-cyan">Jal Patel</span>
      </motion.h1>

      {/* Fast & Smooth Role Flip Animation */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <RoleFlippingText />
      </motion.div>

      {/* Clean, Punchy Description */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="hero-desc"
        style={{
          fontSize: 'clamp(15px, 1.8vw, 18px)',
          color: '#94a3b8',
          lineHeight: 1.8,
          maxWidth: 620,
          marginBottom: 36,
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        Crafting high-performance digital experiences that merge engineering precision with modern UI design. From scalable MERN web applications to rapid hackathon builds.
      </motion.p>

      {/* CTA Buttons with Modern Glow */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="hero-cta-group"
        style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}
      >
        <a href="#projects" className="btn-hero-primary" onClick={() => trackCTAClick('view_my_work', 'hero_section')}>
          Explore My Work
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8, flexShrink: 0 }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a
          href="/Jal_Patel_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero-secondary"
          onClick={() => trackCTAClick('view_resume', 'hero_section')}
        >
          View Resume
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8, flexShrink: 0 }}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </motion.div>

      {/* Quick Tech Stack Shelf (Modern Developer Signature) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
        style={{
          marginTop: 44,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span
          className="font-inter"
          style={{
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#64748b',
            fontWeight: 600,
          }}
        >
          Core Technologies
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          {primaryTech.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ y: -3, borderColor: 'rgba(192, 132, 252, 0.45)' }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                padding: '6px 14px',
                borderRadius: 9999,
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.25s ease',
              }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                style={{
                  width: 16,
                  height: 16,
                  objectFit: 'contain',
                  filter: tech.invert ? 'invert(1)' : 'none',
                }}
              />
              <span className="font-inter" style={{ fontSize: 12.5, color: '#cbd5e1', fontWeight: 500 }}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Cue with Sleek Mouse Silhouette */}
      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        style={{ marginTop: 52 }}
      >
        <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            style={{
              width: 26,
              height: 40,
              borderRadius: 14,
              border: '2px solid rgba(168, 85, 247, 0.4)',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: 7,
              cursor: 'pointer',
            }}
          >
            <div style={{ width: 3, height: 7, borderRadius: 2, background: 'rgba(192, 132, 252, 0.9)' }} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}