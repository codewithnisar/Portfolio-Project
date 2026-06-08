import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Compass, Award, Terminal } from 'lucide-react';
import { soundEngine } from '../utils/audio';

const About = () => {
  const handleHover = () => {
    soundEngine.playBleep(1500, 0.04);
  };

  const databaseEntries = [
    {
      title: 'BIOGRAPHY',
      icon: Database,
      content: 'A software engineer and storyteller based in the rugged mountains of Gilgit-Baltistan. Navigating the intersection of premium frontend engineering and graphic visual interfaces.'
    },
    {
      title: 'EXPERIENCE',
      icon: Cpu,
      content: '5+ years crafting high-performance digital architectures. Specializing in advanced React configurations, micro-animations (Framer Motion, GSAP), and pixel-perfect design systems.'
    },
    {
      title: 'LEARNING_JOURNEY',
      icon: Terminal,
      content: 'Constantly tracking emerging neural technologies, AI integrations, vector graphics, and audio rendering models to construct highly immersive digital workspaces.'
    },
    {
      title: 'MISSION_STATEMENT',
      icon: Compass,
      content: 'To eliminate visual boredom from the web. Building high-tech interfaces that behave like living digital systems, creating visual feelings that users remember.'
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      
      {/* Dynamic scanline element */}
      <div className="absolute right-10 bottom-0 text-[16rem] md:text-[22rem] font-mono select-none pointer-events-none leading-none z-0 text-accentCyan/[0.02] tracking-widest font-black uppercase">
        CORE_DB
      </div>

      <div className="max-w-3xl text-left mb-16 space-y-2 relative z-10">
        <h2 className="font-mono text-3xl md:text-4xl font-extrabold tracking-widest text-white">
          &gt; DEVELOPER_DATABASE
        </h2>
        <div className="w-24 h-[2px] bg-accentCyan shadow-[0_0_10px_#00f2fe]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Left Column: JSON Profile Code Dashboard (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col justify-stretch">
          <div className="bg-[#02000a]/75 border border-accentCyan/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden flex-1 backdrop-blur-md">
            {/* Dots background overlay */}
            <div className="absolute inset-0 dots-bg-overlay opacity-30 z-0 pointer-events-none" />
            
            {/* Editor header HUD lines */}
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-accentCyan/10 relative z-10 font-mono text-[8px] text-accentCyan/60">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
              </div>
              <span>ALEE_PROFILE.json // LOADED</span>
            </div>
            
            {/* IDE Editor with Line Numbers */}
            <div className="flex font-mono text-xs text-left relative z-10 leading-relaxed">
              {/* Line numbers gutter */}
              <div className="text-accentCyan/30 text-right pr-4 select-none border-r border-accentCyan/15 space-y-1.5 font-semibold">
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
                <div>07</div>
                <div>08</div>
              </div>
              
              {/* Code lines */}
              <div className="pl-4 space-y-1.5 flex-1 text-gray-300">
                <div>
                  <span className="text-accentCyan font-bold">const </span>
                  <span className="text-white">developer </span>
                  <span className="text-accentViolet">= </span>
                  <span className="text-white">&#123;</span>
                </div>
                <div className="pl-6">
                  <span className="text-accentCyan/70">name: </span>
                  <span className="text-green-400">"Alee"</span>,
                </div>
                <div className="pl-6">
                  <span className="text-accentCyan/70">roles: </span>
                  <span className="text-white">[</span>
                  <span className="text-green-400">"Frontend"</span>, <span className="text-green-400">"UI_UX"</span>
                  <span className="text-white">]</span>,
                </div>
                <div className="pl-6">
                  <span className="text-accentCyan/70">mission: </span>
                  <span className="text-green-400">"Kill visual boredom"</span>,
                </div>
                <div className="pl-6">
                  <span className="text-accentCyan/70">status: </span>
                  <span className="text-green-400">"Active HUD"</span>,
                </div>
                <div className="pl-6">
                  <span className="text-accentCyan/70">creator: </span>
                  <span className="text-green-400">"Code With Nisar"</span>,
                </div>
                <div className="pl-6">
                  <span className="text-accentCyan/70">system: </span>
                  <span className="text-green-400">"J.A.R.V.I.S"</span>
                </div>
                <div>
                  <span className="text-white">&#125;;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Holographic Database Cards (lg:col-span-7) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {databaseEntries.map((entry, idx) => {
            const Icon = entry.icon;
            return (
              <div
                key={idx}
                onMouseEnter={handleHover}
                className="bg-[#02000a]/65 border border-accentCyan/15 hover:border-accentCyan/40 rounded-2xl p-5 shadow-xl relative overflow-hidden transition-all duration-300 backdrop-blur-md group hover:-translate-y-1"
              >
                {/* Micro tech ticks in corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accentCyan/40" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accentCyan/40" />
                
                <div className="flex items-center space-x-3 mb-3 border-b border-accentCyan/10 pb-2">
                  <div className="p-1.5 rounded-lg bg-accentCyan/5 border border-accentCyan/20 text-accentCyan group-hover:shadow-[0_0_10px_rgba(0,242,254,0.15)] transition-all">
                    <Icon size={14} />
                  </div>
                  <h3 className="font-mono text-[10px] font-black tracking-widest text-white uppercase">
                    {entry.title}
                  </h3>
                </div>

                <p className="font-mono text-[9.5px] leading-relaxed text-gray-400 tracking-wide text-left">
                  {entry.content}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
