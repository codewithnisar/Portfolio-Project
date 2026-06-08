import React from 'react';
import { Home, User, Cpu, FolderGit, Mail, FlaskConical } from 'lucide-react';

const Sidebar = ({ activeSection }) => {
  const sidebarItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Cpu, label: 'Skills' },
    { id: 'projects', icon: FolderGit, label: 'Projects' },
    { id: 'lab', icon: FlaskConical, label: 'Lab' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const pos = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: pos - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-4 px-2 py-5 rounded-2xl glass-panel border border-white/5 shadow-2xl">
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`p-2.5 rounded-xl transition-all duration-300 group relative flex items-center justify-center ${
              isActive
                ? 'bg-accentCyan/10 border border-accentCyan/30 text-accentCyan scale-105'
                : 'bg-transparent border border-transparent text-gray-500 hover:text-white hover:bg-white/5'
            }`}
            title={item.label}
            data-cursor="pointer"
          >
            <Icon size={16} />
            
            {/* Tooltip on hover */}
            <span className="absolute left-14 px-2.5 py-1 rounded-lg bg-darkbg border border-white/10 text-[9px] font-bold uppercase tracking-wider text-white opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
