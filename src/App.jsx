import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Star } from 'lucide-react';

// Core layout components
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import InteractiveBackground from './components/InteractiveBackground';
import Navbar from './components/Navbar';

// Sections
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Lab from './components/Lab';
import Creator from './components/Creator';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize theme class lists
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  // Track scroll details: progress ratio and scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll tracking active navigation index
  useEffect(() => {
    if (loading) return;

    const sections = ['hero', 'about', 'skills', 'projects', 'lab', 'creator', 'contact'];
    const observers = [];

    sections.forEach((secId) => {
      const el = document.getElementById(secId);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(secId);
            }
          },
          {
            rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies core area
            threshold: 0,
          }
        );
        observer.observe(el);
        observers.push({ observer, el });
      }
    });

    return () => {
      observers.forEach(({ observer, el }) => observer.unobserve(el));
    };
  }, [loading]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {/* 1. Loading Terminal Sequence */}
      <LoadingScreen onFinished={() => setLoading(false)} />

      {!loading && (
        <div className={`transition-theme min-h-screen text-gray-100 ${theme === 'dark' ? 'bg-darkbg text-gray-100' : 'bg-lightbg text-gray-800 light'}`}>
          {/* Custom Cursor Widget */}
          <CustomCursor />



          {/* Interactive Swarm Backdrop */}
          <InteractiveBackground theme={theme} />

          {/* 2. Scroll Progress Bar Overlay */}
          <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
            <div
              className="scroll-progress h-full bg-gradient-to-r from-accentCyan to-accentViolet"
              style={{ transform: `scaleX(${scrollProgress / 100})` }}
            />
          </div>

          {/* 3. Global Navbar Header */}
          <Navbar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />

          {/* 4. Portfolio Core Content Sections */}
          <main className="relative z-10">
            <Hero />
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 dark:via-white/5 light:via-black/5 to-transparent" />
            </div>
            <About />
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 dark:via-white/5 light:via-black/5 to-transparent" />
            </div>
            <Skills />
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 dark:via-white/5 light:via-black/5 to-transparent" />
            </div>
            <Projects />
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 dark:via-white/5 light:via-black/5 to-transparent" />
            </div>
            <Lab />
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 dark:via-white/5 light:via-black/5 to-transparent" />
            </div>
            <Creator />
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 dark:via-white/5 light:via-black/5 to-transparent" />
            </div>
            <Contact />
          </main>

          {/* 5. Footer Content */}
          <footer className="relative z-10 border-t border-white/5 dark:border-white/5 light:border-black/5 py-12 px-6 bg-black/30 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] sm:text-xs text-gray-500 font-medium">
              
              <div className="flex items-center space-x-2 text-left">
                <span className="font-display font-black text-white tracking-widest text-sm">ALEE</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-500 light:text-gray-400">
                  © {new Date().getFullYear()} Nisar Alee. Crafted in code to own copyrights.
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <a href="#privacy" className="hover:text-accentCyan transition-colors">Privacy</a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-accentCyan transition-colors">Open Source</a>
                <a href="#contact" className="hover:text-accentCyan transition-colors">Contact</a>
              </div>

            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
