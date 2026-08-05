import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Code2, Globe, ShoppingBag, Figma, 
  Flame, CheckCircle2, ChevronRight, Layers, Cpu, Zap
} from 'lucide-react';
import { MAIN_SKILL_PILLARS } from '../data/portfolioData';
import { playPopSound } from '../utils/sound';

export const Skills: React.FC = () => {
  const [activeSubSkills, setActiveSubSkills] = useState<Record<string, string>>({
    "react-frontend": "React.js",
    "python-backend": "Python",
    "databases": "MySQL",
    "ui-frameworks": "Tailwind CSS",
    "dev-tools": "Git & GitHub"
  });

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'Figma': return <Figma className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      default: return <Cpu className="w-6 h-6" />;
    }
  };

  const row1Pillars = MAIN_SKILL_PILLARS.slice(0, 2); // React & Frontend, Python & Backend
  const row2Pillars = MAIN_SKILL_PILLARS.slice(2, 5); // Databases, UI Frameworks, Dev Tools

  const handleSubSkillClick = (pillarId: string, subSkillName: string) => {
    playPopSound();
    setActiveSubSkills(prev => ({
      ...prev,
      [pillarId]: subSkillName
    }));
  };

  const renderPillarCard = (pillar: typeof MAIN_SKILL_PILLARS[0], delayIdx: number = 0) => {
    const selectedSubName = activeSubSkills[pillar.id] || pillar.subSkills[0]?.name;
    const selectedSubObj = pillar.subSkills.find(s => s.name === selectedSubName) || pillar.subSkills[0];

    return (
      <motion.div
        key={pillar.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: delayIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#FFFFFF] border-3 border-[#333333] rounded-3xl p-6 brutal-shadow-md hover:brutal-shadow-xl transition-all duration-300 relative flex flex-col justify-between"
      >
        <div>
          {/* Card Top Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-2xl border-2 border-[#333333] brutal-shadow-sm flex items-center justify-center text-white shrink-0"
                style={{ backgroundColor: pillar.accent }}
              >
                {getPillarIcon(pillar.iconName)}
              </div>
              <div>
                <span className="font-syne font-bold text-[10px] uppercase tracking-wider text-[#666666] bg-[#FFFDF9] px-2 py-0.5 rounded border border-[#333333]/30">
                  {pillar.category}
                </span>
                <h3 className="font-syne font-extrabold text-xl text-[#333333] leading-tight mt-0.5">
                  {pillar.title}
                </h3>
              </div>
            </div>
          </div>

          <p className="font-inter text-xs text-[#555555] font-medium leading-relaxed mb-5">
            {pillar.subtitle}
          </p>

          {/* Sub-Skill Pills Grid */}
          <div className="space-y-2 mb-5">
            <div className="font-syne font-extrabold text-[10px] uppercase tracking-widest text-[#888888] flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#FF6F61]" />
              <span>SPECIALITIES (CLICK FOR INFO)</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {pillar.subSkills.map((sub) => {
                const isSelected = selectedSubName === sub.name;
                return (
                  <button
                    key={sub.name}
                    onClick={() => handleSubSkillClick(pillar.id, sub.name)}
                    className={`px-2.5 py-1.5 rounded-xl font-syne font-bold text-[11px] uppercase tracking-wider border-2 border-[#333333] transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#333333] text-white brutal-shadow-sm translate-y-[-1px]'
                        : 'bg-[#FFFDF9] text-[#333333] hover:bg-[#FFD700]'
                    }`}
                  >
                    <span>{sub.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Sub-Skill Detail Spotlight Box */}
        {selectedSubObj && (
          <div className="bg-[#FFFDF9] border-2 border-[#333333] p-3.5 rounded-2xl brutal-shadow-sm mt-2">
            <div className="flex items-center justify-between mb-1">
              <span className="font-syne font-black text-xs text-[#FF6F61] uppercase flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF7F]" />
                {selectedSubObj.name}
              </span>
            </div>
            <p className="font-inter text-xs text-[#333333] leading-normal">
              {selectedSubObj.description}
            </p>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FFFDF9] border-t-3 border-[#333333] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row 1: 3 Columns Grid (Col 1: Header Info, Col 2: WordPress, Col 3: Shopify) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 items-stretch">
          
          {/* Column 1: Left-aligned Header Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center py-4 px-2 sm:px-4"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-[#00FF7F] text-[#333333] border-3 border-[#333333] px-3.5 py-1 rounded-full brutal-shadow-sm font-syne font-bold text-xs uppercase tracking-widest mb-4">
                <Flame className="w-3.5 h-3.5 text-[#FF6F61]" />
                <span>02 / TECHNICAL ARSENAL</span>
              </div>
              <h2 className="font-syne font-extrabold text-3xl min-[430px]:text-4xl sm:text-5xl lg:text-6xl text-[#333333] tracking-tight leading-tight mb-4">
                SKILLS & <span className="text-[#FF6F61] underline decoration-[#FFD700] decoration-wavy decoration-[2px] min-[430px]:decoration-3">STACK</span>
              </h2>
              <p className="font-inter text-xs sm:text-sm text-[#555555] font-medium leading-relaxed">
                Core web engineering pillars. Select any sub-skill pill in the cards to explore specialized tools, frameworks & proficiency levels.
              </p>
            </div>
          </motion.div>

          {/* Column 2: WordPress Card */}
          {row1Pillars[0] && renderPillarCard(row1Pillars[0], 1)}

          {/* Column 3: Shopify Card */}
          {row1Pillars[1] && renderPillarCard(row1Pillars[1], 2)}

        </div>

        {/* Row 2: 3 Columns Grid (PHP & Laravel, Figma & Design, AI Prompting) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {row2Pillars.map((pillar, idx) => renderPillarCard(pillar, idx + 3))}
        </div>

      </div>
    </section>
  );
};


