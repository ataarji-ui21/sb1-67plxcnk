import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import ZoomProofWrapper from "./components/ZoomProofWrapper";
import SkipNavigation from "./components/SkipNavigation";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import EnhancedResults from "./components/EnhancedResults";
import Process from "./components/Process";
import EnhancedCallToAction from "./components/EnhancedCallToAction";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import AccessibilityControls from "./components/AccessibilityControls";
import PrivacyPolicy from "./components/PrivacyPolicy";

// Main homepage component
const HomePage: React.FC = () => (
  <>
    {/* Hero */}
    <main id="main-content">
      <Hero />
    </main>

    {/* Core sections */}
    <Services />
    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-16" />

    <Benefits />
    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-16" />

    <EnhancedResults />
    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-16" />

    <Process />
    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-16" />

    <EnhancedCallToAction />
    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-16" />

    <FAQ />
    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-16" />

    {/* Enhanced Contact Section */}
    <ContactSection />
  </>
);

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ZoomProofWrapper>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Cursor light effect */}
            <div
              className="pointer-events-none fixed inset-0 z-50"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.12), transparent 60%)`,
              }}
            />

            {/* Accessibility & nav */}
            <SkipNavigation />
            <Navigation />

            {/* Routes */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>

            {/* Footer & accessibility controls */}
            <Footer />
            <AccessibilityControls />
          </div>
        </Router>
      </LanguageProvider>
    </ZoomProofWrapper>
  );
}

export default App;