import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import {
  Search,
  Wrench,
  Plug,
  GraduationCap,
  TrendingUp,
  CheckCircle,
  Clock,
  Users,
  Target,
  Zap,
} from "lucide-react";

const Process: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeStep, setActiveStep] = useState<number>(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: {
        en: "Deep Audit & Discovery",
        fr: "Audit Approfondi & Découverte",
        ar: "تدقيق عميق واستكشاف"
      },
      description: {
        en: "We start with a comprehensive 1-to-1 consultation to understand your workflow, tools, and main bottlenecks. We identify exactly where you're losing time and money.",
        fr: "Nous commençons par une consultation 1-à-1 complète pour comprendre votre flux de travail, outils, et principaux goulots d'étranglement. Nous identifions exactement où vous perdez temps et argent.",
        ar: "نبدأ بالاستشارة الشاملة واحد لواحد لفهم سير عملك وأدواتك والاختناقات الرئيسية. نحدد بالضبط أين تخسر الوقت والمال."
      },
      icon: Search,
      duration: "1-2 days",
      deliverable: "Audit Report",
      color: "blue",
      features: ["Process mapping", "Pain point analysis", "ROI calculation", "Custom strategy"]
    },
    {
      number: "02", 
      title: {
        en: "Custom Design & Build",
        fr: "Conception & Construction Personnalisées",
        ar: "التصميم والبناء المخصص"
      },
      description: {
        en: "Our team designs and builds automation tailored specifically to your business—not a generic template. Every system is crafted to match your unique requirements.",
        fr: "Notre équipe conçoit et construit une automatisation spécifiquement adaptée à votre entreprise—pas un modèle générique. Chaque système est conçu pour correspondre à vos exigences uniques.",
        ar: "فريقنا يصمم وينشئ الأتمتة المصممة خصيصاً لعملك—ليس قالباً عاماً. كل نظام مصنوع لتلبية متطلباتك الفريدة."
      },
      icon: Wrench,
      duration: "3-5 days",
      deliverable: "Custom System",
      color: "amber",
      features: ["Bespoke development", "AI training", "Workflow optimization", "Quality testing"]
    },
    {
      number: "03",
      title: {
        en: "Seamless Integration", 
        fr: "Intégration Transparente",
        ar: "التكامل السلس"
      },
      description: {
        en: "We connect the system to your CRM, calendar, communication tools, and existing infrastructure without disrupting your current operations or requiring downtime.",
        fr: "Nous connectons le système à votre CRM, calendrier, outils de communication, et infrastructure existante sans perturber vos opérations actuelles ou nécessiter d'arrêt.",
        ar: "نربط النظام بنظام إدارة علاقات العملاء والتقويم وأدوات التواصل والبنية التحتية الحالية دون تعطيل عملياتك الحالية."
      },
      icon: Plug,
      duration: "1-2 days", 
      deliverable: "Live System",
      color: "green",
      features: ["API connections", "Data migration", "System testing", "Zero downtime"]
    },
    {
      number: "04",
      title: {
        en: "System Handover & Setup",
        fr: "Passation & Configuration Système",
        ar: "تسليم النظام والإعداد"
      },
      description: {
        en: "We get your system live and ready for operation. You can choose monthly management by us or take full ownership after setup completion.",
        fr: "Nous mettons votre système en ligne et prêt à fonctionner. Vous pouvez choisir la gestion mensuelle par nous ou prendre la propriété complète après la configuration.",
        ar: "نجعل نظامك يعمل وجاهزاً للتشغيل. يمكنك اختيار الإدارة الشهرية من قبلنا أو أخذ الملكية الكاملة بعد اكتمال الإعداد."
      },
      icon: GraduationCap,
      duration: "1 day",
      deliverable: "System Handover",
      color: "purple",
      features: ["System goes live", "Ready for operation", "Support setup", "Management options"]
    },
    {
      number: "05",
      title: {
        en: "Scale & Optimize",
        fr: "Mise à l'Échelle & Optimisation",
        ar: "التوسيع والتحسين"
      },
      description: {
        en: "Once proven successful, we expand automation to other parts of your business for compounding efficiency gains and continuously optimize performance.",
        fr: "Une fois le succès prouvé, nous étendons l'automatisation à d'autres parties de votre entreprise pour des gains d'efficacité composés et optimisons continuellement les performances.",
        ar: "بمجرد إثبات النجاح، نوسع الأتمتة إلى أجزاء أخرى من عملك لمكاسب الكفاءة المضاعفة ونحسن الأداء باستمرار."
      },
      icon: TrendingUp,
      duration: "Ongoing",
      deliverable: "Growth Strategy", 
      color: "cyan",
      features: ["Performance monitoring", "Expansion planning", "Continuous optimization", "Advanced features"]
    },
  ];

  // Auto-advance through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...new Set([...prev, index])]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      blue: {
        icon: "text-blue-400",
        border: "border-blue-400/30",
        bg: "bg-gradient-to-r from-blue-400/10 to-cyan-400/10",
        text: "text-blue-400"
      },
      amber: {
        icon: "text-amber-400", 
        border: "border-amber-400/30",
        bg: "bg-gradient-to-r from-amber-400/10 to-yellow-400/10",
        text: "text-amber-400"
      },
      green: {
        icon: "text-green-400",
        border: "border-green-400/30", 
        bg: "bg-gradient-to-r from-green-400/10 to-emerald-400/10",
        text: "text-green-400"
      },
      purple: {
        icon: "text-purple-400",
        border: "border-purple-400/30",
        bg: "bg-gradient-to-r from-purple-400/10 to-pink-400/10", 
        text: "text-purple-400"
      },
      cyan: {
        icon: "text-cyan-400",
        border: "border-cyan-400/30",
        bg: "bg-gradient-to-r from-cyan-400/10 to-blue-400/10",
        text: "text-cyan-400"
      }
    };
    return colorMap[color] || colorMap.amber;
  };

  return (
    <section id="process" className="bg-black py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-yellow-400/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/8 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-full border border-amber-400/20 mb-6">
            <Target className="w-4 h-4 text-amber-400 mr-2" />
            <span className="text-amber-400 text-responsive-sm font-medium">
              {language === "en" && "Our Proven 5-Step Process"}
              {language === "fr" && "Notre Processus Éprouvé en 5 Étapes"}
              {language === "ar" && "عمليتنا المثبتة من 5 خطوات"}
            </span>
          </div>

          <h2 className="text-responsive-3xl sm:text-responsive-4xl lg:text-responsive-5xl font-serif font-semibold text-white leading-snug mb-8 overflow-safe">
            {t.processTitle}
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-responsive-lg overflow-safe">
            {language === "en" && "Transparent and simple. No hidden steps—just a proven framework to get you results quickly with minimal disruption to your business."}
            {language === "fr" && "Transparent et simple. Aucune étape cachée—juste un cadre éprouvé pour obtenir des résultats rapidement avec un minimum de perturbation pour votre entreprise."}
            {language === "ar" && "شفاف وبسيط. لا توجد خطوات مخفية—فقط إطار عمل مثبت للحصول على النتائج بسرعة مع الحد الأدنى من التعطيل لعملك."}
          </p>

          {/* Process timeline indicator */}
          <div className="mt-8 flex items-center justify-center space-x-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-medium text-responsive-sm">
              {language === "en" && "Total timeline: 7-14 days"}
              {language === "fr" && "Délai total : 7-14 jours"}
              {language === "ar" && "المدة الإجمالية: 7-14 يوماً"}
            </span>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 container-responsive">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isActive = activeStep === idx;
              const isVisible = visibleSteps.includes(idx);
              const colors = getColorClasses(step.color);
              
              return (
                <div
                  key={idx}
                  className={`relative group cursor-pointer transition-all duration-700 container-query pt-6 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${isActive ? 'transform scale-105' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  style={{ transitionDelay: `${idx * 0.2}s` }}
                >
                  {/* Step card */}
                  <div className={`relative p-6 lg:p-8 pt-10 border rounded-2xl backdrop-blur-md transition-all duration-700 overflow-visible ${
                    isActive
                      ? `${colors.border} ${colors.bg} shadow-2xl shadow-amber-400/20 scale-105`
                      : 'border-gray-800/60 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-black/80 hover:border-gray-700 hover:shadow-xl hover:shadow-black/30'
                  } h-full flex flex-col group-hover:-translate-y-1`} style={{ minHeight: '520px' }}>

                    {/* Animated background gradient on hover */}
                    <div className={`absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none ${
                      isActive ? 'opacity-100' : ''
                    }`} style={{
                      background: 'radial-gradient(circle at top left, rgba(251,191,36,0.08) 0%, transparent 70%)'
                    }} />
                    {/* Step number badge */}
                    <div className={`absolute -top-3 left-6 px-4 py-1.5 rounded-full text-sm font-bold border z-10 ${
                      isActive
                        ? `${colors.bg} ${colors.border} ${colors.text} shadow-lg`
                        : 'bg-gray-900 border-gray-700 text-gray-400'
                    }`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`relative w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      isActive ? colors.bg : 'bg-gray-800/50'
                    } border ${isActive ? colors.border : 'border-gray-700'} ${
                      isActive ? 'rotate-3 shadow-lg' : 'group-hover:rotate-3'
                    }`}>
                      {isActive && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent animate-pulse" />
                      )}
                      <IconComponent className={`w-8 h-8 transition-all duration-500 relative z-10 ${
                        isActive ? colors.icon : 'text-gray-400'
                      } ${isActive ? 'scale-125 drop-shadow-xl' : 'group-hover:scale-110'}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className={`text-responsive-lg font-semibold mb-3 transition-colors duration-300 overflow-safe ${
                      isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`} style={{ minHeight: '3.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      {step.title[language as keyof typeof step.title]}
                    </h3>

                      <p className={`text-responsive-sm leading-relaxed mb-6 transition-colors duration-300 overflow-safe ${
                      isActive ? 'text-gray-300' : 'text-gray-400'
                    }`} style={{ minHeight: '8rem' }}>
                      {step.description[language as keyof typeof step.description]}
                    </p>

                      {/* Metrics */}
                      <div className="mt-auto mb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-responsive-xs text-gray-500">{step.duration}</span>
                          </div>
                          <div className={`px-3 py-1.5 rounded-full text-responsive-xs font-medium ${
                            isActive
                              ? `${colors.bg} ${colors.text}`
                              : 'bg-gray-800/50 text-gray-500'
                          }`}>
                            {step.deliverable}
                          </div>
                        </div>
                      </div>

                      {/* Features list */}
                      <div className={`space-y-2.5 transition-all duration-500 ${
                        isActive ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                      }`} style={{ minHeight: isActive ? '10rem' : '0' }}>
                        {step.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-start space-x-2">
                            <CheckCircle className={`w-3.5 h-3.5 ${colors.icon} mt-0.5 flex-shrink-0`} />
                            <span className="text-responsive-xs text-gray-400 overflow-safe leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connection dot */}
                  <div className={`hidden lg:block absolute top-20 -right-2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isActive 
                      ? `${colors.bg} ${colors.border}`
                      : 'bg-gray-800 border-gray-600'
                  }`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom section with guarantees */}
        <div className="mt-32 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-green-400/10 to-emerald-400/10 border border-green-400/30 rounded-2xl transition-all duration-300 flex flex-col items-center h-full">
              <div className="w-16 h-16 rounded-xl bg-green-400/10 border border-green-400/30 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-white font-bold mb-3 text-lg">
                {language === "en" && "Fast Implementation"}
                {language === "fr" && "Implémentation Rapide"}
                {language === "ar" && "تنفيذ سريع"}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {language === "en" && "Most systems go live within 7-14 days"}
                {language === "fr" && "La plupart des systèmes sont opérationnels sous 7-14 jours"}
                {language === "ar" && "معظم الأنظمة تعمل خلال 7-14 يوماً"}
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 border border-blue-400/30 rounded-2xl transition-all duration-300 flex flex-col items-center h-full">
              <div className="w-16 h-16 rounded-xl bg-blue-400/10 border border-blue-400/30 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-white font-bold mb-3 text-lg">
                {language === "en" && "Dedicated Support"}
                {language === "fr" && "Support Dédié"}
                {language === "ar" && "دعم مخصص"}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {language === "en" && "Personal project manager throughout"}
                {language === "fr" && "Chef de projet personnel tout au long"}
                {language === "ar" && "مدير مشروع شخصي طوال الوقت"}
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 border border-amber-400/30 rounded-2xl transition-all duration-300 flex flex-col items-center h-full">
              <div className="w-16 h-16 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-white font-bold mb-3 text-lg">
                {language === "en" && "Guaranteed Results"}
                {language === "fr" && "Résultats Garantis"}
                {language === "ar" && "نتائج مضمونة"}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {language === "en" && "300% ROI within 6 months"}
                {language === "fr" && "ROI de 300% sous 6 mois"}
                {language === "ar" && "عائد 300% خلال 6 أشهر"}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-medium tracking-wide rounded-lg hover:from-amber-300 hover:via-yellow-300 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {language === "en" && "Start Your 7-Day Transformation"}
              {language === "fr" && "Commencez Votre Transformation 7 Jours"}
              {language === "ar" && "ابدأ تحولك في 7 أيام"}
            </button>
            <p className="text-gray-500 text-sm mt-3">
              {language === "en" && "Free consultation • Cancel anytime"}
              {language === "fr" && "Consultation gratuite • Résiliation à tout moment"}
              {language === "ar" && "استشارة مجانية • إلغاء في أي وقت"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;