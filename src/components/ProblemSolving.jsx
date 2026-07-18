import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import SectionWrapper, { SectionLabel, SectionTitle } from './SectionWrapper'

const activityData = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,3,0,1,0,0,4,2]
const levelClass = ['', 'lv1', 'lv2', 'lv3', 'lv4']

export default function ProblemSolving() {
  const [stats, setStats] = useState({
    solvedProblem: 18,
    easySolved: 14,
    mediumSolved: 4,
    hardSolved: 0,
    ranking: '4,275,131',
    totalSubmissions: 263,
    activeDays: 73,
    maxStreak: 48
  });

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const [solvedRes, profileRes] = await Promise.all([
          fetch('https://alfa-leetcode-api.onrender.com/jall_patel/solved'),
          fetch('https://alfa-leetcode-api.onrender.com/jall_patel/profile')
        ]);
        
        if (solvedRes.ok && profileRes.ok) {
          const solvedData = await solvedRes.json();
          const profileData = await profileRes.json();
          
          let maxStreak = 0;
          let activeDays = 0;
          let totalSubmissions = 263;

          if (profileData.submissionCalendar) {
            const calendar = profileData.submissionCalendar;
            const timestamps = Object.keys(calendar).map(Number).sort((a,b)=>a-b);
            activeDays = timestamps.length;
            
            let currentStreak = 0;
            let prevDay = null;
            
            for (let ts of timestamps) {
              const day = Math.floor(ts / 86400);
              if (prevDay === null || day === prevDay + 1) {
                currentStreak++;
              } else if (day > prevDay + 1) {
                currentStreak = 1;
              }
              if (currentStreak > maxStreak) {
                maxStreak = currentStreak;
              }
              prevDay = day;
            }
          }

          if (profileData.totalSubmissions) {
            const allSub = profileData.totalSubmissions.find(s => s.difficulty === 'All');
            if (allSub) {
              totalSubmissions = allSub.submissions;
            }
          }
          
          setStats({
            solvedProblem: solvedData.solvedProblem || 18,
            easySolved: solvedData.easySolved || 14,
            mediumSolved: solvedData.mediumSolved || 4,
            hardSolved: solvedData.hardSolved || 0,
            ranking: profileData.ranking ? profileData.ranking.toLocaleString() : '1,090,087',
            totalSubmissions: totalSubmissions || 263,
            activeDays: activeDays || 73,
            maxStreak: maxStreak || 48
          });
        }
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
      }
    };
    
    fetchLeetCodeData();
  }, []);

  return (
    <SectionWrapper id="problem-solving">
      <SectionLabel>DSA Practice</SectionLabel>
      <SectionTitle>
        Problem <span className="gradient-text-blue">Solving</span>
      </SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 items-center">

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
              <div className="font-inter" style={{ fontSize: 12, color: '#718096' }}>@jall_patel</div>
            </div>
          </div>

          {/* Total */}
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div className="font-poppins gradient-text-blue leetcode-total" style={{ fontSize: 52, fontWeight: 800 }}>{stats.solvedProblem}</div>
            <div style={{ fontSize: 13, color: '#718096', letterSpacing: '0.04em' }}>Total Problems Solved</div>
          </div>

          {/* Easy / Medium / Hard */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {[
              { num: stats.easySolved, label: 'Easy', color: '#68d391' },
              { num: stats.mediumSolved, label: 'Medium', color: '#fbd38d' },
              { num: stats.hardSolved, label: 'Hard', color: '#fc8181' },
            ].map(s => (
              <div key={s.label} className="glass-card" style={{ borderRadius: 10, padding: 14, textAlign: 'center' }}>
                <div className="font-poppins" style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.num}</div>
                <div style={{ fontSize: 11, color: '#718096', marginTop: 3, letterSpacing: '0.04em' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Activity graph */}
          <div style={{ marginBottom: 20 }}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
              <div style={{ fontSize: 14, color: '#e2e8f0', display: 'flex', alignItems: 'center' }}>
                <span className="font-poppins" style={{ fontWeight: 700, fontSize: 16, marginRight: 6 }}>{stats.totalSubmissions}</span>
                <span style={{ color: '#a0aec0' }}>submissions in the past one year</span>
              </div>
              <div style={{ fontSize: 12, color: '#a0aec0', display: 'flex', gap: 12 }}>
                <div>Total active days: <span style={{ fontWeight: 600, color: '#e2e8f0' }}>{stats.activeDays}</span></div>
                <div>Max streak: <span style={{ fontWeight: 600, color: '#e2e8f0' }}>{stats.maxStreak}</span></div>
              </div>
            </div>
            
            <div className="activity-graph-wrap overflow-x-auto pb-4">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: 3, minWidth: 600 }}>
                {activityData.map((v, i) => (
                  <div key={i} className={`graph-cell ${levelClass[v]}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Ranking */}
          <div style={{ textAlign: 'center', fontSize: 12.5, color: '#718096', padding: 10, background: 'rgba(255,255,255,0.03)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)' }}>
            🏆 Ranking: Top {stats.ranking}
          </div>
        </motion.div>

        {/* Right text */}
        <div className="problem-solving-text" style={{ paddingLeft: 12 }}>
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
          <a href="https://leetcode.com/u/jall_patel/" target="_blank" rel="noreferrer">
            <button className="btn-primary">View LeetCode Profile →</button>
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
