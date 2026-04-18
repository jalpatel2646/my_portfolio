import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const contactItems = [
  { icon: '✉️', label: 'Email', value: 'jal.h.patel.cg@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 96877 14402' },
  { icon: '📍', label: 'Location', value: 'Gujarat, India' },
]

const socials = [
  { label: 'LinkedIn', icon: 'in', href: 'https://www.linkedin.com/in/jal-patel-b7a4a7394/' },
  { label: 'GitHub', icon: '⌥', href: 'https://github.com/jalpatel2646' },
  { label: 'YouTube', icon: '▶', href: 'https://www.youtube.com/@JalPatel-f5l' },
  { label: 'LeetCode', icon: '◧', href: 'https://leetcode.com/u/jall_patel/' },
  { label: 'Twitter (X)', icon: '𝕏', href: 'https://x.com/JalPatel97246' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')

    emailjs.send(
      'service_7mduyca',
      'template_xxxxxx',
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      'your_public_key_here'
    ).then(() => {
      setStatus('success')
      setTimeout(() => setStatus('idle'), 3000)
      setForm({ name: '', email: '', subject: '', message: '' })
    }).catch((error) => {
      console.error(error);
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    })
  }

  return (
    <SectionWrapper id="contact">
      <SectionLabel>Get In Touch</SectionLabel>
      <SectionTitle>
        Let's <span className="gradient-text-blue">Connect</span>
      </SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, marginTop: 48, alignItems: 'start' }}>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-card" style={{ borderRadius: 20, padding: 32 }}>
            <div className="font-poppins" style={{ fontSize: 22, fontWeight: 800, marginBottom: 24 }}>Jal Patel</div>

            {contactItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ borderColor: 'rgba(99,179,237,0.28)' }}
                style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14, padding: '13px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)', transition: 'border-color 0.2s' }}
              >
                <div style={{ width: 38, height: 38, borderRadius: 9, background: 'linear-gradient(135deg,rgba(102,126,234,0.18),rgba(183,148,244,0.12))', border: '1px solid rgba(102,126,234,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, color: '#718096', letterSpacing: '0.07em', textTransform: 'uppercase' }}>{item.label}</div>
                  <div style={{ fontSize: 13.5, fontWeight: 500, marginTop: 2 }}>{item.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px 8px', borderRadius: 10, fontSize: 12, fontWeight: 500, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#718096', cursor: 'pointer', transition: 'all 0.2s', textDecoration: 'none', letterSpacing: '0.04em' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,179,237,0.28)'; e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.background = 'rgba(99,179,237,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#718096'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                >
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-card" style={{ borderRadius: 20, padding: 32 }}>
            <div className="font-poppins" style={{ fontSize: 22, fontWeight: 800, marginBottom: 24 }}>Send a Message</div>

            <form onSubmit={handleSubmit}>
              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
                {[
                  { field: 'name', label: 'Your Name', placeholder: 'John Doe', type: 'text' },
                  { field: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
                ].map(({ field, label, placeholder, type }) => (
                  <div key={field}>
                    <label style={{ display: 'block', fontSize: 11.5, fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#718096', marginBottom: 7 }}>{label}</label>
                    <input
                      required
                      type={type}
                      value={form[field]}
                      onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                      placeholder={placeholder}
                      style={{ width: '100%', padding: '12px 15px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: '#e2e8f0', fontFamily: "'Inter', sans-serif", fontSize: 14, outline: 'none', transition: 'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(99,179,237,0.35)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 11.5, fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#718096', marginBottom: 7 }}>Subject</label>
                <input
                  required
                  type="text"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  placeholder="Project Collaboration"
                  style={{ width: '100%', padding: '12px 15px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: '#e2e8f0', fontFamily: "'Inter', sans-serif", fontSize: 14, outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(99,179,237,0.35)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: 22 }}>
                <label style={{ display: 'block', fontSize: 11.5, fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#718096', marginBottom: 7 }}>Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  style={{ width: '100%', padding: '12px 15px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: '#e2e8f0', fontFamily: "'Inter', sans-serif", fontSize: 14, outline: 'none', resize: 'vertical', transition: 'border-color 0.2s' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(99,179,237,0.35)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: 15, textAlign: 'center', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? '✅ Message Sent!' : status === 'error' ? 'Failed to send ❌' : 'Send Message 🚀'}
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  )
}
