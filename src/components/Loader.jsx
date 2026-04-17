import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ setLoading }) => {
  useEffect(() => {
    // Loader visible for ~2.8s, then trigger fade-out (AnimatePresence handles exit)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#04040f',
        zIndex: 99999,
      }}
    >
      {/* Inner content block */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

        {/* ── Text row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ display: 'flex', alignItems: 'baseline', marginBottom: 18 }}
        >
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 700,
              color: '#e2e8f0',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Jal Patel
          </span>

          {/* Colored dot — delayed so it pops in after the name */}
          <motion.span
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.45, ease: 'easeOut' }}
            style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1,
              marginLeft: 4,
              background: 'linear-gradient(135deg, #0ea5e9, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}
          >
            .
          </motion.span>
        </motion.div>

        {/* ── Expanding line ── */}
        <div
          style={{
            width: '100%',
            height: 2,
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 999,
            overflow: 'hidden',
          }}
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.3 }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #0ea5e9, #22d3ee, #38bdf8)',
              borderRadius: 999,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
