import { motion } from 'framer-motion';
import GlobalBackground from '../components/GlobalBackground';

const Academic = () => {
  const academicServices = [
    {
      icon: '📝',
      title: 'Mini & Major Projects',
      description: 'Complete academic projects with documentation, source code, and presentation support',
      details: [
        'Full source code with comments and documentation',
        'Project report in IEEE/university format',
        'PowerPoint presentation for viva',
        'Installation guide and user manual',
        'Database schema and ER diagrams',
        'Testing documentation and screenshots',
        'Lifetime support and modifications',
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'MySQL', 'MongoDB'],
    },
    {
      icon: '⚡',
      title: 'Full Stack Projects',
      description: 'End-to-end web applications with modern frameworks, databases, and deployment',
      details: [
        'Frontend with React/Angular/Vue.js',
        'Backend API with Node.js/Django/Spring Boot',
        'Database design and implementation',
        'User authentication and authorization',
        'Responsive design for all devices',
        'Cloud deployment (AWS/Heroku/Vercel)',
        'API documentation and testing',
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS'],
    },
    {
      icon: '📊',
      title: 'Data Analytics Projects',
      description: 'Data visualization, machine learning models, and statistical analysis solutions',
      details: [
        'Data collection and preprocessing',
        'Exploratory data analysis (EDA)',
        'Machine learning model development',
        'Interactive dashboards and visualizations',
        'Statistical analysis and reporting',
        'Jupyter notebooks with explanations',
        'Model deployment and API integration',
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Tableau'],
    },
    {
      icon: '🔐',
      title: 'Cybersecurity Projects',
      description: 'Security systems, encryption tools, and vulnerability assessment applications',
      details: [
        'Network security implementations',
        'Encryption and decryption systems',
        'Vulnerability scanning tools',
        'Intrusion detection systems',
        'Secure authentication mechanisms',
        'Penetration testing reports',
        'Security audit documentation',
      ],
      technologies: ['Python', 'Kali Linux', 'Wireshark', 'Metasploit', 'OpenSSL', 'Java'],
    },
    {
      icon: '🎉',
      title: 'College Fest Websites',
      description: 'Event management platforms with registration, scheduling, and live updates',
      details: [
        'Event registration and ticketing system',
        'Schedule management and notifications',
        'Live updates and announcements',
        'Photo gallery and media uploads',
        'Sponsor and partner showcases',
        'Admin dashboard for management',
        'Mobile-responsive design',
      ],
      technologies: ['React', 'Firebase', 'Node.js', 'Tailwind CSS', 'Socket.io'],
    },
    {
      icon: '📋',
      title: 'Reports & Viva Support',
      description: 'Professional documentation, technical reports, and presentation preparation',
      details: [
        'IEEE/ACM format project reports',
        'Literature survey and references',
        'System design and architecture',
        'Implementation details with code',
        'Testing and results analysis',
        'Professional PowerPoint presentations',
        'Viva preparation and Q&A support',
      ],
      technologies: ['LaTeX', 'MS Word', 'PowerPoint', 'Visio', 'Draw.io'],
    },
  ];

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
                Academic Services
              </h1>
              <p style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                Comprehensive academic project solutions with complete documentation and support
              </p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
              maxWidth: '1200px',
              margin: '0 auto',
            }}>
              {academicServices.map((service, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(30, 41, 59, 0.9)',
                    border: '1px solid rgba(251, 146, 60, 0.2)',
                    borderRadius: '16px',
                    padding: '2rem',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    opacity: 0,
                    animation: 'fadeIn 0.5s ease forwards',
                    animationDelay: `${(index % 2) * 0.1}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(251, 146, 60, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                  }}>
                    {service.icon}
                  </div>
                  <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}>
                    {service.title}
                  </h2>
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                  }}>
                    {service.description}
                  </p>
                  
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem',
                  }}>
                    What's Included:
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                  }}>
                    {service.details.map((detail, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          color: 'var(--text-secondary)',
                          fontSize: '0.875rem',
                          lineHeight: '1.5',
                        }}
                      >
                        <span style={{
                          color: '#fb923c',
                          fontSize: '1rem',
                          flexShrink: 0,
                        }}>
                          ✓
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}>
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '0.25rem 0.75rem',
                          fontSize: '0.75rem',
                          background: 'rgba(251, 146, 60, 0.1)',
                          color: '#fb923c',
                          borderRadius: '6px',
                          border: '1px solid rgba(251, 146, 60, 0.3)',
                          fontWeight: '500',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
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

export default Academic;
