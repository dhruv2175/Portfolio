import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Zap, 
  Code2, 
  Layers, 
  Sparkles, 
  Quote, 
  Clock, 
  MapPin, 
  Building2, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { playClickSound, playPopSound } from '../utils/sound';
import { Footer } from './Footer';

interface CaseStudyPageProps {
  project: Project;
  onBackToHome: () => void;
  onSelectProject: (project: Project) => void;
  onContactClick: () => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  project,
  onBackToHome,
  onSelectProject,
  onContactClick
}) => {

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  // Find index for prev / next case study navigation
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  const details = project.caseStudyDetails;

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#333333] flex flex-col font-inter selection:bg-[#FFD700] selection:text-[#333333]">
      
      {/* ---------------------------------------------------- */}
      {/* TOP HEADER BAR (No Main Menu - Clean Case Study Nav) */}
      {/* ---------------------------------------------------- */}
      <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b-4 border-[#333333] py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Back to Home Button */}
          <button
            onClick={() => {
              playClickSound();
              onBackToHome();
            }}
            className="group flex items-center gap-2 bg-[#FFFFFF] text-[#333333] border-3 border-[#333333] px-3.5 py-2 rounded-2xl font-syne font-bold text-xs uppercase tracking-wider brutal-shadow-sm hover:bg-[#FFD700] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF6F61] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          {/* Project Title Badge */}
          <div className="hidden md:flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#00FF7F] border border-[#333333] animate-pulse" />
            <span className="font-syne font-bold text-xs uppercase tracking-widest text-[#666666]">
              PROJECT // <span className="text-[#333333] font-extrabold">{project.category}</span>
            </span>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playPopSound()}
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#00BFFF] text-white border-2 border-[#333333] px-3.5 py-2 rounded-2xl font-syne font-bold text-xs uppercase brutal-shadow-sm hover:bg-[#0099FF] transition-all"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={() => {
                playClickSound();
                onContactClick();
              }}
              className="bg-[#FF6F61] text-white border-2 border-[#333333] px-4 py-2 rounded-2xl font-syne font-bold text-xs uppercase brutal-shadow-sm hover:bg-[#FF4081] transition-all cursor-pointer"
            >
              Hire Me
            </button>
          </div>

        </div>
      </header>

      {/* ---------------------------------------------------- */}
      {/* MAIN CONTENT CONTAINER (2-COLUMN: LEFT & RIGHT) */}
      {/* ---------------------------------------------------- */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Top Breadcrumb Navigation */}
        <div className="mb-8 flex items-center justify-between border-b-2 border-[#333333]/15 pb-4">
          <div className="flex items-center gap-2 font-syne text-xs font-bold text-[#666666] uppercase tracking-wider">
            <button 
              onClick={() => { playClickSound(); onBackToHome(); }}
              className="hover:text-[#FF6F61] underline cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#333333]">Project</span>
            <span>/</span>
            <span className="text-[#FF6F61]">{project.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { playClickSound(); onSelectProject(prevProject); }}
              className="p-1.5 bg-white border-2 border-[#333333] rounded-xl hover:bg-[#FFD700] transition-colors cursor-pointer text-xs font-bold font-syne flex items-center gap-1"
              title="Previous Project"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            <button
              onClick={() => { playClickSound(); onSelectProject(nextProject); }}
              className="p-1.5 bg-white border-2 border-[#333333] rounded-xl hover:bg-[#FFD700] transition-colors cursor-pointer text-xs font-bold font-syne flex items-center gap-1"
              title="Next Project"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* =================================================== */}
          {/* LEFT COLUMN: STICKY METADATA & SIDEBAR (lg:col-span-4) */}
          {/* =================================================== */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            
            {/* Quick Back to Home Button */}
            <button
              onClick={() => {
                playClickSound();
                onBackToHome();
              }}
              className="w-full bg-[#FFD700] text-[#333333] border-3 border-[#333333] p-3.5 rounded-2xl font-syne font-extrabold text-xs uppercase tracking-wider brutal-shadow-md hover:bg-[#FFE033] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Portfolio Home</span>
            </button>

            {/* Metrics Highlight Card */}
            <div className="bg-[#333333] text-white border-4 border-[#333333] p-6 rounded-3xl brutal-shadow-lg space-y-4">
              <div className="flex items-center gap-2 border-b border-white/20 pb-3">
                <Zap className="w-4 h-4 text-[#FFD700]" />
                <span className="font-syne font-extrabold text-xs uppercase tracking-widest text-[#FFD700]">
                  KEY IMPACT METRICS
                </span>
              </div>

              <div className="space-y-3">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white/10 border border-white/20 p-3 rounded-2xl flex items-center justify-between gap-2">
                    <div>
                      <div className="font-syne font-black text-2xl text-white leading-tight">
                        {metric.value}
                      </div>
                      <div className="font-inter text-[11px] text-white/80 font-medium">
                        {metric.label}
                      </div>
                    </div>
                    <span className="bg-[#00FF7F] text-[#333333] font-mono font-extrabold text-[10px] px-2 py-0.5 rounded border border-[#333333] shrink-0">
                      {metric.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Box if Available */}
            {details.testimonial && (
              <div className="bg-[#FF4081]/10 border-3 border-[#333333] p-5 rounded-3xl relative brutal-shadow-sm space-y-3">
                <Quote className="w-6 h-6 text-[#FF4081]" />
                <p className="font-syne font-bold italic text-xs sm:text-sm text-[#333333] leading-relaxed">
                  "{details.testimonial.quote}"
                </p>
                <div className="font-inter text-xs font-bold text-[#666666] pt-1 border-t border-[#333333]/20">
                  — {details.testimonial.author}, <span className="text-[#333333] font-medium">{details.testimonial.title}</span>
                </div>
              </div>
            )}

            {/* Contact Action Box */}
            <div className="bg-[#00BFFF]/15 border-3 border-[#333333] p-5 rounded-3xl text-center space-y-3">
              <h4 className="font-syne font-extrabold text-sm text-[#333333]">
                Need a similar architecture built?
              </h4>
              <p className="font-inter text-xs text-[#666666]">
                Transforming ideas into responsive web applications and AI-powered products using React, Python, FastAPI, REST APIs, and modern development tools.
              </p>
              <button
                onClick={() => {
                  playPopSound();
                  onContactClick();
                }}
                className="w-full bg-[#FF6F61] text-white border-2 border-[#333333] py-2.5 rounded-xl font-syne font-bold text-xs uppercase tracking-wider brutal-shadow-sm hover:bg-[#FF4081] transition-all cursor-pointer"
              >
                Get In Touch
              </button>
            </div>

          </aside>

          {/* =================================================== */}
          {/* RIGHT COLUMN: READABLE PROJECT ARTICLE (lg:col-span-8) */}
          {/* =================================================== */}
          <article className="lg:col-span-8 space-y-10">
            
            {/* Project Header Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#FFD700] text-[#333333] border-2 border-[#333333] px-3.5 py-1 rounded-full font-syne font-black text-xs uppercase brutal-shadow-sm">
                  {project.category}
                </span>
                <span className="bg-[#FF6F61] text-white border-2 border-[#333333] px-3.5 py-1 rounded-full font-syne font-bold text-xs uppercase brutal-shadow-sm">
                  Role: {project.role}
                </span>
              </div>

              <h1 className="font-syne font-black text-3xl sm:text-5xl lg:text-6xl text-[#333333] tracking-tight leading-none">
                {project.title}
              </h1>
              <p className="font-inter font-semibold text-lg sm:text-xl text-[#FF6F61] leading-relaxed">
                {project.subtitle}
              </p>
            </motion.div>

            {/* Featured Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-4 border-[#333333] rounded-3xl p-3 brutal-shadow-xl overflow-hidden relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video border-2 border-[#333333]">
                <img
                  src={project.featuredImg}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#333333] text-white px-3 py-1 rounded-full font-mono text-xs font-bold border border-white/30 shadow">
                  ENGINEERING PROJECT
                </div>
              </div>
            </motion.div>

            {/* SECTION 1: EXECUTIVE OVERVIEW */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-3 border-[#333333] p-6 sm:p-8 rounded-3xl brutal-shadow-md space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#00BFFF] rounded-full border border-[#333333]" />
                <h2 className="font-syne font-extrabold text-xl text-[#333333] uppercase tracking-wide">
                  1. Executive Context & Objectives
                </h2>
              </div>
              <p className="font-inter text-base sm:text-lg text-[#333333]/90 leading-relaxed font-normal">
                {details.overview}
              </p>
            </motion.section>

            {/* SECTION 2: THE PROBLEM STATEMENT */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-3 border-[#333333] p-6 sm:p-8 rounded-3xl brutal-shadow-md space-y-5"
            >
              <div className="flex items-center gap-2 border-b-2 border-[#333333]/15 pb-3">
                <ShieldCheck className="w-5 h-5 text-[#FF6F61]" />
                <h2 className="font-syne font-extrabold text-xl text-[#333333] uppercase tracking-wide">
                  2. The Core Challenge & System Bottlenecks
                </h2>
              </div>

              <p className="font-inter text-base text-[#333333]/90 leading-relaxed">
                {project.challenge}
              </p>

              {details.problemDetails && details.problemDetails.length > 0 && (
                <div className="bg-[#FF6F61]/10 border-2 border-[#333333] p-5 rounded-2xl space-y-3">
                  <div className="font-syne font-bold text-xs uppercase text-[#FF6F61] tracking-wider">
                    KEY SYSTEM PAIN POINTS BEFORE REDESIGN
                  </div>
                  <ul className="space-y-2.5 font-inter text-sm text-[#333333]">
                    {details.problemDetails.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 bg-[#FF6F61] rounded-full shrink-0 mt-2" />
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.section>

            {/* SECTION 3: THE ENGINEERING SOLUTION & ARCHITECTURE */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-3 border-[#333333] p-6 sm:p-8 rounded-3xl brutal-shadow-md space-y-6"
            >
              <div className="flex items-center gap-2 border-b-2 border-[#333333]/15 pb-3">
                <Code2 className="w-5 h-5 text-[#00BFFF]" />
                <h2 className="font-syne font-extrabold text-xl text-[#333333] uppercase tracking-wide">
                  3. Technical Solution & Architecture
                </h2>
              </div>

              <p className="font-inter text-base text-[#333333]/90 leading-relaxed">
                {project.solution}
              </p>

              {/* Architecture Summary Box */}
              <div className="bg-[#FFD700] border-3 border-[#333333] p-5 rounded-2xl brutal-shadow-sm space-y-2">
                <div className="font-syne font-extrabold text-xs uppercase text-[#333333] tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#FF6F61]" />
                  SYSTEM ARCHITECTURE SUMMARY
                </div>
                <div className="font-mono font-bold text-sm text-[#333333]">
                  {details.architecture}
                </div>
              </div>

              {/* Code Snippet Highlight if available */}
              {details.codeSnippet && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#666666]">
                    <span>{details.codeSnippet.filename}</span>
                    <span className="uppercase">{details.codeSnippet.language}</span>
                  </div>
                  <div className="bg-[#333333] text-white p-5 rounded-2xl border-3 border-[#333333] font-mono text-xs overflow-x-auto leading-relaxed brutal-shadow-md">
                    <pre><code>{details.codeSnippet.code}</code></pre>
                  </div>
                </div>
              )}
            </motion.section>

            {/* SECTION 4: PERFORMANCE COMPARISON TABLE */}
            {details.comparisonMetrics && details.comparisonMetrics.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-white border-3 border-[#333333] p-6 sm:p-8 rounded-3xl brutal-shadow-md space-y-5"
              >
                <div className="flex items-center gap-2 border-b-2 border-[#333333]/15 pb-3">
                  <TrendingUp className="w-5 h-5 text-[#00FF7F]" />
                  <h2 className="font-syne font-extrabold text-xl text-[#333333] uppercase tracking-wide">
                    4. Performance Benchmark & ROI Comparison
                  </h2>
                </div>

                {/* Benchmark Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-inter text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#333333] text-white font-syne uppercase tracking-wider text-[11px]">
                        <th className="p-3.5 rounded-tl-xl border-r border-white/10">Metric Benchmark</th>
                        <th className="p-3.5 border-r border-white/10 text-red-300">Before Optimization</th>
                        <th className="p-3.5 border-r border-white/10 text-emerald-300">After Solution</th>
                        <th className="p-3.5 rounded-tr-xl text-[#FFD700]">Net Improvement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border border-[#333333]">
                      {details.comparisonMetrics.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-[#FFFDF9]' : 'bg-white'}>
                          <td className="p-3.5 font-syne font-bold text-sm text-[#333333] border-r border-[#333333]/20">
                            {row.metric}
                          </td>
                          <td className="p-3.5 font-mono text-red-600 font-bold border-r border-[#333333]/20">
                            {row.before}
                          </td>
                          <td className="p-3.5 font-mono text-emerald-700 font-bold border-r border-[#333333]/20">
                            {row.after}
                          </td>
                          <td className="p-3.5 font-syne font-extrabold text-[#333333]">
                            <span className="bg-[#00FF7F] px-2 py-0.5 rounded border border-[#333333]">
                              {row.improvement}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.section>
            )}

            {/* SECTION 5: CORE HIGHLIGHTS */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-3 border-[#333333] p-6 sm:p-8 rounded-3xl brutal-shadow-md space-y-4"
            >
              <div className="flex items-center gap-2 border-b-2 border-[#333333]/15 pb-3">
                <CheckCircle2 className="w-5 h-5 text-[#00FF7F]" />
                <h2 className="font-syne font-extrabold text-xl text-[#333333] uppercase tracking-wide">
                  5. Technical Breakthrough Highlights
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {details.highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-[#FFFDF9] border-2 border-[#333333] p-4 rounded-2xl brutal-shadow-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00FF7F] shrink-0 mt-0.5" />
                    <span className="font-inter text-xs sm:text-sm font-medium text-[#333333]/90 leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* SECTION 6: KEY ENGINEERING TAKEAWAYS */}
            {details.takeaways && details.takeaways.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="bg-[#333333] text-white border-4 border-[#333333] p-6 sm:p-8 rounded-3xl brutal-shadow-xl space-y-4"
              >
                <div className="flex items-center gap-2 border-b border-white/20 pb-3">
                  <Award className="w-5 h-5 text-[#FFD700]" />
                  <h2 className="font-syne font-extrabold text-xl text-[#FFD700] uppercase tracking-wide">
                    6. Key Takeaways & Architectural Lessons
                  </h2>
                </div>

                <ul className="space-y-3 font-inter text-sm text-white/90">
                  {details.takeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#FFD700] rounded-full shrink-0 mt-2" />
                      <span className="leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* PROJECT PAGINATION & RETURN TO HOME */}
            <div className="pt-8 border-t-3 border-[#333333] space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Prev Project Card */}
                <button
                  onClick={() => { playClickSound(); onSelectProject(prevProject); }}
                  className="bg-white border-3 border-[#333333] p-5 rounded-2xl brutal-shadow-sm hover:bg-[#FFD700]/20 transition-all text-left space-y-1 cursor-pointer group"
                >
                  <div className="text-[11px] font-syne font-bold uppercase text-[#666666] flex items-center gap-1">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    <span>PREVIOUS PROJECT</span>
                  </div>
                  <div className="font-syne font-extrabold text-base text-[#333333] group-hover:text-[#FF6F61] transition-colors">
                    {prevProject.title}
                  </div>
                </button>

                {/* Next Project Card */}
                <button
                  onClick={() => { playClickSound(); onSelectProject(nextProject); }}
                  className="bg-white border-3 border-[#333333] p-5 rounded-2xl brutal-shadow-sm hover:bg-[#FFD700]/20 transition-all text-right space-y-1 cursor-pointer group"
                >
                  <div className="text-[11px] font-syne font-bold uppercase text-[#666666] flex items-center justify-end gap-1">
                    <span>NEXT PROJECT</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="font-syne font-extrabold text-base text-[#333333] group-hover:text-[#FF6F61] transition-colors">
                    {nextProject.title}
                  </div>
                </button>
              </div>

              {/* Big Centered Back to Home Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => {
                    playClickSound();
                    onBackToHome();
                  }}
                  className="bg-[#FF6F61] text-white border-4 border-[#333333] px-8 py-4 rounded-3xl font-syne font-extrabold text-sm uppercase tracking-wider brutal-shadow-lg hover:bg-[#FF4081] transition-all flex items-center gap-3 cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Return to Portfolio Home</span>
                </button>
              </div>

            </div>

          </article>

        </div>

      </main>

      {/* ---------------------------------------------------- */}
      {/* FOOTER (Same consistent footer as required) */}
      {/* ---------------------------------------------------- */}
      <Footer />

    </div>
  );
};
