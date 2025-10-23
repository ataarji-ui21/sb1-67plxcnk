import React from 'react';
import { Bot, Instagram, MessageCircle, Linkedin, Twitter, Star, Shield, Clock, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  const getText = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        company: "AT.AUTOMATE.AI",
        tagline: "Helping businesses save 40+ hours per week through intelligent automation",
        quickLinks: "Quick Links",
        services: "Our Services",
        leadCapture: "Lead Capture",
        voiceAI: "Voice AI Agents",
        appointment: "Appointment Booking", 
        followUp: "Follow-up Automation",
        socialMedia: "Social Media AI",
        workflow: "Workflow Optimization",
        guarantees: "Our Guarantees",
        guarantee1: "Go live in days, not weeks",
        guarantee2: "300% ROI within 6 months",
        guarantee3: "24/7 technical support",
        guarantee4: "Flexible terms, cancel anytime",
        certifications: "Certifications & Trust",
        gdpr: "GDPR Compliant",
        ssl: "SSL Secured",
        uptime: "99.9% Uptime",
        support: "24/7 Support",
        contact: "Get In Touch",
        phone: "Phone",
        whatsapp: "WhatsApp",
        email: "Email",
        followUs: "Follow Us",
        legal: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy",
        copyright: "© 2025 AT.AUTOMATE.AI • All rights reserved",
        location: "Based in Casablanca, Morocco • Serving businesses worldwide"
      },
      fr: {
        company: "AT.AUTOMATE.AI",
        tagline: "Aidons les entreprises à économiser 40+ heures par semaine grâce à l'automatisation intelligente",
        quickLinks: "Liens Rapides",
        services: "Nos Services",
        leadCapture: "Capture de Prospects",
        voiceAI: "Agents IA Vocaux",
        appointment: "Réservation de Rendez-vous",
        followUp: "Automatisation de Suivi",
        socialMedia: "IA des Médias Sociaux",
        workflow: "Optimisation des Flux",
        guarantees: "Nos Garanties",
        guarantee1: "En ligne en jours, pas en semaines",
        guarantee2: "ROI de 300% sous 6 mois",
        guarantee3: "Support technique 24h/24",
        guarantee4: "Conditions flexibles, résiliation libre",
        certifications: "Certifications et Confiance",
        gdpr: "Conforme RGPD",
        ssl: "Sécurisé SSL",
        uptime: "99,9% de Disponibilité",
        support: "Support 24/7",
        contact: "Contactez-Nous",
        phone: "Téléphone",
        whatsapp: "WhatsApp",
        email: "Email",
        followUs: "Suivez-Nous",
        legal: "Légal",
        privacy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation",
        cookies: "Politique des Cookies",
        copyright: "© 2025 AT.AUTOMATE.AI • Tous droits réservés",
        location: "Basé à Casablanca, Maroc • Au service des entreprises du monde entier"
      },
      ar: {
        company: "AT.AUTOMATE.AI",
        tagline: "نساعد الشركات على توفير 40+ ساعة أسبوعياً من خلال الأتمتة الذكية",
        quickLinks: "روابط سريعة",
        services: "خدماتنا",
        leadCapture: "جذب العملاء المحتملين",
        voiceAI: "وكلاء الذكاء الصوتي",
        appointment: "حجز المواعيد",
        followUp: "أتمتة المتابعة",
        socialMedia: "ذكاء وسائل التواصل",
        workflow: "تحسين سير العمل",
        guarantees: "ضماناتنا",
        guarantee1: "اعمل في أيام، وليس أسابيع",
        guarantee2: "عائد 300% خلال 6 أشهر",
        guarantee3: "دعم تقني على مدار الساعة",
        guarantee4: "شروط مرنة، إلغاء في أي وقت",
        certifications: "الشهادات والثقة",
        gdpr: "متوافق مع GDPR",
        ssl: "مؤمن بـ SSL",
        uptime: "99.9% وقت التشغيل",
        support: "دعم على مدار الساعة",
        contact: "تواصل معنا",
        phone: "الهاتف",
        whatsapp: "واتساب",
        email: "البريد الإلكتروني",
        followUs: "تابعنا",
        legal: "قانوني",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        cookies: "سياسة ملفات تعريف الارتباط",
        copyright: "© 2025 AT.AUTOMATE.AI • جميع الحقوق محفوظة",
        location: "مقرنا في الدار البيضاء، المغرب • نخدم الشركات في جميع أنحاء العالم"
      }
    };
    return translations[language]?.[key] || translations.en[key];
  };

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-400/20 to-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-400/15 to-blue-400/20 rounded-full blur-3xl" />
      </div>

      {/* Trust indicators bar */}
      <div className="relative z-10 border-b border-gray-800/50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-2 text-gray-400">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">{getText('gdpr')}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">{getText('uptime')}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-medium">{getText('ssl')}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium ml-2">4.9/5 Client Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Bot className="w-8 h-8 text-amber-400" />
                <span className="text-white font-mono text-xl tracking-wide">
                  {getText('company')}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {getText('tagline')}
              </p>
              <div className="text-gray-500 text-xs">
                {getText('location')}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">{getText('quickLinks')}</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">{getText('services')}</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Benefits</a></li>
                <li><a href="#process" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Process</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">FAQ</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">{getText('contact')}</a></li>
              </ul>
            </div>


            {/* Contact & Social */}
            <div>
              <h4 className="text-white font-semibold mb-4">{getText('contact')}</h4>
              <ul className="space-y-3 mb-6">
                <li>
                  <a href="tel:+212666219074" className="flex items-center space-x-2 text-gray-400 hover:text-amber-400 text-sm transition-colors">
                    <span>{getText('phone')}: +212 666 219 074</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/212666219074" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-green-400 text-sm transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>{getText('whatsapp')}</span>
                  </a>
                </li>
              </ul>

              <h5 className="text-white font-medium mb-3 text-sm">{getText('followUs')}</h5>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/atcorp21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/212666219074"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm text-center md:text-left">
              {getText('copyright')}
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs">
              <a href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors">
                {getText('privacy')}
              </a>
              <a href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors">
                {getText('terms')}
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-amber-400 transition-colors">
                {getText('cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;