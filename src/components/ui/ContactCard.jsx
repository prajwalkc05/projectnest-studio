import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactCard = ({ icon, title, info, link, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.25rem',
        background: 'rgba(30, 41, 59, 0.4)',
        border: `1px solid ${isHovered ? 'rgba(251, 146, 60, 0.4)' : 'rgba(251, 146, 60, 0.2)'}`,
        borderRadius: '12px',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(251, 146, 60, 0.15)',
          borderRadius: '10px',
          fontSize: '1.5rem',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <h4 style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#f1f5f9', marginBottom: '0.25rem' }}>
          {title}
        </h4>
        <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: 0 }}>
          {info}
        </p>
      </div>
    </motion.a>
  );
};

export default ContactCard;
