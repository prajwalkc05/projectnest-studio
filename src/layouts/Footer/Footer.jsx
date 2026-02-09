const Footer = () => {
  return (
    <footer
      style={{
        padding: 'clamp(3rem, 6vw, 4rem) clamp(1.5rem, 4vw, 2rem) clamp(2rem, 4vw, 2.5rem)',
        background: 'linear-gradient(180deg, #0a0f1e 0%, #020617 100%)',
        borderTop: '1px solid rgba(251, 146, 60, 0.2)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
        }}
      >
        {/* Brand Section */}
        <div>
          <h3
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem',
            }}
          >
            ProjectNest Studio
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Transforming ideas into production-ready projects. Trusted by students, startups, and professionals worldwide.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href="#"
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(251, 146, 60, 0.1)',
                border: '1px solid rgba(251, 146, 60, 0.2)',
                borderRadius: '8px',
                color: '#fb923c',
                fontSize: '1.25rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(251, 146, 60, 0.2)';
                e.target.style.borderColor = 'rgba(251, 146, 60, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(251, 146, 60, 0.1)';
                e.target.style.borderColor = 'rgba(251, 146, 60, 0.2)';
              }}
            >
              𝕏
            </a>
            <a
              href="#"
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(251, 146, 60, 0.1)',
                border: '1px solid rgba(251, 146, 60, 0.2)',
                borderRadius: '8px',
                color: '#fb923c',
                fontSize: '1.25rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(251, 146, 60, 0.2)';
                e.target.style.borderColor = 'rgba(251, 146, 60, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(251, 146, 60, 0.1)';
                e.target.style.borderColor = 'rgba(251, 146, 60, 0.2)';
              }}
            >
              in
            </a>
            <a
              href="#"
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(251, 146, 60, 0.1)',
                border: '1px solid rgba(251, 146, 60, 0.2)',
                borderRadius: '8px',
                color: '#fb923c',
                fontSize: '1.25rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(251, 146, 60, 0.2)';
                e.target.style.borderColor = 'rgba(251, 146, 60, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(251, 146, 60, 0.1)';
                e.target.style.borderColor = 'rgba(251, 146, 60, 0.2)';
              }}
            >
              📧
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#f1f5f9', marginBottom: '1rem' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { label: 'Home', id: 'home' },
              { label: 'Academic', id: 'academic-section' },
              { label: 'Freelancing', id: 'freelancing-section' },
              { label: 'Process', id: 'how-it-works' },
              { label: 'Why Us', id: 'why-choose-us' },
              { label: 'Contact', id: 'contact' },
            ].map((link) => (
              <li key={link.label} style={{ marginBottom: '0.75rem' }}>
                <button
                  onClick={() => {
                    if (link.id === 'home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      const element = document.getElementById(link.id);
                      if (element) {
                        const navbarHeight = 73;
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - navbarHeight;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }
                  }}
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#fb923c')}
                  onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#f1f5f9', marginBottom: '1rem' }}>
            Services
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { label: 'Academic Projects', id: 'academic-section' },
              { label: 'Website Development', id: 'freelancing-section' },
              { label: 'Mobile Apps', id: 'freelancing-section' },
              { label: 'UI/UX Design', id: 'freelancing-section' },
              { label: 'Consultation', id: 'contact' },
              { label: 'Support', id: 'contact' },
            ].map((service) => (
              <li key={service.label} style={{ marginBottom: '0.75rem' }}>
                <button
                  onClick={() => {
                    const element = document.getElementById(service.id);
                    if (element) {
                      const navbarHeight = 73;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - navbarHeight;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#fb923c')}
                  onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                >
                  {service.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#f1f5f9', marginBottom: '1rem' }}>
            Get in Touch
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.75rem', color: '#94a3b8', fontSize: '0.9375rem' }}>
              📧 hello@projectnest.studio
            </li>
            <li style={{ marginBottom: '0.75rem', color: '#94a3b8', fontSize: '0.9375rem' }}>
              📞 +1 (555) 123-4567
            </li>
            <li style={{ marginBottom: '0.75rem', color: '#94a3b8', fontSize: '0.9375rem' }}>
              💬 WhatsApp Support
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          paddingTop: 'clamp(1.5rem, 3vw, 2rem)',
          borderTop: '1px solid rgba(251, 146, 60, 0.1)',
          textAlign: 'center',
        }}
      >
        <p style={{ color: '#64748b', fontSize: '0.9375rem', margin: 0 }}>
          © 2024 ProjectNest Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
