import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      })
    }, { rootMargin: '-40% 0px -60% 0px' });
    
    document.querySelectorAll('section[id]').forEach(sec => observer.observe(sec));

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(4,4,15,0.85)' : 'rgba(4,4,15,0.6)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        transition: 'background 0.3s',
      }}
    >
      <div className="w-full max-w-none lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <span className="font-poppins gradient-text-blue" style={{ fontSize: 22, fontWeight: 800, cursor: 'pointer' }} onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}>
          Jal.Patel
        </span>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: 24, listStyle: 'none', margin: 0, alignItems: 'center' }} className="hidden md:flex">
          {links.map(l => {
            const isActive = activeSection === l.id;
            return (
              <li key={l.label}>
                <a
                  href={l.href}
                  style={{ 
                    color: isActive ? '#e2e8f0' : '#94a3b8', 
                    fontSize: 14, 
                    fontWeight: isActive ? 600 : 500, 
                    letterSpacing: '0.04em', 
                    fontFamily: "'Inter', sans-serif", 
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    textShadow: isActive ? '0 0 8px rgba(255,255,255,0.3)' : 'none',
                    borderBottom: isActive ? '2px solid #0ea5e9' : '2px solid transparent',
                    paddingBottom: '4px'
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.target.style.color = '#e2e8f0'
                      e.target.style.textShadow = '0 0 8px rgba(255,255,255,0.3)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.target.style.color = '#94a3b8'
                      e.target.style.textShadow = 'none'
                    }
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="https://drive.google.com/file/d/11FrD4PWLH7kD6iCc7F-v9ATXNa64ZTnx/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '8px 20px', fontSize: 13, textDecoration: 'none' }}
          >
            View Resume
          </a>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e2e8f0', fontSize: 24, padding: '4px' }}
            className="block md:hidden flex items-center justify-center focus:outline-none"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: 'rgba(4,4,15,0.97)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '16px 24px', position: 'absolute', top: 72, left: 0, width: '100%' }}
          className="md:hidden flex flex-col shadow-xl backdrop-blur-lg"
        >
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              style={{ display: 'block', width: '100%', textAlign: 'left', color: '#e2e8f0', fontSize: 16, fontWeight: 500, padding: '16px 12px', fontFamily: "'Inter', sans-serif", borderBottom: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}
              className="hover:bg-white/5 hover:text-cyan-400 transition-colors rounded-lg mb-1"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
