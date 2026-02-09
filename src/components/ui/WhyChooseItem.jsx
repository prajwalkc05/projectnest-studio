import { motion } from 'framer-motion';
import { useState } from 'react';

const WhyChooseItem = ({ icon, title, description, delay = 0 }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setTimeout(() => setIsActive(false), 300)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(0.75rem, 2vw, 1rem)',
        padding: 'clamp(1.5rem, 4vw, 2rem)',
        background: isActive ? 'rgba(30, 41, 59, 0.5)' : 'rgba(30, 41, 59, 0.3)',
        borderRadius: '16px',
        border: `1px solid ${isActive ? 'rgba(251, 146, 60, 0.4)' : 'rgba(251, 146, 60, 0.2)'}`,
        cursor: 'pointer',
        transition: 'background 0.3s ease, border 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        willChange: 'transform',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Icon */}
      <motion.div
        animate={{
          scale: isActive ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          fontSize: 'clamp(2rem, 5vw, 2.5rem)',
          lineHeight: 1,
          filter: isActive ? 'drop-shadow(0 0 15px rgba(251, 146, 60, 0.5))' : 'none',
          position: 'relative',
          zIndex: 1,
          willChange: 'transform',
        }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h3
        style={{
          fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
          fontWeight: '600',
          color: isActive ? '#fb923c' : '#f1f5f9',
          lineHeight: '1.3',
          margin: 0,
          position: 'relative',
          zIndex: 1,
          transition: 'color 0.3s ease',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: 'clamp(0.9rem, 2vw, 0.9375rem)',
          color: '#94a3b8',
          lineHeight: '1.7',
          margin: 0,
          position: 'relative',
          zIndex: 1,
          opacity: isActive ? 1 : 0.8,
          transition: 'opacity 0.3s ease',
        }}
      >
        {description}
      </p>

      {/* Bottom Accent Line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '3px',
          width: isActive ? '100%' : '0%',
          background: 'linear-gradient(90deg, #fb923c, #f97316, #ea580c)',
          borderRadius: '0 0 16px 16px',
          transition: 'width 0.4s ease',
        }}
      />
    </motion.div>
  );
};

export default WhyChooseItem;
