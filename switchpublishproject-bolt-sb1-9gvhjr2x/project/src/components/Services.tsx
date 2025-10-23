import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import {
  Clock,
  MessageSquare,
  Calendar,
  Filter,
  Repeat,
  Moon,
  Sparkles,
  PhoneCall,
  Film,
  ArrowRight,
  Star,
  Zap,
  Wrench,
  Globe
} from "lucide-react";

const services = [
  {
    titleKey: "service1Title",
    descKey: "service1Desc",
    icon: Clock,
    category: "automation",
    popularity: 98
  },
  {
    titleKey: "service3Title",
    descKey: "service3Desc",
    icon: Calendar,
    category: "scheduling",
    popularity: 96
  },
  {
    titleKey: "service5Title",
    descKey: "service5Desc",
    icon: Repeat,
    category: "workflow",
    popularity: 94
  },
  {
    titleKey: "service7Title",
    descKey: "service7Desc",
    icon: PhoneCall,
    category: "communication",
    popularity: 99
  },
  {
    titleKey: "service8Title",
    descKey: "service8Desc",
    icon: Film,
    category: "content",
    popularity: 92
  },
  {
    titleKey: "service10Title",
    descKey: "service10Desc",
    icon: Globe,
    category: "web",
    popularity: 97
  },
  {
    titleKey: "service9Title",
    descKey: "service9Desc",
    icon: Sparkles,
    category: "ai",
    popularity: 95
  },
];

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "automation", "communication", "scheduling", "workflow", "content", "ai", "web"];
  
  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, Record<string, string>> = {
      en: {
        all: "All Services",
        automation: "Automation",
        communication: "Communication",
        scheduling: "Scheduling",
        workflow: "Workflow",
        content: "Content",
        ai: "AI Solutions",
        web: "Web Design"
      },
      fr: {
        all: "Tous les Services",
        automation: "Automatisation",
        communication: "Communication",
        scheduling: "Planification",
        workflow: "Flux de Travail",
        content: "Contenu",
        ai: "Solutions IA",
        web: "Conception Web"
      },
      ar: {
        all: "جميع الخدمات",
        automation: "الأتمتة",
        communication: "التواصل",
        scheduling: "الجدولة",
        workflow: "سير العمل",
        content: "المحتوى",
        ai: "حلول الذكاء الاصطناعي",
        web: "تصميم المواقع"
      }
    };
    return labels[language][category] || category;
  };

  return (
    <section id="services" className="bg-black py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-yellow-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/8 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-semibold text-white leading-snug mb-6 overflow-safe"
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                lineHeight: '1.2'
              }}>
            {t.servicesTitle}
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-relaxed overflow-safe"
             style={{
               fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
               lineHeight: '1.6'
             }}>
            {t.servicesDesc}
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700 hover:border-gray-600'
                }`}
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Grid with animations */}
        <div className="grid gap-8" style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
        }}>
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-700 cursor-pointer group container-query overflow-hidden ${
                  isHovered
                    ? 'border-amber-400 shadow-[0_0_50px_rgba(251,191,36,0.3)] transform scale-105 -translate-y-2'
                    : 'border-gray-800/60 hover:border-amber-400/50 shadow-lg shadow-black/20'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Popularity indicator */}
                {service.popularity > 90 && (
                  <div className="absolute top-3 right-3 flex items-center space-x-1 bg-amber-400/20 px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-amber-400 fill-current" />
                    <span className="text-xs text-amber-400 font-medium">Popular</span>
                  </div>
                )}
                
                {/* Glowing border effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700 pointer-events-none ${
                  isHovered ? 'opacity-100' : ''
                } bg-gradient-to-br from-amber-400/15 via-yellow-400/10 to-transparent`} />

                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 transition-all duration-700 pointer-events-none ${
                  isHovered ? 'opacity-100' : ''
                }`} style={{
                  background: 'radial-gradient(circle at top right, rgba(251,191,36,0.1) 0%, transparent 60%)'
                }} />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`relative w-16 h-16 rounded-xl flex items-center justify-center mr-4 transition-all duration-500 ${
                      isHovered
                        ? 'bg-gradient-to-br from-amber-400/30 to-yellow-400/20 scale-110 rotate-3 shadow-lg shadow-amber-400/30'
                        : 'bg-gradient-to-br from-amber-400/10 to-yellow-400/5'
                    }`}>
                      {isHovered && (
                        <div className="absolute inset-0 rounded-xl bg-amber-400/20 animate-ping" />
                      )}
                      <IconComponent className={`w-8 h-8 text-amber-400 transition-all duration-500 relative z-10 ${
                        isHovered ? 'scale-110 drop-shadow-lg' : ''
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white group-hover:text-amber-100 transition-colors duration-300 overflow-safe"
                          style={{
                            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                            lineHeight: '1.3'
                          }}>
                        {t[service.titleKey as keyof typeof t]}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.round(service.popularity / 20)
                                  ? 'text-amber-400 fill-current'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">
                          {service.popularity}% satisfaction
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300 overflow-safe"
                     style={{
                       fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                       lineHeight: '1.6'
                     }}>
                    {t[service.descKey as keyof typeof t]}
                  </p>
                </div>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/5 via-amber-400/10 to-amber-400/5 opacity-0 transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : ''
                }`} />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-full border border-amber-400/30 mb-6">
            <Sparkles className="w-4 h-4 text-amber-400 mr-2" />
            <span className="text-amber-400 text-sm font-medium">
              {language === "en" && "Custom solutions available"}
              {language === "fr" && "Solutions personnalisées disponibles"}  
              {language === "ar" && "حلول مخصصة متاحة"}
            </span>
          </div>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === "en" && "Don't see exactly what you need? We build custom automation solutions tailored to your specific business requirements."}
            {language === "fr" && "Vous ne trouvez pas exactement ce dont vous avez besoin ? Nous créons des solutions d'automatisation personnalisées adaptées à vos exigences spécifiques."}
            {language === "ar" && "لا ترى بالضبط ما تحتاجه؟ نقوم ببناء حلول أتمتة مخصصة مصممة خصيصاً لمتطلبات عملك."}
          </p>
          
          {/* Custom Build CTA Button */}
          <div className="mt-8">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative inline-flex items-center px-16 py-8 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-bold tracking-wide text-2xl rounded-xl hover:from-amber-300 hover:via-yellow-300 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-amber-400/30 focus:outline-none focus:ring-4 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-black"
              aria-label={
                language === "en" ? "Request custom automation build - opens contact form" :
                language === "fr" ? "Demander une construction personnalisée - ouvre le formulaire de contact" :
                "طلب بناء مخصص - يفتح نموذج الاتصال"
              }
            >
              <Wrench className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">
                {language === "en" && "Request Custom Build"}
                {language === "fr" && "Demander une Construction Personnalisée"}
                {language === "ar" && "طلب بناء مخصص"}
              </span>
              <Zap className="w-5 h-5 ml-3 group-hover:animate-pulse" />
              
              {/* Animated background effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse" />
            </button>
            
            <p className="text-gray-500 text-sm mt-3">
              {language === "en" && "Free consultation • Custom quote in 24h • No commitment required"}
              {language === "fr" && "Consultation gratuite • Devis personnalisé en 24h • Aucun engagement requis"}
              {language === "ar" && "استشارة مجانية • عرض أسعار مخصص في 24 ساعة • لا يوجد التزام مطلوب"}
            </p>
          </div>
        </div>
      </div>
      
      {/* CSS for enhanced animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .grid > div {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;