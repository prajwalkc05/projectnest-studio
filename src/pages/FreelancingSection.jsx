import { motion } from 'framer-motion';
import ServiceCard from '../components/ui/ServiceCard';

const FreelancingSection = () => {
  const services = [
    { icon: '🌐', title: 'Website Development', description: 'Custom websites with modern frameworks, responsive design, and optimal performance' },
    { icon: '💼', title: 'Business & Portfolio Sites', description: 'Professional online presence for businesses, agencies, and personal brands' },
    { icon: '📱', title: 'Mobile App Development', description: 'Native and cross-platform mobile applications for iOS and Android' },
    { icon: '⚙️', title: 'Admin Panels & Dashboards', description: 'Intuitive management systems with real-time data visualization' },
    { icon: '📊', title: 'Data Analytics & Reporting', description: 'Business intelligence solutions with interactive charts and insights' },
    { icon: '🔍', title: 'SEO Optimization', description: 'Search engine optimization to improve visibility and organic traffic' },
    { icon: '📢', title: 'Social Media Management', description: 'Content strategy, scheduling, and engagement across platforms' },
    { icon: '🎨', title: 'UI/UX & Branding', description: 'User-centered design, brand identity, and visual communication' },
    { icon: '☁️', title: 'Hosting & Deployment', description: 'Cloud infrastructure setup, CI/CD pipelines, and server management' },
    { icon: '🛠️', title: 'Maintenance & Support', description: 'Ongoing updates, bug fixes, and technical support services' },
  ];

  return (
    <section id="freelancing-section" style={{ 
      padding: '6rem 1rem', 
      position: 'relative',
      width: '100%',
      maxWidth: '100vw',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
            MODULE 2
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
            Freelancing & Digital Solutions
          </h2>
          <p style={{ 
            color: '#94a3b8', 
            fontSize: '1.125rem', 
            maxWidth: '650px', 
            margin: '0 auto',
            lineHeight: '1.7' 
          }}>
            Enterprise-grade digital services for businesses, startups, and entrepreneurs seeking professional solutions
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', 
          gap: 'clamp(1rem, 2.5vw, 1.5rem)'
        }}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              delay={index * 0.08} 
              index={index}
              dark
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelancingSection;
