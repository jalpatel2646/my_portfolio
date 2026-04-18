import { motion } from 'framer-motion'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id === 'Home' ? 'hero' : id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: 'rgba(4,4,15,0.85)', backdropFilter: 'blur(20px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 48px 28px' }}>

        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="font-poppins gradient-text-blue"
            style={{ fontSize: 22, fontWeight: 800, cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Jal.Patel
          </motion.div>

          {/* Nav links */}
          <nav style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            {links.map(l => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: '#718096', fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: '0.04em', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#e2e8f0'}
                onMouseLeave={e => e.target.style.color = '#718096'}
              >
                {l}
              </button>
            ))}
          </nav>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              { icon: 'in', url: 'https://www.linkedin.com/in/jal-patel-b7a4a7394/' },
              { icon: '⌥', url: 'https://github.com/jalpatel2646' },
              { icon: '▶', url: 'https://www.youtube.com/@JalPatel-f5l' },
              { icon: '◧', url: 'https://leetcode.com/u/jall_patel/' },
              { icon: '𝕏', url: 'https://x.com/JalPatel97246' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, borderColor: 'rgba(99,179,237,0.4)' }}
                style={{ width: 36, height: 36, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#718096', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
                onMouseLeave={e => e.currentTarget.style.color = '#718096'}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 24 }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: '#4a5568' }}>
            © {new Date().getFullYear()} <span style={{ color: '#718096' }}>Jal Patel</span>. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: '#4a5568', letterSpacing: '0.03em' }}>
            Crafted with <span style={{ color: '#fc8181' }}>♥</span> using React + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
