import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ServicesSection from './ServicesSection';
import FreelancingSection from './FreelancingSection';
import HowItWorks from './HowItWorks';
import WhyChooseUs from './WhyChooseUs';
import Contact from './Contact';
import GlobalBackground from '../components/GlobalBackground';

const Home = () => {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({ projects: 0, clients: 0, tech: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCounts(prev => ({
          projects: prev.projects < 200 ? prev.projects + 8 : 200,
          clients: prev.clients < 50 ? prev.clients + 2 : 50,
          tech: prev.tech < 15 ? prev.tech + 1 : 15,
        }));
      }, 50);
      setTimeout(() => clearInterval(interval), 1500);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <GlobalBackground />
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '6rem 2rem 4rem',
      position: 'relative',
    }}>
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
          },
        }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Animated Badge */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <motion.div
            animate={{ boxShadow: ['0 0 20px rgba(251, 146, 60, 0.3)', '0 0 30px rgba(251, 146, 60, 0.5)', '0 0 20px rgba(251, 146, 60, 0.3)'] }}
            transition={{ duration: 3, repeat: Infinity }}
            whileHover={{ scale: 1.05 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.625rem 1.5rem',
              background: 'rgba(251, 146, 60, 0.1)',
              border: '1px solid rgba(251, 146, 60, 0.4)',
              borderRadius: '50px',
              marginBottom: '2.5rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#fb923c',
              backdropFilter: 'blur(10px)',
            }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              style={{ fontSize: '1.25rem' }}
            >
              ✨
            </motion.span>
            Student Projects & Digital Solutions
          </motion.div>
        </motion.div>

        {/* Main Headline with Word-by-Word Animation */}
        <motion.h1 style={{ fontSize: 'clamp(2.75rem, 8vw, 6rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
            }}
            style={{ display: 'block', color: 'var(--text-primary)' }}
          >
            Build Your Vision,
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } },
            }}
            style={{
              display: 'block',
              background: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px rgba(251, 146, 60, 0.4))',
            }}
          >
            Delivered Right.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
          }}
          style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: '1.8',
          }}
        >
          From academic excellence to enterprise solutions — we transform ideas into production-ready projects. Trusted by students, startups, and professionals worldwide.
        </motion.p>

        {/* CTA Buttons with Magnetic Effect */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
          }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.08, 
              boxShadow: '0 0 60px rgba(251, 146, 60, 0.8), 0 0 100px rgba(251, 146, 60, 0.4)',
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const navbarHeight = 73;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            animate={{
              boxShadow: [
                '0 4px 20px rgba(251, 146, 60, 0.3)',
                '0 4px 30px rgba(251, 146, 60, 0.5)',
                '0 4px 20px rgba(251, 146, 60, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              padding: '1.125rem 2.75rem',
              fontSize: '1.05rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #fb923c, #f97316)',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
            }}
          >
            Start Your Project
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#fb923c', color: '#fb923c', background: 'rgba(251, 146, 60, 0.05)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const element = document.getElementById('freelancing-section');
              if (element) {
                const navbarHeight = 73;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            style={{
              padding: '1.125rem 2.75rem',
              fontSize: '1.05rem',
              fontWeight: '600',
              background: 'rgba(30, 41, 59, 0.5)',
              backdropFilter: 'blur(10px)',
              color: 'var(--text-primary)',
              border: '2px solid rgba(251, 146, 60, 0.3)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Explore Services
          </motion.button>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
          }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            maxWidth: '700px',
            margin: '0 auto',
            padding: '2.5rem',
            background: 'rgba(30, 41, 59, 0.4)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(251, 146, 60, 0.2)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          {[
            { value: counts.projects, label: 'Projects Delivered', suffix: '+' },
            { value: counts.clients, label: 'Happy Clients', suffix: '+' },
            { value: counts.tech, label: 'Technologies', suffix: '+' },
          ].map((metric, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #fb923c, #f97316)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem',
                }}
              >
                {metric.value}{metric.suffix}
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ duration: 0.8, delay: 1.2 + i * 0.1 }}
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, #fb923c, transparent)',
                  margin: '0 auto 0.5rem',
                }}
              />
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
    <ServicesSection />
    <FreelancingSection />
    <HowItWorks />
    <WhyChooseUs />
    <Contact />
    </>
  );
};

export default Home;
