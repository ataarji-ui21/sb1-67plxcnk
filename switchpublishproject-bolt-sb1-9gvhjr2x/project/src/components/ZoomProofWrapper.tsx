import React, { useEffect } from 'react';

interface ZoomProofWrapperProps {
  children: React.ReactNode;
}

const ZoomProofWrapper: React.FC<ZoomProofWrapperProps> = ({ children }) => {
  useEffect(() => {
    // Prevent zoom-related layout shifts
    const preventZoomShift = () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 
          'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
        );
      }
    };

    // Handle resize events for zoom detection
    const handleResize = () => {
      // Force layout recalculation on zoom
      document.body.style.transform = 'translateZ(0)';
      setTimeout(() => {
        document.body.style.transform = '';
      }, 0);
    };

    preventZoomShift();
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      className="zoom-proof-container"
      style={{
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {children}
    </div>
  );
};

export default ZoomProofWrapper;