import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalBackground from '../components/GlobalBackground';

const OurWorks = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [previewVideo, setPreviewVideo] = useState(null);
  const scrollPositionRef = useRef(0);

  const categories = [
    { name: 'Websites', icon: '🌐', projects: [
      { id: 1, src: '/WhatsApp Video 2026-02-10 at 20.29.13.mp4', title: 'Rich Club', description: 'A clothing website for trending fashion and lifestyle', tech: ['React', 'Node.js', 'MongoDB'], isLive: true },
      { id: 2, src: '/WhatsApp Video 2026-02-10 at 20.29.51.mp4', title: 'The Quality Pets', description: 'Pet care and adoption platform with modern features', tech: ['React', 'Firebase', 'Tailwind'], isLive: true },
    ]},
    { name: 'Portfolio', icon: '💼', projects: [
      { id: 3, src: '/portflio.mp4', title: 'Client Portfolio', description: 'Modern animated portfolio with smooth transitions', tech: ['React', 'Framer Motion', 'CSS'], isLive: true },
      { id: 5, src: '/portfolio2.mp4', title: 'Client Portfolio 2', description: 'Minimalist portfolio design with dark theme', tech: ['React', 'Vite', 'CSS'], isLive: true },
    ]},
    { name: 'Mobile Apps', icon: '📱', projects: [
      { id: 4, src: '/weather.mp4', title: 'Weather App', description: 'weather forecasting with real-time data', tech: ['React', 'Python', 'TensorFlow'], isLive: false },
    ] },
    { name: 'Data Analytics', icon: '📊', projects: [] },
    { name: 'AI & ML', icon: '🤖', projects: [
    ]},
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (previewVideo) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollPositionRef.current) {
        window.scrollTo(0, scrollPositionRef.current);
      }
    }
  }, [previewVideo]);
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate('/', { state: { scrollTo: 'portfolio' } });
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#fb923c',
                  background: 'rgba(251, 146, 60, 0.1)',
                  border: '1px solid rgba(251, 146, 60, 0.3)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginBottom: '2rem',
                }}
              >
                ← Back to our works
              </motion.button>
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

            {categories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
              >
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <span style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>{category.icon}</span>
                  {category.name}
                </h2>
                {category.projects.length > 0 ? (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1.25rem',
                    maxWidth: '800px',
                  }}>
                    {category.projects.map((video, index) => (
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
                          {video.isLive && (
                            <div style={{
                              position: 'absolute',
                              top: '12px',
                              right: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '6px 12px',
                              background: 'rgba(220, 38, 38, 0.95)',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: '600',
                              color: '#fff',
                              zIndex: 2,
                              boxShadow: '0 2px 8px rgba(220, 38, 38, 0.4)',
                            }}>
                              <span style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#fff',
                                animation: 'pulse 2s infinite',
                              }} />
                              LIVE
                            </div>
                          )}
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
                            marginBottom: '0.75rem',
                          }}>
                            {video.description}
                          </p>
                          <p style={{
                            fontSize: '0.875rem',
                            color: '#fb923c',
                            fontStyle: 'italic',
                          }}>
                            Click to preview
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1rem',
                    maxWidth: '1000px',
                  }}>
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        style={{
                          background: 'rgba(30, 41, 59, 0.5)',
                          border: '1px dashed rgba(251, 146, 60, 0.3)',
                          borderRadius: '12px',
                          padding: '2rem 1rem',
                          textAlign: 'center',
                          color: 'var(--text-secondary)',
                          fontSize: '0.875rem',
                          fontStyle: 'italic',
                        }}
                      >
                        Coming soon...
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

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
      </div>
    </>
  );
};

export default OurWorks;
