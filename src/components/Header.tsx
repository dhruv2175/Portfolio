import React, { useState, useEffect } from 'react';
import { Mail, Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { playClickSound, playPopSound, toggleSound, isSoundEnabled } from '../utils/sound';
import { PROFILE_IMAGES } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    playClickSound();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) playPopSound();
  };

  return (
    <header className={`fixed top-3 md:top-5 left-2 right-2 md:left-0 md:right-0 z-50 transition-all duration-300 px-0 md:px-6`}>
      <div className="mx-auto max-w-full md:max-w-7xl">
        <div className={`bg-[#FFFDF9] border-3 border-[#333333] rounded-2xl md:rounded-full px-3 py-3 md:px-6 flex flex-wrap items-center justify-between gap-3 transition-all duration-300 ${
          scrolled ? 'brutal-shadow-md py-2.5 bg-[#FFFDF9]/95 backdrop-blur-md' : 'brutal-shadow'
        }`}>
          
          {/* Left: Circular Profile & Status */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            title="Go to Home"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-full border-2 border-[#333333] overflow-hidden bg-[#FFD700] p-0.5 transform group-hover:rotate-6 transition-transform">
                <img
                  src={PROFILE_IMAGES[1].url}
                  alt={PROFILE_IMAGES[1].alt}
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#00FF7F] border-2 border-[#333333] rounded-full animate-pulse" title="Available for work" />
            </div>
            
            <div className="hidden sm:flex flex-col">
              <div className="font-syne font-bold text-sm md:text-base text-[#333333] leading-none flex items-center gap-1.5">
                DHRUV PATEL
                <span className="text-[10px] md:text-xs px-1.5 py-0.5 bg-[#FF6F61] text-white rounded font-mono border border-[#333333]">DEV</span>
              </div>
              <div className="font-inter text-[10px] sm:text-xs font-semibold text-[#333333]/70 leading-tight mt-0.5">
                Full Stack Developer • Ahmedabad
              </div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1 text-[10px] sm:text-xs font-syne font-bold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#FFD700] text-[#333333] border-2 border-[#333333] shadow-[2px_2px_0px_#000000]'
                      : 'text-[#333333] hover:text-[#FF6F61] hover:bg-[#FFD700]/25'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Actions (Sound Toggle + CTA Email Me Button) */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {/* Sound Synthesizer Toggle */}
            <button
              onClick={handleSoundToggle}
              className={`p-2 rounded-xl border-2 border-[#333333] text-xs font-bold transition-all cursor-pointer brutal-shadow-sm ${
                soundOn ? 'bg-[#00FF7F] text-[#333333]' : 'bg-[#E5E7EB] text-[#666666]'
              }`}
              title={soundOn ? 'Sound Feedback ON' : 'Sound Feedback OFF'}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Email Me Neo Brutalism CTA Button */}
            <a
              href="mailto:dspatel2175@gmail.com"
              onClick={() => playPopSound()}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#FF6F61] text-white px-4 py-2 rounded-xl font-syne font-bold text-xs uppercase tracking-wider border-2 border-[#333333] brutal-btn brutal-shadow-sm hover:bg-[#FF4081] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-xl border-2 border-[#333333] bg-[#FFD700] text-[#333333] brutal-shadow-sm font-bold cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-[#FFFDF9] border-3 border-[#333333] rounded-2xl p-4 brutal-shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`p-3 rounded-xl border-2 border-[#333333] text-center font-syne font-bold text-sm uppercase tracking-wider cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-[#FFD700] text-[#333333] brutal-shadow-sm'
                      : 'bg-white text-[#333333] hover:bg-[#00BFFF]/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <a
              href="mailto:dspatel2175@gmail.com"
              className="w-full flex flex-col items-center justify-center gap-1 bg-[#FF6F61] text-white py-3 rounded-xl font-syne font-bold text-sm uppercase border-2 border-[#333333] brutal-shadow-sm text-center"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </div>
              <span className="text-[10px] tracking-wider normal-case lowercase">(dspatel2175@gmail.com)</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
