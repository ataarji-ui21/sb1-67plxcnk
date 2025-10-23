import React from 'react';
import { Shield, Eye, Lock, Database, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();

  const getText = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        title: "Privacy Policy",
        lastUpdated: "Last Updated: January 2025",
        intro: "At AT.AUTOMATE.AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
        
        section1Title: "Information We Collect",
        section1Content: "We collect information you provide directly to us, such as when you create an account, request a consultation, or contact us. This may include your name, email address, phone number, company name, and any messages you send us.",
        
        section2Title: "How We Use Your Information",
        section2Content: "We use the information we collect to provide, maintain, and improve our services, communicate with you, send you technical notices and support messages, and respond to your comments and questions.",
        
        section3Title: "Information Sharing",
        section3Content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.",
        
        section4Title: "Data Security",
        section4Content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        
        section5Title: "Your Rights",
        section5Content: "You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.",
        
        section6Title: "Cookies and Tracking",
        section6Content: "We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve your experience.",
        
        section7Title: "Third-Party Services",
        section7Content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.",
        
        section8Title: "International Transfers",
        section8Content: "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place.",
        
        section9Title: "Children's Privacy",
        section9Content: "Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.",
        
        section10Title: "Changes to This Policy",
        section10Content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.",
        
        contactTitle: "Contact Us",
        contactContent: "If you have any questions about this Privacy Policy, please contact us:",
        
        email: "Email: privacy@at.automate.ai",
        phone: "Phone: +212 666 219 074",
        address: "Address: Casablanca, Morocco"
      },
      fr: {
        title: "Politique de Confidentialité",
        lastUpdated: "Dernière mise à jour : Janvier 2025",
        intro: "Chez AT.AUTOMATE.AI, nous prenons votre vie privée au sérieux. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web ou utilisez nos services.",
        
        section1Title: "Informations que Nous Collectons",
        section1Content: "Nous collectons les informations que vous nous fournissez directement, comme lorsque vous créez un compte, demandez une consultation, ou nous contactez. Cela peut inclure votre nom, adresse e-mail, numéro de téléphone, nom de l'entreprise, et tous les messages que vous nous envoyez.",
        
        section2Title: "Comment Nous Utilisons Vos Informations",
        section2Content: "Nous utilisons les informations que nous collectons pour fournir, maintenir et améliorer nos services, communiquer avec vous, vous envoyer des avis techniques et des messages de support, et répondre à vos commentaires et questions.",
        
        section3Title: "Partage d'Informations",
        section3Content: "Nous ne vendons, n'échangeons, ni ne transférons vos informations personnelles à des tiers sans votre consentement, sauf comme décrit dans cette politique ou comme requis par la loi.",
        
        section4Title: "Sécurité des Données",
        section4Content: "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l'accès non autorisé, l'altération, la divulgation ou la destruction.",
        
        section5Title: "Vos Droits",
        section5Content: "Vous avez le droit d'accéder, de mettre à jour ou de supprimer vos informations personnelles. Vous pouvez également vous désabonner de certaines communications de notre part.",
        
        section6Title: "Cookies et Suivi",
        section6Content: "Nous utilisons des cookies et des technologies de suivi similaires pour suivre l'activité sur notre site web et conserver certaines informations pour améliorer votre expérience.",
        
        section7Title: "Services Tiers",
        section7Content: "Notre site web peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites externes.",
        
        section8Title: "Transferts Internationaux",
        section8Content: "Vos informations peuvent être transférées et traitées dans des pays autres que le vôtre. Nous nous assurons que des garanties appropriées sont en place.",
        
        section9Title: "Confidentialité des Enfants",
        section9Content: "Nos services ne sont pas destinés aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles d'enfants de moins de 13 ans.",
        
        section10Title: "Modifications de Cette Politique",
        section10Content: "Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page.",
        
        contactTitle: "Nous Contacter",
        contactContent: "Si vous avez des questions sur cette Politique de Confidentialité, veuillez nous contacter :",
        
        email: "E-mail : privacy@at.automate.ai",
        phone: "Téléphone : +212 666 219 074",
        address: "Adresse : Casablanca, Maroc"
      },
      ar: {
        title: "سياسة الخصوصية",
        lastUpdated: "آخر تحديث: يناير 2025",
        intro: "في AT.AUTOMATE.AI، نأخذ خصوصيتك على محمل الجد. تشرح سياسة الخصوصية هذه كيف نجمع ونستخدم ونكشف ونحمي معلوماتك عند زيارة موقعنا الإلكتروني أو استخدام خدماتنا.",
        
        section1Title: "المعلومات التي نجمعها",
        section1Content: "نجمع المعلومات التي تقدمها لنا مباشرة، مثل عندما تنشئ حساباً أو تطلب استشارة أو تتصل بنا. قد يشمل ذلك اسمك وعنوان بريدك الإلكتروني ورقم هاتفك واسم شركتك وأي رسائل ترسلها إلينا.",
        
        section2Title: "كيف نستخدم معلوماتك",
        section2Content: "نستخدم المعلومات التي نجمعها لتقديم خدماتنا والحفاظ عليها وتحسينها، والتواصل معك، وإرسال إشعارات تقنية ورسائل دعم، والرد على تعليقاتك وأسئلتك.",
        
        section3Title: "مشاركة المعلومات",
        section3Content: "لا نبيع أو نتاجر أو ننقل معلوماتك الشخصية إلى أطراف ثالثة بدون موافقتك، باستثناء ما هو موضح في هذه السياسة أو كما يتطلبه القانون.",
        
        section4Title: "أمان البيانات",
        section4Content: "نطبق تدابير أمنية تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير.",
        
        section5Title: "حقوقك",
        section5Content: "لديك الحق في الوصول إلى معلوماتك الشخصية أو تحديثها أو حذفها. يمكنك أيضاً إلغاء الاشتراك في بعض الاتصالات منا.",
        
        section6Title: "ملفات تعريف الارتباط والتتبع",
        section6Content: "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتتبع النشاط على موقعنا الإلكتروني والاحتفاظ ببعض المعلومات لتحسين تجربتك.",
        
        section7Title: "خدمات الطرف الثالث",
        section7Content: "قد يحتوي موقعنا الإلكتروني على روابط لمواقع طرف ثالث. نحن لسنا مسؤولين عن ممارسات الخصوصية لهذه المواقع الخارجية.",
        
        section8Title: "النقل الدولي",
        section8Content: "قد يتم نقل معلوماتك ومعالجتها في بلدان غير بلدك. نضمن وجود ضمانات مناسبة.",
        
        section9Title: "خصوصية الأطفال",
        section9Content: "خدماتنا غير مخصصة للأطفال دون سن 13 عاماً. لا نجمع عن علم معلومات شخصية من الأطفال دون سن 13 عاماً.",
        
        section10Title: "تغييرات على هذه السياسة",
        section10Content: "قد نحدث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر السياسة الجديدة على هذه الصفحة.",
        
        contactTitle: "اتصل بنا",
        contactContent: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا:",
        
        email: "البريد الإلكتروني: privacy@at.automate.ai",
        phone: "الهاتف: +212 666 219 074",
        address: "العنوان: الدار البيضاء، المغرب"
      }
    };
    return translations[language]?.[key] || translations.en[key];
  };

  return (
    <div className="min-h-screen bg-black text-white py-24">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/8 to-yellow-400/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/6 to-blue-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-full border border-amber-400/20 mb-6">
            <Shield className="w-4 h-4 text-amber-400 mr-2" />
            <span className="text-amber-400 text-sm font-medium">Legal Document</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-white mb-4">
            {getText('title')}
          </h1>
          <p className="text-gray-400 text-sm">
            {getText('lastUpdated')}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-gray-900/60 to-gray-900/40 border border-gray-800 rounded-xl p-8 mb-12">
          <p className="text-gray-300 leading-relaxed text-lg">
            {getText('intro')}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <div className="flex items-center mb-6">
              <Database className="w-6 h-6 text-amber-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">
                {getText('section1Title')}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {getText('section1Content')}
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center mb-6">
              <Eye className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">
                {getText('section2Title')}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {getText('section2Content')}
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-green-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">
                {getText('section3Title')}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {getText('section3Content')}
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center mb-6">
              <Lock className="w-6 h-6 text-purple-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">
                {getText('section4Title')}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {getText('section4Content')}
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-center mb-6">
              <Eye className="w-6 h-6 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">
                {getText('section5Title')}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {getText('section5Content')}
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <div className="flex items-center mb-6">
              <Database className="w-6 h-6 text-orange-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">
                {getText('section6Title')}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {getText('section6Content')}
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-red-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">
                {getText('section7Title')}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {getText('section7Content')}
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <div className="flex items-center mb-6">
              <MapPin className="w-6 h-6 text-pink-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">
                {getText('section8Title')}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {getText('section8Content')}
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">
                {getText('section9Title')}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {getText('section9Content')}
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <div className="flex items-center mb-6">
              <Calendar className="w-6 h-6 text-indigo-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">
                {getText('section10Title')}
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {getText('section10Content')}
            </p>
          </section>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 border border-amber-400/20 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
            <Mail className="w-6 h-6 text-amber-400 mr-3" />
            {getText('contactTitle')}
          </h2>
          <p className="text-gray-300 mb-6">
            {getText('contactContent')}
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-amber-400 mr-3" />
              <span className="text-gray-300">{getText('email')}</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-green-400 mr-3" />
              <span className="text-gray-300">{getText('phone')}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300">{getText('address')}</span>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-medium rounded-lg hover:from-amber-300 hover:via-yellow-300 hover:to-amber-400 transition-all duration-300 transform hover:scale-105"
          >
            Back to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;