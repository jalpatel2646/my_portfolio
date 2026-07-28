import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ setLoading }) => {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } }}
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#09090b',
        zIndex: 99999,
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Inter:wght@300;400;500&display=swap');
          
          .landing-btn {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: transparent;
            color: #d1d5db;
            padding: 14px 40px;
            font-size: 11px;
            letter-spacing: 0.3em;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.4s ease;
            text-transform: uppercase;
            font-family: 'Inter', sans-serif;
            margin-top: 50px;
          }

          .landing-btn:hover {
            border-color: #0ea5e9;
            color: #0ea5e9;
            background: rgba(14, 165, 233, 0.05);
            box-shadow: 0 0 15px rgba(14, 165, 233, 0.15);
          }
        `}
      </style>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Name Block */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 15, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ 
              fontFamily: "'Alex Brush', cursive", 
              fontSize: 'clamp(5rem, 12vw, 8rem)', 
              color: '#0ea5e9', 
              margin: 0, 
              lineHeight: 1, 
              transform: 'translateX(-0.35em)',
              fontWeight: 400
            }}
          >
            Jal
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: -15, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
            style={{ 
              fontFamily: "'Alex Brush', cursive", 
              fontSize: 'clamp(5rem, 12vw, 8rem)', 
              color: '#f8fafc', 
              margin: 0, 
              lineHeight: 1, 
              marginTop: '-0.15em', 
              transform: 'translateX(0.3em)',
              fontWeight: 400
            }}
          >
            Patel
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div 
           initial={{ width: 0, opacity: 0 }}
           animate={{ width: 140, opacity: 1 }}
           transition={{ delay: 1.2, duration: 1, ease: 'easeInOut' }}
           style={{ height: 1, background: '#0ea5e9', margin: '40px auto 25px' }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1, ease: 'easeOut' }}
          style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontSize: 10, 
            letterSpacing: '0.45em', 
            color: '#94a3b8', 
            textTransform: 'uppercase', 
            margin: 0,
            paddingLeft: '0.45em' /* optically center due to tracking */
          }}
        >
          Full Stack Developer
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8, ease: 'easeOut' }}
          className="landing-btn"
          onClick={() => setLoading(false)}
        >
          View Portfolio
        </motion.button>

      </div>
    </motion.div>
  );
};

export default Loader;
