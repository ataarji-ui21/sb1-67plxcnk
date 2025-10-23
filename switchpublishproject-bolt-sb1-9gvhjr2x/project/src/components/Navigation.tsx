import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur-md transition-colors duration-300 bg-black/80 shadow-lg"
         style={{
           padding: 'clamp(0.5rem, 2vw, 1rem) 0'
         }}>
      <div className="mx-auto" style={{
        width: '100%',
        maxWidth: '80rem',
        paddingLeft: 'clamp(1rem, 5vw, 2rem)',
        paddingRight: 'clamp(1rem, 5vw, 2rem)'
      }}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Bot className="w-6 h-6 text-amber-400 drop-shadow-sm" />
              <span className="text-white font-mono text-lg tracking-wide bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {language === "en" && "AT.AUTOMATE.AI"}
                {language === "fr" && "AT.AUTOMATE.AI"}
                {language === "ar" && "AT.AUTOMATE.AI"}
              </span>
            </Link>
          </div>

          {/* Links */}
          <div className="flex items-center flex-wrap justify-end gap-x-2 sm:gap-x-4 md:gap-x-6">
            <a href={isHomePage ? "#services" : "/#services"} className="nav-link group" style={{
              padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.5rem, 2vw, 1rem)',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            }}>
              {language === "en" && "Services"}
              {language === "fr" && "Services"}
              {language === "ar" && "الخدمات"}
            </a>
            <a href={isHomePage ? "#process" : "/#process"} className="nav-link group" style={{
              padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.5rem, 2vw, 1rem)',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            }}>
              {language === "en" && "Process"}
              {language === "fr" && "Processus"}
              {language === "ar" && "العملية"}
            </a>
            <a href={isHomePage ? "#faq" : "/#faq"} className="nav-link group" style={{
              padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.5rem, 2vw, 1rem)',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            }}>
              {language === "en" && "FAQ"}
              {language === "fr" && "FAQ"}
              {language === "ar" && "الأسئلة"}
            </a>
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              className="cta-button group relative inline-flex items-center overflow-hidden bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-bold tracking-wide rounded-lg hover:from-amber-300 hover:via-yellow-300 hover:to-amber-400 transition-all duration-500 transform hover:scale-110 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
              style={{
                padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.5rem, 2vw, 1rem)',
                fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
                minHeight: '44px',
              }}
              aria-label="Get started with automation services"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {language === "en" && "Get Started"}
              {language === "fr" && "Commencer"}
              {language === "ar" && "ابدأ الآن"}
            </a>
            
            {/* Language Switch */}
            <div className="flex space-x-1 ml-2 sm:ml-4">
              <button 
                onClick={() => setLanguage("en")} 
                className={`text-xs px-2 py-1 rounded transition ${language === "en" ? "bg-amber-400 text-black" : "text-gray-400 hover:text-white"}`}
                aria-label="English"
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage("fr")} 
                className={`text-xs px-2 py-1 rounded transition ${language === "fr" ? "bg-amber-400 text-black" : "text-gray-400 hover:text-white"}`}
                aria-label="Français"
              >
                FR
              </button>
              <button 
                onClick={() => setLanguage("ar")} 
                className={`text-xs px-2 py-1 rounded transition ${language === "ar" ? "bg-amber-400 text-black" : "text-gray-400 hover:text-white"}`}
                aria-label="العربية"
              >
                AR
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;