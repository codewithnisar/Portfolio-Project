import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEngine } from '../utils/audio';

const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [isDone, setIsDone] = useState(false);

  const bootLogs = [
    { text: 'INITIALIZING J.A.R.V.I.S...', delay: 100 },
    { text: 'Loading Core Modules...', delay: 500 },
    { text: 'Connecting Neural Systems...', delay: 1000 },
    { text: 'Loading Developer Database...', delay: 1500 },
    { text: 'Loading Projects...', delay: 2000 },
    { text: 'System Online.', delay: 2400 },
    { text: 'Welcome Alee.', delay: 2700 },
  ];

  useEffect(() => {
    // Play a small beep for each log that appears
    bootLogs.forEach((log) => {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, log.text]);
        // Only play sound if context is allowed, we don't mute playBleep if user hasn't interacted,
        // but since browser blocks it, it will just fail silently or work if they click early.
        if (log.text.includes('Welcome')) {
          soundEngine.playBoot();
        } else {
          soundEngine.playBleep(1200 + prevLogsCount() * 150, 0.08);
        }
      }, log.delay);
      return () => clearTimeout(timer);
    });

    // Simple helper to calculate pitch shift
    function prevLogsCount() {
      let count = 0;
      setLogs(l => { count = l.length; return l; });
      return count;
    }

    // Progress counter simulation synced with delay
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              onFinished();
            }, 600);
          }, 600);
          return 100;
        }
        const step = Math.floor(Math.random() * 5) + 3;
        return Math.min(100, prev + step);
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 0.95,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 bg-[#02000a] z-[99999] flex flex-col justify-between p-8 font-mono text-[11px] sm:text-xs select-none overflow-hidden"
        >
          {/* Cyber grid overlay */}
          <div className="absolute inset-0 grid-bg-overlay opacity-15 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-accentCyan/20 animate-pulse" />

          {/* Top Header HUD */}
          <div className="flex justify-between items-center text-accentCyan/50 border-b border-accentCyan/10 pb-4 relative z-10">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accentCyan animate-ping" />
              <span className="tracking-widest">J.A.R.V.I.S. SECURE BOOT v3.12</span>
            </div>
            <div className="hidden sm:block tracking-wider">SECURE CONNECTION // PROTOCOL: TR-80</div>
            <div className="tracking-widest text-right">MAIN_CORE: ACTIVE</div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 my-8 max-w-lg mx-auto w-full flex flex-col justify-center space-y-6 relative z-10">
            {/* Cyber Ring Visual */}
            <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-accentCyan/30 animate-spin-slow" />
              <div className="absolute inset-3 rounded-full border border-double border-accentViolet/25 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '6s' }} />
              <div className="absolute inset-6 rounded-full border border-accentCyan/15" />
              <div className="font-display text-2xl font-black text-white tracking-widest glow-text-cyan">
                {progress}%
              </div>
            </div>

            {/* Console Log Outputs */}
            <div className="min-h-[160px] bg-black/45 border border-white/5 rounded-2xl p-5 font-mono text-left space-y-2 max-w-md mx-auto w-full shadow-2xl backdrop-blur-md">
              {logs.map((log, index) => {
                const isSystemMessage = log.startsWith('Welcome') || log.startsWith('System Online');
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center ${isSystemMessage ? 'text-accentCyan font-bold glow-text-cyan' : 'text-gray-400'}`}
                  >
                    <span className="text-accentCyan/80 mr-2">&gt;&gt;</span>
                    <span>{log}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Footer HUD */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-accentCyan/40 border-t border-accentCyan/10 pt-4 text-[10px] relative z-10">
            <div className="tracking-widest">ALEE // MULTI-THREADED DEVELOPER ARCHITECTURE</div>
            <div className="mt-2 sm:mt-0 uppercase tracking-widest animate-pulse">
              System initialization - standby
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
