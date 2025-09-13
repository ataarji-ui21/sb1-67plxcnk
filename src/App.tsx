import React from "react";
import SkipNavigation from "./components/SkipNavigation";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Results from "./components/Results";
import Process from "./components/Process";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import AccessibilityControls from "./components/AccessibilityControls";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Accessibility & nav */}
      <SkipNavigation />
      <Navigation />

      {/* Hero */}
      <main id="main-content">
        <Hero />
      </main>

      {/* Core sections */}
      <Services />
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-16" />

      <Benefits />
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-16" />

      <Results />
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-16" />

      <Process />
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-16" />

      <CallToAction />
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-16" />

      <FAQ />

      {/* Contact */}
      <section id="contact" className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-amber-400 mb-6">
              Book Your Free Automation Consultation
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Share your biggest time-wasters and we'll show you how to
              eliminate them.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer & accessibility controls */}
      <Footer />
      <AccessibilityControls />
    </div>
  );
}

export default App;