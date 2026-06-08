import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu, GitBranch, Compass } from 'lucide-react';
import { soundEngine } from '../utils/audio';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skillDatabase = [
    { name: 'HTML5', level: 98, category: 'Core', desc: 'Standard hypermedia structuring. System compatibility 100%.', angle: 45, icon: Code },
    { name: 'CSS3', level: 95, category: 'Core', desc: 'Holographic page styling, layouts, variables & responsive grids.', angle: 90, icon: Code },
    { name: 'JavaScript', level: 97, category: 'Logic', desc: 'Asynchronous event engines, functional systems, scripting.', angle: 135, icon: Terminal },
    { name: 'TypeScript', level: 93, category: 'Logic', desc: 'Strongly typed interface structures. Fail-safe build configurations.', angle: 180, icon: Terminal },
    { name: 'React.js', level: 96, category: 'Frameworks', desc: 'Component lifecycle control, virtual DOM mapping, custom hooks.', angle: 225, icon: Cpu },
    { name: 'Next.js', level: 92, category: 'Frameworks', desc: 'Server-side rendering vectors, incremental optimizations.', angle: 270, icon: Cpu },
    { name: 'Tailwind CSS', level: 96, category: 'Core', desc: 'Utility-first telemetry styles. High-speed fluid design frameworks.', angle: 315, icon: Compass },
    { name: 'Git & GitHub', level: 94, category: 'Systems', desc: 'Version control streams, remote database sync, team flow branch.', angle: 360, icon: GitBranch }
  ];

  const handleHover = (skill) => {
    soundEngine.playBleep(1500, 0.04);
    setActiveSkill(skill);
  };

  const handleLeave = () => {
    setActiveSkill(null);
  };

  return (
    <section id="skills" className="relative py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background visual watermarks */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[22rem] font-mono select-none pointer-events-none z-0 text-accentCyan/[0.015] tracking-widest font-black uppercase">
        RADAR_01
      </div>

      <div className="max-w-3xl text-left mb-16 space-y-2 relative z-10">
        <h2 className="font-mono text-3xl md:text-4xl font-extrabold tracking-widest text-white">
          &gt; SKILLS_COMMAND_CENTER
        </h2>
        <div className="w-24 h-[2px] bg-accentCyan shadow-[0_0_10px_#00f2fe]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Concentric SVG Radar Ring visualization */}
        <div className="lg:col-span-6 flex items-center justify-center relative min-h-[340px] md:min-h-[420px]">
          {/* Outer radar screen */}
          <div className="absolute inset-0 max-w-[340px] max-h-[340px] md:max-w-[400px] md:max-h-[400px] mx-auto rounded-full bg-black/40 border border-accentCyan/15 flex items-center justify-center shadow-2xl relative">
            
            {/* Concentric rings */}
            <div className="absolute w-[80%] h-[80%] rounded-full border border-accentCyan/10 border-dashed" />
            <div className="absolute w-[60%] h-[60%] rounded-full border border-accentViolet/10" />
            <div className="absolute w-[40%] h-[40%] rounded-full border border-accentCyan/5" />
            <div className="absolute w-[20%] h-[20%] rounded-full border border-accentCyan/15 flex items-center justify-center">
              <Cpu size={18} className="text-accentCyan animate-pulse" />
            </div>

            {/* Dynamic radar sweeping line */}
            <div className="absolute inset-0 rounded-full pointer-events-none animate-spin-slow" style={{ animationDuration: '10s' }}>
              <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent to-accentCyan/60 origin-left absolute top-1/2 left-1/2" />
            </div>

            {/* Radar Coordinates Coordinates mapping */}
            {skillDatabase.map((skill, index) => {
              const rad = (skill.angle * Math.PI) / 180;
              const r = 120 + Math.sin(index) * 20; // radial offset
              const x = Math.cos(rad) * r;
              const y = Math.sin(rad) * r;
              
              const isSelected = activeSkill?.name === skill.name;

              return (
                <div
                  key={index}
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                  onMouseEnter={() => handleHover(skill)}
                  onMouseLeave={handleLeave}
                  className={`absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    isSelected 
                      ? 'bg-accentCyan text-black border border-white shadow-[0_0_15px_#00f2fe] scale-125 z-20' 
                      : 'bg-black/85 text-accentCyan border border-accentCyan/35 hover:border-accentCyan hover:scale-110'
                  }`}
                  data-cursor="pointer"
                >
                  <skill.icon size={12} />
                  
                  {/* Skill name tooltip label always displayed in tiny font */}
                  <span className={`absolute top-9 font-mono text-[7px] tracking-wider uppercase whitespace-nowrap bg-black/60 px-1 py-0.5 rounded border border-white/5 ${
                    isSelected ? 'text-accentCyan font-bold' : 'text-gray-500'
                  }`}>
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: AI Diagnostics Skill Readout Panels */}
        <div className="lg:col-span-6 flex flex-col space-y-4">
          
          {/* If hovered on a skill, show its diagnostic readout, else show default instruction panel */}
          {activeSkill ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#02000a]/75 border border-accentCyan/30 rounded-2xl p-6 shadow-2xl relative text-left min-h-[170px]"
            >
              <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-accentCyan" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-accentCyan" />
              
              <div className="flex justify-between items-center border-b border-accentCyan/10 pb-3 mb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="p-1.5 rounded-lg bg-accentCyan/5 border border-accentCyan/30 text-accentCyan">
                    <activeSkill.icon size={14} />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs font-black text-white uppercase">{activeSkill.name}</h3>
                    <span className="font-mono text-[8px] text-accentCyan/60 tracking-wider">CATEGORY: {activeSkill.category}</span>
                  </div>
                </div>
                <div className="font-mono text-sm font-black text-accentCyan glow-text-cyan">
                  {activeSkill.level}%
                </div>
              </div>

              <p className="font-mono text-[10.5px] leading-relaxed text-gray-300">
                &gt; {activeSkill.desc}
              </p>
              
              <div className="mt-4 flex justify-between items-center text-[7.5px] font-mono text-accentCyan/40 tracking-wider">
                <span>SECTOR_ADDR: 0x{activeSkill.angle * 8}F32</span>
                <span className="animate-pulse">DIAGNOSTIC_COMPATIBLE_100%</span>
              </div>
            </motion.div>
          ) : (
            <div className="bg-[#02000a]/55 border border-accentCyan/15 rounded-2xl p-6 shadow-2xl relative text-left min-h-[170px] flex flex-col justify-center items-center text-center">
              <Compass className="text-accentCyan/30 animate-spin-slow mb-3" size={24} style={{ animationDuration: '8s' }} />
              <p className="font-mono text-[10px] text-accentCyan/50 uppercase tracking-widest max-w-xs">
                Hover over the radar vectors to initialize diagnostic subsystem scanner readouts
              </p>
            </div>
          )}

          {/* Simple telemetry bar indicator row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
            {skillDatabase.slice(0, 8).map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => handleHover(skill)}
                className="bg-black/35 hover:bg-accentCyan/5 border border-white/5 hover:border-accentCyan/30 rounded-xl p-2.5 transition-all text-left font-mono"
                data-cursor="pointer"
              >
                <div className="text-[8px] text-gray-500 truncate">{skill.name}</div>
                <div className="flex items-center justify-between mt-1">
                  <div className="h-0.5 w-[70%] bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div className="h-full bg-accentCyan" style={{ width: `${skill.level}%` }} />
                  </div>
                  <span className="text-[7.5px] text-accentCyan font-bold">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
