import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import GlobalBackground from '../components/GlobalBackground';

const OurWorks = () => {
  const [isMobile, setIsMobile] = useState(false);

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
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(1rem, 3vw, 2rem)',
              maxWidth: '1400px',
              margin: '0 auto',
            }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                <div
                  key={item}
                  style={{
                    background: 'rgba(30, 41, 59, 0.9)',
                    border: '1px solid rgba(251, 146, 60, 0.2)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                    opacity: 1,
                    animation: isMobile ? 'none' : 'fadeIn 0.5s ease forwards',
                    animationDelay: `${(item % 4) * 0.1}s`,
                  }}
                >
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%',
                    background: '#0f172a',
                  }}>
                    {!isMobile ? (
                      <video
                        loop
                        muted
                        playsInline
                        preload="none"
                        onLoadedData={(e) => e.target.play().catch(() => {})}
                        onError={(e) => e.target.style.display = 'none'}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      >
                        <source src={`/videos/project${((item - 1) % 4) + 1}.mp4`} type="video/mp4" />
                      </video>
                    ) : (
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(249, 115, 22, 0.2))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                      }}>
                        🎬
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                    }}>
                      Project {item}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      marginBottom: '1rem',
                    }}>
                      A showcase of our work demonstrating quality and innovation in every detail
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                    }}>
                      {['React', 'Node.js', 'MongoDB'].map((tech) => (
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurWorks;
