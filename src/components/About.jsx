import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

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
    url: 'mailto:jalpatel2646@gmail.com',
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
          <p style={{ fontSize: 16, color: '#718096', lineHeight: 1.9, marginBottom: 20 }}>
            Hi, I'm Jal Patel, a passionate Full Stack Web Developer. I specialize in building visually stunning and highly functional web applications. My journey is driven by curiosity and a desire to create impactful digital experiences.
          </p>
          <p style={{ fontSize: 16, color: '#718096', lineHeight: 1.9, marginBottom: 32 }}>
            From designing pixel-perfect interfaces to architecting robust back-end systems, I love every layer of the stack. I'm constantly learning, building, and growing — one commit at a time.
          </p>

          <div style={{ display: 'flex', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}>
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                  e.currentTarget.style.borderColor = '#63b3ed'
                  e.currentTarget.style.color = '#63b3ed'
                  e.currentTarget.style.background = 'rgba(99,179,237,0.1)'
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
             style={{
               position: 'relative',
               width: '100%',
               aspectRatio: '4/5',
               borderRadius: 24,
               padding: 8,
               background: 'linear-gradient(135deg, rgba(14,165,233,0.3), rgba(34,211,238,0.3))',
               boxShadow: '0 0 30px rgba(14,165,233,0.2)',
             }}
           >
             <div style={{
               position: 'absolute',
               inset: 0,
               borderRadius: 24,
               background: 'linear-gradient(135deg, #0ea5e9, #22d3ee)',
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
                 src="https://res.cloudinary.com/diipavxsd/image/upload/f_auto,q_auto/Gemini_Generated_Image_1hwauc1hwauc1hwa_fk4tyr"
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
