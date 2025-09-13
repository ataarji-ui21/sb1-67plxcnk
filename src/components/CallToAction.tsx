import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-black py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/8 to-yellow-400/6 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/6 to-blue-400/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-8 leading-snug">
          Ready to Stop Losing Money{" "}
          <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            To Manual Processes?
          </span>
        </h3>

        {/* Bullet list instead of paragraphs */}
        <ul className="space-y-3 text-left max-w-xl mx-auto text-gray-400 mb-12">
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-amber-400 mr-2 mt-1" />
            Every day without automation costs you 8+ hours
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-amber-400 mr-2 mt-1" />
            Competitors already deploy these systems and capture your leads
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-amber-400 mr-2 mt-1" />
            Early adopters gain market share before saturation
          </li>
        </ul>

        {/* CTA button */}
        <div className="space-y-6">
          <a
            href="#contact"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-medium tracking-wide text-lg rounded-lg hover:from-amber-300 hover:via-yellow-300 hover:to-amber-400 transition transform hover:scale-105 shadow-lg"
          >
            Start Saving 40 Hours Per Week
            <ArrowRight className="ml-3 w-5 h-5" />
          </a>
          <p className="text-sm text-gray-400">
            Free consultation • 48-hour setup • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;