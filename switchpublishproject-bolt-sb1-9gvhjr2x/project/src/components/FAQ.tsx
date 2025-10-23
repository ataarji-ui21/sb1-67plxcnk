import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, MessageCircle, Sparkles, HelpCircle, CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface FAQ {
  question: string;
  answer: string;
  category: string;
  popular?: boolean;
}

const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const faqs: Record<string, FAQ[]> = {
    en: [
      {
        question: "Will clients know it's AI on the phone?",
        answer: "No. Our voice AI is designed to sound fully natural—most callers cannot tell the difference from a human receptionist. It handles greetings, Q&A, and bookings seamlessly with human-like conversation patterns, emotional responses, and natural speech timing.",
        category: "ai",
        popular: true
      },
      {
        question: "Can this connect to my CRM and calendar?",
        answer: "Yes. We integrate with all major CRMs (Salesforce, HubSpot, Pipedrive, etc.), calendars (Google, Outlook, Calendly), and booking systems so your leads, appointments, and notes stay perfectly synced. We also connect to your existing phone systems, email platforms, and messaging tools.",
        category: "integration",
        popular: true
      },
      {
        question: "How long does setup take?",
        answer: "Most businesses are fully deployed within 7-14 days. Simple automations like appointment booking can be live in 2-3 days, while complex custom builds may take 2-3 weeks depending on requirements. We provide daily progress updates throughout.",
        category: "setup"
      },
      {
        question: "What about data security and privacy?",
        answer: "We use bank-grade encryption, GDPR-compliant data handling, and industry best practices to keep client data safe. No sensitive information is stored outside your own systems. All connections use SSL/TLS encryption, and we're SOC 2 Type II certified.",
        category: "security",
        popular: true
      },
      {
        question: "Can it create social media content too?",
        answer: "Yes. Our AI generates videos, images, reels, and shorts for Instagram, TikTok, LinkedIn, and YouTube—ready to post and optimized for engagement. It can create content calendars, write captions, and even schedule posts automatically.",
        category: "content"
      },
      {
        question: "What if I need something custom?",
        answer: "We specialize in custom automations. If it can be automated, we can build it. From complex multi-step workflows to industry-specific processes, we create bespoke solutions that fit your exact requirements and integrate with your existing tools.",
        category: "custom",
        popular: true
      },
      {
        question: "How much does it cost?",
        answer: "Pricing depends on complexity and features. Simple automations start at $2,000 setup + $500/month. Complex systems range from $5,000-15,000 setup + $1,500-5,000/month. Most clients see 300%+ ROI within 6 months. We offer free consultations to provide exact quotes.",
        category: "pricing"
      },
      {
        question: "Do you provide training and support?",
        answer: "We provide 24/7 technical support and regular optimization reviews. You can choose between our monthly management service or take full ownership of the system after setup.",
        category: "support"
      },
      {
        question: "What if it doesn't work for my business?",
        answer: "We work to ensure the automation delivers the promised benefits. If we cannot achieve the expected results, we'll ensure a smooth transition out of the system.",
        category: "guarantee"
      },
      {
        question: "Can I cancel anytime?",
        answer: "Yes, there are no long-term contracts. You can cancel with 30 days' notice. However, you own all the automation systems we build for you, so they continue working even if you cancel our ongoing support services.",
        category: "terms"
      }
    ],
    fr: [
      {
        question: "Les clients sauront-ils que c'est une IA au téléphone ?",
        answer: "Non. Notre IA vocale est conçue pour sonner entièrement naturelle—la plupart des appelants ne peuvent pas faire la différence avec une réceptionniste humaine. Elle gère les salutations, Q&R, et réservations de manière transparente.",
        category: "ai",
        popular: true
      },
      {
        question: "Peut-elle se connecter à mon CRM et calendrier ?",
        answer: "Oui. Nous nous intégrons avec tous les CRM majeurs, calendriers, et systèmes de réservation pour que vos prospects, rendez-vous, et notes restent parfaitement synchronisés.",
        category: "integration",
        popular: true
      },
      {
        question: "Combien de temps prend la configuration ?",
        answer: "La plupart des entreprises sont entièrement déployées sous 7-14 jours. Les automatisations simples peuvent être opérationnelles en 2-3 jours.",
        category: "setup"
      },
      {
        question: "Qu'en est-il de la sécurité des données ?",
        answer: "Nous utilisons un chiffrement de niveau bancaire, une gestion des données conforme au RGPD, et les meilleures pratiques de l'industrie pour protéger les données clients.",
        category: "security",
        popular: true
      },
      {
        question: "Peut-elle créer du contenu pour les médias sociaux ?",
        answer: "Oui. Notre IA génère des vidéos, images, reels, et shorts pour Instagram, TikTok, LinkedIn, et YouTube—prêts à publier et optimisés pour l'engagement.",
        category: "content"
      },
      {
        question: "Et si j'ai besoin de quelque chose de personnalisé ?",
        answer: "Nous nous spécialisons dans les automatisations personnalisées. Si cela peut être automatisé, nous pouvons le construire.",
        category: "custom",
        popular: true
      }
    ],
    ar: [
      {
        question: "هل سيعرف العملاء أنه ذكاء اصطناعي على الهاتف؟",
        answer: "لا. ذكاءنا الصوتي مصمم ليبدو طبيعياً تماماً—معظم المتصلين لا يمكنهم التمييز بينه وبين موظف الاستقبال البشري. يتعامل مع التحيات والأسئلة والحجوزات بسلاسة.",
        category: "ai",
        popular: true
      },
      {
        question: "هل يمكن ربطه بنظام إدارة العملاء والتقويم؟",
        answer: "نعم. نتكامل مع جميع أنظمة إدارة العملاء الرئيسية والتقاويم وأنظمة الحجز بحيث تبقى عملاؤك المحتملون ومواعيدك وملاحظاتك متزامنة تماماً.",
        category: "integration",
        popular: true
      },
      {
        question: "كم من الوقت يستغرق الإعداد؟",
        answer: "معظم الشركات يتم نشرها بالكامل خلال 7-14 يوماً. الأتمتة البسيطة يمكن أن تعمل في 2-3 أيام.",
        category: "setup"
      },
      {
        question: "ماذا عن أمان البيانات والخصوصية؟",
        answer: "نستخدم تشفيراً بمستوى مصرفي، ومعالجة بيانات متوافقة مع GDPR، وأفضل الممارسات في الصناعة للحفاظ على أمان بيانات العملاء.",
        category: "security",
        popular: true
      },
      {
        question: "هل يمكنه إنشاء محتوى وسائل التواصل الاجتماعي أيضاً؟",
        answer: "نعم. ذكاءنا الاصطناعي ينشئ فيديوهات وصور وريلز ومقاطع قصيرة لإنستغرام وتيك توك ولينكد إن ويوتيوب—جاهزة للنشر ومحسنة للتفاعل.",
        category: "content"
      },
      {
        question: "ماذا لو احتجت شيئاً مخصصاً؟",
        answer: "نتخصص في الأتمتة المخصصة. إذا كان يمكن أتمتته، يمكننا بناؤه.",
        category: "custom",
        popular: true
      }
    ]
  };

  const categories = [
    { id: "all", label: { en: "All Questions", fr: "Toutes Questions", ar: "جميع الأسئلة" } },
    { id: "ai", label: { en: "AI & Voice", fr: "IA & Voix", ar: "الذكاء الاصطناعي والصوت" } },
    { id: "integration", label: { en: "Integration", fr: "Intégration", ar: "التكامل" } },
    { id: "setup", label: { en: "Setup", fr: "Configuration", ar: "الإعداد" } },
    { id: "pricing", label: { en: "Pricing", fr: "Tarification", ar: "التسعير" } },
    { id: "support", label: { en: "Support", fr: "Support", ar: "الدعم" } }
  ];

  const currentFaqs = faqs[language] || faqs.en;

  const filteredFaqs = currentFaqs.filter(faq => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            filteredFaqs.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...new Set([...prev, index])]);
              }, index * 100);
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
  }, [filteredFaqs]);

  const getText = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        title: "Frequently Asked Questions",
        subtitle: "Get instant answers to the questions we hear most from business owners ready to automate.",
        searchPlaceholder: "Search questions...",
        noResults: "No questions found matching your search.",
        stillHaveQuestions: "Still have questions?",
        contactUs: "Contact us for personalized answers",
        popularTag: "Popular"
      },
      fr: {
        title: "Questions Fréquemment Posées",
        subtitle: "Obtenez des réponses instantanées aux questions que nous entendons le plus de la part des propriétaires d'entreprise prêts à automatiser.",
        searchPlaceholder: "Rechercher des questions...",
        noResults: "Aucune question trouvée correspondant à votre recherche.",
        stillHaveQuestions: "Vous avez encore des questions ?",
        contactUs: "Contactez-nous pour des réponses personnalisées",
        popularTag: "Populaire"
      },
      ar: {
        title: "الأسئلة المتكررة",
        subtitle: "احصل على إجابات فورية للأسئلة التي نسمعها أكثر من أصحاب الأعمال المستعدين للأتمتة.",
        searchPlaceholder: "البحث في الأسئلة...",
        noResults: "لم يتم العثور على أسئلة تطابق بحثك.",
        stillHaveQuestions: "لا تزال لديك أسئلة؟",
        contactUs: "تواصل معنا للحصول على إجابات شخصية",
        popularTag: "شائع"
      }
    };
    return translations[language]?.[key] || translations.en[key];
  };

  return (
    <section id="faq" className="bg-black py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/8 to-yellow-400/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/6 to-blue-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-full border border-amber-400/20 mb-6">
            <HelpCircle className="w-4 h-4 text-amber-400 mr-2" />
            <span className="text-amber-400 text-sm font-medium">FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white leading-snug mb-6">
            {getText('title')}
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-lg">
            {getText('subtitle')}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          {/* Search bar */}
          <div className="relative mb-8 max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={getText('searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-400 text-black shadow-lg'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700'
                }`}
              >
                {category.label[language as keyof typeof category.label]}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">{getText('noResults')}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openItem === idx;
              const isVisible = visibleItems.includes(idx);

              return (
                <div
                  key={idx}
                  className={`border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } ${isOpen ? 'border-amber-400/30 bg-gradient-to-r from-amber-400/5 to-yellow-400/5' : 'hover:border-gray-700'}`}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <button
                    onClick={() => setOpenItem(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-inset"
                  >
                    <div className="flex items-center flex-1 min-w-0">
                      <span className="text-white font-medium text-base pr-4">
                        {faq.question}
                      </span>
                      {faq.popular && (
                        <span className="ml-2 px-2 py-1 bg-amber-400/20 text-amber-400 text-xs font-medium rounded-full border border-amber-400/30 whitespace-nowrap">
                          {getText('popularTag')}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-5">
                      <div className="border-t border-gray-700 pt-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900/60 to-gray-900/40 border border-gray-800 rounded-2xl p-8">
            <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">
              {getText('stillHaveQuestions')}
            </h3>
            <p className="text-gray-400 mb-6">
              {getText('contactUs')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-medium rounded-lg hover:from-amber-300 hover:via-yellow-300 hover:to-amber-400 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {language === "en" && "Get Personal Help"}
                {language === "fr" && "Obtenir une Aide Personnalisée"}
                {language === "ar" && "احصل على مساعدة شخصية"}
              </button>
              
              <a
                href="https://wa.me/212666219074"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;