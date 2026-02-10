

const GlobalBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      background: 'linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    }}>
      {/* CSS-only flashing effect */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.6), transparent 50%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          transform: 'translateX(-50%)',
          animation: 'flash1 3s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '25%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.55), transparent 50%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'flash2 4s ease-in-out infinite 1.5s',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '15%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(234, 88, 12, 0.58), transparent 50%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'flash3 3.5s ease-in-out infinite 0.5s',
        }}
      />
    </div>
  );
};

export default GlobalBackground;
