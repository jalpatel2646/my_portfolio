import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const hackathonProjects = [
  {
    title: 'AI Cost Intelligence Dashboard',
    description: 'AI Cost Intelligence Dashboard is an AI-powered analytics platform that helps organizations monitor, analyze, and optimize operational costs in real time. It detects spending anomalies, forecasts future expenses, provides intelligent recommendations with confidence scoring, and enables autonomous actions through AI-driven insights, helping businesses make faster, data-driven financial decisions.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['AI', 'Analytics', 'Dashboard'],
    hackathon: 'Hackathon 2026',
    live: 'https://al-cost-intelligence-dashboard.vercel.app/',
    code: 'https://github.com/jalpatel2646/Al-Cost-Intelligence-Dashboard.git'
  },
  {
    title: 'SmartFactory AI — Industrial Management System',
    description: 'LAKSHYA is an AI-powered browser extension that understands the active webpage and provides intelligent, context-aware assistance. It can analyze webpages, summarize articles, understand PDFs, Excel files, and images, summarize YouTube videos, generate quizzes and flashcards, and automatically fill online forms using resume data—all without leaving the browser.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'AI', 'Automation'],
    hackathon: 'Hackathon 2026',
    live: 'https://ps-005-codecrusaders.vercel.app/welcome',
    code: 'https://github.com/VishwaPatel892/PS005-Codecrusaders.git'
  },
  {
    title: 'LAKSHYA – AI Browser Companion',
    description: 'LAKSHYA is an AI-powered browser extension that understands the active webpage and provides intelligent, context-aware assistance. It can analyze webpages, summarize articles, understand PDFs, Excel files, and images, summarize YouTube videos, generate quizzes and flashcards, and automatically fill online forms using resume data—all without leaving the browser.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['JavaScript', 'React', 'Node.js', 'Express.js', 'Chrome Extension', 'AI', 'LLMs'],
    hackathon: "HackSprint '26",
    live: 'https://team-lakshya1.vercel.app/',
    code: 'https://github.com/KHUSHPATEL143/team_lakshya.git'
  }
]

export default function HackathonProjects() {
  return (
    <SectionWrapper id="hackathon-projects">
      <SectionLabel>Live Builds</SectionLabel>
      <SectionTitle>
        Hackathon <span className="gradient-text-cyan">Projects</span>
      </SectionTitle>
      
      <p style={{ color: '#94a3b8', fontSize: 16, maxWidth: 650, margin: '16px 0 48px', lineHeight: 1.6 }}>
        Projects built under pressure — from idea to deployment in hours. Fast, collaborative, and impactful.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {hackathonProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card"
            style={{ 
              borderRadius: 20, 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column', 
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
            }}
          >
            {/* Image Container with Zoom hover */}
            <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
              <motion.img 
                src={project.image} 
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                className="project-img"
              />
              {project.badge && (
                <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(14,165,233,0.9)', color: '#fff', fontSize: 12, fontWeight: 700, padding: '6px 14px', borderRadius: 100, letterSpacing: '0.05em', textTransform: 'uppercase', boxShadow: '0 4px 12px rgba(14,165,233,0.3)' }}>
                  {project.badge}
                </div>
              )}
            </div>

            {/* Content */}
            <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 className="font-poppins" style={{ fontSize: 22, fontWeight: 700, color: '#fff', margin: '0 0 10px 0' }}>{project.title}</h3>
              
              <div className="font-inter" style={{ fontSize: 12, color: '#0ea5e9', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 16 }}>
                {project.hackathon}
              </div>

              <p style={{ color: '#94a3b8', fontSize: 14.5, lineHeight: 1.7, marginBottom: 24, flex: 1 }}>
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                {project.tags.map(tag => (
                  <span key={tag} className="font-inter" style={{ fontSize: 11, padding: '5px 12px', borderRadius: 100, background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee', letterSpacing: '0.02em' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '10px 16px', fontSize: 13, textAlign: 'center', textDecoration: 'none' }}>
                  Live Demo
                </a>
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '10px 16px', fontSize: 13, textAlign: 'center', textDecoration: 'none' }}>
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
