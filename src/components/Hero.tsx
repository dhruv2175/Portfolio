import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, MapPin, Star, Zap, Plus, Square, ArrowUpRight, ArrowRight } from 'lucide-react';
import { PROFILE_IMAGES, PERSONAL_INFO } from '../data/portfolioData';
import { playClickSound, playPopSound } from '../utils/sound';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const resumeUrl = `${import.meta.env.BASE_URL}Dhruv-Patel-Resume.pdf`;

  return (
    <section id="home" className="relative min-h-screen pt-36 pb-6 md:pt-44 md:pb-8 overflow-hidden bg-[#FFFDF9] flex flex-col justify-between">

      {/* Decorative Neo-Brutalist Floating Shapes (Randomized placement & larger sizes) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-[18%] left-[6%] xl:left-[11%] pointer-events-none select-none hidden lg:block z-5"
      >
        <div className="w-14 h-14 bg-[#FFD700] border-3 border-[#333333] brutal-shadow transform -rotate-12 flex items-center justify-center rounded-2xl">
          <Star className="w-7 h-7 text-[#333333] fill-[#333333]" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-[52%] right-[5%] xl:right-[9%] pointer-events-none select-none hidden xl:block z-5"
      >
        <div className="w-14 h-14 bg-[#00BFFF] border-3 border-[#333333] brutal-shadow rounded-full transform rotate-12 flex items-center justify-center">
          <Sparkles className="w-7 h-7 text-white fill-white" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-[20%] left-[8%] xl:left-[14%] pointer-events-none select-none hidden lg:block z-5"
      >
        <div className="w-13 h-13 bg-[#A855F7] border-3 border-[#333333] brutal-shadow transform rotate-45 flex items-center justify-center rounded-xl">
          <div className="w-4.5 h-4.5 bg-white border-2 border-[#333333] transform -rotate-45" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-[24%] right-[8%] xl:right-[15%] pointer-events-none select-none hidden lg:block z-5"
      >
        <div className="w-14 h-14 bg-[#FFD700] border-3 border-[#333333] rounded-2xl brutal-shadow transform -rotate-12 flex items-center justify-center">
          <Square className="w-6 h-6 text-[#333333] fill-[#333333]" />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto flex flex-col items-center gap-7 sm:gap-9 text-center">

        {/* ROW 1: Centered Title & Location Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFFFFF] border-3 border-[#333333] px-4 py-2 rounded-full brutal-shadow-sm font-inter font-bold text-xs uppercase tracking-widest text-[#333333]">
            <span className="w-2.5 h-2.5 bg-[#00FF7F] rounded-full border border-[#333333] animate-ping" />
            <MapPin className="w-3.5 h-3.5 text-[#FF6F61]" />
            <span>AHMEDABAD, INDIA • UI/UX DESIGNER</span>
          </div>

          <h1 className="font-syne font-extrabold text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[0.95] text-[#FF6F61] drop-shadow-[4px_4px_0px_#333333] max-w-5xl mx-auto text-center flex flex-col items-center justify-center pt-2 sm:pt-3 w-full">
            <span className="block text-center w-full whitespace-nowrap">WANNABE <span className="text-[#FFD700]">कलाकार</span></span>
            <span className="block text-center w-full">CREATES</span>
          </h1>
        </motion.div>

        {/* ROW 2: Centered Subtitle Statement (Normal Text) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl mx-auto px-2"
        >
          <p className="font-inter font-medium text-base sm:text-lg lg:text-xl text-[#333333]/90 leading-relaxed text-center">
            Creative UI/UX Designer specializing in user-friendly Figma interfaces, high-quality Adobe Photoshop assets, and brand design layouts with Illustrator and InDesign — focused on clean aesthetics, visual consistency, and seamless developer handoff.
          </p>
        </motion.div>

        {/* ROW 3: Keep the hero simple without the large portrait block */}

        {/* ROW 4: Centered Equal Height Buttons with Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl mx-auto flex flex-col items-center my-4 sm:my-6 pt-2 pb-2"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            <a
              href="#projects"
              onClick={() => {
                playPopSound();
                onExploreClick();
              }}
              className="bg-[#FF6F61] text-white px-7 h-14 rounded-2xl font-syne font-bold text-base uppercase tracking-wider border-3 border-[#333333] brutal-btn brutal-shadow hover:bg-[#FF4081] inline-flex items-center justify-center gap-2.5 cursor-pointer group flex-1 sm:flex-initial"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClickSound()}
              className="bg-[#FFFFFF] text-[#333333] px-7 h-14 rounded-2xl font-syne font-bold text-base uppercase tracking-wider border-3 border-[#333333] brutal-btn brutal-shadow hover:bg-[#00BFFF] hover:text-white inline-flex items-center justify-center gap-2.5 cursor-pointer group flex-1 sm:flex-initial"
            >
              <span>View Resume</span>
              <ArrowUpRight className="w-5 h-5 text-[#333333] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* ROW 5: Quote Centered (Non-Card Typography Style) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl mx-auto"
        >
          <div className="relative flex flex-col items-center justify-center text-center px-4">
            <span className="font-syne font-black text-4xl sm:text-5xl text-[#FF6F61] leading-none opacity-80 select-none">“</span>
            <p className="font-syne font-bold text-base sm:text-lg md:text-xl text-[#333333] tracking-tight italic -mt-3 mb-2.5 max-w-xl whitespace-pre-line">
              {PERSONAL_INFO.quote}
            </p>
            <div className="h-1.5 w-14 bg-[#FFD700] border-2 border-[#333333] rounded-full" />
          </div>
        </motion.div>

        {/* Bottom Interactive Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="pt-2 pb-4 sm:pb-6 flex flex-col items-center justify-center"
        >
          <a
            href="#about"
            onClick={() => playClickSound()}
            className="group inline-flex flex-col items-center gap-2 text-[#333333] hover:text-[#FF6F61] transition-colors cursor-pointer"
          >
            <span className="font-syne font-bold text-xs uppercase tracking-widest bg-white px-3 py-1 border-2 border-[#333333] rounded-full brutal-shadow-sm">
              Scroll To Discover
            </span>
            <div className="w-10 h-10 rounded-full border-2 border-[#333333] bg-[#FFD700] flex items-center justify-center brutal-shadow-sm group-hover:translate-y-1 transition-transform">
              <ArrowDown className="w-5 h-5 text-[#333333] animate-bounce" />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
