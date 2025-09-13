import React, { useEffect, useRef } from 'react';

interface CursorSpotlightProps {
  className?: string;
}

const CursorSpotlight: React.FC<CursorSpotlightProps> = ({ className = '' }) => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const isTouch = useRef(false);

  useEffect(() => {
    // Check for touch device
    const checkTouch = () => {
      isTouch.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    
    checkTouch();
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isTouch.current || prefersReducedMotion) {
      // Apply static vignette fallback
      if (spotlightRef.current) {
        spotlightRef.current.style.background = 'radial-gradient(800px circle at 50% 50%, rgba(255,255,255,0.08), rgba(255,255,255,0) 70%)';
      }
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        if (spotlightRef.current) {
          spotlightRef.current.style.setProperty('--x', `${e.clientX}px`);
          spotlightRef.current.style.setProperty('--y', `${e.clientY}px`);
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className={`cursor-light ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 5,
        background: 'radial-gradient(520px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.18), rgba(255,255,255,0) 60%)',
        mixBlendMode: 'screen',
        opacity: 1,
        transition: 'opacity 0.3s ease',
        '--x': '50%',
        '--y': '50%'
      } as React.CSSProperties}
    />
  );
};

export default CursorSpotlight;