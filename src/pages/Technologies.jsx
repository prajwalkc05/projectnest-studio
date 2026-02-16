import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Technologies = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  const technologies = [
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', needsBg: false },
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', needsBg: false },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', needsBg: false },
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', needsBg: false },
    { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', needsBg: false },
    { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', needsBg: false },
    { name: 'AWS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', needsBg: true },
    { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', needsBg: false },
    { name: 'TensorFlow', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', needsBg: false },
    { name: 'PyTorch', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', needsBg: false },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', needsBg: false },
    { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', needsBg: false },
    { name: 'Vue.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', needsBg: false },
    { name: 'Angular', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', needsBg: false },
    { name: 'Django', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', needsBg: true },
    { name: 'Flask', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', needsBg: true },
  ];

  // Duplicate for seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section
      style={{
        padding: 'clamp(3rem, 8vw, 5rem) 0',
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: 'rgba(15, 23, 42, 0.5)',
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 6vw, 3.5rem)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              background: 'rgba(251, 146, 60, 0.15)',
              border: '1px solid rgba(251, 146, 60, 0.4)',
              borderRadius: '50px',
              fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
              fontWeight: '600',
              color: '#fb923c',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              letterSpacing: '0.05em',
              backdropFilter: 'blur(10px)',
              textTransform: 'uppercase',
            }}
          >
            Tech Stack
          </motion.div>

          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4.5vw, 2.5rem)',
              fontWeight: '700',
              color: '#f1f5f9',
              marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)',
              background: 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2',
            }}
          >
            Technologies We Work With
          </h2>

          <p
            style={{
              color: '#94a3b8',
              fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Cutting-edge tools and frameworks to build your perfect solution
          </p>
        </motion.div>
      </div>

      {/* Scrolling Technologies */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: '2rem 0',
        }}
      >
        <motion.div
          ref={scrollRef}
          animate={{
            x: isPaused ? scrollRef.current?.style.transform : [0, -50 + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
          style={{
            display: 'flex',
            gap: '2rem',
            width: 'max-content',
          }}
        >
          {duplicatedTechs.map((tech, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.95 }}
              style={{
                minWidth: '150px',
                height: '150px',
                background: 'rgba(30, 41, 59, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(251, 146, 60, 0.2)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '70px',
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: tech.needsBg ? '#fff' : 'transparent',
                borderRadius: tech.needsBg ? '8px' : '0',
                padding: tech.needsBg ? '8px' : '0',
              }}>
                <img 
                  src={tech.img} 
                  alt={tech.name}
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f1f5f9',
                }}
              >
                {tech.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
