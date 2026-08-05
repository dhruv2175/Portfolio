import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [hoverText, setHoverText] = useState('CLICK!');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, [onClick], [href]'
        );

        if (interactiveEl) {
          setIsHovered(true);
          const tag = interactiveEl.tagName.toLowerCase();
          const type = interactiveEl.getAttribute('type');

          if (tag === 'input' || tag === 'textarea' || type === 'text') {
            setHoverText('TYPE ✍️');
          } else if (tag === 'a' || interactiveEl.getAttribute('href')) {
            setHoverText('VIEW ↗');
          } else {
            setHoverText('CLICK!');
          }
        } else {
          setIsHovered(false);
        }
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => {
      setIsMouseDown(true);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block select-none">
      
      {/* Normal Neo-Brutalist Square Pointer (when not hovering interactive elements) */}
      {!isHovered && (
        <div
          className={`fixed top-0 left-0 w-5 h-5 rounded-md border-2 border-[#333333] shadow-[2px_2px_0px_#333333] transition-transform duration-75 ease-out flex items-center justify-center ${
            isMouseDown
              ? 'scale-75 bg-[#00FF7F] rotate-12'
              : 'scale-100 bg-[#FF6F61] rotate-0'
          }`}
          style={{
            transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0) ${
              isMouseDown ? 'scale(0.75) rotate(12deg)' : 'scale(1)'
            }`,
          }}
        >
          {/* Inner Sharp Dot */}
          <div className={`w-1.5 h-1.5 rounded-sm transition-colors ${isMouseDown ? 'bg-white' : 'bg-[#333333]'}`} />
        </div>
      )}

      {/* Colorful Neo-Brutalist Hover Pointer & Direct Click Tag (when hovering interactive elements) */}
      {isHovered && (
        <div
          className="fixed top-0 left-0 flex items-center gap-1.5 transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          }}
        >
          {/* Custom Vibrant Neo-Brutalist Arrow Pointer */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            className={`drop-shadow-[2px_2px_0px_#333333] transition-transform ${
              isMouseDown ? 'scale-90 rotate-6' : 'scale-100 hover:scale-110'
            }`}
          >
            {/* Arrow Pointer Body with Thick Stroke */}
            <path
              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
              fill={isMouseDown ? '#00FF7F' : '#FF6F61'}
              stroke="#333333"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
          </svg>

          {/* Attached "CLICK!" Pill Badge directly beside pointer */}
          <div
            className={`px-2 py-0.5 rounded-lg border-2 border-[#333333] brutal-shadow-sm font-syne font-black text-[10px] uppercase tracking-wider transition-all whitespace-nowrap ${
              isMouseDown
                ? 'bg-[#00FF7F] text-[#333333] scale-95'
                : 'bg-[#FFD700] text-[#333333] scale-100'
            }`}
          >
            {hoverText}
          </div>
        </div>
      )}

    </div>
  );
};
