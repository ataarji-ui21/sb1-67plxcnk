import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Clock, TrendingUp, Users, Zap, Star } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const EnhancedCallToAction: React.FC = () => {
  const { language } = useLanguage();
  const [urgencyLevel, setUrgencyLevel] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    hours: 0,
    revenue: 0,
    clients: 0
  });

  // Animated counters
  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setAnimatedNumbers(prev => ({
          ...prev,
          hours: prev.hours < 40 ? prev.hours + 1 : 40
        }));
      }, 100),
      setInterval(() => {
        setAnimatedNumbers(prev => ({
          ...prev,
          revenue: prev.revenue < 300 ? prev.revenue + 10 : 300
        }));
      }, 50),
      setInterval(() => {
        setAnimatedNumbers(prev => ({
          ...prev,
          clients: prev.clients < 50 ? prev.clients + 1 : 50
        }));
      }, 120)
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  // Urgency indicator
  useEffect(() => {
    const interval = setInterval(() => {
      setUrgencyLevel(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getText = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        title: "Ready to Stop Losing Money",
        subtitle: "To Manual Processes?",
        urgentNotice: "⚠️ URGENT",
        urgentText: "Every day you wait costs you money",
        point1: "Every day without automation costs you 8+ hours. You lose opportunities while competitors gain them.",
        point2: "Your competitors are deploying these systems now. They capture leads you miss.",
        point3: "Access restricted protocols before market saturation. Deploy before it's too late.",
        ctaButton: "Start Saving 40 Hours Per Week",
        guarantee: "Free consultation • Go live in days, not weeks • Cancel anytime",
        statsTitle: "Join successful businesses already saving:",
        stat1: "Hours saved weekly",
        stat2: "Revenue increase average",
        stat3: "Businesses automated",
        testimonial: '"This automation saved my sanity and doubled our revenue in 3 months."',
        testimonialAuthor: "Sarah Chen, Marketing Director",
        ratingText: "4.9/5 stars from 200+ businesses"
      },
      fr: {
        title: "Prêt à Arrêter de Perdre de l'Argent",
        subtitle: "Avec les Processus Manuels ?",
        urgentNotice: "⚠️ URGENT",
        urgentText: "Chaque jour d'attente vous coûte de l'argent",
        point1: "Chaque jour sans automatisation vous coûte 8+ heures. Vous perdez des opportunités pendant que les concurrents les gagnent.",
        point2: "Vos concurrents déploient ces systèmes maintenant. Ils capturent les prospects que vous manquez.",
        point3: "Accédez aux protocoles restreints avant la saturation du marché. Déployez avant qu'il ne soit trop tard.",
        ctaButton: "Commencez à Économiser 40h par Semaine",
        guarantee: "Consultation gratuite • En ligne en jours, pas en semaines • Résiliation à tout moment",
        statsTitle: "Rejoignez les entreprises qui économisent déjà :",
        stat1: "Heures économisées par semaine",
        stat2: "Augmentation moyenne des revenus",
        stat3: "Entreprises automatisées",
        testimonial: '"Cette automatisation a sauvé ma santé mentale et doublé nos revenus en 3 mois."',
        testimonialAuthor: "Sarah Chen, Directrice Marketing",
        ratingText: "4,9/5 étoiles de 200+ entreprises"
      },
      ar: {
        title: "مستعد للتوقف عن خسارة المال",
        subtitle: "بسبب العمليات اليدوية؟",
        urgentNotice: "⚠️ عاجل",
        urgentText: "كل يوم تنتظره يكلفك المال",
        point1: "كل يوم بدون أتمتة يكلفك 8+ ساعات. تخسر الفرص بينما المنافسون يكسبونها.",
        point2: "منافسوك ينشرون هذه الأنظمة الآن. يلتقطون العملاء المحتملين الذين تفوتهم.",
        point3: "الوصول إلى البروتوكولات المقيدة قبل تشبع السوق. انشر قبل فوات الأوان.",
        ctaButton: "ابدأ في توفير 40 ساعة أسبوعياً",
        guarantee: "استشارة مجانية • اعمل في أيام، وليس أسابيع • إلغاء في أي وقت",
        statsTitle: "انضم للشركات الناجحة التي توفر بالفعل:",
        stat1: "ساعات موفرة أسبوعياً",
        stat2: "متوسط زيادة الإيرادات",
        stat3: "شركات تم أتمتتها",
        testimonial: '"هذه الأتمتة أنقذت عقلي وضاعفت إيراداتنا في 3 أشهر."',
        testimonialAuthor: "سارة تشين، مديرة التسويق",
        ratingText: "4.9/5 نجوم من أكثر من 200 شركة"
      }
    };
    return translations[language]?.[key] || translations.en[key];
  };

  const urgencyColors = [
    "from-red-500/20 to-orange-500/20 border-red-500/40",
    "from-orange-500/20 to-yellow-500/20 border-orange-500/40", 
    "from-yellow-500/20 to-red-500/20 border-yellow-500/40"
  ];

  return (
    <section className="bg-black py-32 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/12 to-yellow-400/8 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/8 to-blue-400/12 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-red-400/6 to-orange-400/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Urgency Banner */}
        <div className={`mb-8 mx-auto max-w-2xl p-4 rounded-xl border backdrop-blur-sm bg-gradient-to-r ${urgencyColors[urgencyLevel]} transition-all duration-1000`}>
          <div className="flex items-center justify-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              <span className="text-red-400 font-bold text-sm">
                {getText('urgentNotice')}
              </span>
            </div>
            <span className="text-white text-sm font-medium">
              {getText('urgentText')}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4 leading-tight">
            {getText('title')}
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent mt-2">
              {getText('subtitle')}
            </span>
          </h3>

          {/* Enhanced bullet points with animations */}
          <ul className="flex flex-col gap-4 text-left max-w-3xl mx-auto text-gray-300 mb-12">
            {[1, 2, 3].map((num) => (
              <li key={num} className="flex items-start group">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-amber-400 mr-3 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-base">
                  {getText(`point${num}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Animated Stats */}
        <div className="mb-12">
          <h4 className="text-xl text-center text-gray-400 mb-8">
            {getText('statsTitle')}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-b from-gray-900/60 to-gray-900/40 rounded-xl border border-gray-800 hover:border-amber-400/50 transition-all duration-300">
              <Clock className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-amber-400 mb-2">
                {animatedNumbers.hours}+
              </div>
              <div className="text-gray-400 text-sm">
                {getText('stat1')}
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-gray-900/60 to-gray-900/40 rounded-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-400 mb-2">
                {animatedNumbers.revenue}%
              </div>
              <div className="text-gray-400 text-sm">
                {getText('stat2')}
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-gray-900/60 to-gray-900/40 rounded-xl border border-gray-800 hover:border-blue-400/50 transition-all duration-300">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {animatedNumbers.clients}+
              </div>
              <div className="text-gray-400 text-sm">
                {getText('stat3')}
              </div>
            </div>
          </div>
        </div>


        {/* Enhanced CTA Button */}
        <div className="text-center">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative inline-flex items-center px-20 py-10 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-bold tracking-wide text-2xl rounded-xl hover:from-amber-300 hover:via-yellow-300 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-400/30"
          >
            <Zap className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            {getText('ctaButton')}
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse" />
          </button>
          
          <p className="text-gray-400 text-sm mt-6 max-w-md mx-auto">
            Free consultation • Go live in days, not weeks • Cancel anytime
          </p>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-amber-400/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-yellow-400/60 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-red-400/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>
    </section>
  );
};

export default EnhancedCallToAction;