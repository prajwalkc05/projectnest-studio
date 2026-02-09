import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GlobalBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
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
      {/* Animated Grid */}
      <motion.div
        animate={{ 
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Large Flashing Orbs */}
      <motion.div
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.5), transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          transform: `translateY(${scrollY * 0.15}px)`,
          willChange: 'transform, opacity',
        }}
      />

      <motion.div
        animate={{
          opacity: [0.15, 0.7, 0.15],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '5%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.45), transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          transform: `translateY(${scrollY * 0.1}px)`,
          willChange: 'transform, opacity',
        }}
      />

      <motion.div
        animate={{
          opacity: [0.2, 0.75, 0.2],
          scale: [1, 1.35, 1],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(234, 88, 12, 0.4), transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          transform: `translateY(${scrollY * 0.2}px)`,
          willChange: 'transform, opacity',
        }}
      />

      {/* Pulsing Light Flashes */}
      <motion.div
        animate={{
          opacity: [0, 0.6, 0],
          scale: [0.8, 1.3, 0.8],
        }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.7), transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          transform: 'translateX(-50%)',
        }}
      />

      <motion.div
        animate={{
          opacity: [0, 0.5, 0],
          scale: [0.9, 1.4, 0.9],
        }}
        transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 1.5, delay: 4 }}
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '30%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.6), transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />

      {/* Floating Particles with Glow */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -400, 0],
            x: [0, Math.sin(i) * 60, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
          style={{
            position: 'absolute',
            top: `${10 + (i * 4) % 80}%`,
            left: `${5 + (i * 6) % 90}%`,
            width: '8px',
            height: '8px',
            background: i % 3 === 0 ? '#fb923c' : i % 3 === 1 ? '#f97316' : '#ea580c',
            borderRadius: '50%',
            boxShadow: `0 0 30px ${i % 3 === 0 ? 'rgba(251, 146, 60, 0.9)' : i % 3 === 1 ? 'rgba(249, 115, 22, 0.9)' : 'rgba(234, 88, 12, 0.9)'}`,
            transform: `translateY(${scrollY * (0.05 + i * 0.01)}px)`,
            willChange: 'transform, opacity',
          }}
        />
      ))}

      {/* Animated Gradient Waves */}
      <motion.div
        animate={{
          opacity: [0.3, 0.7, 0.3],
          background: [
            'radial-gradient(ellipse at 30% 40%, rgba(251, 146, 60, 0.15), transparent 50%)',
            'radial-gradient(ellipse at 70% 60%, rgba(251, 146, 60, 0.15), transparent 50%)',
            'radial-gradient(ellipse at 30% 40%, rgba(251, 146, 60, 0.15), transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: 0,
        }}
      />

      {/* Spotlight Effect */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 30%, rgba(251, 146, 60, 0.08), transparent 60%)',
        }}
      />
    </div>
  );
};

export default GlobalBackground;
