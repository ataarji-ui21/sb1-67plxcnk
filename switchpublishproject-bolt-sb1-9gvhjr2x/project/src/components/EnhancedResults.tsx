import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { 
  BarChart3, 
  Users, 
  Clock, 
  TrendingUp, 
  DollarSign, 
  Target,
  Zap,
  Award,
  CheckCircle,
  ArrowUp
} from "lucide-react";

const EnhancedResults: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [counters, setCounters] = useState({
    revenue: 0,
    timeSaved: 0,
    clients: 0,
    efficiency: 0,
    satisfaction: 0,
    roi: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const results = [
    {
      icon: DollarSign,
      value: "300%",
      title: {
        en: "Revenue Increase",
        fr: "Augmentation des Revenus",
        ar: "زيادة الإيرادات"
      },
      desc: {
        en: "Average revenue boost within 6 months",
        fr: "Augmentation moyenne des revenus sous 6 mois", 
        ar: "متوسط زيادة الإيرادات خلال 6 أشهر"
      },
      color: "green",
      metric: "revenue",
      maxValue: 300,
      suffix: "%"
    },
    {
      icon: Clock,
      value: "40+",
      title: {
        en: "Hours Saved Weekly",
        fr: "Heures Économisées par Semaine",
        ar: "ساعات موفرة أسبوعياً"
      },
      desc: {
        en: "Time freed up from manual processes",
        fr: "Temps libéré des processus manuels",
        ar: "الوقت المحرر من العمليات اليدوية"
      },
      color: "blue",
      metric: "timeSaved",
      maxValue: 40,
      suffix: "+"
    },
    {
      icon: Users,
      value: "200+",
      title: {
        en: "Businesses Automated",
        fr: "Entreprises Automatisées",
        ar: "شركة تم أتمتتها"
      },
      desc: {
        en: "Successfully transformed operations",
        fr: "Opérations transformées avec succès",
        ar: "عمليات تم تحويلها بنجاح"
      },
      color: "purple",
      metric: "clients",
      maxValue: 200,
      suffix: "+"
    },
    {
      icon: TrendingUp,
      value: "95%",
      title: {
        en: "Efficiency Boost",
        fr: "Amélioration de l'Efficacité",
        ar: "تحسين الكفاءة"
      },
      desc: {
        en: "Average operational efficiency increase",
        fr: "Augmentation moyenne de l'efficacité opérationnelle",
        ar: "متوسط زيادة الكفاءة التشغيلية"
      },
      color: "amber",
      metric: "efficiency",
      maxValue: 95,
      suffix: "%"
    },
    {
      icon: Award,
      value: "5.0/5",
      title: {
        en: "Client Satisfaction",
        fr: "Satisfaction Client",
        ar: "رضا العملاء"
      },
      desc: {
        en: "Average rating from our clients",
        fr: "Note moyenne de nos clients",
        ar: "متوسط تقييم عملائنا"
      },
      color: "cyan",
      metric: "satisfaction",
      maxValue: 5.0,
      suffix: "/5"
    },
    {
      icon: Target,
      value: "500%",
      title: {
        en: "ROI Achievement",
        fr: "Réalisation ROI",
        ar: "تحقيق العائد"
      },
      desc: {
        en: "Maximum ROI achieved by clients",
        fr: "ROI maximum atteint par les clients",
        ar: "أقصى عائد حققه العملاء"
      },
      color: "orange",
      metric: "roi",
      maxValue: 500,
      suffix: "%"
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Trigger card animations
            results.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...new Set([...prev, index])]);
              }, index * 200);
            });
            
            // Start counter animations
            setTimeout(() => {
              animateCounters();
            }, 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 FPS
    const stepTime = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      const progress = Math.min(step / steps, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCounters({
        revenue: Math.round(300 * easeOutQuart),
        timeSaved: Math.round(40 * easeOutQuart),
        clients: Math.round(200 * easeOutQuart),
        efficiency: Math.round(95 * easeOutQuart),
        satisfaction: Math.round(5.0 * easeOutQuart * 10) / 10,
        roi: Math.round(500 * easeOutQuart)
      });
      
      step++;
      if (step > steps) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      green: {
        icon: "text-green-400",
        border: "border-green-400/30",
        bg: "bg-gradient-to-br from-green-400/10 to-emerald-400/10",
        glow: "shadow-green-400/20"
      },
      blue: {
        icon: "text-blue-400",
        border: "border-blue-400/30",
        bg: "bg-gradient-to-br from-blue-400/10 to-cyan-400/10",
        glow: "shadow-blue-400/20"
      },
      purple: {
        icon: "text-purple-400",
        border: "border-purple-400/30",
        bg: "bg-gradient-to-br from-purple-400/10 to-pink-400/10",
        glow: "shadow-purple-400/20"
      },
      amber: {
        icon: "text-amber-400",
        border: "border-amber-400/30",
        bg: "bg-gradient-to-br from-amber-400/10 to-yellow-400/10",
        glow: "shadow-amber-400/20"
      },
      cyan: {
        icon: "text-cyan-400",
        border: "border-cyan-400/30",
        bg: "bg-gradient-to-br from-cyan-400/10 to-blue-400/10",
        glow: "shadow-cyan-400/20"
      },
      orange: {
        icon: "text-orange-400",
        border: "border-orange-400/30",
        bg: "bg-gradient-to-br from-orange-400/10 to-red-400/10",
        glow: "shadow-orange-400/20"
      }
    };
    return colorMap[color] || colorMap.amber;
  };

  const getCounterValue = (metric: string, result: any) => {
    const value = counters[metric as keyof typeof counters];
    if (metric === 'satisfaction') {
      return value.toFixed(1);
    }
    return Math.round(value);
  };

  return (
    <section id="results" className="bg-black py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/8 to-yellow-400/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/6 to-blue-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-full border border-amber-400/20 mb-6">
            <BarChart3 className="w-4 h-4 text-amber-400 mr-2" />
            <span className="text-amber-400 text-sm font-medium">
              {language === "en" && "Proven Results & Impact"}
              {language === "fr" && "Résultats Prouvés & Impact"}
              {language === "ar" && "نتائج مثبتة وتأثير"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white leading-snug mb-8">
            {t.resultsTitle}
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            {t.resultsDesc}
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {results.map((result, idx) => {
            const IconComponent = result.icon;
            const isVisible = visibleCards.includes(idx);
            const colors = getColorClasses(result.color);
            const animatedValue = getCounterValue(result.metric, result);
            
            return (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl border backdrop-blur-md transition-all duration-700 cursor-pointer overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${colors.border} ${colors.bg} hover:shadow-2xl hover:${colors.glow} hover:scale-105 hover:-rotate-1`}
                style={{
                  transitionDelay: `${idx * 0.2}s`,
                  animation: isVisible ? 'fadeInUp 0.8s ease-out forwards, glowPulse 4s ease-in-out infinite' : undefined,
                  animationDelay: `${idx * 0.2}s, ${idx * 0.2 + 0.8}s`
                }}
              >
                {/* Background glow */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${colors.bg}`} />

                {/* Animated radial gradient */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 blur-3xl pointer-events-none" style={{ background: `radial-gradient(circle, ${result.color === 'amber' ? 'rgba(251,191,36,0.5)' : result.color === 'green' ? 'rgba(34,197,94,0.5)' : result.color === 'blue' ? 'rgba(59,130,246,0.5)' : result.color === 'cyan' ? 'rgba(6,182,212,0.5)' : result.color === 'orange' ? 'rgba(249,115,22,0.5)' : 'rgba(168,85,247,0.5)'}, transparent)` }} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`relative w-16 h-16 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                    <IconComponent className={`w-8 h-8 ${colors.icon} relative z-10 group-hover:scale-125 transition-transform duration-500 drop-shadow-xl`} />
                  </div>

                  {/* Value with animation */}
                  <div className="mb-4">
                    <div className={`text-5xl font-bold ${colors.icon} mb-2 font-mono group-hover:scale-110 transition-transform duration-500`}>
                      {animatedValue}{result.suffix}
                    </div>
                    <div className="flex items-center">
                      <ArrowUp className={`w-4 h-4 ${colors.icon} mr-1`} />
                      <span className="text-xs text-gray-500 uppercase tracking-wide">
                        {language === "en" && "IMPROVEMENT"}
                        {language === "fr" && "AMÉLIORATION"}
                        {language === "ar" && "تحسن"}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors">
                    {result.title[language as keyof typeof result.title]}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {result.desc[language as keyof typeof result.desc]}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6">
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${colors.bg.replace('bg-gradient-to-br', 'bg-gradient-to-r')}`}
                        style={{ 
                          width: isVisible ? '100%' : '0%',
                          transitionDelay: `${(idx * 0.2) + 0.5}s`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom testimonial section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900/60 to-gray-900/40 border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center mr-2">
                  <CheckCircle className="w-5 h-5 text-black" />
                </div>
              ))}
            </div>
            
            <blockquote className="text-gray-300 text-xl italic mb-6 leading-relaxed">
              {language === "en" && '"These results aren\'t just numbers—they represent real transformation. Businesses that were struggling with manual processes are now thriving with automation."'}
              {language === "fr" && '"Ces résultats ne sont pas que des chiffres—ils représentent une transformation réelle. Les entreprises qui luttaient avec des processus manuels prospèrent maintenant avec l\'automatisation."'}
              {language === "ar" && '"هذه النتائج ليست مجرد أرقام—إنها تمثل تحولاً حقيقياً. الشركات التي كانت تعاني من العمليات اليدوية تزدهر الآن بالأتمتة."'}
            </blockquote>
            
            <div className="text-amber-400 font-semibold">
              {language === "en" && "— AT.AUTOMATE.AI Team"}
              {language === "fr" && "— Équipe AT.AUTOMATE.AI"}
              {language === "ar" && "— فريق AT.AUTOMATE.AI"}
            </div>
            
            <div className="mt-8">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-medium tracking-wide rounded-lg hover:from-amber-300 hover:via-yellow-300 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {language === "en" && "Join These Success Stories"}
                {language === "fr" && "Rejoignez Ces Histoires de Succès"}
                {language === "ar" && "انضم لقصص النجاح هذه"}
                <ArrowUp className="w-4 h-4 ml-2 rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedResults;