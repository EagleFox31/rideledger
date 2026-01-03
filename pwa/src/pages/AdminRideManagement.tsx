
import React from 'react';

const AdminRideManagement: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main h-screen flex flex-col overflow-hidden">

      <header className="bg-surface-light dark:bg-background-dark pt-safe-top sticky top-0 z-20 shadow-sm border-b border-border-color/50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center p-2 rounded-full hover:bg-slate-50 text-text-main">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div>
              <h1 className="text-lg font-bold leading-tight tracking-tight text-text-main">Gestion des courses</h1>
              <p className="text-xs font-medium text-text-secondary">Saisie quotidienne</p>
            </div>
          </div>
          <div className="flex items-center bg-slate-50 dark:bg-slate-800 rounded-lg px-3 py-1.5 border border-border-color/50">
            <span className="material-symbols-outlined text-primary text-[18px] mr-2">calendar_today</span>
            <span className="text-sm font-bold text-text-main">Aujourd'hui</span>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto overflow-x-hidden relative no-scrollbar pb-32">

        <section className="p-4">
          <div className="bg-surface-light dark:bg-[#1e2732] rounded-2xl p-5 shadow-luxe border border-border-color/40">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-text-main flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded-full"></span>
                Nouvelle course
              </h2>
              <span className="text-xs font-medium text-text-secondary bg-slate-50 px-2 py-1 rounded">24 Oct, 2023</span>
            </div>
            <div className="mb-4">
              <label className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2 block">Créneau</label>
              <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <label className="flex-1 cursor-pointer">
                  <input defaultChecked name="shift" type="radio" value="Matin" className="peer sr-only" />
                  <span className="flex items-center justify-center py-2 text-sm font-medium rounded-lg text-text-secondary peer-checked:bg-white peer-checked:text-primary peer-checked:shadow-sm transition-all duration-200">Matin</span>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input name="shift" type="radio" value="Soir" className="peer sr-only" />
                  <span className="flex items-center justify-center py-2 text-sm font-medium rounded-lg text-text-secondary peer-checked:bg-white peer-checked:text-primary peer-checked:shadow-sm transition-all duration-200">Soir</span>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input name="shift" type="radio" value="Tard" className="peer sr-only" />
                  <span className="flex items-center justify-center py-2 text-sm font-medium rounded-lg text-text-secondary peer-checked:bg-white peer-checked:text-primary peer-checked:shadow-sm transition-all duration-200">Tard</span>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5 block">Heure</label>
                <div className="relative">
                  <input type="time" defaultValue="08:00" className="w-full bg-slate-50 dark:bg-slate-800 border border-border-color rounded-xl px-3 py-2.5 text-sm font-medium text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1.5 block">Chauffeur</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-slate-50 dark:bg-slate-800 border border-border-color rounded-xl px-3 py-2.5 text-sm font-medium text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors">
                    <option>Jean Dupont</option>
                    <option>Marc Kouassi</option>
                    <option>Alice N'Diaye</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
                    <span className="material-symbols-outlined text-[18px]">expand_more</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <input type="text" placeholder="Commentaire optionnel..." className="w-full bg-slate-50 dark:bg-slate-800 border border-border-color rounded-xl px-3 py-2.5 text-sm text-text-main placeholder-text-secondary/60 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
              </div>
              <button className="bg-primary hover:bg-primary-dark text-white rounded-xl px-5 py-2.5 text-sm font-bold shadow-md shadow-primary/30 flex items-center gap-2 transition-transform active:scale-95">
                <span className="material-symbols-outlined text-[20px]">add</span>
                Ajouter
              </button>
            </div>
          </div>
        </section>

        <div className="flex items-center gap-3 px-4 pb-2 overflow-x-auto no-scrollbar">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-text-main text-white rounded-full text-xs font-bold shadow-md whitespace-nowrap">
            Tous
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white border border-border-color text-text-secondary rounded-full text-xs font-bold whitespace-nowrap shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span> Matin
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white border border-border-color text-text-secondary rounded-full text-xs font-bold whitespace-nowrap shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span> Soir
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white border border-border-color text-text-secondary rounded-full text-xs font-bold whitespace-nowrap shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-400"></span> Manqués
          </button>
        </div>

        <section className="px-4 py-2 flex flex-col gap-3">
          {/* Trip List cards */}
        </section>

      </main>

      <div className="absolute bottom-[72px] left-0 right-0 z-10 mx-4">
        <div className="bg-text-main text-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 flex items-center justify-between backdrop-blur-md bg-opacity-95">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold">Total Estimé (Jour)</span>
            <span className="text-xl font-bold font-display">45 000 XAF</span>
          </div>
          <div className="h-8 w-px bg-slate-600 mx-2"></div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-wider text-red-300 font-semibold">Pénalités</span>
            <span className="text-base font-bold text-red-400">-2 000 XAF</span>
          </div>
        </div>
      </div>

      <nav className="bg-surface-light dark:bg-background-dark border-t border-border-color fixed bottom-0 w-full z-20 pb-safe-bottom">
        {/* Navigation */}
      </nav>

    </div>
  );
};

export default AdminRideManagement;
