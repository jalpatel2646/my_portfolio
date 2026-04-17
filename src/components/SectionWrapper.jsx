import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({ children, id, style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ padding: '100px 48px', maxWidth: 1280, margin: '0 auto', ...style }}
    >
      {children}
    </motion.section>
  )
}

export function SectionLabel({ children }) {
  return (
    <div
      className="font-inter section-label-line"
      style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#63b3ed', marginBottom: 14 }}
    >
      {children}
    </div>
  )
}

export function SectionTitle({ children }) {
  return (
    <h2
      className="font-poppins"
      style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 16 }}
    >
      {children}
    </h2>
  )
}
