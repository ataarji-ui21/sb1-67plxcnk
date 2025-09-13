import React from 'react';
import { Instagram, MessageCircle, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black py-12 overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-mono">
            <a href="#home" className="text-gray-400 hover:text-amber-400">
              Home
            </a>
            <a href="#services" className="text-gray-400 hover:text-amber-400">
              Services
            </a>
            <a href="#contact" className="text-gray-400 hover:text-amber-400">
              Contact
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400">
              Terms of Service
            </a>
          </div>

          <div className="flex space-x-6 justify-center mt-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/atcorp21/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/212666219074"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm font-mono">
            © 2025 AT.AUTOMATE.AI • Helping businesses save 40+ hours per week through intelligent automation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;