import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" style={{
      padding: '6rem 2rem',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #fb923c, #f97316)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Our Works
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Explore our latest projects and see what we've built for our clients
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto 3rem',
        }}>
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(251, 146, 60, 0.2)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                paddingTop: '56.25%',
                background: '#0f172a',
              }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                >
                  <source src={`/videos/project${item}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div style={{ padding: '1rem' }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
                }}>
                  Project {item}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}>
                  Quality work showcase
                </p>
              </div>
            </motion.div>
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
              navigate('/our-works');
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
            View All Works
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
