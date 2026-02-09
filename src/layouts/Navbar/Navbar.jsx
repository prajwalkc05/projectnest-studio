import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 73; // Navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const links = [
    { id: 'home', label: 'Home', type: 'scroll' },
    { id: 'academic-section', label: 'Academic', type: 'scroll' },
    { id: 'freelancing-section', label: 'Freelancing', type: 'scroll' },
    { id: 'how-it-works', label: 'Process', type: 'scroll' },
    { id: 'why-choose-us', label: 'Why Us', type: 'scroll' },
    { id: 'contact', label: 'Contact', type: 'scroll' },
  ];

  return (
    <>
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'rgba(2, 6, 23, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(251, 146, 60, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 'clamp(16px, 3vw, 20px) clamp(1rem, 4vw, 2rem)',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
      }}>
        <motion.div whileHover={{ scale: 1.02 }}>
          <button
            onClick={scrollToTop}
            style={{ 
              fontSize: 'clamp(1.125rem, 4vw, 1.5rem)', 
              fontWeight: '700', 
              background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em',
              filter: 'drop-shadow(0 0 20px rgba(251, 146, 60, 0.4))',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              whiteSpace: 'nowrap',
            }}
          >
            ProjectNest Studio
          </button>
        </motion.div>

        {/* Desktop Menu */}
        {!isMobile && (
          <ul className="nav-desktop" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            {links.map((link) => (
              <motion.li
                key={link.label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => link.id === 'home' ? scrollToTop() : scrollToSection(link.id)}
                  style={{
                    position: 'relative',
                    color: '#94a3b8',
                    fontWeight: '500',
                    fontSize: '15px',
                    transition: 'color 0.3s ease',
                    padding: '8px 16px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '8px',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#fb923c';
                    e.target.style.background = 'rgba(251, 146, 60, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#94a3b8';
                    e.target.style.background = 'none';
                  }}
                >
                  {link.label}
                </button>
              </motion.li>
            ))}
          </ul>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            className="nav-mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{
              flexDirection: 'column',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 10000,
              position: 'relative',
            }}
          >
            <motion.span
              animate={{ 
                rotate: isMenuOpen ? 45 : 0, 
                y: isMenuOpen ? 8 : 0,
                backgroundColor: isMenuOpen ? '#fb923c' : '#fb923c',
              }}
              style={{
                width: '24px',
                height: '2px',
                background: '#fb923c',
                borderRadius: '2px',
                display: 'block',
              }}
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              style={{
                width: '24px',
                height: '2px',
                background: '#fb923c',
                borderRadius: '2px',
                display: 'block',
              }}
            />
            <motion.span
              animate={{ 
                rotate: isMenuOpen ? -45 : 0, 
                y: isMenuOpen ? -8 : 0,
                backgroundColor: isMenuOpen ? '#fb923c' : '#fb923c',
              }}
              style={{
                width: '24px',
                height: '2px',
                background: '#fb923c',
                borderRadius: '2px',
                display: 'block',
              }}
            />
          </button>
        )}
      </div>
    </motion.nav>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {isMobile && isMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 9998,
              top: '73px',
            }}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '73px',
              left: 0,
              right: 0,
              background: 'rgba(2, 6, 23, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(251, 146, 60, 0.2)',
              zIndex: 9998,
              maxHeight: 'calc(100vh - 73px)',
              overflowY: 'auto',
            }}
          >
            <ul style={{
              display: 'flex',
              flexDirection: 'column',
              listStyle: 'none',
              padding: '1rem 0',
              margin: 0,
            }}>
              {links.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ margin: 0 }}
                >
                  <button
                    onClick={() => link.id === 'home' ? scrollToTop() : scrollToSection(link.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      color: '#94a3b8',
                      fontWeight: '500',
                      fontSize: '16px',
                      padding: '1rem 2rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      borderRadius: '8px',
                    }}
                    onTouchStart={(e) => {
                      e.currentTarget.style.color = '#fb923c';
                      e.currentTarget.style.background = 'rgba(251, 146, 60, 0.15)';
                    }}
                    onTouchEnd={(e) => {
                      setTimeout(() => {
                        e.currentTarget.style.color = '#94a3b8';
                        e.currentTarget.style.background = 'none';
                      }, 150);
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#fb923c';
                      e.currentTarget.style.background = 'rgba(251, 146, 60, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#94a3b8';
                      e.currentTarget.style.background = 'none';
                    }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;
