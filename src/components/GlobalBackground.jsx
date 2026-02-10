import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GlobalBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      background: 'linear-gradient(180deg, #020617 0%, #0f172a 40%, #1e293b 70%, #0f172a 100%)',
      overflow: 'hidden',
    }}>
      {/* Static Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(251, 146, 60, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 146, 60, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          opacity: 0.2,
        }}
      />

      {/* Subtle Orbs */}
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.25), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
        }}
      />

      <motion.div
        animate={{
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.2), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
        }}
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(234, 88, 12, 0.18), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
        }}
      />



      {/* Minimal Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -200, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 2,
          }}
          style={{
            position: 'absolute',
            top: `${20 + (i * 10) % 60}%`,
            left: `${10 + (i * 12) % 80}%`,
            width: '4px',
            height: '4px',
            background: i % 2 === 0 ? '#fb923c' : '#f97316',
            borderRadius: '50%',
            boxShadow: `0 0 10px ${i % 2 === 0 ? 'rgba(251, 146, 60, 0.4)' : 'rgba(249, 115, 22, 0.4)'}`,
          }}
        />
      ))}

      {/* Subtle Light Flashes */}
      <motion.div
        animate={{
          opacity: [0, 0.5, 0],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.7), transparent 55%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          transform: 'translateX(-50%)',
        }}
      />

      <motion.div
        animate={{
          opacity: [0, 0.45, 0],
          scale: [0.9, 1.3, 0.9],
        }}
        transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 1.5, delay: 4 }}
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '30%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.65), transparent 55%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />

      <motion.div
        animate={{
          opacity: [0, 0.48, 0],
          scale: [0.85, 1.25, 0.85],
        }}
        transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1.2, delay: 2 }}
        style={{
          position: 'absolute',
          top: '55%',
          right: '20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(234, 88, 12, 0.6), transparent 55%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />

      {/* Static Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 30%, rgba(251, 146, 60, 0.06), transparent 60%)',
          opacity: 0.5,
        }}
      />
    </div>
  );
};

export default GlobalBackground;
