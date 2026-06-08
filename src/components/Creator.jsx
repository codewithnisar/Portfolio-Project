import React from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, Users, Film } from 'lucide-react';
import { soundEngine } from '../utils/audio';

const YoutubeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
  </svg>
);

const Creator = () => {
  const handleHover = () => {
    soundEngine.playBleep(1400, 0.04);
  };

  const channelStats = [
    { name: 'SUBSCRIBERS', value: '45,400+', icon: Users, change: '+12.4% THIS MONTH' },
    { name: 'VIDEOS_SHIPPED', value: '150+', icon: Film, change: '100% TRANSMITTED' },
    { name: 'MONTHLY_VIEWS', value: '380K+', icon: TrendingUp, change: 'STABLE STREAM' }
  ];

  const contentCards = [
    { title: 'FEATURED TUTORIALS', desc: 'Deep dive courses explaining production-ready React configurations, state management, and modern CSS layout models.', addr: 'SYS_C_001' },
    { title: 'EDUCATIONAL VIDEOS', desc: 'Concepts like UI design, APIs, performance optimizations, and backend architecture vectors broken down in Urdu.', addr: 'SYS_C_002' },
    { title: 'CODING SHORTS', desc: 'Bite-sized visual snippets showing quick tips, shortcut commands, and modern web development hacks.', addr: 'SYS_C_003' }
  ];

  return (
    <section id="creator" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto text-left relative overflow-hidden">
      
      {/* Background visual watermarks */}
      <div className="absolute left-10 bottom-10 text-[14rem] md:text-[20rem] font-mono select-none pointer-events-none z-0 text-accentCyan/[0.01] tracking-widest font-black uppercase">
        NETWORK_02
      </div>

      <div className="max-w-3xl text-left mb-16 space-y-2 relative z-10">
        <h2 className="font-mono text-3xl md:text-4xl font-extrabold tracking-widest text-white">
          &gt; CONTENT_CREATION_NETWORK
        </h2>
        <div className="w-24 h-[2px] bg-accentCyan shadow-[0_0_10px_#00f2fe]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Left Column: Creator Identity & Growth charts (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="bg-[#02000a]/75 border border-accentCyan/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md flex-1 flex flex-col justify-between">
            <div className="absolute inset-0 grid-bg-overlay opacity-5 pointer-events-none" />

            <div className="space-y-6">
              {/* Header Channel logo */}
              <div className="flex items-center space-x-3.5 border-b border-accentCyan/10 pb-4">
                <div className="w-10 h-10 rounded-full bg-red-600/10 border border-red-500/40 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.15)] animate-pulse">
                  <YoutubeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-black text-white tracking-widest uppercase">Code With Nisar</h3>
                  <span className="font-mono text-[8.5px] text-accentCyan/50 tracking-wider">STATUS: BROADCASTING_URDU_TECH</span>
                </div>
              </div>

              {/* Description statement */}
              <p className="font-mono text-[10.5px] text-gray-400 leading-relaxed tracking-wider border-l border-accentCyan/30 pl-4 py-1">
                I believe that language should never be a barrier for code, and we built a community of <span className="text-accentCyan font-bold">45k+ subscribers</span> who launch high-end web developments in Urdu.
              </p>

              {/* Stat indicators grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                {channelStats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="bg-black/35 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                      <div className="flex justify-between items-center text-accentCyan/55 mb-2">
                        <span className="text-[7.5px] tracking-widest">{stat.name}</span>
                        <Icon size={12} />
                      </div>
                      <div>
                        <div className="text-base font-black text-white">{stat.value}</div>
                        <div className="text-[6.5px] text-accentViolet font-bold mt-1 tracking-wider">{stat.change}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Growth telemetry graph */}
            <div className="mt-8 bg-black/45 border border-accentCyan/15 rounded-2xl p-4 font-mono space-y-3 relative">
              <div className="flex justify-between items-center text-[7px] text-accentCyan/65 tracking-widest border-b border-accentCyan/5 pb-2">
                <span>SUBSCRIBER_GROWTH_CURVE</span>
                <span className="flex items-center space-x-1">
                  <Activity size={8} className="animate-pulse" />
                  <span>LIVE_FEED</span>
                </span>
              </div>
              
              {/* Neon line chart */}
              <svg viewBox="0 0 100 25" className="w-full h-14 text-accentCyan/50 select-none">
                <path d="M0,23 Q15,21 30,14 T60,11 T90,4 L100,2" fill="none" stroke="#00f2fe" strokeWidth="0.8" />
                <path d="M0,23 Q15,21 30,14 T60,11 T90,4 L100,2 L100,25 L0,25 Z" fill="url(#neonGrad)" opacity="0.05" />
                
                <circle cx="30" cy="14" r="1" fill="#00f2fe" />
                <circle cx="60" cy="11" r="1" fill="#00f2fe" />
                <circle cx="90" cy="4" r="1" fill="#00f2fe" />

                <defs>
                  <linearGradient id="neonGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00f2fe" />
                    <stop offset="100%" stopColor="#00f2fe" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="pt-2 flex justify-between text-[6.5px] text-gray-500 tracking-wider">
                <span>Q1_2025</span>
                <span>Q2_2025</span>
                <span>Q3_2025</span>
                <span>Q4_2025</span>
              </div>
            </div>

            {/* Subscribe Action Button */}
            <div className="pt-6 text-left border-t border-accentCyan/10 mt-6">
              <a
                href="https://youtube.com/c/CodeWithNisar"
                target="_blank"
                rel="noreferrer"
                onClick={() => soundEngine.playClick()}
                onMouseEnter={handleHover}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl border border-red-600/35 hover:border-red-500 bg-red-500/5 hover:bg-red-500/10 text-xs font-mono font-bold uppercase tracking-widest text-red-500 hover:text-white transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                data-cursor="pointer"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
                <span>SUBSCRIBE_BROADCAST_DB</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Category cards (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {contentCards.map((card, idx) => (
            <div
              key={idx}
              onMouseEnter={handleHover}
              className="bg-[#02000a]/65 border border-accentCyan/15 hover:border-accentCyan/35 rounded-2xl p-5 shadow-xl relative overflow-hidden transition-all duration-300 backdrop-blur-md text-left flex flex-col justify-between min-h-[120px] group hover:scale-102"
            >
              {/* Telemetry markers */}
              <div className="absolute top-2 right-2 font-mono text-[7px] text-accentCyan/30 group-hover:text-accentCyan/75 transition-colors">{card.addr}</div>
              
              <div className="space-y-2">
                <h4 className="font-mono text-[10px] font-black tracking-widest text-white uppercase flex items-center space-x-2">
                  <span className="w-1 h-3 bg-accentCyan rounded-full group-hover:shadow-[0_0_8px_#00f2fe] transition-all" />
                  <span>{card.title}</span>
                </h4>
                <p className="font-mono text-[9px] text-gray-400 leading-normal">
                  {card.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-accentCyan/5 mt-3 text-[7.5px] font-mono text-accentCyan/30 group-hover:text-accentCyan/55">
                // SYSTEM_STREAM_ONLINE
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Creator;
