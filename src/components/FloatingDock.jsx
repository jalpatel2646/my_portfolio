import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingDock() {
  const [activeSection, setActiveSection] = useState('hero')
  const [showDock, setShowDock] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowDock(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -60% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const formatSection = (id) => {
    if (!id || id === 'hero') return 'Home'
    return id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')
  }

  return (
    <AnimatePresence>
      {showDock && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 900,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 8px 6px 14px',
            borderRadius: 9999,
            background: 'rgba(14, 10, 26, 0.75)',
            border: '1px solid rgba(192, 132, 252, 0.25)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 12px 32px -4px rgba(0, 0, 0, 0.6), 0 0 24px rgba(147, 51, 234, 0.2)',
          }}
        >
          {/* Section Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginRight: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c084fc', boxShadow: '0 0 10px #c084fc' }} />
            <span className="font-inter" style={{ fontSize: 12, fontWeight: 600, color: '#f1f5f9', letterSpacing: '0.03em' }}>
              {formatSection(activeSection)}
            </span>
          </div>

          <div style={{ width: 1, height: 16, background: 'rgba(255, 255, 255, 0.12)' }} />

          {/* Quick Action: Scroll to Top */}
          <motion.button
            whileHover={{ scale: 1.1, background: 'rgba(192, 132, 252, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            title="Back to Top"
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
