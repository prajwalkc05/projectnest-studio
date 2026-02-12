import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import GlobalBackground from '../components/GlobalBackground';

const OurWorks = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [previewVideo, setPreviewVideo] = useState(null);

  const allVideos = [
    { id: 1, src: '/WhatsApp Video 2026-02-10 at 20.29.13.mp4', title: 'Rich Club', tech: ['React', 'Node.js', 'MongoDB'] },
    { id: 2, src: '/WhatsApp Video 2026-02-10 at 20.29.51.mp4', title: 'The Quality Pets', tech: ['React', 'Firebase', 'Tailwind'] },
    { id: 3, src: '/portflio.mp4', title: 'Portfolio Showcase', tech: ['React', 'Framer Motion', 'CSS'] },
    { id: 4, src: '/weather.mp4', title: 'Weather App', tech: ['React', 'API', 'CSS'] },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <>
      <GlobalBackground />
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingTop: 'clamp(4rem, 10vw, 5rem)' }}>
        <section style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem)' }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '800',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #fb923c, #f97316)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
              }}>
                Our Works
              </h1>
              <p style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                Browse through our complete portfolio of successful projects delivered to clients worldwide
              </p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              maxWidth: '1400px',
              margin: '0 auto',
            }}>
              {allVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setPreviewVideo(video)}
                  style={{
                    background: 'rgba(30, 41, 59, 0.9)',
                    border: '1px solid rgba(251, 146, 60, 0.2)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer',
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
                      <source src={video.src} type="video/mp4" />
                    </video>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                    }}>
                      {video.title}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      marginBottom: '1rem',
                    }}>
                      Click to preview full video
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                    }}>
                      {video.tech.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: '0.25rem 0.75rem',
                            fontSize: '0.75rem',
                            background: 'rgba(251, 146, 60, 0.1)',
                            color: '#fb923c',
                            borderRadius: '6px',
                            border: '1px solid rgba(251, 146, 60, 0.3)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

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
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                  }}
                >
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setPreviewVideo(null)}
                    style={{
                      position: 'absolute',
                      top: '2rem',
                      right: '2rem',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'rgba(251, 146, 60, 0.2)',
                      border: '2px solid #fb923c',
                      color: '#fb923c',
                      fontSize: '1.5rem',
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
                      maxWidth: '90%',
                      maxHeight: '90%',
                      borderRadius: '12px',
                      boxShadow: '0 20px 60px rgba(251, 146, 60, 0.3)',
                    }}
                  >
                    <source src={previewVideo.src} type="video/mp4" />
                  </motion.video>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurWorks;
