import React, { useState } from 'react';
import { X, CheckCircle2, ArrowUpRight, Zap, Code, Layout, Layers, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { playClickSound, playPopSound } from '../utils/sound';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'highlights' | 'architecture'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="bg-[#FFFDF9] border-4 border-[#333333] w-full max-w-4xl max-h-[90vh] rounded-3xl brutal-shadow-xl overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header Bar */}
        <div className="bg-[#333333] text-white p-4 sm:p-5 flex items-center justify-between border-b-3 border-[#333333] shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-3.5 h-3.5 bg-[#FF6F61] rounded-full border border-white" />
            <span className="font-syne font-bold text-xs uppercase tracking-widest text-[#FFD700]">
              PROJECT // {project.category}
            </span>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="p-1.5 rounded-xl bg-[#FF6F61] text-white border-2 border-white hover:bg-[#FF4081] transition-colors cursor-pointer font-bold"
            title="Close Project"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Title & Key Badge Header */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full font-syne font-black text-xs uppercase border-2 border-[#333333] bg-[#FFD700] text-[#333333] brutal-shadow-sm">
                Role: {project.role}
              </span>
              <span className="px-3 py-1 rounded-full font-mono font-bold text-xs bg-[#00FF7F] text-[#333333] border-2 border-[#333333]">
                {project.year} Release
              </span>
            </div>

            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-[#333333] tracking-tight">
              {project.title}
            </h2>
            <p className="font-inter font-semibold text-base sm:text-lg text-[#FF6F61]">
              {project.subtitle}
            </p>
          </div>

          {/* Metrics Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="bg-white border-3 border-[#333333] p-4 rounded-2xl brutal-shadow-sm text-center relative">
                <div className="font-syne font-black text-3xl text-[#333333]">{metric.value}</div>
                <div className="font-inter text-xs font-bold text-[#666666] mt-1">{metric.label}</div>
                <div className="mt-2 inline-block bg-[#00FF7F] text-[#333333] text-[10px] font-mono font-extrabold px-2 py-0.5 rounded border border-[#333333]">
                  {metric.badge}
                </div>
              </div>
            ))}
          </div>

          {/* Tabs Navigation */}
          <div className="flex items-center gap-2 border-b-2 border-[#333333]/20 pb-3">
            <button
              onClick={() => {
                playClickSound();
                setActiveTab('overview');
              }}
              className={`px-4 py-2 rounded-xl font-syne font-bold text-xs uppercase transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#FF6F61] text-white border-2 border-[#333333] brutal-shadow-sm'
                  : 'bg-white text-[#333333] hover:bg-[#FFD700]'
              }`}
            >
              Challenge & Solution
            </button>

            <button
              onClick={() => {
                playClickSound();
                setActiveTab('highlights');
              }}
              className={`px-4 py-2 rounded-xl font-syne font-bold text-xs uppercase transition-all cursor-pointer ${
                activeTab === 'highlights'
                  ? 'bg-[#FF6F61] text-white border-2 border-[#333333] brutal-shadow-sm'
                  : 'bg-white text-[#333333] hover:bg-[#FFD700]'
              }`}
            >
              Engineering Highlights
            </button>

            <button
              onClick={() => {
                playClickSound();
                setActiveTab('architecture');
              }}
              className={`px-4 py-2 rounded-xl font-syne font-bold text-xs uppercase transition-all cursor-pointer ${
                activeTab === 'architecture'
                  ? 'bg-[#FF6F61] text-white border-2 border-[#333333] brutal-shadow-sm'
                  : 'bg-white text-[#333333] hover:bg-[#FFD700]'
              }`}
            >
              Tech Architecture
            </button>
          </div>

          {/* Tab Content 1: Overview (Challenge / Solution / Result) */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Challenge */}
              <div className="bg-white border-3 border-[#333333] p-5 rounded-2xl brutal-shadow-sm">
                <div className="font-syne font-bold text-xs uppercase text-[#FF6F61] tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF6F61] rounded-full" />
                  THE CHALLENGE
                </div>
                <p className="font-inter text-sm sm:text-base text-[#333333]/90 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-white border-3 border-[#333333] p-5 rounded-2xl brutal-shadow-sm">
                <div className="font-syne font-bold text-xs uppercase text-[#00BFFF] tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00BFFF] rounded-full" />
                  THE ENGINEERING SOLUTION
                </div>
                <p className="font-inter text-sm sm:text-base text-[#333333]/90 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Result */}
              <div className="bg-[#FFD700] border-3 border-[#333333] p-5 rounded-2xl brutal-shadow-md">
                <div className="font-syne font-bold text-xs uppercase text-[#333333] tracking-wider mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FF6F61]" />
                  BUSINESS & PERFORMANCE RESULT
                </div>
                <p className="font-syne font-bold text-base sm:text-lg text-[#333333] leading-snug">
                  {project.result}
                </p>
              </div>

            </div>
          )}

          {/* Tab Content 2: Highlights */}
          {activeTab === 'highlights' && (
            <div className="bg-white border-3 border-[#333333] p-6 rounded-2xl brutal-shadow-sm space-y-4">
              <h4 className="font-syne font-extrabold text-lg text-[#333333]">
                Core Technical Breakthroughs
              </h4>
              <ul className="space-y-3 font-inter text-sm text-[#333333]/90">
                {project.caseStudyDetails.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00FF7F] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tab Content 3: Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="bg-[#333333] text-white p-5 rounded-2xl border-3 border-[#333333] font-mono text-sm space-y-2">
                <div className="text-[#00FF7F] font-bold">$ architecture --inspect</div>
                <div className="text-white/90">{project.caseStudyDetails.architecture}</div>
              </div>

              <div>
                <div className="font-syne font-bold text-xs uppercase text-[#666666] tracking-wider mb-2">
                  TECH STACK & DEPENDENCIES
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-white border-2 border-[#333333] px-3 py-1 rounded-xl font-mono font-bold text-xs brutal-shadow-sm">
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Testimonial Quote if available */}
          {project.caseStudyDetails.testimonial && (
            <div className="bg-[#00BFFF]/15 border-3 border-[#333333] p-5 rounded-2xl relative">
              <p className="font-syne font-bold italic text-base text-[#333333] mb-2">
                "{project.caseStudyDetails.testimonial.quote}"
              </p>
              <div className="font-inter text-xs font-bold text-[#666666]">
                — {project.caseStudyDetails.testimonial.author}, {project.caseStudyDetails.testimonial.title}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 sm:p-5 bg-white border-t-3 border-[#333333] flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="font-inter text-xs font-bold text-[#666666]">
            Architected & Built by Dhruv Patel
          </div>

          <button
            onClick={() => {
              playPopSound();
              onClose();
            }}
            className="bg-[#FF6F61] text-white px-6 py-2.5 rounded-xl font-syne font-bold text-xs uppercase border-2 border-[#333333] brutal-btn brutal-shadow-sm cursor-pointer"
          >
            Close Project
          </button>
        </div>

      </div>

    </div>
  );
};
