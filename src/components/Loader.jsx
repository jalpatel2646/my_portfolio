import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ setLoading }) => {
  const [signatureFinished, setSignatureFinished] = useState(false);

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'blur(10px)',
        transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
      }}
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#05030e',
        zIndex: 99999,
        overflow: 'hidden',
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Inter:wght@300;400;500;600&family=Poppins:wght@600;700&display=swap');
          
          .signature-svg text {
            font-family: 'Alex Brush', cursive;
            user-select: none;
          }

          .enter-btn-luxury {
            border: 1px solid rgba(192, 132, 252, 0.35);
            background: rgba(18, 12, 32, 0.65);
            color: #f1f5f9;
            padding: 13px 36px;
            font-size: 12px;
            letter-spacing: 0.22em;
            border-radius: 9999px;
            cursor: pointer;
            transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            text-transform: uppercase;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            backdrop-filter: blur(16px);
            box-shadow: 0 0 24px -4px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.12);
            display: inline-flex;
            align-items: center;
            gap: 10px;
          }

          .enter-btn-luxury:hover {
            border-color: #c084fc;
            color: #ffffff;
            background: rgba(168, 85, 247, 0.2);
            box-shadow: 0 0 35px rgba(168, 85, 247, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
          }
        `}
      </style>

      {/* Background Technical Dot Grid */}
      <div 
        className="bg-dot-grid pointer-events-none"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.55,
          zIndex: 0
        }}
      />

      {/* Central Ambient Violet Nebula Bloom */}
      <div
        style={{
          position: 'absolute',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(236, 72, 153, 0.08) 55%, transparent 75%)',
          filter: 'blur(70px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Signature & Interactive Container */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          width: '100%',
          maxWidth: 680,
          padding: '0 20px',
        }}
      >
        {/* Animated SVG Signature Draw with Glowing Violet Ink */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <svg 
            viewBox="0 0 520 230" 
            className="signature-svg"
            style={{ 
              width: '100%', 
              maxWidth: 500, 
              height: 'auto',
              overflow: 'visible',
              filter: 'drop-shadow(0 0 22px rgba(168, 85, 247, 0.55))'
            }}
          >
            {/* "Jal" cursive stroke drawing in glowing violet */}
            <motion.text
              x="130"
              y="110"
              fontSize="125"
              fill="#c084fc"
              stroke="#e879f9"
              strokeWidth="1.6"
              initial={{ strokeDasharray: 600, strokeDashoffset: 600, fillOpacity: 0 }}
              animate={{ 
                strokeDashoffset: 0, 
                fillOpacity: 1,
              }}
              transition={{
                strokeDashoffset: { duration: 1.5, ease: 'easeInOut' },
                fillOpacity: { delay: 1.0, duration: 0.8, ease: 'easeOut' }
              }}
            >
              Jal
            </motion.text>

            {/* "Patel" cursive stroke drawing in metallic white with violet glow */}
            <motion.text
              x="220"
              y="190"
              fontSize="125"
              fill="#f8fafc"
              stroke="#ffffff"
              strokeWidth="1.6"
              initial={{ strokeDasharray: 800, strokeDashoffset: 800, fillOpacity: 0 }}
              animate={{ 
                strokeDashoffset: 0, 
                fillOpacity: 1,
              }}
              transition={{
                strokeDashoffset: { duration: 1.6, delay: 0.45, ease: 'easeInOut' },
                fillOpacity: { delay: 1.4, duration: 0.8, ease: 'easeOut' }
              }}
              onAnimationComplete={() => setSignatureFinished(true)}
            >
              Patel
            </motion.text>
          </svg>
        </div>

        {/* Delicate Violet Ink Underline */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 160, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.9, ease: 'easeInOut' }}
          style={{
            height: 1.5,
            background: 'linear-gradient(90deg, transparent, #c084fc, #f472b6, transparent)',
            boxShadow: '0 0 12px rgba(192, 132, 252, 0.8)',
            margin: '20px auto 20px',
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8, ease: 'easeOut' }}
          className="font-inter"
          style={{
            fontSize: 'clamp(10.5px, 1.4vw, 12px)',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: '#cbd5e1',
            margin: '0 0 32px 0',
            fontWeight: 500,
            paddingLeft: '0.32em',
          }}
        >
          Full Stack Developer & UI Craftsman
        </motion.p>

        {/* Luxury Enter Portfolio Button */}
        <motion.button
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.7, ease: 'easeOut' }}
          className="enter-btn-luxury"
          onClick={() => setLoading(false)}
        >
          <span>Explore Portfolio</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Loader;
