import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Mail, CheckCircle2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROFILE_IMAGES } from '../data/portfolioData';
import { playPopSound } from '../utils/sound';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFDF9] border-t-3 border-[#333333] relative overflow-hidden">
      
      {/* Background Decorative Paper Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFD700] border-3 border-[#333333] px-4 py-1.5 rounded-full brutal-shadow-sm font-syne font-bold text-xs uppercase tracking-widest text-[#333333] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6F61]" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl min-[430px]:text-4xl sm:text-6xl text-[#333333] tracking-tight leading-tight">
            NOT YOUR AVERAGE <span className="bg-[#FF6F61] text-white px-2 min-[430px]:px-3 py-0.5 rounded-xl border-2 min-[430px]:border-3 border-[#333333] inline-block -rotate-1 brutal-shadow-sm mt-1 mb-2">DESIGNER.</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Large Image Card with Centered Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            
            {/* Main Portrait Card (Fuchsia Pink Background) */}
            <div className="bg-[#FF007F] border-3 border-[#333333] rounded-3xl p-4 brutal-shadow-xl relative transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#333333] relative bg-[#333333]">
                <img 
                  src={PROFILE_IMAGES[1].url} 
                  alt="Dhruv Patel — UI/UX Designer"
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />

                {/* Bottom Centered Social Icons inside Image */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 z-10">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playPopSound}
                    aria-label="GitHub Profile"
                    className="w-11 h-11 rounded-full bg-[#333333] text-[#FFD700] border-2 border-[#333333] brutal-shadow-sm flex items-center justify-center hover:scale-110 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playPopSound}
                    aria-label="LinkedIn Profile"
                    className="w-11 h-11 rounded-full bg-[#0077B5] text-white border-2 border-[#333333] brutal-shadow-sm flex items-center justify-center hover:scale-110 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playPopSound}
                    aria-label="Instagram Profile"
                    className="w-11 h-11 rounded-full bg-[#E1306C] text-white border-2 border-[#333333] brutal-shadow-sm flex items-center justify-center hover:scale-110 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.email}
                    onClick={playPopSound}
                    aria-label="Email Me"
                    className="w-11 h-11 rounded-full bg-[#FF6F61] text-white border-2 border-[#333333] brutal-shadow-sm flex items-center justify-center hover:scale-110 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Tape Cutout Effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#FFFDF9]/90 border-2 border-[#333333] transform -rotate-2 font-mono text-[10px] text-center font-bold flex items-center justify-center">
                DHRUV_PATEL.RAW
              </div>
            </div>

          </motion.div>

          {/* Right Column: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* About Main Card */}
            <div className="bg-[#FFFFFF] border-3 border-[#333333] p-6 sm:p-8 rounded-3xl brutal-shadow-lg relative">
              <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-[#333333] mb-4 flex items-center gap-2">
                <span>Behind The Designs</span>
                <span className="w-3 h-3 bg-[#FF6F61] rounded-full border border-[#333333]" />
              </h3>

              <div className="space-y-4 font-inter text-base text-[#333333]/90 leading-relaxed">
                <p>
                  I'm <strong>Dhruv Patel</strong>, a <strong>UI/UX Designer</strong> based in <strong>Ahmedabad, Gujarat, India</strong>. I specialize in crafting intuitive user interfaces and visually compelling design assets using modern tools like <strong>Figma</strong> and <strong>Adobe Photoshop</strong>.
                </p>
                <p>
                  Beyond design, I'm also a digital content creator, having built an audience of 5K+ Instagram followers and achieved 35M+ overall views through consistent short-form content. This experience has strengthened my creativity, storytelling, visual communication, and understanding of audience engagement.
                </p>
                <p>
                  I enjoy translating complex user requirements into clean, user-friendly interfaces. By maintaining consistent design systems and brand guidelines, I bridge the gap between creative concepts and high-performance product execution.
                </p>
              </div>

              {/* Key Highlights Checklist */}
              <div className="mt-6 pt-6 border-t-2 border-[#333333]/20 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PERSONAL_INFO.specializations.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#FFFDF9] border-2 border-[#333333] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-syne font-bold text-[#333333] brutal-shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#00FF7F] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
