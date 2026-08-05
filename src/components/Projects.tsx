import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Layers, Zap, CheckCircle2, Eye, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { playClickSound, playPopSound } from '../utils/sound';

interface ProjectsProps {
  onOpenCaseStudy?: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenCaseStudy = (project: Project) => {
    playPopSound();
    if (onOpenCaseStudy) {
      onOpenCaseStudy(project);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FFFDF9] border-t-3 border-[#333333] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF4081] text-white border-3 border-[#333333] px-4 py-1.5 rounded-full brutal-shadow-sm font-syne font-bold text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>04 / PROJECTS SHOWCASE</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl min-[430px]:text-4xl sm:text-6xl text-[#333333] tracking-tight leading-tight">
            FEATURED <span className="bg-[#00BFFF] text-white px-2 min-[430px]:px-3 py-0.5 rounded-xl border-2 min-[430px]:border-3 border-[#333333] inline-block -rotate-1 brutal-shadow-sm mt-1 mb-2">PROFILE</span>
          </h2>
          <p className="font-inter text-base text-[#666666] font-medium mt-2 max-w-xl">
           Creating modern web applications, AI-powered projects, and seamless digital experiences with React, Python, FastAPI, and MySQL.
          </p>
        </motion.div>

        {/* Magazine Style Alternating Editorial Showcase */}
        <div className="space-y-16 md:space-y-24">
          {PROJECTS_DATA.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-[#FFFFFF] border-4 border-[#333333] rounded-3xl p-6 sm:p-8 md:p-10 brutal-shadow-xl relative overflow-hidden transition-all duration-300 hover:brutal-shadow-2xl"
              >
                
                {/* Number Badge Watermark */}
                <div className="absolute top-4 right-6 font-syne font-black text-6xl sm:text-8xl text-stroke-2 text-[#333333]/15 pointer-events-none select-none">
                  0{index + 1}
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden border-3 border-[#333333] brutal-shadow-md group-hover:scale-[1.01] transition-transform duration-300 bg-[#333333]">
                      
                      <div className="aspect-[16/10] overflow-hidden">
                        <img 
                          src={project.featuredImg} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4 bg-[#FFD700] text-[#333333] border-2 border-[#333333] px-3.5 py-1.5 rounded-full font-syne font-bold text-xs uppercase brutal-shadow-sm flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#FF6F61]" />
                        <span>{project.category}</span>
                      </div>

                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? '' : 'lg:order-1'}`}>
                    
                    {/* Role Badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-[#333333] text-white px-3 py-1 rounded-full font-syne font-bold text-xs uppercase border border-[#333333]">
                        Role: {project.role}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#333333] leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="font-inter font-semibold text-base text-[#FF6F61]">
                      {project.subtitle}
                    </p>

                    {/* Challenge & Solution Summary Box */}
                    <div className="bg-[#FFFDF9] border-2 border-[#333333] p-4 rounded-2xl space-y-3 font-inter text-sm text-[#333333]/90 leading-relaxed">
                      <div>
                        <strong className="text-[#FF6F61] font-syne uppercase text-xs tracking-wider block mb-0.5">CHALLENGE:</strong>
                        <p className="line-clamp-2">{project.challenge}</p>
                      </div>
                      <div>
                        <strong className="text-[#00BFFF] font-syne uppercase text-xs tracking-wider block mb-0.5">SOLUTION:</strong>
                        <p className="line-clamp-2">{project.solution}</p>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white border-2 border-[#333333] px-2.5 py-0.5 rounded-lg font-mono font-bold text-xs text-[#333333]"
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => handleOpenCaseStudy(project)}
                        className="w-full sm:w-auto bg-[#FF6F61] text-white px-7 py-3.5 rounded-2xl font-syne font-bold text-xs uppercase tracking-wider border-3 border-[#333333] brutal-btn brutal-shadow hover:bg-[#FF4081] inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Explain What’s In This Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
