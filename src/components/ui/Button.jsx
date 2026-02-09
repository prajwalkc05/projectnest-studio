import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, type = 'button', loading = false }) => {
  const styles = {
    primary: {
      background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
      color: 'var(--text-primary)',
      border: 'none',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '2px solid var(--primary)',
    },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      disabled={loading}
      style={{
        ...styles[variant],
        padding: '0.875rem 2rem',
        fontSize: '1rem',
        fontWeight: '600',
        borderRadius: 'var(--radius-lg)',
        cursor: loading ? 'not-allowed' : 'pointer',
        transition: 'var(--transition)',
        opacity: loading ? 0.7 : 1,
      }}
    >
      {loading ? 'Loading...' : children}
    </motion.button>
  );
};

export default Button;
