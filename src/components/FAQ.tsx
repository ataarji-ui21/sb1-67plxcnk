import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does setup take?",
    answer: "Most businesses are fully deployed within 48 hours of kickoff.",
  },
  {
    question: "Do I need technical skills?",
    answer:
      "No coding or tech background required. We handle integration end-to-end.",
  },
  {
    question: "What if I already use a CRM?",
    answer:
      "Our assistants connect seamlessly to your existing CRM and workflows.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No. You can cancel anytime if you don't see value. No lock-ins.",
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-black py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white leading-snug">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Still curious? Here are answers to the questions we hear most.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex justify-between items-center px-6 py-4 bg-gray-900/40 text-left text-white font-medium hover:bg-gray-900 transition"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 text-amber-400 transition-transform ${
                    open === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === idx && (
                <div className="px-6 py-4 bg-black text-gray-400 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;