import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playClickSound, playPopSound } from '../utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#333333] text-white border-t-4 border-[#333333] pt-16 pb-8 relative overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Top Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b-2 border-white/15">
          
          {/* Brand Name & Tagline */}
          <div className="text-center md:text-left space-y-2">
            <div className="font-syne font-extrabold text-2xl sm:text-3xl tracking-tight text-[#FFD700]">
              DHRUV PATEL
            </div>
            <p className="font-inter text-xs sm:text-sm text-white/70 font-medium">
              Full Stack Developer • Based in Ahmedabad, India
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playPopSound}
              className="p-3 bg-[#24292E] text-white rounded-2xl border-2 border-white hover:scale-105 transition-transform brutal-shadow-sm flex items-center justify-center"
              title="GitHub"
            >
              <Github className="w-5 h-5 text-white" />
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playPopSound}
              className="p-3 bg-[#0077B5] text-white rounded-2xl border-2 border-white hover:scale-105 transition-transform brutal-shadow-sm flex items-center justify-center"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>

            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playPopSound}
              className="p-3 bg-[#E1306C] text-white rounded-2xl border-2 border-white hover:scale-105 transition-transform brutal-shadow-sm flex items-center justify-center"
              title="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>

            <a
              href={PERSONAL_INFO.socials.email}
              onClick={playPopSound}
              className="p-3 bg-[#FF6F61] text-white rounded-2xl border-2 border-white hover:scale-105 transition-transform brutal-shadow-sm flex items-center justify-center"
              title="Email"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>

            {/* Back To Top Button */}
            <button
              onClick={scrollToTop}
              className="p-3 bg-[#00FF7F] text-[#333333] rounded-2xl border-2 border-white font-bold cursor-pointer brutal-shadow-sm hover:translate-y-[-2px] transition-transform flex items-center justify-center"
              title="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>

          </div>

        </div>

        {/* Copyright */}
        <div className="py-6 flex items-center justify-between font-inter text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} © 2026 Dhruv Patel. Designed & Developed with React, TypeScript and Tailwind CSS.
          </div>
        </div>

        {/* Big Name Sized and Fitted to Container Max Width */}
        <div className="pointer-events-none select-none opacity-25 mt-4 pt-4 border-t border-white/10">
          <div className="font-syne font-black text-5xl sm:text-8xl md:text-9xl lg:text-[12rem] text-stroke-white text-center tracking-tighter uppercase leading-none">
            DHRUV
          </div>
        </div>

      </motion.div>

    </footer>
  );
};
