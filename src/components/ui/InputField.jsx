import { useState } from 'react';

const InputField = ({ label, type = 'text', name, value, onChange, placeholder, error, required = false }) => {
  const [focused, setFocused] = useState(false);
  const isTextarea = type === 'textarea';
  const Component = isTextarea ? 'textarea' : 'input';

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label
        style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: '500',
          color: '#f1f5f9',
          marginBottom: '0.5rem',
        }}
      >
        {label} {required && <span style={{ color: '#fb923c' }}>*</span>}
      </label>
      <Component
        type={!isTextarea ? type : undefined}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={isTextarea ? 5 : undefined}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          fontSize: '0.9375rem',
          color: '#f1f5f9',
          background: 'rgba(15, 23, 42, 0.5)',
          border: `1px solid ${error ? '#ef4444' : focused ? '#fb923c' : 'rgba(251, 146, 60, 0.2)'}`,
          borderRadius: '10px',
          outline: 'none',
          transition: 'all 0.3s ease',
          resize: isTextarea ? 'vertical' : 'none',
          fontFamily: 'inherit',
        }}
      />
      {error && (
        <span
          style={{
            display: 'block',
            marginTop: '0.5rem',
            color: '#ef4444',
            fontSize: '0.875rem',
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;
