import React from "react";
import {
  Bot,
  Calendar,
  Database,
  BarChart,
  ClipboardList,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Lead Capture",
    description: "Stop missing opportunities. Every inquiry gets captured automatically and routed instantly.",
    icon: Bot,
  },
  {
    title: "Smart Scheduling",
    description: "Book appointments 24/7 without human effort. No more back-and-forth emails.",
    icon: Calendar,
  },
  {
    title: "CRM Integration",
    description: "Seamlessly sync leads and conversations with your existing CRM and tools.",
    icon: Database,
  },
  {
    title: "Automated Follow-ups",
    description: "AI-driven reminders and sequences keep prospects engaged until they convert.",
    icon: ClipboardList,
  },
  {
    title: "Analytics Dashboard",
    description: "Track performance, lead sources, and conversion rates with clarity.",
    icon: BarChart,
  },
  {
    title: "Client Engagement",
    description: "Reduce no-shows and boost trust with personalized touchpoints at scale.",
    icon: Users,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white leading-snug">
            Our Core Services
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive automation solutions designed to eliminate manual work and maximize your revenue potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;