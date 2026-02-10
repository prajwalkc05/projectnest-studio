

const GlobalBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      background: 'linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)',
    }}>
      {/* CSS-only flashing effect */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.4), transparent 55%)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          transform: 'translateX(-50%)',
          animation: 'flash1 4s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '25%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.35), transparent 55%)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          animation: 'flash2 5s ease-in-out infinite 2s',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '15%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(234, 88, 12, 0.38), transparent 55%)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          animation: 'flash3 4.5s ease-in-out infinite 1s',
        }}
      />
    </div>
  );
};

export default GlobalBackground;
