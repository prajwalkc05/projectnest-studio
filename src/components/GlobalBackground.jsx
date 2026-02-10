import { useEffect, useState } from 'react';

const GlobalBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      background: 'linear-gradient(180deg, #020617 0%, #0f172a 40%, #1e293b 70%, #0f172a 100%)',
      overflow: 'hidden',
    }}>
      {/* Static Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(251, 146, 60, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 146, 60, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          opacity: 0.2,
        }}
      />

      {/* Static Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.2), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: 0.2,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.18), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: 0.18,
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(234, 88, 12, 0.15), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: 0.15,
        }}
      />

      {/* Static Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 30%, rgba(251, 146, 60, 0.06), transparent 60%)',
          opacity: 0.5,
        }}
      />
    </div>
  );
};

export default GlobalBackground;
