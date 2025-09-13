import React from "react";
import { Rocket, Clock, ShieldCheck, TrendingUp } from "lucide-react";

const benefits = [
  {
    title: "Scale Faster",
    description:
      "Leverage automation to handle 10x more leads without increasing headcount.",
    icon: Rocket,
  },
  {
    title: "Save Time",
    description:
      "Eliminate repetitive manual tasks and free up 40+ hours every week.",
    icon: Clock,
  },
  {
    title: "Reduce Risk",
    description:
      "Standardized AI workflows mean fewer errors and more consistent client experiences.",
    icon: ShieldCheck,
  },
  {
    title: "Boost Revenue",
    description:
      "Convert missed leads into paying clients with intelligent, always-on systems.",
    icon: TrendingUp,
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white leading-snug">
            Why Work With Us
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Tangible business outcomes—not just tools. Here's what our clients gain:
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group p-8 border border-gray-800 rounded-2xl bg-gradient-to-b from-gray-900/60 to-black hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10 text-center"
            >
              <benefit.icon className="w-12 h-12 text-amber-400 mb-6 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;