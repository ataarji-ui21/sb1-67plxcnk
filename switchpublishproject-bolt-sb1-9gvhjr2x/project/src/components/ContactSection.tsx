import React, { useState, useEffect } from "react";
import { Send, CheckCircle, AlertCircle, Phone, Mail, MessageCircle, ArrowUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    urgency: "medium",
    budget: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [highlightForm, setHighlightForm] = useState(false);

  // Handle floating CTA visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      
      setShowFloatingCTA(scrollPercent > 0.2 && scrollPercent < 0.85);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = language === "en" ? "Please enter your name" : 
                      language === "fr" ? "Veuillez entrer votre nom" :
                      "يرجى إدخال اسمك";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = language === "en" ? "Please enter your email" :
                        language === "fr" ? "Veuillez entrer votre email" :
                        "يرجى إدخال بريدك الإلكتروني";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === "en" ? "Please enter a valid email" :
                        language === "fr" ? "Veuillez entrer un email valide" :
                        "يرجى إدخال بريد إلكتروني صالح";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = language === "en" ? "Please enter your company" :
                          language === "fr" ? "Veuillez entrer votre entreprise" :
                          "يرجى إدخال اسم شركتك";
    }
    
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = language === "en" ? "Please provide at least 10 characters" :
                          language === "fr" ? "Veuillez fournir au moins 10 caractères" :
                          "يرجى تقديم 10 أحرف على الأقل";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Scroll to form
    const formElement = document.getElementById('contact-form-container');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Highlight form
    setHighlightForm(true);
    setTimeout(() => {
      setHighlightForm(false);
    }, 3000);
  };

  const getText = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        title: "Get Your Free Automation Consultation",
        subtitle: "Tell us about your biggest time-wasters and we'll show you exactly how to eliminate them",
        nameLabel: "Your Name *",
        emailLabel: "Business Email *",
        companyLabel: "Company Name *",
        messageLabel: "What processes are costing you time? *",
        urgencyLabel: "How urgent is this?",
        budgetLabel: "Monthly Budget Range",
        submitButton: "Get My Free Consultation",
        submitButtonLoading: "Sending...",
        responseTime: "We'll respond within 24 hours with a custom automation strategy",
        thankYouTitle: "Thank You!",
        thankYouMessage: "We'll analyze your automation needs and contact you within 24 hours with a custom strategy.",
        sendAnother: "Send Another Message",
        urgencyLow: "Within 3 months",
        urgencyMedium: "Within 1 month", 
        urgencyHigh: "ASAP - losing money daily",
        budgetSmall: "$1,000 - $5,000",
        budgetMedium: "$5,000 - $15,000",
        budgetLarge: "$15,000+",
        budgetCustom: "Let's discuss"
      },
      fr: {
        title: "Obtenez Votre Consultation Gratuite",
        subtitle: "Parlez-nous de vos plus gros gaspillages de temps et nous vous montrerons exactement comment les éliminer",
        nameLabel: "Votre Nom *",
        emailLabel: "Email Professionnel *",
        companyLabel: "Nom de l'Entreprise *",
        messageLabel: "Quels processus vous coûtent du temps ? *",
        urgencyLabel: "Quelle est l'urgence ?",
        budgetLabel: "Budget Mensuel",
        submitButton: "Ma Consultation Gratuite",
        submitButtonLoading: "Envoi...",
        responseTime: "Nous répondrons sous 24h avec une stratégie d'automatisation personnalisée",
        thankYouTitle: "Merci !",
        thankYouMessage: "Nous analyserons vos besoins et vous contacterons sous 24h avec une stratégie personnalisée.",
        sendAnother: "Envoyer un Autre Message",
        urgencyLow: "Dans 3 mois",
        urgencyMedium: "Dans 1 mois",
        urgencyHigh: "URGENT - je perds de l'argent",
        budgetSmall: "1 000€ - 5 000€",
        budgetMedium: "5 000€ - 15 000€", 
        budgetLarge: "15 000€+",
        budgetCustom: "À discuter"
      },
      ar: {
        title: "احصل على استشارة الأتمتة المجانية",
        subtitle: "أخبرنا عن أكبر مضيعات الوقت لديك وسنوضح لك بالضبط كيفية القضاء عليها",
        nameLabel: "اسمك *",
        emailLabel: "البريد الإلكتروني للعمل *",
        companyLabel: "اسم الشركة *",
        messageLabel: "ما العمليات التي تكلفك الوقت؟ *",
        urgencyLabel: "ما مدى الإلحاح؟",
        budgetLabel: "نطاق الميزانية الشهرية",
        submitButton: "احصل على الاستشارة المجانية",
        submitButtonLoading: "إرسال...",
        responseTime: "سنرد خلال 24 ساعة باستراتيجية أتمتة مخصصة",
        thankYouTitle: "شكراً لك!",
        thankYouMessage: "سنحلل احتياجات الأتمتة ونتواصل معك خلال 24 ساعة بإستراتيجية مخصصة.",
        sendAnother: "إرسال رسالة أخرى",
        urgencyLow: "خلال 3 أشهر",
        urgencyMedium: "خلال شهر واحد",
        urgencyHigh: "عاجل - أخسر المال يومياً",
        budgetSmall: "$1,000 - $5,000",
        budgetMedium: "$5,000 - $15,000",
        budgetLarge: "$15,000+",
        budgetCustom: "لنناقش الأمر"
      }
    };
    return translations[language]?.[key] || translations.en[key];
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="bg-black py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-b from-gray-900/60 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-12">
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-8 animate-bounce" />
            <h3 className="text-3xl font-serif text-white mb-6">{getText('thankYouTitle')}</h3>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              {getText('thankYouMessage')}
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", company: "", message: "", urgency: "medium", budget: "" });
              }}
              className="text-amber-400 hover:text-amber-300 border border-amber-400/50 px-6 py-2 rounded-lg hover:bg-amber-400/10 transition-all"
            >
              {getText('sendAnother')}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="contact" className="bg-black py-24 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-yellow-400/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/8 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Contact info */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white leading-snug mb-6">
                {getText('title')}
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {getText('subtitle')}
              </p>

              {/* Contact options */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4 p-4 bg-gray-900/40 rounded-lg border border-gray-800">
                  <Phone className="w-6 h-6 text-amber-400" />
                  <div>
                    <div className="text-white font-medium">
                      {language === "en" && "Phone Consultation"}
                      {language === "fr" && "Consultation Téléphonique"}
                      {language === "ar" && "استشارة هاتفية"}
                    </div>
                    <span className="text-gray-400 text-sm animate-pulse">
                      +212 666 219 074
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-900/40 rounded-lg border border-gray-800">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                  <div>
                    <a 
                      href="https://wa.me/212666219074"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-green-400 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-900/40 rounded-lg border border-gray-800">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <a 
                      onClick={handleEmailClick}
                      className="text-white font-medium hover:text-blue-400 transition-colors"
                    >
                      {language === "en" && "Email Response"}
                      {language === "fr" && "Réponse Email"}
                      {language === "ar" && "رد عبر البريد الإلكتروني"}
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="bg-gradient-to-r from-amber-400/5 to-yellow-400/5 border border-amber-400/20 rounded-lg p-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-center">
                    <div className="text-amber-400 font-bold text-lg">50+</div>
                    <div className="text-gray-400">
                      {language === "en" && "Businesses Automated"}
                      {language === "fr" && "Entreprises Automatisées"}
                      {language === "ar" && "شركة تم أتمتتها"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-amber-400 font-bold text-lg">48h</div>
                    <div className="text-gray-400">
                      {language === "en" && "Average Setup"}
                      {language === "fr" && "Configuration Moyenne"}
                      {language === "ar" && "متوسط الإعداد"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-amber-400 font-bold text-lg">300%</div>
                    <div className="text-gray-400">
                      {language === "en" && "Average ROI"}
                      {language === "fr" && "ROI Moyen"}
                      {language === "ar" && "متوسط العائد"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced Form */}
            <div 
              id="contact-form-container"
              className={`bg-gradient-to-b from-gray-900/60 to-gray-900/40 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-1000 ${
                highlightForm 
                  ? 'border-amber-400 shadow-xl shadow-amber-400/20 bg-gradient-to-b from-amber-400/10 to-gray-900/40' 
                  : 'border-gray-800'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    {getText('nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full bg-gray-800/50 border ${
                      errors.name ? 'border-red-400' : 'border-gray-600'
                    } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all`}
                    style={{
                      padding: 'clamp(0.75rem, 2vw, 1rem)',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                      minHeight: '44px',
                      borderRadius: '0.5rem'
                    }}
                    placeholder={language === "en" ? "Enter your full name" : language === "fr" ? "Entrez votre nom complet" : "أدخل اسمك الكامل"}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    {getText('emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full bg-gray-800/50 border ${
                      errors.email ? 'border-red-400' : 'border-gray-600'
                    } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all`}
                    style={{
                      padding: 'clamp(0.75rem, 2vw, 1rem)',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                      minHeight: '44px',
                      borderRadius: '0.5rem'
                    }}
                    placeholder="your.email@company.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Company field */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    {getText('companyLabel')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className={`w-full bg-gray-800/50 border ${
                      errors.company ? 'border-red-400' : 'border-gray-600'
                    } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all`}
                    style={{
                      padding: 'clamp(0.75rem, 2vw, 1rem)',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                      minHeight: '44px',
                      borderRadius: '0.5rem'
                    }}
                    placeholder={language === "en" ? "Your company name" : language === "fr" ? "Nom de votre entreprise" : "اسم شركتك"}
                    disabled={isSubmitting}
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" /> {errors.company}
                    </p>
                  )}
                </div>

                {/* Urgency field */}
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-white mb-2">
                    {getText('urgencyLabel')}
                  </label>
                  <select
                    id="urgency"
                    value={formData.urgency}
                    onChange={(e) => handleChange('urgency', e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    style={{
                      padding: 'clamp(0.75rem, 2vw, 1rem)',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                      minHeight: '44px',
                      borderRadius: '0.5rem'
                    }}
                    disabled={isSubmitting}
                  >
                    <option value="low">{getText('urgencyLow')}</option>
                    <option value="medium">{getText('urgencyMedium')}</option>
                    <option value="high">{getText('urgencyHigh')}</option>
                  </select>
                </div>

                {/* Budget field */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                    {getText('budgetLabel')} 
                    <span className="text-gray-400 text-xs ml-2">(Optional)</span>
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => handleChange('budget', e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    style={{
                      padding: 'clamp(0.75rem, 2vw, 1rem)',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                      minHeight: '44px',
                      borderRadius: '0.5rem'
                    }}
                    disabled={isSubmitting}
                  >
                    <option value="">{language === "en" ? "Select budget range" : language === "fr" ? "Sélectionnez la fourchette budgétaire" : "حدد نطاق الميزانية"}</option>
                    <option value="small">{getText('budgetSmall')}</option>
                    <option value="medium">{getText('budgetMedium')}</option>
                    <option value="large">{getText('budgetLarge')}</option>
                    <option value="custom">{getText('budgetCustom')}</option>
                  </select>
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    {getText('messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`w-full bg-gray-800/50 border ${
                      errors.message ? 'border-red-400' : 'border-gray-600'
                    } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all resize-none`}
                    style={{
                      padding: 'clamp(0.75rem, 2vw, 1rem)',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                      minHeight: '120px',
                      borderRadius: '0.5rem'
                    }}
                    placeholder={language === "en" ? "Describe your biggest time-wasters: manual follow-ups, data entry, scheduling conflicts..." : language === "fr" ? "Décrivez vos plus gros gaspillages de temps: suivis manuels, saisie de données, conflits de planification..." : "صف أكبر مضيعات الوقت لديك: المتابعات اليدوية، إدخال البيانات، تضارب المواعيد..."}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" /> {errors.message}
                    </p>
                  )}
                  <div className="text-xs text-gray-500 mt-1">
                    {language === "en" && "The more specific you are, the better we can help you save time"}
                    {language === "fr" && "Plus vous êtes précis, mieux nous pourrons vous aider à économiser du temps"}
                    {language === "ar" && "كلما كنت أكثر تحديداً، كان بإمكاننا مساعدتك بشكل أفضل"}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-bold tracking-wide hover:from-amber-300 hover:via-yellow-300 hover:to-amber-400 transition-all duration-300 transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  style={{
                    padding: 'clamp(1.5rem, 4vw, 2.25rem) clamp(2.5rem, 5vw, 3.5rem)',
                    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                    minHeight: '70px',
                    borderRadius: '0.75rem'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                      {getText('submitButtonLoading')}
                    </>
                  ) : (
                    <>
                      {getText('submitButton')}
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-gray-500 text-sm text-center">
                  {getText('responseTime')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50 transition-all duration-500 translate-y-0 opacity-100">
        <div className="flex flex-col space-y-3">
          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-amber-400/50 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          
          {/* Main CTA button */}
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            {language === "en" && "Get Free Consultation"}
            {language === "fr" && "Consultation Gratuite"}
            {language === "ar" && "استشارة مجانية"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactSection;