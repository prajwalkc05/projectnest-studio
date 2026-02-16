import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const CustomerReviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { id: 1, name: 'Sarah Johnson', role: 'CEO, TechStart Inc.', rating: 5, text: 'Outstanding work! The team delivered beyond our expectations. Highly professional and responsive throughout the project. Our website traffic increased by 300%!', avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=fb923c&color=fff&size=200', company: 'TechStart' },
    { id: 2, name: 'Michael Chen', role: 'Founder, PetCare Solutions', rating: 5, text: 'Incredible attention to detail and creativity. Our website looks amazing and performs flawlessly. Best investment we made for our business growth!', avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=f97316&color=fff&size=200', company: 'PetCare' },
    { id: 3, name: 'Emily Davis', role: 'Marketing Director', rating: 5, text: 'Professional, timely, and exceeded all requirements. The portfolio they created perfectly represents our brand identity and impressed all our stakeholders.', avatar: 'https://ui-avatars.com/api/?name=Emily+Davis&background=fb923c&color=fff&size=200', company: 'Creative Studio' },
    { id: 4, name: 'David Wilson', role: 'Product Manager', rating: 5, text: 'Exceptional quality and communication. They understood our vision and brought it to life with stunning results. Highly recommend their services!', avatar: 'https://ui-avatars.com/api/?name=David+Wilson&background=f97316&color=fff&size=200', company: 'InnovateTech' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ 
        marginTop: 'clamp(5rem, 10vw, 8rem)', 
        marginBottom: 'clamp(4rem, 8vw, 6rem)',
        background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.05), rgba(249, 115, 22, 0.05))',
        borderRadius: '24px',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)',
        border: '1px solid rgba(251, 146, 60, 0.2)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 4rem)' }}
      >
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: '600',
          color: '#fb923c',
          marginBottom: '0.5rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
          letterSpacing: '-0.01em',
          position: 'relative',
          zIndex: 10,
        }}>
          Customer Reviews
        </h2>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          color: '#ffffff',
          fontWeight: '500',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          zIndex: 10,
        }}>
          Hear what our clients say about their experience working with us
        </p>
      </motion.div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeReview}
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            transition={{ duration: 0.6, type: 'spring' }}
            style={{
              background: 'rgba(30, 41, 59, 0.95)',
              border: '2px solid rgba(251, 146, 60, 0.3)',
              borderRadius: '20px',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              boxShadow: '0 20px 60px rgba(251, 146, 60, 0.2), 0 0 0 1px rgba(251, 146, 60, 0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(251, 146, 60, 0.1), transparent)',
                borderRadius: '50%',
                filter: 'blur(40px)',
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                style={{ textAlign: 'center', marginBottom: '1.5rem' }}
              >
                <img 
                  src={testimonials[activeReview].avatar} 
                  alt={testimonials[activeReview].name}
                  style={{
                    width: 'clamp(80px, 15vw, 120px)',
                    height: 'clamp(80px, 15vw, 120px)',
                    borderRadius: '50%',
                    border: '4px solid #fb923c',
                    boxShadow: '0 8px 24px rgba(251, 146, 60, 0.4)',
                    objectFit: 'cover',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </motion.div>
              
              <motion.div 
                style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}
              >
                {[...Array(testimonials[activeReview].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    style={{ color: '#fb923c', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                  >
                    ★
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                  color: 'var(--text-primary)',
                  lineHeight: '1.8',
                  textAlign: 'center',
                  marginBottom: '2rem',
                  fontStyle: 'italic',
                  position: 'relative',
                }}
              >
                <span style={{ fontSize: '3rem', color: '#fb923c', opacity: 0.3, position: 'absolute', left: '-10px', top: '-20px' }}>"</span>
                {testimonials[activeReview].text}
                <span style={{ fontSize: '3rem', color: '#fb923c', opacity: 0.3, position: 'absolute', right: '-10px', bottom: '-40px' }}>"</span>
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ textAlign: 'center' }}
              >
                <h4 style={{ 
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', 
                  fontWeight: '700', 
                  color: 'var(--text-primary)', 
                  marginBottom: '0.5rem' 
                }}>
                  {testimonials[activeReview].name}
                </h4>
                <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: '#fb923c', fontWeight: '600' }}>
                  {testimonials[activeReview].role}
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  {testimonials[activeReview].company}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '3rem' }}>
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveReview((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(251, 146, 60, 0.1)',
              border: '2px solid #fb923c',
              color: '#fb923c',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ←
          </motion.button>
          
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setActiveReview(index)}
                animate={{
                  scale: activeReview === index ? 1.2 : 1,
                  backgroundColor: activeReview === index ? '#fb923c' : 'rgba(251, 146, 60, 0.3)',
                }}
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveReview((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(251, 146, 60, 0.1)',
              border: '2px solid #fb923c',
              color: '#fb923c',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomerReviews;
