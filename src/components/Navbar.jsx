import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { trackResumeDownload } from '../utils/analytics'

const links = [
  { label: 'Home',       href: '#hero',       id: 'hero' },
  { label: 'About',      href: '#about',      id: 'about' },
  { label: 'Skills',     href: '#skills',     id: 'skills' },
  { label: 'Projects',   href: '#projects',   id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact',    href: '#contact',    id: 'contact' },
]

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { rootMargin: '-40% 0px -60% 0px' }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(4,4,15,0.95)' : 'rgba(4,4,15,0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        transition: 'background 0.3s',
      }}
    >
      {/* ── Inner container ── */}
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        paddingLeft: 'clamp(16px, 4vw, 80px)',
        paddingRight: 'clamp(16px, 4vw, 80px)',
        height: 68,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
      }}>

        {/* ── Logo ── */}
        <span
          className="navbar-logo font-poppins gradient-text-blue"
          style={{ fontSize: 22, fontWeight: 800, cursor: 'pointer', flexShrink: 0, userSelect: 'none', letterSpacing: '-0.02em' }}
          onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
        >
          Jal.Patel
        </span>

        {/* ── Desktop links (hidden on mobile via Tailwind — NO inline display override) ── */}
        <ul
          className="hidden md:flex"
          style={{ gap: 28, listStyle: 'none', margin: 0, alignItems: 'center', flex: 1, justifyContent: 'center' }}
        >
          {links.map(l => {
            const active = activeSection === l.id
            return (
              <li key={l.label} style={{ flexShrink: 0 }}>
                <a
                  href={l.href}
                  style={{
                    color:           active ? '#e2e8f0' : '#94a3b8',
                    fontSize:        14,
                    fontWeight:      active ? 600 : 500,
                    letterSpacing:   '0.04em',
                    fontFamily:      "'Inter', sans-serif",
                    transition:      'all 0.3s ease',
                    textDecoration:  'none',
                    textShadow:      active ? '0 0 8px rgba(255,255,255,0.3)' : 'none',
                    borderBottom:    active ? '2px solid #0ea5e9' : '2px solid transparent',
                    paddingBottom:   '4px',
                    whiteSpace:      'nowrap',
                  }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.textShadow = '0 0 8px rgba(255,255,255,0.3)' } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.textShadow = 'none' } }}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* ── Right: Resume btn + Hamburger ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>

          {/* Resume button — hide on xs screens (< 640px) using CSS class */}
          <a
            href="/Jal_Patel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume-btn btn-primary"
            style={{
              padding: '8px 18px',
              fontSize: 13,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              /* Hide below 640px — this !important beats btn-primary's display */
            }}
            onClick={() => trackResumeDownload('navbar')}
          >
            Resume
          </a>

          {/* Hamburger — shown only on mobile (hidden on md+) */}
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(o => !o)}
            className="flex md:hidden"
            style={{
              background:    menuOpen ? 'rgba(14,165,233,0.15)' : 'rgba(255,255,255,0.06)',
              border:        '1px solid rgba(255,255,255,0.12)',
              cursor:        'pointer',
              borderRadius:  9,
              width:         42,
              height:        42,
              flexDirection: 'column',
              alignItems:    'center',
              justifyContent:'center',
              gap:           5,
              flexShrink:    0,
              transition:    'background 0.22s',
              padding:       0,
            }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45,  y: 7 }  : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              style={{ display: 'block', width: 18, height: 2, background: '#e2e8f0', borderRadius: 2, transformOrigin: 'center' }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
              style={{ display: 'block', width: 18, height: 2, background: '#e2e8f0', borderRadius: 2 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              style={{ display: 'block', width: 18, height: 2, background: '#e2e8f0', borderRadius: 2, transformOrigin: 'center' }}
            />
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════
          Mobile Drawer
          ══════════════════════════════════ */}
      {menuOpen && (
        <>
          {/* Full-screen dimmed backdrop — closes menu on tap */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed', inset: 0, top: 68,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(3px)',
              WebkitBackdropFilter: 'blur(3px)',
              zIndex: 998,
            }}
          />

          {/* Slide-down drawer */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden"
            style={{
              position:     'absolute',
              top:          68,
              left:         0,
              right:        0,
              zIndex:       999,
              background:   'rgba(4,4,15,0.99)',
              backdropFilter:       'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              borderTop:    '1px solid rgba(255,255,255,0.07)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              boxShadow:    '0 24px 60px rgba(0,0,0,0.7)',
              padding:      '8px 16px 20px',
            }}
          >
            {/* Nav links */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {links.map((l, i) => {
                const active = activeSection === l.id
                return (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.18 }}
                    style={{
                      display:         'flex',
                      alignItems:      'center',
                      color:           active ? '#0ea5e9' : '#cbd5e0',
                      fontSize:        15,
                      fontWeight:      active ? 600 : 400,
                      padding:         '13px 16px',
                      fontFamily:      "'Inter', sans-serif",
                      borderRadius:    10,
                      textDecoration:  'none',
                      background:      active ? 'rgba(14,165,233,0.08)' : 'transparent',
                      borderLeft:      `3px solid ${active ? '#0ea5e9' : 'transparent'}`,
                      transition:      'all 0.2s ease',
                    }}
                    onClick={() => setMenuOpen(false)}
                    onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#e2e8f0' } }}
                    onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#cbd5e0' } }}
                  >
                    {l.label}
                  </motion.a>
                )
              })}
            </nav>

            {/* Resume CTA at bottom of drawer */}
            <div style={{ marginTop: 12, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <a
                href="/Jal_Patel_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  width:          '100%',
                  padding:        '13px',
                  fontSize:       14,
                  fontWeight:     600,
                  textDecoration: 'none',
                  borderRadius:   10,
                  background:     'linear-gradient(135deg, #0ea5e9, #22d3ee)',
                  color:          '#fff',
                  boxShadow:      '0 0 20px rgba(14,165,233,0.25)',
                  fontFamily:     "'Inter', sans-serif",
                }}
                onClick={() => { setMenuOpen(false); trackResumeDownload('mobile_drawer') }}
              >
                View Full Resume
              </a>
            </div>
          </motion.div>
        </>
      )}
    </motion.nav>
  )
}
