import React from 'react';
import { CheckCircle } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import CursorSpotlight from './CursorSpotlight';

const Hero: React.FC = () => {
  return (
    <>
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Premium animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridPulse 6s ease-in-out infinite'
        }} />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animation: 'floatUp 15s linear infinite'
            }}
          />
        ))}
      </div>
      
      <AnimatedBackground />
      <CursorSpotlight />
      
      {/* Spline Animation - Desktop: left half, Mobile: background */}
      <div className="absolute left-0 top-0 w-1/2 h-full z-5 lg:block hidden">
        <spline-viewer url="https://prod.spline.design/hGa5cbCoGv8RQi1R/scene.splinecode" loading-anim-type="none"></spline-viewer>
      </div>
      
      {/* Mobile Spline Animation - smaller, centered background */}
      <div className="absolute inset-0 z-5 lg:hidden flex items-center justify-center opacity-30">
        <div className="w-full max-w-md h-96">
          <spline-viewer url="https://prod.spline.design/hGa5cbCoGv8RQi1R/scene.splinecode" loading-anim-type="none"></spline-viewer>
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        {/* Desktop: spacer for left half */}
        <div className="w-1/2 hidden lg:block"></div>
        
        {/* Content - Desktop: right half, Mobile: full width centered */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8 py-20 lg:py-0">
          <div className="mb-8 lg:mb-8">
            <p className="text-amber-400/80 text-xs sm:text-sm tracking-widest uppercase mb-4 lg:mb-4 animate-fade-in-up font-mono" role="status" aria-live="polite">
            [ REVENUE LEAK DETECTED ]
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-high-contrast mb-6 sm:mb-8 tracking-tight overflow-visible text-readable-large" style={{lineHeight: '1.2', wordBreak: 'normal', whiteSpace: 'normal'}}>
            <span className="block" style={{ color: '#FFFFFF' }}>Turn Missed Leads</span>
            <span className="block bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">Into</span>
            <span className="block" style={{ color: '#FFD700' }}>Paying Clients</span>
          </h1>
          
          <ul className="space-y-3 text-left max-w-2xl mx-auto lg:mx-0 animate-fade-in-up-delay px-4 lg:px-0">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-body text-medium-contrast text-readable font-premium">Stop losing 40+ hours weekly to manual follow-ups</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-body text-medium-contrast text-readable font-premium">Capture every lead automatically & book instantly</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-body text-medium-contrast text-readable font-premium">Deploy AI systems that generate revenue 24/7</span>
            </li>
          </ul>
          </div>
        
          <a href="#contact" role="button" className="premium-button group relative inline-block px-8 sm:px-12 lg:px-16 py-4 lg:py-5 border border-amber-400/60 text-amber-400 hover:text-black transition-all duration-300 tracking-wide text-sm sm:text-base font-medium animate-fade-in-up-delay-2 hover:scale-[1.03] focus-ring glass-panel hover:border-amber-400" aria-label="Get free consultation - opens contact form">
            <span className="relative z-10">Get Free Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-border-scan opacity-0 group-hover:opacity-100" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
      </div>
    </section>
    </>
  );
};

export default Hero;