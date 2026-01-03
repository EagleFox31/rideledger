
import React from 'react';

const Notifications: React.FC = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden font-sans selection:bg-lux-gold/20">

      <header className="flex-none bg-porcelain/90 backdrop-blur-md border-b border-lux-border z-20 sticky top-0 transition-all duration-300">
        <div className="px-6 pt-14 pb-4">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h1 className="text-3xl font-serif font-bold text-ink tracking-tight mb-2">Notifications</h1>
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lux-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lux-blue"></span>
                </span>
                <span className="text-[11px] uppercase tracking-widest font-mono text-lux-blue font-medium pt-0.5">Calcul en temps réel</span>
              </div>
            </div>
            <button className="p-2 -mr-2 rounded-full hover:bg-black/5 transition-colors text-ink/60">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
            <button className="flex items-center justify-center px-5 py-2 rounded-pill bg-ink text-white text-sm font-medium shadow-lux shrink-0 transition-transform active:scale-95">
              Tout
            </button>
            <button className="flex items-center justify-center px-5 py-2 rounded-pill bg-surface border border-lux-border text-ink/70 text-sm font-medium shrink-0 shadow-sm transition-all hover:border-lux-gold hover:text-lux-gold active:bg-surface/80">
              Finance
            </button>
            <button className="flex items-center justify-center px-5 py-2 rounded-pill bg-surface border border-lux-border text-ink/70 text-sm font-medium shrink-0 shadow-sm transition-all hover:border-lux-gold hover:text-lux-gold active:bg-surface/80">
              Alertes
            </button>
            <button className="flex items-center justify-center px-5 py-2 rounded-pill bg-surface border border-lux-border text-ink/70 text-sm font-medium shrink-0 shadow-sm transition-all hover:border-lux-gold hover:text-lux-gold active:bg-surface/80">
              Système
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-6 py-6 scroll-smooth w-full">
        {/* Notifications feed */}
      </main>

      <nav className="flex-none bg-surface border-t border-lux-border safe-area-bottom pb-6 pt-3 px-6 z-30">
        <ul className="flex justify-between items-center max-w-sm mx-auto">
          <li className="flex-1">
            <a href="#" className="flex flex-col items-center gap-1 group">
              <span className="material-symbols-outlined text-ink/30 group-hover:text-lux-blue transition-colors text-[24px]">grid_view</span>
              <span className="text-[10px] font-medium font-sans text-ink/40 group-hover:text-lux-blue transition-colors">Dashboard</span>
            </a>
          </li>
          <li className="flex-1">
            <a href="#" className="flex flex-col items-center gap-1 group relative">
              <div className="absolute top-0 right-1/4 translate-x-1 h-2 w-2 rounded-full bg-lux-red ring-2 ring-surface"></div>
              <span className="material-symbols-outlined text-lux-blue text-[24px]">notifications</span>
              <span className="text-[10px] font-bold font-sans text-lux-blue">Notifications</span>
            </a>
          </li>
          <li className="flex-1">
            <a href="#" className="flex flex-col items-center gap-1 group">
              <span className="material-symbols-outlined text-ink/30 group-hover:text-lux-blue transition-colors text-[24px]">settings</span>
              <span className="text-[10px] font-medium font-sans text-ink/40 group-hover:text-lux-blue transition-colors">Paramètres</span>
            </a>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Notifications;
