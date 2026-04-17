import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const activityData = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,3,0,1,0,0,4,2]
const levelClass = ['', 'lv1', 'lv2', 'lv3', 'lv4']

export default function ProblemSolving() {
  return (
    <SectionWrapper id="problem-solving">
      <SectionLabel>DSA Practice</SectionLabel>
      <SectionTitle>
        Problem <span className="gradient-text-blue">Solving</span>
      </SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 40, marginTop: 48, alignItems: 'center' }}>

        {/* LeetCode Card */}
        <motion.div
          whileHover={{ y: -6, borderColor: 'rgba(99,179,237,0.25)', boxShadow: '0 20px 60px rgba(102,126,234,0.15)' }}
          className="glass-card"
          style={{ borderRadius: 20, padding: 32, transition: 'all 0.3s' }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: 'linear-gradient(135deg,#ff9500,#ffd60a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 13, color: '#000' }}>
              LC
            </div>
            <div>
              <div className="font-poppins" style={{ fontSize: 16, fontWeight: 700 }}>LeetCode Profile</div>
              <div className="font-inter" style={{ fontSize: 12, color: '#718096' }}>@jalpatel</div>
            </div>
          </div>

          {/* Total */}
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div className="font-poppins gradient-text-blue" style={{ fontSize: 52, fontWeight: 800 }}>18</div>
            <div style={{ fontSize: 13, color: '#718096', letterSpacing: '0.04em' }}>Total Problems Solved</div>
          </div>

          {/* Easy / Medium / Hard */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 24 }}>
            {[
              { num: 14, label: 'Easy', color: '#68d391' },
              { num: 4, label: 'Medium', color: '#fbd38d' },
              { num: 0, label: 'Hard', color: '#fc8181' },
            ].map(s => (
              <div key={s.label} className="glass-card" style={{ borderRadius: 10, padding: 14, textAlign: 'center' }}>
                <div className="font-poppins" style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.num}</div>
                <div style={{ fontSize: 11, color: '#718096', marginTop: 3, letterSpacing: '0.04em' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Activity graph */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 11, color: '#718096', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>Activity</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: 3 }}>
              {activityData.map((v, i) => (
                <div key={i} className={`graph-cell ${levelClass[v]}`} />
              ))}
            </div>
          </div>

          {/* Ranking */}
          <div style={{ textAlign: 'center', fontSize: 12.5, color: '#718096', padding: 10, background: 'rgba(255,255,255,0.03)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)' }}>
            🏆 Ranking: Top 4,275,131
          </div>
        </motion.div>

        {/* Right text */}
        <div style={{ paddingLeft: 12 }}>
          <h3 className="font-poppins" style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: 18 }}>
            Consistency<br />is{' '}
            <span className="gradient-text-blue">Key</span>
          </h3>
          <p style={{ fontSize: 15, color: '#718096', lineHeight: 1.85, marginBottom: 18 }}>
            Every day is an opportunity to sharpen problem-solving skills. Through daily practice on LeetCode, I build algorithmic thinking and deepen my understanding of data structures — one problem at a time.
          </p>
          <p style={{ fontSize: 15, color: '#718096', lineHeight: 1.85, marginBottom: 32 }}>
            Consistent practice transforms challenging problems into opportunities for growth. The journey of solving complex algorithms shapes the way I approach real-world engineering challenges.
          </p>
          <a href="https://leetcode.com" target="_blank" rel="noreferrer">
            <button className="btn-primary">View LeetCode Profile →</button>
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
