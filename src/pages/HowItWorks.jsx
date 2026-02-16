import { motion } from 'framer-motion';
import ProcessStep from '../components/ui/ProcessStep';

const HowItWorks = () => {
  const steps = [
    {
      step: 'Step 1',
      icon: '💬',
      title: 'Discuss Requirements',
      description: 'Share your project vision and technical requirements',
    },
    {
      step: 'Step 2',
      icon: '📋',
      title: 'Scope & Confirmation',
      description: 'Receive detailed proposal with timeline and pricing',
    },
    {
      step: 'Step 3',
      icon: '⚙️',
      title: 'Development',
      description: 'Expert team builds with regular milestone updates',
    },
    {
      step: 'Step 4',
      icon: '🔍',
      title: 'Review & Refine',
      description: 'Test and provide feedback for revisions',
    },
    {
      step: 'Step 5',
      icon: '🚀',
      title: 'Delivery',
      description: 'Complete source code and documentation',
    },
    {
      step: 'Step 6',
      icon: '🛡️',
      title: 'Post-Delivery Support',
      description: 'Ongoing support and technical guidance',
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{
        padding: 'clamp(3rem, 8vw, 5rem) 1rem',
        position: 'relative',
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 4rem)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            animate={{
              boxShadow: [
                '0 0 15px rgba(251, 146, 60, 0.2)',
                '0 0 25px rgba(251, 146, 60, 0.4)',
                '0 0 15px rgba(251, 146, 60, 0.2)',
              ],
            }}
            style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              background: 'rgba(251, 146, 60, 0.15)',
              border: '1px solid rgba(251, 146, 60, 0.4)',
              borderRadius: '50px',
              fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
              fontWeight: '600',
              color: '#fb923c',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              letterSpacing: '0.05em',
              backdropFilter: 'blur(10px)',
              textTransform: 'uppercase',
            }}
          >
            Process
          </motion.div>

          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4.5vw, 2.5rem)',
              fontWeight: '700',
              color: '#f1f5f9',
              marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)',
              background: 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2',
            }}
          >
            How It Works
          </h2>

          <p
            style={{
              color: '#94a3b8',
              fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            A streamlined process designed for clarity and exceptional results
          </p>
        </motion.div>

        {/* Horizontal Zigzag Timeline Steps */}
        <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            position: 'relative',
          }}>
            {steps.map((stepData, index) => {
              const isTop = index % 2 === 0;
              return (
                <div key={index} style={{ position: 'relative' }}>
                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, y: isTop ? -50 : 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '1.5rem',
                    }}
                  >
                    {/* Card positioned above or below */}
                    {isTop && (
                      <motion.div
                        whileHover={{ scale: 1.05, y: -8, boxShadow: '0 12px 32px rgba(251, 146, 60, 0.3)' }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          background: 'rgba(30, 41, 59, 0.6)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(251, 146, 60, 0.2)',
                          borderRadius: '16px',
                          padding: 'clamp(1.25rem, 3vw, 1.5rem)',
                          textAlign: 'center',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                          minHeight: 'clamp(160px, 20vw, 180px)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#fb923c', fontWeight: '600', marginBottom: '0.5rem' }}>
                          {stepData.step}
                        </div>
                        <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: '700', color: '#f1f5f9', marginBottom: '0.5rem' }}>
                          {stepData.title}
                        </h3>
                        <p style={{ color: '#94a3b8', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', lineHeight: '1.5' }}>
                          {stepData.description}
                        </p>
                      </motion.div>
                    )}

                    {/* Center Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        width: 'clamp(60px, 8vw, 70px)',
                        height: 'clamp(60px, 8vw, 70px)',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #fb923c, #f97316)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
                        boxShadow: '0 8px 24px rgba(251, 146, 60, 0.4)',
                        border: '3px solid rgba(251, 146, 60, 0.3)',
                        position: 'relative',
                        zIndex: 2,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {stepData.icon}
                    </motion.div>

                    {/* Card positioned below */}
                    {!isTop && (
                      <motion.div
                        whileHover={{ scale: 1.05, y: 8, boxShadow: '0 12px 32px rgba(251, 146, 60, 0.3)' }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          background: 'rgba(30, 41, 59, 0.6)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(251, 146, 60, 0.2)',
                          borderRadius: '16px',
                          padding: 'clamp(1.25rem, 3vw, 1.5rem)',
                          textAlign: 'center',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                          minHeight: 'clamp(160px, 20vw, 180px)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#fb923c', fontWeight: '600', marginBottom: '0.5rem' }}>
                          {stepData.step}
                        </div>
                        <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: '700', color: '#f1f5f9', marginBottom: '0.5rem' }}>
                          {stepData.title}
                        </h3>
                        <p style={{ color: '#94a3b8', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', lineHeight: '1.5' }}>
                          {stepData.description}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Connecting Line to Next Step - Hidden on mobile */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        right: 'calc(-1 * clamp(2rem, 4vw, 3rem))',
                        width: 'clamp(2rem, 4vw, 3rem)',
                        height: '2px',
                        background: 'linear-gradient(90deg, rgba(251, 146, 60, 0.5), rgba(251, 146, 60, 0.2))',
                        transformOrigin: 'left',
                        zIndex: 1,
                        display: window.innerWidth <= 768 ? 'none' : 'block',
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
