import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const phrases = [
  'Full Stack Developer',
  'React Developer',
  'UI Engineer',
  'Problem Solver',
]

function TypingText() {
  const [display, setDisplay] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[phraseIdx]
    let timeout

    if (!deleting) {
      if (charIdx < phrase.length) {
        timeout = setTimeout(() => setCharIdx(i => i + 1), 75)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx(i => i - 1), 40)
      } else {
        setDeleting(false)
        setPhraseIdx(i => (i + 1) % phrases.length)
      }
    }

    setDisplay(phrase.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx])

  return (
    <div className="font-inter" style={{ fontSize: 'clamp(18px,2.5vw,26px)', color: '#0ea5e9', marginBottom: 28, minHeight: 38, letterSpacing: '0.01em', fontWeight: 500 }}>
      <span>{display}</span>
      <span className="cursor-blink" style={{ display: 'inline-block', width: 2, height: '1.1em', background: '#0ea5e9', marginLeft: 3, verticalAlign: 'text-bottom' }} />
    </div>
  )
}

export default function Hero() {
  return (
    <section 
      id="hero" 
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px', maxWidth: 860, margin: '0 auto', position: 'relative' }}
    >

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.25)', borderRadius: 100, padding: '6px 18px', fontSize: 12.5, fontWeight: 500, color: '#0ea5e9', letterSpacing: '0.06em', marginBottom: 32 }}
      >
        <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
        Available for Work
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.75 }}
        className="font-poppins"
        style={{ fontSize: 'clamp(40px,7vw,82px)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.03em', marginBottom: 18 }}
      >
        Hello, I'm{' '}
        <span className="gradient-text-cyan">Jal Patel</span>
      </motion.h1>

      {/* Typing Animation */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
        <TypingText />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: '#94a3b8', lineHeight: 1.85, maxWidth: 580, marginBottom: 44 }}
      >
        I craft digital experiences that merge creativity with code. From pixel‑perfect interfaces to robust back‑end systems — let's build something extraordinary together.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}
      >
        <a
          href="#projects"
          className="btn-hero-primary"
        >
          View My Work
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8 }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a
          href="https://drive.google.com/file/d/11FrD4PWLH7kD6iCc7F-v9ATXNa64ZTnx/preview"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero-secondary"
        >
          View Resume
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8 }}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ marginTop: 72 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ width: 28, height: 44, borderRadius: 14, border: '2px solid rgba(14,165,233,0.3)', margin: '0 auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 8 }}
        >
          <div style={{ width: 4, height: 8, borderRadius: 2, background: 'rgba(14,165,233,0.6)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
