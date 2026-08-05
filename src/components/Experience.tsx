import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { playPopSound } from '../utils/sound';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-[#FFFDF9] border-t-3 border-[#333333] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#00BFFF] border-[3px] border-[#333333] px-4 py-1.5 rounded-full shadow-[4px_4px_0_#333333] font-syne font-bold text-xs uppercase tracking-widest text-white mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>03 / CAREER TIMELINE</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl min-[430px]:text-4xl sm:text-6xl text-[#333333] tracking-tight leading-tight">
            WORK{" "}
            <span className="bg-[#FFD700] text-[#333333] px-2 min-[430px]:px-3 py-0.5 rounded-xl border-2 min-[430px]:border-[3px] border-[#333333] inline-block rotate-1 shadow-[4px_4px_0_#333333] mt-1 mb-2">
              EXPERIENCE
            </span>
          </h2>

          <p className="font-inter text-base text-[#666666] font-medium mt-3 max-w-2xl">
            My professional journey focused on backend development, REST APIs,
            database management, and building scalable web applications.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                onMouseEnter={playPopSound}
                className="bg-[#F4F3F1] border-[3px] border-[#333333] rounded-[28px] p-6 sm:p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_#333333]"
              >
                {/* Header */}
                <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 border-b-[3px] border-[#333333] pb-6">

                  <div className="flex items-center gap-4 w-full min-w-0">
                    <div className="w-14 h-14 rounded-xl bg-[#FF6F61] border-[3px] border-[#333333] flex items-center justify-center shadow-[4px_4px_0_#333333] shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-syne font-extrabold text-xl min-[430px]:text-2xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-[#333333]">
                        {item.company}
                      </h3>

                      <p className="mt-1 sm:mt-3 font-syne font-bold text-base sm:text-2xl text-[#FF6F61]">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Experience Number */}
                  <div className="self-start sm:self-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF6F61] border-[3px] border-[#333333] flex items-center justify-center font-syne font-black text-lg sm:text-2xl text-white shadow-[4px_4px_0_#333333]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-5 pt-8">
                  {item.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-4 text-lg sm:text-xl text-[#333333]"
                    >
                      <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#00FF7F] border-[3px] border-[#333333] shrink-0 shadow-[3px_3px_0_#333333]">
                        <CheckCircle2 className="w-4 h-4 text-[#333333]" />
                      </span>

                      <span className="leading-relaxed font-inter">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};