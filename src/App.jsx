import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import ProblemSolving from './components/ProblemSolving'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import HackathonProjects from './components/HackathonProjects'
import Contact from './components/Contact'

function StarCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let stars = []
    let animId

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      stars = Array.from({ length: 220 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.2,
        a: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.004 + 0.001,
        vx: -(Math.random() * 0.3 + 0.1),
        vy: (Math.random() - 0.5) * 0.1,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        s.a += s.speed
        const alpha = Math.max(0, 0.2 + Math.sin(s.a) * 0.4)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.fill()
        
        s.x += s.vx
        s.y += s.vy
        
        if (s.x > canvas.width) s.x = 0
        if (s.x < 0) s.x = canvas.width
        if (s.y > canvas.height) s.y = 0
        if (s.y < 0) s.y = canvas.height
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="stars-canvas" />
}

const FloatingShape = ({ delay, duration, style, size, color }) => (
  <motion.div
    animate={{ y: [0, -30, 0], x: [0, 15, 0], rotate: [0, 45, 0] }}
    transition={{ repeat: Infinity, duration, delay, ease: 'easeInOut' }}
    style={{
      position: 'fixed',
      pointerEvents: 'none',
      opacity: 0.15,
      zIndex: 0,
      width: size,
      height: size,
      border: `1px solid ${color}`,
      borderRadius: '20%',
      ...style
    }}
  />
)

export default function App() {
  const [loading, setLoading] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div onMouseMove={handleMouseMove} style={{ background: '#04040f', minHeight: '100vh', position: 'relative' }}>
      <AnimatePresence>
        {loading && <Loader setLoading={setLoading} />}
      </AnimatePresence>
      {/* Global Mouse Spotlight */}
      <div 
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.08), transparent 40%)`,
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'background 0.1s ease-out'
        }}
      />
      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, #0ea5e9, #22d3ee, #63b3ed)",
          zIndex: 9999
        }}
      />
      <StarCanvas />

      {/* Floating orbs */}
      <div className="orb fixed pointer-events-none"
        style={{ width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(#667eea, transparent)', top: -100, left: -100, filter: 'blur(80px)', opacity: 0.12, zIndex: 0 }} />
      <div className="orb orb-delay-1 fixed pointer-events-none"
        style={{ width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(#764ba2, transparent)', bottom: 100, right: -80, filter: 'blur(80px)', opacity: 0.12, zIndex: 0 }} />
      <div className="orb orb-delay-2 fixed pointer-events-none"
        style={{ width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(#76e4f7, transparent)', top: '40%', left: '50%', filter: 'blur(80px)', opacity: 0.1, zIndex: 0 }} />

      {/* Floating Particles */}
      <FloatingShape size={60} color="#0ea5e9" delay={0} duration={8} style={{ top: '20%', left: '5%' }} />
      <FloatingShape size={40} color="#63b3ed" delay={2} duration={12} style={{ top: '60%', right: '5%' }} />
      <FloatingShape size={80} color="#22d3ee" delay={4} duration={10} style={{ bottom: '10%', left: '15%', borderRadius: '50%' }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <ProblemSolving />
        <Projects />
        <Hackathons />
        <HackathonProjects />
        <Contact />
      </div>
    </div>
  )
}
