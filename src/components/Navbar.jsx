import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Volume2, VolumeX, Sun, Moon } from 'lucide-react';
import { soundEngine } from '../utils/audio';

const Navbar = ({ activeSection, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [sysTime, setSysTime] = useState('');

  // Telemetry time update
  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const pad = (num) => String(num).padStart(2, '0');
      setSysTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    soundEngine.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const handleSoundToggle = () => {
    const nextMuted = soundEngine.toggleMute();
    setIsMuted(nextMuted);
  };

  const handleButtonHover = () => {
    soundEngine.playBleep(1400, 0.05);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-5 ${
          scrolled ? 'bg-[#02000a]/90 backdrop-blur-md border-b border-accentCyan/10 py-4 shadow-[0_4px_30px_rgba(0,242,254,0.03)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand: Holographic A */}
          <div
            onClick={() => handleNavClick('hero')}
            onMouseEnter={handleButtonHover}
            className="flex items-center justify-center cursor-pointer select-none bg-accentCyan/5 border border-accentCyan/20 hover:border-accentCyan/60 w-10 h-10 rounded-xl font-mono font-black text-xl italic text-accentCyan transition-all hover:scale-105 shadow-[0_0_15px_rgba(0,242,254,0.05)]"
            data-cursor="pointer"
          >
            A
          </div>

          {/* Telemetry Stream / Diagnostics */}
          <div className="hidden lg:flex items-center space-x-6 text-[10px] font-mono text-accentCyan/40 tracking-wider">
            <div>SYS_LOC: <span className="text-white/70">5174/LOCAL</span></div>
            <div>SYS_TIME: <span className="text-accentCyan font-bold">{sysTime || '--:--:--'}</span></div>
            <div>STATUS: <span className="text-green-400 font-bold uppercase tracking-widest animate-pulse">ONLINE</span></div>
          </div>

          {/* Center Navigation Capsule */}
          <nav className="hidden md:flex items-center space-x-6 px-6 py-2 rounded-full bg-black/40 border border-accentCyan/20 backdrop-blur-md">
            <button
              onClick={() => handleNavClick('hero')}
              onMouseEnter={handleButtonHover}
              className={`text-xs font-mono font-bold transition-colors tracking-widest ${
                activeSection === 'hero' ? 'text-accentCyan' : 'text-white/60 hover:text-white'
              }`}
              data-cursor="pointer"
            >
              HOME
            </button>
            <div className="w-[1px] h-3 bg-accentCyan/25" />
            <div className="relative group">
              <button
                onMouseEnter={handleButtonHover}
                className="flex items-center space-x-1.5 text-xs font-mono font-bold text-white/60 hover:text-white transition-colors tracking-widest cursor-pointer"
                data-cursor="pointer"
              >
                <span>SYS_PROFILE</span>
                <ChevronDown size={12} className="text-accentCyan/50 group-hover:text-white transition-transform group-hover:rotate-180 duration-200" />
              </button>
              
              {/* Dropdown Items */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-48 bg-[#02000a]/95 border border-accentCyan/20 rounded-2xl p-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col space-y-1 z-50 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,242,254,0.08)]">
                <div className="absolute inset-0 grid-bg-overlay opacity-5 pointer-events-none rounded-2xl" />
                <button
                  onClick={() => handleNavClick('about')}
                  onMouseEnter={handleButtonHover}
                  className="w-full text-left font-mono text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-accentCyan hover:bg-accentCyan/5 px-3 py-2.5 rounded-xl transition-all"
                  data-cursor="pointer"
                >
                  &gt; ABOUT_ME
                </button>
                <button
                  onClick={() => handleNavClick('skills')}
                  onMouseEnter={handleButtonHover}
                  className="w-full text-left font-mono text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-accentCyan hover:bg-accentCyan/5 px-3 py-2.5 rounded-xl transition-all"
                  data-cursor="pointer"
                >
                  &gt; SKILLS_RADAR
                </button>
                <button
                  onClick={() => handleNavClick('projects')}
                  onMouseEnter={handleButtonHover}
                  className="w-full text-left font-mono text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-accentCyan hover:bg-accentCyan/5 px-3 py-2.5 rounded-xl transition-all"
                  data-cursor="pointer"
                >
                  &gt; PROJECTS_DB
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  onMouseEnter={handleButtonHover}
                  className="w-full text-left font-mono text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-accentCyan hover:bg-accentCyan/5 px-3 py-2.5 rounded-xl transition-all"
                  data-cursor="pointer"
                >
                  &gt; TERMINAL_SEC
                </button>
              </div>
            </div>
          </nav>

          {/* Right Navigation Controls: Sound & Theme & Utilities */}
          <div className="flex items-center space-x-3">
            {/* Sound Toggle Button */}
            <button
              onClick={handleSoundToggle}
              onMouseEnter={handleButtonHover}
              className={`w-10 h-10 rounded-xl flex items-center justify-center bg-black/40 border transition-all hover:scale-105 ${
                isMuted 
                  ? 'border-accentCyan/20 text-gray-400 hover:text-white hover:border-accentCyan/40' 
                  : 'border-accentCyan text-accentCyan hover:bg-accentCyan/5 shadow-[0_0_12px_rgba(0,242,254,0.15)]'
              }`}
              title={isMuted ? 'Unmute JARVIS Sounds' : 'Mute JARVIS Sounds'}
              data-cursor="pointer"
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => { soundEngine.playClick(); toggleTheme(); }}
              onMouseEnter={handleButtonHover}
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/40 border border-accentCyan/20 text-gray-400 hover:text-accentCyan hover:border-accentCyan/40 transition-all hover:scale-105"
              title="Toggle Telemetry Style"
              data-cursor="pointer"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* Search HUD */}
            <button
              onClick={() => { soundEngine.playClick(); alert("Initialising query engine..."); }}
              onMouseEnter={handleButtonHover}
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/40 border border-accentCyan/20 text-gray-400 hover:text-accentCyan hover:border-accentCyan/40 transition-all hover:scale-105"
              data-cursor="pointer"
              title="Search Database"
            >
              <Search size={15} />
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => { soundEngine.playClick(); setMobileMenuOpen(!mobileMenuOpen); }}
              onMouseEnter={handleButtonHover}
              className="w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-[5px] bg-black/40 border border-accentCyan/20 text-gray-400 hover:text-accentCyan hover:border-accentCyan/40 transition-all hover:scale-105"
              data-cursor="pointer"
              title="HUD Control Panel"
            >
              <div className="w-4.5 h-0.5 bg-current rounded-full" />
              <div className="w-3 h-0.5 bg-current rounded-full" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden bg-[#02000a]/95 border border-accentCyan/20 rounded-2xl p-6 shadow-2xl backdrop-blur-lg"
          >
            <div className="absolute inset-0 grid-bg-overlay opacity-5 pointer-events-none rounded-2xl" />
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('hero')}
                className="text-left font-mono text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-accentCyan"
              >
                &gt; HOME
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-left font-mono text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-accentCyan"
              >
                &gt; ABOUT_ME
              </button>
              <button
                onClick={() => handleNavClick('skills')}
                className="text-left font-mono text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-accentCyan"
              >
                &gt; SKILLS_RADAR
              </button>
              <button
                onClick={() => handleNavClick('projects')}
                className="text-left font-mono text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-accentCyan"
              >
                &gt; PROJECTS_DB
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-left font-mono text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-accentCyan"
              >
                &gt; TERMINAL_SEC
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
