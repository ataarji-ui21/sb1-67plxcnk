import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ArrowDown, Loader2 } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [splineError, setSplineError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const splineContainerRef = useRef<HTMLDivElement>(null);
  const splineAppRef = useRef<any>(null);
  const initialCameraDistance = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const container = splineContainerRef.current;
    if (!container) return;

    const preventZoom = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    };

    const preventTouchZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const preventGesture = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    container.addEventListener('wheel', preventZoom, { passive: false, capture: true });
    container.addEventListener('touchmove', preventTouchZoom, { passive: false, capture: true });
    container.addEventListener('gesturestart', preventGesture, { passive: false, capture: true });
    container.addEventListener('gesturechange', preventGesture, { passive: false, capture: true });
    container.addEventListener('gestureend', preventGesture, { passive: false, capture: true });

    const canvasElements = container.querySelectorAll('canvas');
    canvasElements.forEach(canvas => {
      canvas.addEventListener('wheel', preventZoom, { passive: false, capture: true });
      canvas.style.touchAction = 'pan-y';
    });

    return () => {
      container.removeEventListener('wheel', preventZoom);
      container.removeEventListener('touchmove', preventTouchZoom);
      container.removeEventListener('gesturestart', preventGesture);
      container.removeEventListener('gesturechange', preventGesture);
      container.removeEventListener('gestureend', preventGesture);

      canvasElements.forEach(canvas => {
        canvas.removeEventListener('wheel', preventZoom);
      });
    };
  }, []);

  const handleSplineLoad = (splineApp: any) => {
    setIsSplineLoaded(true);
    setSplineError(false);
    splineAppRef.current = splineApp;

    try {
      if (splineApp && splineApp._camera) {
        const camera = splineApp._camera;

        if (camera.position) {
          const distance = Math.sqrt(
            camera.position.x ** 2 +
            camera.position.y ** 2 +
            camera.position.z ** 2
          );
          initialCameraDistance.current = distance;
        }

        if (camera.controls) {
          camera.controls.enableZoom = false;
          camera.controls.enablePan = false;
          camera.controls.minDistance = camera.controls.distance;
          camera.controls.maxDistance = camera.controls.distance;
        }

        if (camera.zoom !== undefined) {
          Object.defineProperty(camera, 'zoom', {
            value: 1,
            writable: false,
            configurable: false
          });
        }
      }

      const canvas = splineContainerRef.current?.querySelector('canvas');
      if (canvas) {
        canvas.style.touchAction = 'pan-y';
        const preventZoom = (e: WheelEvent) => {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          return false;
        };
        canvas.addEventListener('wheel', preventZoom, { passive: false, capture: true });
      }

      const monitorInterval = setInterval(() => {
        if (splineApp && splineApp._camera && initialCameraDistance.current) {
          const camera = splineApp._camera;
          const currentDistance = Math.sqrt(
            camera.position.x ** 2 +
            camera.position.y ** 2 +
            camera.position.z ** 2
          );

          const distanceDiff = Math.abs(currentDistance - initialCameraDistance.current);
          if (distanceDiff > 0.1) {
            const ratio = initialCameraDistance.current / currentDistance;
            camera.position.x *= ratio;
            camera.position.y *= ratio;
            camera.position.z *= ratio;
          }
        }
      }, 100);

      return () => clearInterval(monitorInterval);
    } catch (error) {
      console.error('Error configuring Spline camera:', error);
    }
  };

  const handleSplineError = () => {
    setSplineError(true);
    setIsSplineLoaded(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
    <section className="relative flex min-h-screen overflow-hidden bg-neutral-950 px-fluid-pad">
      {/* LEFT - Spline with loading state */}
      <div
        ref={splineContainerRef}
        className="relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-auto overflow-hidden"
        style={{ scale: 'clamp(.72, 100vw/2200, 1)', touchAction: 'pan-y' }}
      >
        {/* Loading skeleton */}
        {!isSplineLoaded && !splineError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950">
            <div className="text-center space-y-4">
              <Loader2 className="w-12 h-12 text-amber-400 animate-spin mx-auto" aria-hidden="true" />
              <p className="text-gray-400 text-sm" aria-live="polite">
                {language === "en" && "Loading 3D Experience..."}
                {language === "fr" && "Chargement de l'expérience 3D..."}
                {language === "ar" && "تحميل التجربة ثلاثية الأبعاد..."}
              </p>
            </div>
          </div>
        )}

        {/* Error fallback */}
        {splineError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950">
            <div className="text-center space-y-4 px-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-400/10 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-2 border-amber-400 border-dashed" />
              </div>
              <p className="text-gray-400 text-sm">
                {language === "en" && "3D visualization unavailable"}
                {language === "fr" && "Visualisation 3D indisponible"}
                {language === "ar" && "التصور ثلاثي الأبعاد غير متاح"}
              </p>
            </div>
          </div>
        )}

        {/* Spline component with optimizations */}
        {!prefersReducedMotion && !splineError && (
          <div className={`h-full w-full transition-opacity duration-700 ${isSplineLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Spline
              className="h-full w-full touch-none spline-fade"
              scene="https://prod.spline.design/hGa5cbCoGv8RQi1R/scene.splinecode"
              onLoad={handleSplineLoad}
              onError={handleSplineError}
              mouseControls={true}
              wheel={false}
              aria-label={language === "en" ? "Interactive 3D animation showcasing AI automation" : language === "fr" ? "Animation 3D interactive présentant l'automatisation IA" : "رسوم متحركة ثلاثية الأبعاد تفاعلية تعرض الأتمتة بالذكاء الاصطناعي"}
              role="img"
            />
          </div>
        )}

        {/* Reduced motion fallback */}
        {prefersReducedMotion && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-400/10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/30 to-yellow-400/20" />
              </div>
              <p className="text-gray-400 text-sm px-6">
                {language === "en" && "3D animation disabled (motion preferences)"}
                {language === "fr" && "Animation 3D désactivée (préférences de mouvement)"}
                {language === "ar" && "تم تعطيل الرسوم المتحركة ثلاثية الأبعاد (تفضيلات الحركة)"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT - Content */}
      <div className="flex w-full flex-col justify-center gap-6 px-8 py-20 lg:w-1/2 lg:px-16">
        {/* Revenue Leak Badge */}
        <p
          className="text-amber-400 tracking-widest uppercase font-mono animate-fadeInUp"
          style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
          role="status"
          aria-live="polite"
        >
          {language === "en" && "[ REVENUE LEAK DETECTED ]"}
          {language === "fr" && "[ FUITE DE REVENUS DÉTECTÉE ]"}
          {language === "ar" && "[ تم اكتشاف تسرب في الإيرادات ]"}
        </p>

        {/* Main Headline - Primary H1 for document */}
        <h1 className="font-serif animate-fadeInUp text-balance text-fluid-h1 leading-[1.2] tracking-tight">
          {language === "en" && (
            <>
              <span className="block text-white font-light mb-2">Turn Missed Leads</span>
              <span className="block text-fluid-h2 font-black bg-gradient-to-r from-white via-amber-200 to-yellow-400 bg-clip-text text-transparent animate-shimmer my-3 not-italic" style={{ fontStyle: 'normal' }}>Into</span>
              <span className="block text-amber-400 font-black tracking-tight drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]">Paying Clients</span>
            </>
          )}
          {language === "fr" && (
            <>
              <span className="block text-white font-light mb-2">Transformez les Prospects</span>
              <span className="block text-fluid-h2 font-black bg-gradient-to-r from-white via-amber-200 to-yellow-400 bg-clip-text text-transparent animate-shimmer my-3 not-italic" style={{ fontStyle: 'normal' }}>En</span>
              <span className="block text-amber-400 font-black tracking-tight drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]">Clients Payants</span>
            </>
          )}
          {language === "ar" && (
            <>
              <span className="block text-white font-light mb-2">حول العملاء المفقودين</span>
              <span className="block text-fluid-h2 font-black bg-gradient-to-r from-white via-amber-200 to-yellow-400 bg-clip-text text-transparent animate-shimmer my-3 not-italic" style={{ fontStyle: 'normal' }}>إلى</span>
              <span className="block text-amber-400 font-black tracking-tight drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]">عملاء يدفعون</span>
            </>
          )}
        </h1>

        {/* Bullet Points - Benefits list */}
        <ul className="animate-fadeInUp flex flex-col gap-4" role="list" aria-label={language === "en" ? "Key benefits" : language === "fr" ? "Avantages clés" : "الفوائد الرئيسية"}>
          <li className="flex items-start group">
            <CheckCircle className="flex-shrink-0 w-5 h-5 text-amber-400 mr-3 mt-1 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            <span className="text-readable font-medium group-hover:text-white transition-colors duration-300" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
              {language === "en" && "Stop losing 40+ hours weekly to manual follow-ups. End data entry chaos forever."}
              {language === "fr" && "Arrêtez de perdre 40+ heures par semaine en suivis manuels. Finissez-en avec le chaos des saisies."}
              {language === "ar" && "توقف عن فقدان 40+ ساعة أسبوعياً في المتابعات اليدوية. أنه فوضى إدخال البيانات إلى الأبد."}
            </span>
          </li>
          <li className="flex items-start group">
            <CheckCircle className="flex-shrink-0 w-5 h-5 text-amber-400 mr-3 mt-1 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            <span className="text-readable font-medium group-hover:text-white transition-colors duration-300" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
              {language === "en" && "Capture every lead automatically. Book appointments instantly. Eliminate no-shows completely."}
              {language === "fr" && "Capturez chaque prospect automatiquement. Réservez instantanément. Éliminez les absences."}
              {language === "ar" && "اجذب كل عميل محتمل تلقائياً. احجز المواعيد فوراً. تخلص من عدم الحضور تماماً."}
            </span>
          </li>
          <li className="flex items-start group">
            <CheckCircle className="flex-shrink-0 w-5 h-5 text-amber-400 mr-3 mt-1 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            <span className="text-readable font-medium group-hover:text-white transition-colors duration-300" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
              {language === "en" && "Deploy AI systems that work 24/7. Generate revenue while you sleep."}
              {language === "fr" && "Déployez des systèmes IA qui fonctionnent 24h/24. Générez des revenus pendant votre sommeil."}
              {language === "ar" && "انشر أنظمة ذكية تعمل 24/7. اولد الإيرادات أثناء نومك."}
            </span>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="animate-fadeInUp">
          <button
            onClick={() => scrollToSection('contact')}
            className="premium-button group relative inline-flex items-center justify-center border-2 border-amber-400 text-amber-400 hover:text-black transition-all duration-500 tracking-wide font-bold hover:scale-[1.02] focus-ring glass-panel hover:border-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.15)] hover:shadow-[0_0_50px_rgba(251,191,36,0.4)] backdrop-blur-sm px-8 py-4 rounded-xl bg-gradient-to-br from-amber-400/10 to-amber-400/5 mb-3"
            aria-label="Get free consultation - opens contact form"
          >
            <span className="relative z-10 font-extrabold tracking-wider whitespace-nowrap mr-2">
              {language === "en" && "Get Free Consultation"}
              {language === "fr" && "Consultation Gratuite"}
              {language === "ar" && "احصل على استشارة مجانية"}
            </span>
            <ArrowDown className="relative z-10 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300 flex-shrink-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl" />
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.2)_0%,transparent_70%)]" />
          </button>

          {/* Small Print */}
          <p className="text-accessible-gray" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
            {language === "en" && "Free consultation • 48-hour setup • Cancel anytime"}
            {language === "fr" && "Consultation gratuite • Configuration en 48h • Résiliation à tout moment"}
            {language === "ar" && "استشارة مجانية • إعداد في 48 ساعة • إلغاء في أي وقت"}
          </p>
        </div>
      </div>
    </section>

    <style>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes shimmer {
        0% {
          background-position: -200% center;
        }
        100% {
          background-position: 200% center;
        }
      }

      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
      }

      .animate-shimmer {
        background-size: 200% 100%;
        animation: shimmer 3s ease-in-out infinite;
      }
    `}</style>
    </>
  );
};

export default Hero;
