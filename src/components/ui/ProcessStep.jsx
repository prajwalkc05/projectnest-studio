import { motion } from 'framer-motion';
import { useState } from 'react';

const ProcessStep = ({ step, icon, title, description, delay = 0, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(1rem, 3vw, 1.5rem)',
        position: 'relative',
      }}
    >
      {/* Icon */}
      <motion.div
        animate={{
          scale: isHovered ? 1.15 : 1,
          boxShadow: isHovered
            ? '0 0 30px rgba(251, 146, 60, 0.6)'
            : '0 0 15px rgba(251, 146, 60, 0.3)',
        }}
        transition={{ duration: 0.3 }}
        style={{
          minWidth: 'clamp(48px, 10vw, 56px)',
          height: 'clamp(48px, 10vw, 56px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isHovered
            ? 'linear-gradient(135deg, rgba(251, 146, 60, 0.3), rgba(249, 115, 22, 0.4))'
            : 'linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(249, 115, 22, 0.25))',
          borderRadius: '50%',
          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
          border: '2px solid rgba(251, 146, 60, 0.4)',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {icon}
      </motion.div>

      {/* Content */}
      <motion.div
        animate={{
          x: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ flex: 1 }}
      >
        <motion.div
          animate={{ color: isHovered ? '#fb923c' : '#64748b' }}
          style={{
            fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
            fontWeight: '600',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '0.25rem',
          }}
        >
          {step}
        </motion.div>
        <h3
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            fontWeight: '600',
            color: '#f1f5f9',
            marginBottom: '0.25rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
            color: '#94a3b8',
            lineHeight: '1.5',
          }}
        >
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProcessStep;
