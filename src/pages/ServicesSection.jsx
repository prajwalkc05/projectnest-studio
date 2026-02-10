import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ui/ServiceCard';

const ServicesSection = () => {
  const navigate = useNavigate();
  const services = [
    { icon: '📝', title: 'Mini & Major Projects', description: 'Complete academic projects with documentation, source code, and presentation support' },
    { icon: '⚡', title: 'Full Stack Projects', description: 'End-to-end web applications with modern frameworks, databases, and deployment' },
    { icon: '📊', title: 'Data Analytics Projects', description: 'Data visualization, machine learning models, and statistical analysis solutions' },
    { icon: '🔐', title: 'Cybersecurity Projects', description: 'Security systems, encryption tools, and vulnerability assessment applications' },
    { icon: '🎉', title: 'College Fest Websites', description: 'Event management platforms with registration, scheduling, and live updates' },
    { icon: '📋', title: 'Reports & Viva Support', description: 'Professional documentation, technical reports, and presentation preparation' },
  ];

  return (
    <section id="academic-section" style={{ 
      padding: '6rem 1rem', 
      position: 'relative',
      width: '100%',
      maxWidth: '100vw',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            animate={{ boxShadow: ['0 0 15px rgba(251, 146, 60, 0.2)', '0 0 25px rgba(251, 146, 60, 0.4)', '0 0 15px rgba(251, 146, 60, 0.2)'] }}
            style={{
              display: 'inline-block',
              padding: '0.5rem 1.25rem',
              background: 'rgba(251, 146, 60, 0.15)',
              border: '1px solid rgba(251, 146, 60, 0.4)',
              borderRadius: '50px',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#fb923c',
              marginBottom: '1.5rem',
              letterSpacing: '0.05em',
              backdropFilter: 'blur(10px)',
            }}
          >
            MODULE 1
          </motion.div>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.75rem)', 
            fontWeight: '700', 
            color: '#f1f5f9', 
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Academic & Student Projects
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7' }}>
            Professional project solutions designed for students, with complete source code, documentation, and technical support
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
          gap: 'clamp(1.25rem, 3vw, 2rem)',
          marginBottom: '3rem',
        }}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} index={index} dark />  
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ textAlign: 'center' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(251, 146, 60, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate('/academic');
              setTimeout(() => window.scrollTo(0, 0), 100);
            }}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #fb923c, #f97316)',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(251, 146, 60, 0.3)',
            }}
          >
            View Details
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
