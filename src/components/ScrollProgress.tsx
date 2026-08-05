import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      if (documentHeight > 0) {
        setScrollPercentage(Math.min(100, Math.max(0, (scrolled / documentHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-2 bg-[#333333]">
      <div 
        className="h-full bg-gradient-to-r from-[#FF6F61] via-[#FFD700] to-[#00FF7F] border-r-2 border-[#333333] transition-all duration-75"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};
