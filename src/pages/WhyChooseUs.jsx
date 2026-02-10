import { motion } from 'framer-motion';
import WhyChooseItem from '../components/ui/WhyChooseItem';

const WhyChooseUs = () => {
  const values = [
    {
      icon: '✨',
      title: 'Production-Ready Quality',
      description: 'Enterprise-grade code with best practices, testing, and documentation',
    },
    {
      icon: '⏱️',
      title: 'On-Time Delivery',
      description: 'Committed timelines with milestone tracking and transparent progress updates',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Industry-standard security practices and reliable infrastructure',
    },
    {
      icon: '💬',
      title: 'Dedicated Support',
      description: 'Responsive communication and ongoing technical assistance',
    },
    {
      icon: '⚡',
      title: 'Modern Technologies',
      description: 'Latest frameworks and tools for scalable, future-proof solutions',
    },
    {
      icon: '🏆',
      title: 'Proven Track Record',
      description: 'Successfully delivered 200+ projects for students and businesses',
    },
  ];

  return (
    <section
      id="why-choose-us"
      style={{
        padding: 'clamp(4rem, 10vw, 6rem) 1rem',
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
          style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 4rem)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
              padding: '0.5rem 1.25rem',
              background: 'rgba(251, 146, 60, 0.15)',
              border: '1px solid rgba(251, 146, 60, 0.4)',
              borderRadius: '50px',
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
              fontWeight: '600',
              color: '#fb923c',
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(10px)',
            }}
          >
            Why Choose Us
          </motion.div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              fontWeight: '700',
              color: '#f1f5f9',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              lineHeight: '1.2',
              background: 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Built on Trust & Quality
          </h2>

          <p
            style={{
              color: '#94a3b8',
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}
          >
            We deliver exceptional results with transparency, reliability, and a commitment to your success
          </p>
        </motion.div>

        {/* Values Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
          }}
        >
          {values.map((value, index) => (
            <WhyChooseItem key={index} {...value} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
