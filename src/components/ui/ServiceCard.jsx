import { motion } from 'framer-motion';
import { useState } from 'react';

const ServiceCard = ({ icon, title, description, delay = 0, index, dark = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isHighlighted = index === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -12 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        background: dark ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.05)',
        padding: 'clamp(1.5rem, 4vw, 2rem)',
        borderRadius: '20px',
        border: isHighlighted 
          ? '2px solid rgba(251, 146, 60, 0.5)' 
          : '1px solid rgba(251, 146, 60, 0.2)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        boxShadow: isHovered
          ? isHighlighted
            ? '0 25px 50px rgba(251, 146, 60, 0.35), 0 0 0 2px rgba(251, 146, 60, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 25px 50px rgba(251, 146, 60, 0.25), 0 0 0 1px rgba(251, 146, 60, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          : isHighlighted
            ? '0 10px 30px rgba(251, 146, 60, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            : '0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Hover Glow Effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.15 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(251, 146, 60, 0.4), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Icon Container */}
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          width: 'clamp(52px, 10vw, 64px)',
          height: 'clamp(52px, 10vw, 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isHovered
            ? 'linear-gradient(135deg, rgba(251, 146, 60, 0.25), rgba(249, 115, 22, 0.3))'
            : 'linear-gradient(135deg, rgba(251, 146, 60, 0.15), rgba(249, 115, 22, 0.2))',
          borderRadius: '14px',
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
          border: '1px solid rgba(251, 146, 60, 0.2)',
          boxShadow: isHovered
            ? '0 8px 20px rgba(251, 146, 60, 0.3)'
            : '0 4px 12px rgba(251, 146, 60, 0.15)',
          transition: 'all 0.3s ease',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.span
          animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.span>
      </motion.div>

      {/* Title */}
      <motion.h3
        animate={{ color: isHovered ? '#fb923c' : '#f1f5f9' }}
        transition={{ duration: 0.3 }}
        style={{ 
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
          fontWeight: '600', 
          marginBottom: 'clamp(0.5rem, 2vw, 0.75rem)', 
          lineHeight: '1.4',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <p style={{ 
        color: '#94a3b8', 
        lineHeight: '1.7',
        fontSize: 'clamp(0.875rem, 2vw, 0.9375rem)',
        position: 'relative',
        zIndex: 1,
      }}>
        {description}
      </p>

      {/* Highlighted Badge */}
      {isHighlighted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.3 }}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.25rem 0.75rem',
            background: 'linear-gradient(135deg, #fb923c, #f97316)',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: '600',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(251, 146, 60, 0.4)',
            zIndex: 2,
          }}
        >
          Popular
        </motion.div>
      )}

      {/* Bottom Accent Line */}
      <motion.div
        animate={{
          width: isHovered ? '100%' : '0%',
        }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #fb923c, #f97316, #ea580c)',
          borderRadius: '0 0 20px 20px',
        }}
      />
    </motion.div>
  );
};

export default ServiceCard;
