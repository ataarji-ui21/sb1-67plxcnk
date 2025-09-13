import React from "react";
import { BarChart3, Users, Clock } from "lucide-react";

const results = [
  {
    title: "Leads Captured",
    value: "+120 / month",
    description: "Average increase in qualified leads per client",
    icon: Users,
  },
  {
    title: "Time Saved",
    value: "40+ hrs / week",
    description: "Repetitive tasks eliminated for each team",
    icon: Clock,
  },
  {
    title: "Revenue Boost",
    value: "2x conversions",
    description: "Higher close rates thanks to instant follow-ups",
    icon: BarChart3,
  },
];

const Results: React.FC = () => {
  return (
    <section id="results" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white leading-snug">
            Results Our Clients See
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real numbers. Real outcomes. Automation that pays for itself.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {results.map((item, idx) => (
            <div
              key={idx}
              className="group p-10 border border-gray-800 rounded-2xl bg-gradient-to-b from-gray-900/60 to-black hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10 text-center"
            >
              <item.icon className="w-12 h-12 text-amber-400 mb-6 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-amber-400 mb-2">
                {item.value}
              </h3>
              <p className="text-white text-lg font-semibold mb-2">
                {item.title}
              </p>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;