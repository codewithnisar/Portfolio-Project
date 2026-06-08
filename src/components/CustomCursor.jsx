import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hoveredState, setHoveredState] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const mainCursorRef = useRef(null);
  const trailingCursorRef = useRef(null);
  const trailingPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mobileCheck = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch);
      if (!isTouch) {
        document.documentElement.classList.add('custom-cursor-active');
      } else {
        document.documentElement.classList.remove('custom-cursor-active');
      }
    };
    
    mobileCheck();
    window.addEventListener('resize', mobileCheck);
    return () => window.removeEventListener('resize', mobileCheck);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      currentPosition.current = { x, y };
      setPosition({ x, y });
      if (hidden) setHidden(false);
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setHoveredState(target.getAttribute('data-cursor') || 'pointer');
      } else {
        const isStandardLink = e.target.closest('a, button, select, input[type="submit"], [role="button"]');
        if (isStandardLink) {
          setHoveredState('pointer');
        } else {
          setHoveredState(null);
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [hidden, isMobile]);

  useEffect(() => {
    if (isMobile) return;

    let animFrameId;
    const render = () => {
      const ease = 0.22; // Quick, responsive locking ease
      const dx = currentPosition.current.x - trailingPosition.current.x;
      const dy = currentPosition.current.y - trailingPosition.current.y;

      trailingPosition.current.x += dx * ease;
      trailingPosition.current.y += dy * ease;

      if (trailingCursorRef.current) {
        trailingCursorRef.current.style.transform = `translate3d(${trailingPosition.current.x}px, ${trailingPosition.current.y}px, 0)`;
      }

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animFrameId);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Target focal dot */}
      <div
        ref={mainCursorRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accentCyan transition-opacity duration-300 ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '4px',
          height: '4px',
          boxShadow: '0 0 10px #00f2fe, 0 0 20px #00f2fe',
        }}
      />

      {/* J.A.R.V.I.S HUD Reticle */}
      <div
        ref={trailingCursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accentCyan/30 flex items-center justify-center transition-all duration-300 ${
          hidden ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
        style={{
          width: hoveredState ? '42px' : '30px',
          height: hoveredState ? '42px' : '30px',
          borderColor: hoveredState ? 'rgba(0, 242, 254, 0.8)' : 'rgba(0, 242, 254, 0.35)',
          boxShadow: clicked ? '0 0 20px rgba(0, 242, 254, 0.3)' : 'none',
        }}
      >
        {/* Rotating outer ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-accentCyan/55 animate-spin-slow" />
        {/* Inner static border */}
        <div className="absolute w-[80%] h-[80%] rounded-full border border-accentViolet/25" />
        
        {/* Fine crosshairs */}
        <div className="absolute w-[60%] h-[0.5px] bg-accentCyan/40" />
        <div className="absolute h-[60%] w-[0.5px] bg-accentCyan/40" />

        {/* Live coordinates tracker popup */}
        <div className="absolute left-8 top-0 text-[7px] font-mono text-accentCyan/65 tracking-widest pointer-events-none select-none text-left leading-normal space-y-0.5 whitespace-nowrap bg-black/60 px-1 py-0.5 rounded border border-white/5">
          <div>X: {Math.round(position.x)}</div>
          <div>Y: {Math.round(position.y)}</div>
          {hoveredState && (
            <div className="text-accentViolet font-extrabold uppercase text-[6.5px]">
              &gt; {hoveredState}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
