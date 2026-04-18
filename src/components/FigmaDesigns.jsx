import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const designs = [
  {
    title: 'Sports Mobile App UI Design',
    description:
      'Designed and explored a modern sports mobile application UI using Figma. Worked with a community UI kit to understand layout structure, user flow, and responsive design principles.',
    image: '/sports-app-ui-preview.png',
    figma:
      'https://www.figma.com/design/mzlpCCUhDjSqUqRMTxf3wZ/Sport-Mobile-APP-UI-Kit--Community-',
    tags: ['Figma', 'UI/UX', 'Mobile Design'],
    gradient: 'linear-gradient(135deg, rgba(14,165,233,0.18), rgba(34,211,238,0.1))',
    buttonLabel: 'Open in Figma',
    badge: 'Figma Design',
  },
  {
    title: 'Hospital Management Dashboard — UI/UX Prototype',
    description:
      'Designed and developed an interactive mobile application prototype using Figma. Focused on user flow, navigation, and smooth UI transitions.',
    image: '/mobile-prototype-preview.png',
    figma: 'https://www.figma.com/proto/ZMCchAD2ysy2QF0XSHMIXq/Untitled',
    tags: ['Figma', 'Prototype', 'Interaction Design'],
    gradient: 'linear-gradient(135deg, rgba(162,89,255,0.18), rgba(14,165,233,0.12))',
    buttonLabel: 'View Prototype',
    badge: 'Figma Prototype',
  },
]

// Figma wordmark SVG icon
function FigmaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
    </svg>
  )
}

function DesignCard({ design, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card"
      style={{ borderRadius: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* Preview Image */}
      <div
        style={{
          height: 240,
          background: design.gradient,
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <img
          src={design.image}
          alt={design.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />

        {/* Figma badge */}
        <div
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 100,
            padding: '5px 12px',
            fontSize: 11,
            fontWeight: 600,
            color: '#e2e8f0',
            letterSpacing: '0.06em',
          }}
        >
          <FigmaIcon />
          {design.badge}
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '26px 28px 28px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
          {design.tags.map(tag => (
            <span
              key={tag}
              className="font-inter"
              style={{
                fontSize: 10.5,
                padding: '3px 11px',
                borderRadius: 100,
                background: 'rgba(34,211,238,0.1)',
                border: '1px solid rgba(34,211,238,0.2)',
                color: '#22d3ee',
                letterSpacing: '0.04em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          className="font-poppins"
          style={{ fontSize: 18, fontWeight: 700, color: '#f8fafc', lineHeight: 1.3, margin: 0 }}
        >
          {design.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.75, margin: 0 }}>
          {design.description}
        </p>

        {/* Open in Figma Button */}
        <div style={{ marginTop: 'auto', paddingTop: 8 }}>
          <motion.a
            href={design.figma}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 22px',
              borderRadius: 10,
              background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(34,211,238,0.1))',
              border: '1px solid rgba(14,165,233,0.35)',
              color: '#0ea5e9',
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.04em',
              transition: 'all 0.3s ease',
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(14,165,233,0.28), rgba(34,211,238,0.18))'
              e.currentTarget.style.borderColor = 'rgba(14,165,233,0.7)'
              e.currentTarget.style.color = '#22d3ee'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(14,165,233,0.2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(34,211,238,0.1))'
              e.currentTarget.style.borderColor = 'rgba(14,165,233,0.35)'
              e.currentTarget.style.color = '#0ea5e9'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <FigmaIcon />
            {design.buttonLabel}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function FigmaDesigns() {
  return (
    <SectionWrapper id="figma-designs">
      <SectionLabel>UI / UX Work</SectionLabel>
      <SectionTitle>
        Figma <span className="gradient-text-cyan">Designs</span>
      </SectionTitle>

      <p
        className="font-inter"
        style={{ fontSize: 16, color: '#94a3b8', maxWidth: 560, lineHeight: 1.75, marginBottom: 48 }}
      >
        Crafting intuitive interfaces and exploring user experience patterns through Figma design systems and community kits.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 32,
        }}
      >
        {designs.map((design, i) => (
          <DesignCard key={design.title} design={design} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
