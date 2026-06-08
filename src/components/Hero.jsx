import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import userPic from '../assets/user_pic.jpg';
import { soundEngine } from '../utils/audio';

const Hero = () => {
  const [creativity, setCreativity] = useState(98);
  const [problemSolving, setProblemSolving] = useState(97);
  const [uiDesign, setUiDesign] = useState(96);
  const [reactDev, setReactDev] = useState(95);

  // Fluctuating AI telemetry values to simulate real-time diagnostics
  useEffect(() => {
    const interval = setInterval(() => {
      setCreativity((prev) => Math.min(100, Math.max(95, prev + (Math.random() > 0.5 ? 0.2 : -0.2))));
      setProblemSolving((prev) => Math.min(100, Math.max(94, prev + (Math.random() > 0.5 ? 0.15 : -0.15))));
      setUiDesign((prev) => Math.min(100, Math.max(93, prev + (Math.random() > 0.5 ? 0.25 : -0.25))));
      setReactDev((prev) => Math.min(100, Math.max(92, prev + (Math.random() > 0.5 ? 0.1 : -0.1))));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    soundEngine.playClick();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: pos - offset, behavior: 'smooth' });
    }
  };

  const handleHover = () => {
    soundEngine.playBleep(1400, 0.05);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 px-6 md:px-12 lg:px-16"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 dots-bg-overlay opacity-15 pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Command & Core Identifiers */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4 flex flex-col justify-center items-start text-left space-y-6 order-2 lg:order-1"
        >
          <div className="border border-accentCyan/20 bg-accentCyan/5 rounded px-3 py-1.5 font-mono text-[9px] text-accentCyan uppercase tracking-widest flex items-center space-x-1.5 shadow-[0_0_15px_rgba(0,242,254,0.04)]">
            <span className="w-1.5 h-1.5 rounded-full bg-accentCyan animate-ping" />
            <span>OPERATING SYSTEM ACTIVE</span>
          </div>

          <div className="space-y-2">
            <h1 className="font-mono text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-widest leading-none">
              ALEE
            </h1>
            <h2 className="font-mono text-xs md:text-sm font-bold tracking-widest text-accentCyan uppercase">
              FRONTEND DEVELOPER // AI-ENHANCED CREATIVE ENGINEER
            </h2>
          </div>

          <p className="font-mono text-[11px] sm:text-xs text-gray-400 max-w-sm leading-relaxed tracking-wider border-l-2 border-accentCyan/40 pl-4 py-1">
            Designing intelligent interfaces and futuristic web experiences. System databases online. Connection protocols stable.
          </p>

          {/* Holographic OS Call-To-Actions */}
          <div className="flex flex-col space-y-3 w-full sm:w-64 pt-2 font-mono">
            <button
              onClick={() => scrollToSection('projects')}
              onMouseEnter={handleHover}
              className="w-full text-left px-5 py-3 rounded-xl border border-accentCyan/25 hover:border-accentCyan bg-accentCyan/5 hover:bg-accentCyan/10 text-accentCyan hover:text-white text-[10px] font-bold tracking-widest transition-all hover:scale-103 active:scale-97 hover:shadow-[0_0_15px_rgba(0,242,254,0.15)] flex justify-between items-center"
              data-cursor="pointer"
            >
              <span>[01] ACCESS PROJECTS</span>
              <span className="text-[8px] opacity-65">&gt;&gt;</span>
            </button>

            <button
              onClick={() => scrollToSection('about')}
              onMouseEnter={handleHover}
              className="w-full text-left px-5 py-3 rounded-xl border border-accentCyan/25 hover:border-accentCyan bg-black/40 hover:bg-accentCyan/5 text-gray-300 hover:text-white text-[10px] font-bold tracking-widest transition-all hover:scale-103 active:scale-97 flex justify-between items-center"
              data-cursor="pointer"
            >
              <span>[02] SYSTEM PROFILE</span>
              <span className="text-[8px] opacity-65">&gt;&gt;</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={handleHover}
              className="w-full text-left px-5 py-3 rounded-xl border border-accentCyan/25 hover:border-accentCyan bg-black/40 hover:bg-accentCyan/5 text-gray-300 hover:text-white text-[10px] font-bold tracking-widest transition-all hover:scale-103 active:scale-97 flex justify-between items-center"
              data-cursor="pointer"
            >
              <span>[03] CONTACT TERMINAL</span>
              <span className="text-[8px] opacity-65">&gt;&gt;</span>
            </button>
          </div>
        </motion.div>

        {/* Center Column: JARVIS Diagnostic Circular HUD Ring & Portrait */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[460px] md:min-h-[550px] order-1 lg:order-2">
          {/* Animated Circular HUD Rings behind/around the portrait */}
          <div className="absolute w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-accentCyan/15 animate-spin-slow pointer-events-none" />
          <div className="absolute w-[290px] h-[290px] md:w-[350px] md:h-[350px] rounded-full border border-double border-accentViolet/10 animate-spin pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '8s' }} />
          <div className="absolute w-[260px] h-[260px] md:w-[310px] md:h-[310px] rounded-full border border-accentCyan/10 pointer-events-none" />
          
          {/* Diagnostic Compass ring */}
          <svg className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] text-accentCyan/10 animate-spin-slow pointer-events-none" viewBox="0 0 100 100" style={{ animationDuration: '24s' }}>
            <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="1.5 5" />
            <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.3" fill="none" strokeDasharray="8 4" />
          </svg>

          {/* Photo frame with AI scanner lasers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-[240px] md:w-[290px] h-[240px] md:h-[290px] rounded-full overflow-hidden border-2 border-accentCyan/35 bg-black/45 shadow-[0_0_40px_rgba(0,242,254,0.15)] z-10 flex items-center justify-center group"
          >
            {/* Holographic status overlays on photo */}
            <div className="absolute top-6 left-6 font-mono text-[7px] text-accentCyan/60 leading-none space-y-1 z-20 select-none opacity-80 pointer-events-none">
              <div>REC: ALEE_N</div>
              <div>LOC: GB_PK</div>
            </div>
            
            <div className="absolute top-6 right-6 font-mono text-[7px] text-accentCyan/60 leading-none space-y-1 z-20 text-right select-none opacity-80 pointer-events-none">
              <div>RESOLUTION: 1080P</div>
              <div>BITRATE: 8.4MBPS</div>
            </div>

            {/* Laser scanning line sweeping up and down */}
            <div className="absolute left-0 right-0 h-[2px] bg-accentCyan shadow-[0_0_12px_#00f2fe,0_0_20px_#00f2fe] z-20 pointer-events-none animate-[scanline-sweep_3.5s_ease-in-out_infinite]" />

            {/* User photo */}
            <img
              src={userPic}
              alt="Alee Portrait"
              className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-700"
            />
            {/* Blends bottom of the photo into the background */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#020008]/80 via-[#020008]/30 to-transparent pointer-events-none z-20" />
          </motion.div>

          {/* Floating diagnostic details under image */}
          <div className="absolute bottom-6 font-mono text-[7px] tracking-widest text-accentCyan/55 z-20 bg-black/60 px-3 py-1 rounded border border-accentCyan/10 backdrop-blur-md">
            SCANNER_DIAGNOSTICS: STABLE
          </div>
        </div>

        {/* Right Column: Floating JARVIS AI Assistant Panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 flex flex-col justify-center order-3"
        >
          {/* JARVIS Assistant Widget */}
          <div className="bg-[#02000a]/75 border border-accentCyan/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-md w-full max-w-sm mx-auto">
            {/* Internal diagnostic corner highlights */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-accentCyan/50" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-accentCyan/50" />
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-accentCyan/50" />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-accentCyan/50" />
            <div className="absolute inset-0 grid-bg-overlay opacity-[0.03] pointer-events-none" />

            <div className="flex justify-between items-center border-b border-accentCyan/10 pb-3 mb-4 font-mono text-[9px] text-accentCyan/65 tracking-wider">
              <span className="font-bold flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accentCyan animate-pulse" />
                <span>AI_ASSISTANT_STATUS</span>
              </span>
              <span>J_VER_4.9</span>
            </div>

            <h3 className="font-mono text-left text-xs font-black text-white tracking-widest uppercase mb-4">
              SYSTEM STATUS
            </h3>

            {/* Status Telemetry Stats */}
            <div className="space-y-4 font-mono text-[10px] text-left">
              
              {/* Developer Online */}
              <div className="space-y-1">
                <div className="flex justify-between text-gray-400">
                  <span>&gt; DEVELOPER</span>
                  <span className="text-green-400 font-bold tracking-widest animate-pulse">ONLINE</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-green-400 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>

              {/* Creativity */}
              <div className="space-y-1">
                <div className="flex justify-between text-gray-400">
                  <span>&gt; CREATIVITY</span>
                  <span className="text-accentCyan font-black">{creativity.toFixed(1)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-accentCyan rounded-full transition-all duration-300" style={{ width: `${creativity}%` }} />
                </div>
              </div>

              {/* Problem Solving */}
              <div className="space-y-1">
                <div className="flex justify-between text-gray-400">
                  <span>&gt; PROBLEM_SOLVING</span>
                  <span className="text-accentCyan font-black">{problemSolving.toFixed(1)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-accentCyan rounded-full transition-all duration-300" style={{ width: `${problemSolving}%` }} />
                </div>
              </div>

              {/* UI Design */}
              <div className="space-y-1">
                <div className="flex justify-between text-gray-400">
                  <span>&gt; UI_UX_DESIGN</span>
                  <span className="text-accentCyan font-black">{uiDesign.toFixed(1)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-accentCyan rounded-full transition-all duration-300" style={{ width: `${uiDesign}%` }} />
                </div>
              </div>

              {/* React Development */}
              <div className="space-y-1">
                <div className="flex justify-between text-gray-400">
                  <span>&gt; REACT_ENGINE</span>
                  <span className="text-accentCyan font-black">{reactDev.toFixed(1)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-accentCyan rounded-full transition-all duration-300" style={{ width: `${reactDev}%` }} />
                </div>
              </div>

            </div>

            <div className="mt-5 border-t border-accentCyan/10 pt-3 text-left font-mono text-[8px] text-accentCyan/40 tracking-wider">
              AUTO_DIAGNOSTICS_REFRESH: ACTIVE
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
