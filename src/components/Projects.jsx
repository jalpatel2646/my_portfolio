import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'
import { trackProjectClick, trackProjectView } from '../utils/analytics'

// Mock Data
const projects = [
  {
    name: 'True Value',
    emoji: '🏪',
    image: 'data:image/jpeg;base64,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',
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
    name: 'Cockcicle',
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
        <div className="project-modal-header" style={{ position: 'relative', height: 350, background: project.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
          {project.image ? (
            <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          ) : (
            <span style={{ fontSize: 80 }}>{project.emoji}</span>
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
              <h3 className="font-poppins" style={{ color: '#0ea5e9', fontSize: 18, marginBottom: 12, fontWeight: 600 }}>The Problem</h3>
              <p style={{ color: '#cbd5e1', fontSize: 15, lineHeight: 1.7 }}>{project.problem}</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: 24, borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 className="font-poppins" style={{ color: '#63b3ed', fontSize: 18, marginBottom: 12, fontWeight: 600 }}>The Solution</h3>
              <p style={{ color: '#cbd5e1', fontSize: 15, lineHeight: 1.7 }}>{project.solution}</p>
            </div>
          </div>

          <div style={{ marginBottom: 40 }}>
            <h3 className="font-poppins" style={{ color: '#e2e8f0', fontSize: 16, marginBottom: 12, fontWeight: 600 }}>Tech Stack</h3>
            <div className="font-inter" style={{ color: '#22d3ee', fontSize: 15, padding: '12px 20px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: 12, display: 'inline-block' }}>
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

function ProjectCard({ project, onClick, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(167,139,250,0.15)' }}
      className={`glass-card flex ${featured ? 'lg:col-span-full flex-col lg:flex-row' : 'flex-col'}`}
      onClick={() => onClick(project)}
      style={{ 
        position: 'relative',
        borderRadius: 24, 
        overflow: 'hidden', 
        cursor: 'pointer', 
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(192,132,252,0.3)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
    >
      {/* Thumbnail */}
      <div 
        className="project-image-container"
        style={{ 
          height: featured ? '100%' : 220, 
          minHeight: 220,
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
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.name} 
            className="project-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} 
            loading="lazy" 
          />
        ) : (
          <span style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.3))' }}>{project.emoji}</span>
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
          <span style={{ color: '#0ea5e9', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
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
              style={{ fontSize: 11, padding: '4px 12px', borderRadius: 100, background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee', letterSpacing: '0.03em' }}
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
    </motion.div>
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
                background: activeFilter === filter ? 'rgba(34, 211, 238, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${activeFilter === filter ? 'rgba(34, 211, 238, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`,
                color: activeFilter === filter ? '#22d3ee' : '#94a3b8',
                fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
          {filteredProjects.map((p, i) => (
              <ProjectCard 
                key={p.name} 
                project={p} 
                featured={i === 0 && activeFilter === 'All'} 
                onClick={(proj) => { trackProjectClick(proj.name); setSelectedProject(proj) }}
              />
          ))}
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
