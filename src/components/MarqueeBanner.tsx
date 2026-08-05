import React from 'react';
import { Sparkles, Zap, Star } from 'lucide-react';

export const MarqueeBanner: React.FC = () => {
  const marqueeItems = [
    "REACT.JS FRONTEND",
    "JAVASCRIPT ES6+",
    "PYTHON & FASTAPI",
    "REST API INTEGRATION",
    "MYSQL & MONGODB",
    "RESPONSIVE WEB DESIGN",
    "AHMEDABAD, INDIA",
    "B.TECH COMPUTER ENGINEERING",
  ];

  return (
    <div className="bg-[#FFD700] border-y-3 border-[#333333] py-3.5 overflow-hidden select-none z-20">
      <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 font-syne font-black text-sm uppercase text-[#333333] tracking-widest">
            <span>{item}</span>
            <Star className="w-4 h-4 text-[#FF6F61] fill-[#FF6F61] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
