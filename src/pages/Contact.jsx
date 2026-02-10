import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactCard from '../components/ui/ContactCard';
import InputField from '../components/ui/InputField';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(4rem, 10vw, 6rem) 1rem',
        position: 'relative',
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
            gap: 'clamp(3rem, 6vw, 4rem)',
            alignItems: 'start',
          }}
        >
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-block',
                padding: '0.5rem 1.25rem',
                background: 'rgba(251, 146, 60, 0.15)',
                border: '1px solid rgba(251, 146, 60, 0.4)',
                borderRadius: '50px',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#fb923c',
                marginBottom: '1.5rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                backdropFilter: 'blur(10px)',
              }}
            >
              Contact
            </motion.div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                fontWeight: '700',
                color: '#f1f5f9',
                marginBottom: '1rem',
                lineHeight: '1.2',
              }}
            >
              Let's Build Something{' '}
              <span style={{ color: '#fb923c' }}>Great Together</span>
            </h2>

            <p
              style={{
                color: '#94a3b8',
                fontSize: '1.0625rem',
                lineHeight: '1.7',
                marginBottom: '2.5rem',
              }}
            >
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
            </p>

            {/* Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ContactCard
                icon="💬"
                title="Chat on WhatsApp"
                info="+1 (555) 123-4567"
                link="https://wa.me/15551234567"
                delay={0.1}
              />
              <ContactCard
                icon="📧"
                title="Email Us"
                info="hello@projectnest.studio"
                link="mailto:hello@projectnest.studio"
                delay={0.2}
              />
              <ContactCard
                icon="📞"
                title="Call Us"
                info="+1 (555) 123-4567"
                link="tel:+15551234567"
                delay={0.3}
              />
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: 'rgba(30, 41, 59, 0.4)',
              padding: 'clamp(2rem, 5vw, 2.5rem)',
              borderRadius: '16px',
              border: '1px solid rgba(251, 146, 60, 0.2)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <form onSubmit={handleSubmit}>
              {/* Name & Email */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <InputField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone & Service */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <InputField
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#f1f5f9',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      fontSize: '0.9375rem',
                      color: '#f1f5f9',
                      background: 'rgba(15, 23, 42, 0.5)',
                      border: '1px solid rgba(251, 146, 60, 0.2)',
                      borderRadius: '10px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#fb923c';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(251, 146, 60, 0.2)';
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="academic">Academic Projects</option>
                    <option value="freelancing">Freelancing Services</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <InputField
                label="Message"
                name="message"
                type="textarea"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  background: 'linear-gradient(135deg, #fb923c, #f97316)',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  marginTop: '1.5rem',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 20px rgba(251, 146, 60, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                }}
              >
                Send Message
                <span>→</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
