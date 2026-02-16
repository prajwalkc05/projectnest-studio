import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Portfolio = () => {
  const navigate = useNavigate();
  const [previewVideo, setPreviewVideo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (previewVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [previewVideo]);

  const videos = [
    { id: 1, src: '/WhatsApp Video 2026-02-10 at 20.29.13.mp4', title: 'Rich Club', description: 'A clothing website for trending fashion and lifestyle' },
    { id: 2, src: '/WhatsApp Video 2026-02-10 at 20.29.51.mp4', title: 'The Quality Pets', description: 'Pet care and adoption platform with modern features' },
  ];

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
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setPreviewVideo(video)}
              style={{
                background: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(251, 146, 60, 0.2)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                paddingTop: '56.25%',
                background: '#0f172a',
              }}>
                {/* Live Signal Badge */}
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    background: 'rgba(239, 68, 68, 0.9)',
                    borderRadius: '20px',
                    zIndex: 2,
                    boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)',
                  }}
                >
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#fff',
                  }} />
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    Live
                  </span>
                </motion.div>
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
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
              <div style={{ padding: '1rem' }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}>
                  {video.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                  marginBottom: '0.5rem',
                }}>
                  {video.description}
                </p>
                <p style={{
                  fontSize: '0.75rem',
                  color: '#fb923c',
                  fontWeight: '500',
                }}>
                  Click to preview
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
          style={{ textAlign: 'center', marginTop: '3rem' }}
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

        <AnimatePresence>
          {previewVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewVideo(null)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.95)',
                zIndex: 10001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0',
                overflow: 'hidden',
              }}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setPreviewVideo(null)}
                style={{
                  position: 'absolute',
                  top: isMobile ? '80px' : '2rem',
                  right: '1rem',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(251, 146, 60, 0.9)',
                  border: '2px solid #fb923c',
                  color: '#fff',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10000,
                }}
              >
                ✕
              </motion.button>
              <motion.video
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                autoPlay
                loop
                controls
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: isMobile ? '100%' : 'auto',
                  height: isMobile ? 'calc(100vh - 73px)' : 'auto',
                  maxWidth: isMobile ? '100%' : '70%',
                  maxHeight: isMobile ? 'calc(100vh - 73px)' : '70vh',
                  marginTop: isMobile ? '73px' : '0',
                  borderRadius: isMobile ? '0' : '12px',
                  boxShadow: '0 20px 60px rgba(251, 146, 60, 0.3)',
                  objectFit: 'contain',
                }}
              >
                <source src={previewVideo.src} type="video/mp4" />
              </motion.video>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
