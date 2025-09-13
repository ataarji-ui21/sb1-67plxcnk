import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) newErrors.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.company.trim())
      newErrors.company = "Please enter your company name";
    if (!formData.message.trim() || formData.message.length < 10)
      newErrors.message = "Please provide at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    // Netlify will handle this if deployed with the attributes below
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
        <h3 className="text-2xl font-serif text-white mb-4">Thank You!</h3>
        <p className="text-gray-400 mb-6">
          We'll review your automation needs and contact you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", company: "", message: "" });
          }}
          className="text-amber-400 hover:text-amber-300 text-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="max-w-lg mx-auto space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      {["name", "email", "company"].map((field) => (
        <div key={field}>
          <label
            htmlFor={field}
            className="block text-sm font-medium text-white mb-2"
          >
            {field === "name"
              ? "Your Name *"
              : field === "email"
              ? "Business Email *"
              : "Company Name *"}
          </label>
          <input
            type={field === "email" ? "email" : "text"}
            id={field}
            name={field}
            value={formData[field as keyof typeof formData]}
            onChange={(e) => handleChange(field, e.target.value)}
            className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border ${
              errors[field] ? "border-red-400" : "border-gray-600"
            } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400`}
            disabled={isSubmitting}
          />
          {errors[field] && (
            <p className="mt-1 text-sm text-red-400 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" /> {errors[field]}
            </p>
          )}
        </div>
      ))}

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white mb-2"
        >
          What processes are costing you time? *
        </label>
        <textarea
          id="message"
          rows={4}
          name="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border ${
            errors.message ? "border-red-400" : "border-gray-600"
          } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400`}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" /> {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-medium tracking-wide rounded-lg hover:from-amber-300 hover:via-yellow-300 hover:to-amber-400 transition transform hover:scale-[1.02] shadow-lg disabled:opacity-50 flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
            Sending...
          </>
        ) : (
          <>
            Get My Free Consultation
            <Send className="ml-2 w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;