import React, { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-md transition-colors duration-300 ${scrolled ? 'bg-black/70 shadow-lg' : 'bg-black/30'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Bot className="w-6 h-6 text-amber-400 drop-shadow-sm" />
            <span className="text-white font-mono text-lg tracking-wide bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">AT.AUTOMATE.AI</span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <a href="#services" aria-current="page" className="nav-link group">Services</a>
            <a href="#process" className="nav-link group">Process</a>
            <a href="#pricing" className="nav-link group">Pricing</a>
            <a href="#faq" className="nav-link group">FAQ</a>
            <a href="#contact" className="nav-link group text-amber-400 hover:text-white">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;