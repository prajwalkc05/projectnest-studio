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
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1.5rem, 4vw, 2rem)',
        position: 'relative',
      }}
    >
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 6vw, 3.5rem)' }}
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

        {/* Timeline Steps */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(1.5rem, 4vw, 2rem)',
            position: 'relative',
          }}
        >
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: 'clamp(24px, 5vw, 28px)',
              top: 'clamp(24px, 5vw, 28px)',
              width: '2px',
              background: 'linear-gradient(180deg, rgba(251, 146, 60, 0.5), rgba(251, 146, 60, 0.1))',
              zIndex: 1,
            }}
          />

          {steps.map((stepData, index) => (
            <ProcessStep key={index} {...stepData} delay={index * 0.1} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
