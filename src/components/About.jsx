import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'
import { trackSocialClick } from '../utils/analytics'

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/jalpatel2646',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jal-patel-b7a4a7394/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    )
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@JalPatel-f5l',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.16 1 12 1 12s0 3.84.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.84 23 12 23 12s0-3.84-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
    )
  },
  {
    name: 'Email',
    url: 'mailto:jal.h.patel.cg@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    )
  }
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionLabel>Who I Am</SectionLabel>
      <SectionTitle>
        About <span className="gradient-text-blue">Me</span>
      </SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start mt-8 md:mt-12">
        {/* Text */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <p style={{ fontSize: 16, color: '#cbd5e1', lineHeight: 1.9, marginBottom: 20 }}>
            Hi, I'm Jal Patel, a passionate Full Stack Web Developer. I specialize in building visually stunning and highly functional web applications. My journey is driven by curiosity and a desire to create impactful digital experiences.
          </p>
          <p style={{ fontSize: 16, color: '#cbd5e1', lineHeight: 1.9, marginBottom: 32 }}>
            From designing pixel-perfect interfaces to architecting robust back-end systems, I love every layer of the stack. I'm constantly learning, building, and growing — one commit at a time.
          </p>

          <div className="about-social-grid" style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => trackSocialClick(social.name.toLowerCase(), 'about_section')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#e2e8f0',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#c084fc'
                  e.currentTarget.style.color = '#c084fc'
                  e.currentTarget.style.background = 'rgba(168,85,247,0.14)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = '#e2e8f0'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Senior Dev Metric Badges (Bento Style) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 14, marginTop: 12 }}>
            {[
              { num: '10+', label: 'Shipped Builds', sub: 'Full Stack & Frontend' },
              { num: '235', label: 'LeetCode Solved', sub: '178 Easy · 53 Med · 4 Hard' },
              { num: '4+', label: 'Hackathons', sub: 'SIH & Fast Prototypes' },
              { num: '100%', label: 'Responsive', sub: 'Mobile to Desktop' },
            ].map(stat => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3, borderColor: 'rgba(192, 132, 252, 0.45)', boxShadow: '0 8px 24px -4px rgba(147, 51, 234, 0.25)' }}
                style={{
                  padding: '16px 14px',
                  borderRadius: 16,
                  background: 'rgba(18, 12, 32, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div className="font-poppins gradient-text-cyan" style={{ fontSize: 26, fontWeight: 800, lineHeight: 1 }}>{stat.num}</div>
                <div className="font-inter" style={{ fontSize: 13, fontWeight: 600, color: '#f1f5f9', marginTop: 8 }}>{stat.label}</div>
                <div className="font-inter" style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>{stat.sub}</div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Image Card */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           style={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            style={{ width: '100%', maxWidth: 380 }}
          >
           <motion.div
             whileHover={{ scale: 1.02 }}
             className="about-image-container"
             style={{
               position: 'relative',
               width: '100%',
               aspectRatio: '4/5',
               borderRadius: 24,
               padding: 8,
               background: 'linear-gradient(135deg, rgba(168,85,247,0.35), rgba(192,132,252,0.25))',
               boxShadow: '0 0 40px rgba(147,51,234,0.3)',
             }}
           >
             <div style={{
               position: 'absolute',
               inset: 0,
               borderRadius: 24,
               background: 'linear-gradient(135deg, #9333ea, #c084fc)',
               opacity: 0.5,
               filter: 'blur(12px)',
               zIndex: -1
             }} />
             <motion.div
               style={{
                 width: '100%',
                 height: '100%',
                 overflow: 'hidden',
                 borderRadius: 16,
               }}
             >
               <motion.img
                 src="https://res.cloudinary.com/due7cp0hz/image/upload/v1788281826/profilepic_jtzu9k.png"
                 alt="Jal Patel Profile"
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.4, ease: "easeOut" }}
                 style={{
                   width: '100%',
                   height: '100%',
                   objectFit: 'cover',
                   display: 'block'
                 }}
               />
             </motion.div>
           </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
