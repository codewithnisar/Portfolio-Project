import React, { useState } from 'react';
import { Globe, Terminal, ArrowUpRight, Cpu } from 'lucide-react';
import { soundEngine } from '../utils/audio';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projectsData = [
    {
      id: '001',
      title: 'Sufia Noorbakhshia',
      category: 'WEB PROTOCOL',
      desc: 'A comprehensive digital platform dedicated to Sufi traditions, featuring dynamic content management and cultural documentation tools.',
      stack: ['React', 'Tailwind CSS', 'Vite', 'REST API'],
      challenges: 'Optimizing high-fidelity rendering vectors and deep directory search queries across remote nodes.',
      liveLink: '#visit',
      gitLink: '#github'
    },
    {
      id: '002',
      title: 'LintPath Checker',
      category: 'DEV TOOLCHAIN',
      desc: 'High-performance CLI schema analyzer designed for validator check-checks on remote configurations.',
      stack: ['Node.js', 'Commander', 'Chalk', 'ESTree'],
      challenges: 'Constructing recursive syntax tree traversals and formatting error telemetry streams without delay latency.',
      liveLink: '#visit',
      gitLink: '#github'
    },
    {
      id: '003',
      title: 'Dawat-e-Sufa App',
      category: 'COMMUNITY VECTOR',
      desc: 'A responsive web dashboard coordinating local resources and logistics telemetry streams efficiently.',
      stack: ['React', 'Redux Toolkit', 'Firebase DB', 'Maps API'],
      challenges: 'Establishing real-time synchronization loops and mapping complex node arrays on dynamic mapping interfaces.',
      liveLink: '#visit',
      gitLink: '#github'
    },
    {
      id: '004',
      title: 'Northern GIS Map',
      category: 'GEOSPATIAL GRID',
      desc: 'Interactive GIS coordinates mapper for Northern tourism loops, mapping paths across custom terrain layouts.',
      stack: ['JavaScript', 'Leaflet.js', 'GeoJSON', 'CSS Grid'],
      challenges: 'Rendering complex SVG path networks and caching topographic height profiles for offline operational models.',
      liveLink: '#visit',
      gitLink: '#github'
    }
  ];

  const handleHover = (id) => {
    soundEngine.playBleep(1400, 0.05);
    setActiveProject(id);
  };

  const handleLeave = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto text-left relative overflow-hidden">
      
      {/* Background visual watermarks */}
      <div className="absolute right-10 top-10 text-[14rem] md:text-[20rem] font-mono select-none pointer-events-none z-0 text-accentCyan/[0.01] tracking-widest font-black uppercase">
        SECURE_DB
      </div>

      <div className="max-w-3xl text-left mb-16 space-y-2 relative z-10">
        <h2 className="font-mono text-3xl md:text-4xl font-extrabold tracking-widest text-white">
          &gt; PROJECT_INTELLIGENCE_DATABASE
        </h2>
        <div className="w-24 h-[2px] bg-accentCyan shadow-[0_0_10px_#00f2fe]" />
      </div>

      {/* Grid of dossier cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {projectsData.map((project) => {
          const isSelected = activeProject === project.id;
          return (
            <div
              key={project.id}
              onMouseEnter={() => handleHover(project.id)}
              onMouseLeave={handleLeave}
              className={`bg-[#02000a]/75 border rounded-2xl p-6 shadow-2xl relative overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[340px] group ${
                isSelected 
                  ? 'border-accentCyan shadow-[0_0_25px_rgba(0,242,254,0.08)] -translate-y-1' 
                  : 'border-accentCyan/15'
              }`}
            >
              {/* Corner brackets */}
              <div className={`absolute top-0 left-0 w-3.5 h-3.5 border-t border-l transition-colors duration-300 ${isSelected ? 'border-accentCyan' : 'border-accentCyan/30'}`} />
              <div className={`absolute top-0 right-0 w-3.5 h-3.5 border-t border-r transition-colors duration-300 ${isSelected ? 'border-accentCyan' : 'border-accentCyan/30'}`} />
              
              {/* Scanning sweep bar */}
              {isSelected && (
                <div className="absolute left-0 right-0 h-[1.5px] bg-accentCyan shadow-[0_0_8px_#00f2fe] z-20 pointer-events-none animate-[scanline-sweep_2s_ease-in-out_infinite]" />
              )}

              {/* Dossier Header */}
              <div className="space-y-3.5">
                <div className="flex justify-between items-center border-b border-accentCyan/10 pb-2.5 font-mono text-[8px] text-accentCyan/60 tracking-wider">
                  <span className="font-bold flex items-center space-x-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-accentCyan animate-ping' : 'bg-accentCyan/40'}`} />
                    <span>PROJECT FILE #{project.id}</span>
                  </span>
                  <span>{project.category}</span>
                </div>

                <h3 className="font-mono text-xl font-black text-white tracking-widest uppercase">
                  {project.title}
                </h3>

                <p className="font-mono text-[10.5px] leading-relaxed text-gray-400">
                  {project.desc}
                </p>

                {/* Challenge logs */}
                <div className="bg-black/45 border border-white/5 rounded-xl p-3.5 font-mono text-[9px] text-left text-gray-400 space-y-1.5">
                  <div className="text-accentViolet font-bold flex items-center space-x-1">
                    <Terminal size={10} />
                    <span>&gt;_ CHALLENGE_BRIEFING:</span>
                  </div>
                  <p className="leading-relaxed text-gray-400">{project.challenges}</p>
                </div>
              </div>

              {/* Stack and Action Links */}
              <div className="mt-5 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[8px] font-mono border border-accentCyan/10 bg-accentCyan/5 text-accentCyan/80 tracking-wide uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3 pt-3 border-t border-accentCyan/10">
                  <a
                    href={project.liveLink}
                    onClick={() => soundEngine.playClick()}
                    className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-accentCyan/5 hover:bg-accentCyan hover:text-black border border-accentCyan/30 text-xs font-mono font-bold text-accentCyan hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all"
                    data-cursor="pointer"
                  >
                    <span>LAUNCH_LIVE</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href={project.gitLink}
                    onClick={() => soundEngine.playClick()}
                    className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-black/40 hover:bg-white/5 border border-accentCyan/15 text-xs font-mono font-bold text-gray-400 hover:text-white transition-all"
                    data-cursor="pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>REPO_DB</span>
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Projects;
