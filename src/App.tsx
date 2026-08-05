import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyPage } from './components/CaseStudyPage';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [currentCaseStudy, setCurrentCaseStudy] = useState<Project | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Smooth Scrolling (GSAP ScrollSmoother Feel)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.6,
      lerp: 0.08,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Intercept internal anchor clicks for Lenis smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.length > 1) {
          e.preventDefault();
          const targetEl = document.querySelector(href);
          if (targetEl) {
            lenis.scrollTo(targetEl as HTMLElement, { offset: -60, duration: 1.5 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Intersection Observer for Active Section Navigation Sync
  useEffect(() => {
    if (currentCaseStudy) return;

    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentCaseStudy]);

  const handleNavigate = (sectionId: string) => {
    setCurrentCaseStudy(null);
    setActiveSection(sectionId);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(`#${sectionId}`, { offset: -60, duration: 1.4 });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBackToHome = () => {
    setCurrentCaseStudy(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If a project detail view is active, render the project page
  if (currentCaseStudy) {
    return (
      <div className="min-h-screen bg-[#FFFDF9] text-[#333333] font-sans selection:bg-[#FF6F61] selection:text-white">
        <CustomCursor />
        <ScrollProgress />
        <CaseStudyPage 
          project={currentCaseStudy}
          onBackToHome={handleBackToHome}
          onSelectProject={(project) => setCurrentCaseStudy(project)}
          onContactClick={() => {
            setCurrentCaseStudy(null);
            setTimeout(() => {
              handleNavigate('contact');
            }, 100);
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#333333] font-sans selection:bg-[#FF6F61] selection:text-white">
      {/* Custom Neo-Brutalist Cursor */}
      <CustomCursor />

      {/* Top Progress Bar */}
      <ScrollProgress />

      {/* Header */}
      <Header 
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onExploreClick={() => handleNavigate('projects')} />
        <MarqueeBanner />
        <About />
        <Skills />
        <Experience />
        <Projects onOpenCaseStudy={(project) => setCurrentCaseStudy(project)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
