import React from "react";
import { Search, Wrench, Plug, GraduationCap, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Audit",
    description:
      "We start with a 1-to-1 consultation to understand your workflow, tools, and main bottlenecks.",
    icon: Search,
  },
  {
    title: "Build",
    description:
      "Our team designs the automation tailored to your business—not a generic template.",
    icon: Wrench,
  },
  {
    title: "Integrate",
    description:
      "We connect the system to your CRM, calendar, and communication tools without disrupting your current setup.",
    icon: Plug,
  },
  {
    title: "Train",
    description:
      "We walk your team through the new process and provide simple guides so everyone feels confident using it.",
    icon: GraduationCap,
  },
  {
    title: "Scale",
    description:
      "Once proven, we expand automation to other parts of your business for compounding efficiency.",
    icon: TrendingUp,
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white leading-snug">
            Our Process
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Transparent and simple. No hidden steps—just a proven framework to get you results quickly.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center text-center md:text-left md:items-start p-6 border border-gray-800 rounded-2xl bg-gradient-to-b from-gray-900/60 to-black hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10"
            >
              <step.icon className="w-10 h-10 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;