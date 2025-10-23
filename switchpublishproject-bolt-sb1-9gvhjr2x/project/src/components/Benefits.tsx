import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import {
  Rocket,
  Clock,
  ShieldCheck,
  TrendingUp,
  PhoneCall,
  Video,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const Benefits: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      titleKey: "benefit1Title",
      descKey: "benefit1Desc",
      icon: PhoneCall,
      metric: "40+ hrs/week",
      metricLabel: "Time Saved",
      color: "green",
      delay: 0.1
    },
    {
      titleKey: "benefit2Title", 
      descKey: "benefit2Desc",
      icon: Clock,
      metric: "95%",
      metricLabel: "Accuracy Rate",
      color: "blue",
      delay: 0.2
    },
    {
      titleKey: "benefit3Title",
      descKey: "benefit3Desc", 
      icon: Video,
      metric: "24/7",
      metricLabel: "Availability",
      color: "purple",
      delay: 0.3
    },
    {
      titleKey: "benefit4Title",
      descKey: "benefit4Desc",
      icon: Rocket,
      metric: "300%",
      metricLabel: "ROI Increase",
      color: "amber",
      delay: 0.4
    },
    {
      titleKey: "benefit5Title",
      descKey: "benefit5Desc",
      icon: ShieldCheck,
      metric: "Bank-grade",
      metricLabel: "Security",
      color: "emerald",
      delay: 0.5
    },
    {
      titleKey: "benefit6Title",
      descKey: "benefit6Desc",
      icon: TrendingUp,
      metric: "48 hrs",
      metricLabel: "Setup Time",
      color: "cyan",
      delay: 0.6
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardElements = entry.target.querySelectorAll('.benefit-card');
            cardElements.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string, isHovered: boolean) => {
    const colorMap: Record<string, any> = {
      green: {
        icon: "text-green-400",
        border: isHovered ? "border-green-400/60" : "border-green-400/20",
        bg: "bg-gradient-to-br from-green-400/5 to-emerald-400/5",
        metric: "text-green-400",
        shadow: isHovered ? "shadow-green-400/20" : ""
      },
      blue: {
        icon: "text-blue-400",
        border: isHovered ? "border-blue-400/60" : "border-blue-400/20", 
        bg: "bg-gradient-to-br from-blue-400/5 to-cyan-400/5",
        metric: "text-blue-400",
        shadow: isHovered ? "shadow-blue-400/20" : ""
      },
      purple: {
        icon: "text-purple-400",
        border: isHovered ? "border-purple-400/60" : "border-purple-400/20",
        bg: "bg-gradient-to-br from-purple-400/5 to-pink-400/5", 
        metric: "text-purple-400",
        shadow: isHovered ? "shadow-purple-400/20" : ""
      },
      amber: {
        icon: "text-amber-400",
        border: isHovered ? "border-amber-400/60" : "border-amber-400/20",
        bg: "bg-gradient-to-br from-amber-400/5 to-yellow-400/5",
        metric: "text-amber-400", 
        shadow: isHovered ? "shadow-amber-400/20" : ""
      },
      emerald: {
        icon: "text-emerald-400",
        border: isHovered ? "border-emerald-400/60" : "border-emerald-400/20",
        bg: "bg-gradient-to-br from-emerald-400/5 to-green-400/5",
        metric: "text-emerald-400",
        shadow: isHovered ? "shadow-emerald-400/20" : ""
      },
      cyan: {
        icon: "text-cyan-400", 
        border: isHovered ? "border-cyan-400/60" : "border-cyan-400/20",
        bg: "bg-gradient-to-br from-cyan-400/5 to-blue-400/5",
        metric: "text-cyan-400",
        shadow: isHovered ? "shadow-cyan-400/20" : ""
      }
    };
    return colorMap[color] || colorMap.amber;
  };

  return (
    <section id="benefits" className="bg-black py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-amber-400/8 to-yellow-400/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-cyan-400/6 to-blue-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-full border border-amber-400/20 mb-6">
            <Sparkles className="w-4 h-4 text-amber-400 mr-2" />
            <span className="text-amber-400 text-sm font-medium">
              {language === "en" && "Business Benefits & ROI"}
              {language === "fr" && "Avantages Business & ROI"}
              {language === "ar" && "فوائد الأعمال والعائد على الاستثمار"}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white mb-8 leading-[1.3]">
            {t.benefitsTitle}
          </h2>
          <p className="text-readable mt-4 max-w-3xl mx-auto text-body-optimized">
            {t.benefitsDesc}
          </p>
          
          <div className="mt-8 text-center">
            <div className="inline-block text-sm text-gray-500 bg-gray-900/40 px-4 py-2 rounded-full border border-gray-800">
              {language === "en" && "↓ Scroll to see measurable results ↓"}
              {language === "fr" && "↓ Faites défiler pour voir les résultats mesurables ↓"}
              {language === "ar" && "↓ مرر لرؤية النتائج القابلة للقياس ↓"}
            </div>
          </div>
        </div>

        {/* Enhanced Grid with staggered animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            const isVisible = visibleCards.includes(idx);
            const isHovered = hoveredCard === idx;
            const colors = getColorClasses(benefit.color, isHovered);
            
            return (
              <div
                key={idx}
                className={`benefit-card group relative p-8 rounded-2xl border backdrop-blur-md transition-all duration-700 cursor-pointer overflow-hidden ${colors.bg} ${colors.border} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${isHovered ? `transform scale-105 -rotate-1 shadow-2xl ${colors.shadow}` : ''}`}
                style={{
                  transitionDelay: isVisible ? '0ms' : `${benefit.delay * 1000}ms`,
                  background: isHovered ? 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)' : undefined
                }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700 pointer-events-none ${
                  isHovered ? 'opacity-100' : ''
                } bg-gradient-to-br from-white/10 via-white/5 to-transparent`} />

                {/* Animated radial gradient */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 transition-all duration-700 blur-3xl pointer-events-none ${
                  isHovered ? 'opacity-30' : ''
                }`} style={{ background: `radial-gradient(circle, ${benefit.color === 'amber' ? 'rgba(251,191,36,0.4)' : benefit.color === 'green' ? 'rgba(34,197,94,0.4)' : benefit.color === 'blue' ? 'rgba(59,130,246,0.4)' : benefit.color === 'cyan' ? 'rgba(6,182,212,0.4)' : benefit.color === 'emerald' ? 'rgba(16,185,129,0.4)' : 'rgba(168,85,247,0.4)'}, transparent)` }} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Metric */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`relative p-4 rounded-xl ${colors.bg} border ${colors.border} transition-all duration-500 ${
                      isHovered ? 'scale-110 rotate-6 shadow-lg' : ''
                    }`}>
                      {isHovered && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent animate-pulse" />
                      )}
                      <IconComponent className={`w-8 h-8 ${colors.icon} transition-all duration-500 relative z-10 ${
                        isHovered ? 'scale-125 drop-shadow-2xl' : ''
                      }`} />
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${colors.metric} transition-all duration-300 ${
                        isHovered ? 'scale-110' : ''
                      }`}>
                        {benefit.metric}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        {benefit.metricLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300 leading-[1.4]" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)' }}>
                    {t[benefit.titleKey as keyof typeof t]}
                  </h3>

                  {/* Description */}
                  <p className="text-readable leading-relaxed mb-6 group-hover:text-white transition-colors duration-300" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
                    {t[benefit.descKey as keyof typeof t]}
                  </p>

                  {/* Learn more indicator */}
                  <div className={`flex items-center justify-between transition-all duration-300 ${
                    isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-60 transform translate-y-2'
                  }`}>
                    <span className={`text-sm font-medium ${colors.metric}`}>
                      {language === "en" && "Learn more"}
                      {language === "fr" && "En savoir plus"}
                      {language === "ar" && "اعرف المزيد"}
                    </span>
                    <ChevronRight className={`w-4 h-4 ${colors.icon} transition-transform duration-300 ${
                      isHovered ? 'translate-x-2' : ''
                    }`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-400 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400/50" />
            <Sparkles className="w-4 h-4 text-amber-400" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400/50" />
          </div>
          <p className="text-readable max-w-2xl mx-auto mb-8" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
            {language === "en" && "Ready to experience these benefits for your business? Let's build your custom automation solution."}
            {language === "fr" && "Prêt à découvrir ces avantages pour votre entreprise ? Créons votre solution d'automatisation personnalisée."}
            {language === "ar" && "مستعد لتجربة هذه الفوائد لعملك؟ دعنا ننشئ حل الأتمتة المخصص لك."}
          </p>
          
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 border border-amber-400/30 text-amber-400 hover:text-black rounded-lg hover:bg-gradient-to-r hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 transition-all duration-300 transform hover:scale-105"
          >
            <span>
              {language === "en" && "Start Your Automation Journey"}
              {language === "fr" && "Commencez Votre Automatisation"}
              {language === "ar" && "ابدأ رحلة الأتمتة"}
            </span>
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;