import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, ShieldAlert, Cpu, Award } from 'lucide-react';
import { soundEngine } from '../utils/audio';

const AnimatedCounter = ({ value, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const numericValue = parseInt(value.replace(/\D/g, ''), 10);
    if (isNaN(numericValue)) return;
    
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quadratic
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * numericValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, duration, isInView]);

  const suffix = value.replace(/[0-9]/g, '');

  return (
    <span ref={ref} className="font-mono text-3xl sm:text-4xl font-black text-white tracking-widest glow-text-cyan">
      {count}{suffix}
    </span>
  );
};

const Lab = () => {
  const handleHover = () => {
    soundEngine.playBleep(1600, 0.04);
  };

  const analyticsData = [
    { title: 'PROJECTS_BUILT', value: '42+', desc: 'Operational modules deployed on global web clusters.' },
    { title: 'HOURS_CODING', value: '5200+', desc: 'Neural cycles spent writing compile-safe code repositories.' },
    { title: 'TECH_LEARNED', value: '16+', desc: 'Modern toolchains mapped into system knowledge cache.' },
    { title: 'UI_DESIGNS', value: '85+', desc: 'Holographic interfaces mapped and design layouts completed.' },
    { title: 'CONTENT_PUBLISHED', value: '150+', desc: 'Broadcasting instructional media channels successfully.' },
    { title: 'COMMUNITY_GROWTH', value: '45000+', desc: 'Developers connected in neural educational nodes.' }
  ];

  return (
    <section id="lab" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto text-left relative overflow-hidden">
      
      {/* Background watermark */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-[14rem] md:text-[20rem] font-mono select-none pointer-events-none z-0 text-accentCyan/[0.01] tracking-widest font-black uppercase">
        STATS_03
      </div>

      <div className="max-w-3xl text-left mb-16 space-y-2 relative z-10">
        <h2 className="font-mono text-3xl md:text-4xl font-extrabold tracking-widest text-white">
          &gt; ACHIEVEMENT_ANALYTICS
        </h2>
        <div className="w-24 h-[2px] bg-accentCyan shadow-[0_0_10px_#00f2fe]" />
      </div>

      {/* Grid of Stats widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {analyticsData.map((stat, idx) => (
          <div
            key={idx}
            onMouseEnter={handleHover}
            className="bg-[#02000a]/75 border border-accentCyan/15 hover:border-accentCyan/35 rounded-2xl p-6 shadow-2xl relative overflow-hidden transition-all duration-300 backdrop-blur-md text-left flex flex-col justify-between min-h-[160px] group"
          >
            {/* Holographic detail markers */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-accentCyan/30" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-accentCyan/30" />
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[7.5px] font-mono text-accentCyan/50 tracking-widest border-b border-accentCyan/5 pb-2">
                <span>SECTOR_STAT_0{idx + 1}</span>
                <Activity size={9} className="text-accentCyan/40 group-hover:text-accentCyan transition-colors" />
              </div>
              
              <h3 className="font-mono text-[9px] font-bold tracking-widest text-accentViolet uppercase">
                {stat.title}
              </h3>
            </div>

            <div className="my-3 flex items-baseline">
              <AnimatedCounter value={stat.value} />
            </div>

            <div className="space-y-2">
              <p className="font-mono text-[9px] leading-relaxed text-gray-400">
                {stat.desc}
              </p>
              <div className="w-full h-[1px] bg-accentCyan/10 rounded overflow-hidden">
                <div className="h-full bg-accentCyan rounded-full w-[80%] group-hover:w-[100%] transition-all duration-1000" />
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Lab;
