import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SpotlightCard from './SpotlightCard'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'
import { trackProjectClick, trackProjectView } from '../utils/analytics'

// Mock Data
const projects = [
  {
    name: 'True Value',
    emoji: '🏪',
    image: '/true-value-preview.jpg',
    live: 'https://truevalueclone.netlify.app/',
    code: 'https://github.com/jalpatel2646/truevalue-clone',
    youtube: '',
    figma: '',
    desc: 'A full-featured e-commerce platform with cart management, advanced filtering, and product management dashboard.',
    problem: 'Modern e-commerce dashboards often struggle with load times and convoluted navigation systems that frustrate end-users.',
    solution: 'Engineered a seamless, React-driven single page application leveraging Redux for state management, lowering load times and increasing engagement metrics.',
    techStack: 'React • Redux • Tailwind • Express • MongoDB',
    tags: ['React', 'Redux', 'Tailwind'],
    category: 'Full Stack Applications',
    gradient: 'linear-gradient(135deg, rgba(102,126,234,0.18), rgba(118,75,162,0.12))',
  },
  {
    name: 'Ritual',
    emoji: '🌿',
    image: 'https://th.bing.com/th/id/OIP.rP3T_8f79ckhjSaJsIDVDQHaEE?w=301&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3',
    live: 'https://ritualclone.netlify.app/',
    code: 'https://github.com/jalpatel2646/websiteclone-4',
    youtube: '',
    figma: '',
    desc: 'Immersive wellness brand website with fluid animations, scroll-driven storytelling, and elegant UI.',
    problem: 'Standard brand websites fail to establish emotional connection due to static and uninspiring interfaces.',
    solution: 'Integrated Framer Motion and intersection observers to create a delightful, narrative-driven scrolling experience.',
    techStack: 'React • Framer Motion • CSS Modules',
    tags: ['React', 'CSS Modules', 'Framer Motion'],
    category: 'Clones',
    gradient: 'linear-gradient(135deg, rgba(240,147,251,0.15), rgba(245,87,108,0.12))',
  },
  {
    name: 'Crowngram',
    emoji: '🌐',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Saint_Edward%27s_Crown.jpg/250px-Saint_Edward%27s_Crown.jpg',
    live: 'https://crowngram1.netlify.app/',
    code: 'https://github.com/jalpatel2646/Crowngram',
    youtube: '',
    figma: '',
    desc: 'Interactive 3D web experience with particle systems, WebGL shaders, and scroll-driven narratives.',
    problem: 'Web experiences often lack depth and interactive discovery elements for premium digital products.',
    solution: 'Built a custom WebGL pipeline using Three.js and GSAP for highly performant, browser-based 3D rendering.',
    techStack: 'Three.js • GSAP • HTML5 Canvas',
    tags: ['Three.js', 'GSAP'],
    category: 'Frontend Projects',
    gradient: 'linear-gradient(135deg, rgba(79,172,254,0.15), rgba(0,242,254,0.1))',
  },
  {
    name: 'Boll & Branch',
    emoji: '🛏️',
    image: 'https://stylecaster.com/wp-content/uploads/2023/10/Boll-and-Branch.jpg',
    live: 'https://bollandbranchh.netlify.app/',
    code: 'https://github.com/jalpatel2646/websiteclone-7',
    youtube: '',
    figma: '',
    desc: 'Luxury bedding brand clone with checkout flow, Stripe payments, and headless CMS integration.',
    problem: 'Ensuring safe, frictionless, and secure payment flows in a bespoke frontend architecture is technically demanding.',
    solution: 'Implemented a server-side validated Stripe checkout flow integrated directly into a deeply customized Next.js frontend.',
    techStack: 'Next.js • Node.js • Stripe API • SCSS',
    tags: ['Next.js', 'Stripe', 'SCSS'],
    category: 'Clones',
    gradient: 'linear-gradient(135deg, rgba(67,233,123,0.13), rgba(56,249,215,0.1))',
  },
  
  {
    name: 'Instagram Reel Creator Portfolio',
    emoji: '🎬',
    image: 'https://i.pinimg.com/1200x/c4/28/3d/c4283d11595ae43680ab3e3508874258.jpg',
    imageStyle: { objectFit: 'cover', objectPosition: 'top center' },
    cardHeight: 280,
    live: 'https://darling-blini-47b4d8.netlify.app',
    code: '',
    youtube: '',
    figma: '',
    desc: 'A sleek, modern portfolio website built for an Instagram reel creator. Showcases reels, brand collaborations, and creative work with a visually engaging layout designed to attract brands and followers.',
    problem: 'Content creators on Instagram often lack a professional web presence to showcase their work beyond the app itself, limiting brand collaboration opportunities.',
    solution: 'Designed a dedicated portfolio website that highlights reels, collaborations, and creative identity — giving the creator a professional landing page outside of Instagram.',
    techStack: 'HTML5 • CSS3 • JavaScript',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend Projects',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.14), rgba(251,146,60,0.1))',
  },
  {
    name: 'Shoes',
    emoji: '',
    image: 'https://i.pinimg.com/1200x/d1/19/1f/d1191f1e9870d2920d6d95ce014a8ed7.jpg',
    imageStyle: { objectFit: 'cover', objectPosition: 'top center' },
    cardHeight: 280,
    live: 'https://precious-platypus-02be70.netlify.app',
    code: '',
    youtube: '',
    figma: '',
    desc: 'Designed and developed a premium luxury fashion e-commerce experience inspired by high-end fashion brands. Features an elegant editorial layout, sophisticated product galleries, advanced filtering and sorting, interactive product previews, wishlist, shopping cart and fully responsive design with smooth animations.',
    problem: 'High-end fashion brands often struggle to translate their editorial identity and luxury feel into digital experiences that feel equally premium and immersive.',
    solution: 'Crafted a visually rich, editorial-style layout with sophisticated product galleries, advanced filtering, and smooth micro-animations that capture the essence of luxury fashion.',
    techStack: 'HTML5 • Vanilla CSS3 • Vanilla JavaScript',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend Projects',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.14), rgba(251,207,232,0.1))',
  },
  {
    name: 'Corkcicle',
    emoji: '🧊',
    image: 'https://arbutuscrafts.com/wp-content/uploads/2024/03/00-2020-Sport-Canteen1.webp',
    live: 'https://cockcicleclone.netlify.app/',
    code: 'https://github.com/jalpatel2646/websiteclone-3',
    youtube: '',
    figma: '',
    desc: 'Premium drinkware brand landing page with playful micro-interactions and vibrant visual design.',
    problem: 'Creating an appealing visual showcase for physical products on a purely digital medium can feel flat.',
    solution: 'Designed robust vanilla web animations utilizing intricate CSS micro-interactions that elevate the perceived brand quality.',
    techStack: 'HTML5 • Vanilla CSS3 • Vanilla JavaScript',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend Projects',
    gradient: 'linear-gradient(135deg, rgba(161,140,209,0.14), rgba(251,194,235,0.1))',
  },
]

// Animated Overlay Modal
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        overflow: 'hidden'
      }}
    >
      <motion.div
        initial={{ y: 50, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 30, scale: 0.95 }}
        onClick={e => e.stopPropagation()}
        className="project-modal-inner"
        style={{
          width: '100%',
          maxWidth: 900,
          maxHeight: '90vh',
          background: '#0a0a14',
          borderRadius: 24,
          border: '1px solid rgba(255,255,255,0.1)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Modal Header/Image */}
        <div className="project-modal-header" style={{ position: 'relative', height: project.cardHeight ? project.cardHeight + 130 : 350, background: project.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
          {/* Floating Category Pill */}
        <div style={{ position: 'absolute', top: 14, left: 14, zIndex: 6 }}>
          <span style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.04em',
            padding: '4px 11px',
            borderRadius: 9999,
            background: 'rgba(5, 3, 14, 0.75)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#e2e8f0',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5.5
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: project.live ? '#4ade80' : '#c084fc' }} />
            {project.category}
          </span>
        </div>

        {project.image ? (
            <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', ...(project.imageStyle || {}) }} loading="lazy" />
          ) : (
            <div style={{ width: 80, height: 80, borderRadius: 20, background: 'rgba(168,85,247,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
          )}
          <button 
            onClick={onClose}
            style={{ position: 'absolute', top: 20, right: 20, width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,0,0,0.5)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', zIndex: 10 }}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="project-modal-body" style={{ padding: 'clamp(20px, 4vw, 40px)' }}>
          <h2 className="font-poppins gradient-text-cyan" style={{ fontSize: 'clamp(22px,5vw,36px)', fontWeight: 800, marginBottom: 12 }}>{project.name}</h2>
          <p style={{ color: '#94a3b8', fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>{project.desc}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: 24, borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 className="font-poppins" style={{ color: '#c084fc', fontSize: 18, marginBottom: 12, fontWeight: 600 }}>The Problem</h3>
              <p style={{ color: '#cbd5e1', fontSize: 15, lineHeight: 1.7 }}>{project.problem}</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: 24, borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 className="font-poppins" style={{ color: '#63b3ed', fontSize: 18, marginBottom: 12, fontWeight: 600 }}>The Solution</h3>
              <p style={{ color: '#cbd5e1', fontSize: 15, lineHeight: 1.7 }}>{project.solution}</p>
            </div>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 className="font-poppins" style={{ color: '#e2e8f0', fontSize: 16, marginBottom: 12, fontWeight: 600 }}>Tech Stack</h3>
            <div className="font-inter" style={{ color: '#c084fc', fontSize: 15, padding: '12px 20px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: 12, display: 'inline-block' }}>
              {project.techStack}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-hero-primary" style={{ padding: '12px 28px', fontSize: 14 }}>
                Visit Live Site
              </a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn-hero-secondary" style={{ padding: '12px 28px', fontSize: 14 }}>
                View GitHub
              </a>
            )}
            {project.youtube && (
              <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="btn-hero-secondary" style={{ padding: '12px 28px', fontSize: 14 }}>
                View Demo Video
              </a>
            )}
            {project.figma && (
              <a href={project.figma} target="_blank" rel="noopener noreferrer" className="btn-hero-secondary" style={{ padding: '12px 28px', fontSize: 14 }}>
                View Figma
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, onClick, featured = false, className = '' }) {
  return (
    <SpotlightCard
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -7, boxShadow: '0 24px 60px rgba(14,165,233,0.18)' }}
      className={`flex ${featured ? 'flex-col lg:flex-row' : 'flex-col'} ${className}`}
      onClick={() => onClick(project)}
      style={{ 
        borderRadius: 24, 
        cursor: 'pointer', 
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Thumbnail */}
      <div 
        className="project-image-container"
        style={{ 
          height: featured ? '100%' : (project.cardHeight || 220), 
          minHeight: project.cardHeight || 220,
          flex: featured ? '1.2' : 'none',
          background: project.gradient, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: 56, 
          position: 'relative', 
          overflow: 'hidden' 
        }}
      >
        {/* Floating Category Pill */}
        <div style={{ position: 'absolute', top: 14, left: 14, zIndex: 6 }}>
          <span style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.04em',
            padding: '4px 11px',
            borderRadius: 9999,
            background: 'rgba(5, 3, 14, 0.75)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#e2e8f0',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5.5
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: project.live ? '#4ade80' : '#c084fc' }} />
            {project.category}
          </span>
        </div>

        {project.image ? (
          <img 
            src={project.image} 
            alt={project.name} 
            className="project-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)', ...(project.imageStyle || {}) }} 
            loading="lazy" 
          />
        ) : (
          <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(168,85,247,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          </div>
        )}
        
        {/* Dark overlay on hover */}
        <div 
          className="project-overlay"
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'rgba(4,4,15,0.5)', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.4s',
            zIndex: 5 
          }}
        >
           <span className="btn-hero-primary" style={{ transform: 'scale(0.9)', padding: '10px 24px' }}>View Details</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: featured ? '48px 40px' : '24px 26px', flex: featured ? '1' : 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {featured && (
          <span style={{ color: '#c084fc', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
            ⭐ Featured Project
          </span>
        )}
        <div className="font-poppins" style={{ fontSize: featured ? 28 : 19, fontWeight: 700, marginBottom: 12, color: '#f8fafc' }}>{project.name}</div>
        <div style={{ fontSize: featured ? 15 : 14, color: '#94a3b8', lineHeight: 1.8, marginBottom: 20 }}>{project.desc}</div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-inter"
              style={{ fontSize: 11, padding: '4px 12px', borderRadius: 100, background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(192,132,252,0.25)', color: '#c084fc', letterSpacing: '0.03em' }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div style={{ display: 'flex', gap: 14, marginTop: 16 }}>
          {project.code && <a href={project.code} onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 13, fontWeight: 500, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 4 }} onMouseEnter={e => e.currentTarget.style.color='#e2e8f0'} onMouseLeave={e => e.currentTarget.style.color='#94a3b8'}><span>⌥</span> GitHub</a>}
          {project.live && <a href={project.live} onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 13, fontWeight: 500, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 4 }} onMouseEnter={e => e.currentTarget.style.color='#e2e8f0'} onMouseLeave={e => e.currentTarget.style.color='#94a3b8'}><span>🌐</span> Live</a>}
          {project.youtube && <a href={project.youtube} onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 13, fontWeight: 500, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 4 }} onMouseEnter={e => e.currentTarget.style.color='#e2e8f0'} onMouseLeave={e => e.currentTarget.style.color='#94a3b8'}><span>▶</span> YouTube</a>}
          {project.figma && <a href={project.figma} onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 13, fontWeight: 500, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 4 }} onMouseEnter={e => e.currentTarget.style.color='#e2e8f0'} onMouseLeave={e => e.currentTarget.style.color='#94a3b8'}><span>🎨</span> Figma</a>}
        </div>
      </div>
    </SpotlightCard>
  )
}

function ProjectViewTracker({ projectName }) {
  useEffect(() => { trackProjectView(projectName) }, [projectName])
  return null
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Games', 'Clones', 'Full Stack Applications', 'Frontend Projects'];
  
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  // Prevent scroll when modal open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <>
      <SectionWrapper id="projects">
        <SectionLabel>My Work</SectionLabel>
        <SectionTitle>
          Featured <span className="gradient-text-cyan">Projects</span>
        </SectionTitle>

        <div className="project-filter-bar" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32, justifyContent: 'center' }}>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '8px 20px',
                borderRadius: 100,
                background: activeFilter === filter ? 'rgba(168, 85, 247, 0.18)' : 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${activeFilter === filter ? 'rgba(192, 132, 252, 0.45)' : 'rgba(255, 255, 255, 0.1)'}`,
                color: activeFilter === filter ? '#c084fc' : '#94a3b8',
                fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Asymmetric Bento Grid (Apple/Linear Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 mt-8 md:mt-12">
          {filteredProjects.map((p, i) => {
            const getBentoSpan = () => {
              if (activeFilter !== 'All') return 'lg:col-span-4'
              if (i === 0) return 'lg:col-span-12'
              if (i === 1) return 'lg:col-span-7'
              if (i === 2) return 'lg:col-span-5'
              return 'lg:col-span-6'
            }

            return (
              <ProjectCard 
                key={p.name} 
                project={p} 
                featured={i === 0 && activeFilter === 'All'} 
                className={getBentoSpan()}
                onClick={(proj) => { trackProjectClick(proj.name); setSelectedProject(proj) }}
              />
            )
          })}
        </div>
      </SectionWrapper>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
        {selectedProject && <ProjectViewTracker projectName={selectedProject.name} />}
      </AnimatePresence>
    </>
  )
}
