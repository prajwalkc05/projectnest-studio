

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
      {/* Flashing stars */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            background: '#fb923c',
            borderRadius: '50%',
            boxShadow: '0 0 4px #fb923c',
            animation: `flash${(i % 3) + 1} ${Math.random() * 2 + 2}s ease-in-out infinite ${Math.random() * 2}s`,
          }}
        />
      ))}

      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.4), transparent 50%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          transform: 'translateX(-50%)',
          animation: 'flash1 4s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '25%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.35), transparent 50%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'flash2 5s ease-in-out infinite 2s',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '15%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(234, 88, 12, 0.38), transparent 50%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'flash3 4.5s ease-in-out infinite 1s',
        }}
      />
    </div>
  );
};

export default GlobalBackground;
