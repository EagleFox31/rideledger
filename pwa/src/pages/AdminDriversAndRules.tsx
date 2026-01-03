
import React from 'react';

const AdminDriversAndRules: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 antialiased selection:bg-primary/20 selection:text-primary pb-24">

      <header className="sticky top-0 z-40 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-subtle-border dark:border-subtle-border-dark px-4 py-3 flex items-center justify-between transition-colors duration-200">
        <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex-1">Chauffeurs &amp; Règles</h1>
        <button className="flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 active:bg-primary/30 text-primary font-semibold text-sm transition-all duration-200">
          Enregistrer
        </button>
      </header>

      <main className="w-full max-w-md mx-auto flex flex-col gap-6 p-4">

        <section className="flex flex-col gap-3">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-card border border-subtle-border dark:border-subtle-border-dark overflow-hidden">
            <div className="px-5 py-4 border-b border-subtle-border dark:border-subtle-border-dark flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/30">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-[20px]">light_mode</span>
                <h2 className="text-base font-bold text-gray-900 dark:text-white uppercase tracking-wider text-xs">Fiche Jour/Nuit</h2>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked type="checkbox" value="" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                <span className="ml-2 text-xs font-medium text-gray-500 dark:text-gray-400">Actif</span>
              </label>
            </div>
            <div className="p-5 space-y-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wide pl-1">Base Mensuelle</label>
                <div className="relative group">
                  <input type="number" defaultValue="150000" className="w-full bg-background-light dark:bg-background-dark text-gray-900 dark:text-white border-none rounded-lg py-3 pl-4 pr-16 focus:ring-2 focus:ring-primary/50 transition-all font-medium text-lg placeholder-gray-400" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400 dark:text-gray-500 pointer-events-none">XAF</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wide pl-1">Pénalité Matin</label>
                  <div className="relative group">
                    <input type="number" defaultValue="2000" className="w-full bg-background-light dark:bg-background-dark text-red-600 dark:text-red-400 border-none rounded-lg py-3 pl-4 pr-12 focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder-gray-400" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 dark:text-gray-500 pointer-events-none">XAF</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wide pl-1">Pénalité Soir</label>
                  <div className="relative group">
                    <input type="number" defaultValue="1500" className="w-full bg-background-light dark:bg-background-dark text-red-600 dark:text-red-400 border-none rounded-lg py-3 pl-4 pr-12 focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder-gray-400" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 dark:text-gray-500 pointer-events-none">XAF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-card border border-subtle-border dark:border-subtle-border-dark overflow-hidden">
            <div className="px-5 py-4 border-b border-subtle-border dark:border-subtle-border-dark flex items-center gap-2 bg-gray-50/50 dark:bg-gray-800/30">
              <span className="material-symbols-outlined text-[20px] text-primary">dark_mode</span>
              <h2 className="text-base font-bold text-gray-900 dark:text-white uppercase tracking-wider text-xs">Fiche Soir Tard</h2>
            </div>
            <div className="p-5 space-y-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wide pl-1">Prix par Course</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-lg">local_taxi</span>
                  </div>
                  <input type="number" defaultValue="5000" className="w-full bg-background-light dark:bg-background-dark text-gray-900 dark:text-white border-none rounded-lg py-3 pl-10 pr-16 focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder-gray-400" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400 dark:text-gray-500 pointer-events-none">XAF</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wide pl-1">Forfait Indicatif</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-lg">confirmation_number</span>
                  </div>
                  <input type="number" defaultValue="20000" className="w-full bg-background-light dark:bg-background-dark text-gray-900 dark:text-white border-none rounded-lg py-3 pl-10 pr-16 focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder-gray-400" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400 dark:text-gray-500 pointer-events-none">XAF</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wide pl-1">Pénalité Course Ratée</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-red-400 dark:text-red-500 text-lg">warning</span>
                  </div>
                  <input type="number" defaultValue="5000" className="w-full bg-background-light dark:bg-background-dark text-red-600 dark:text-red-400 border-none rounded-lg py-3 pl-10 pr-16 focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder-gray-400" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400 dark:text-gray-500 pointer-events-none">XAF</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-card border border-subtle-border dark:border-subtle-border-dark overflow-hidden">
            <div className="px-5 py-4 border-b border-subtle-border dark:border-subtle-border-dark flex items-center gap-2 bg-gray-50/50 dark:bg-gray-800/30">
              <span className="material-symbols-outlined text-[20px] text-primary">date_range</span>
              <h2 className="text-base font-bold text-gray-900 dark:text-white uppercase tracking-wider text-xs">Paramètres Période</h2>
            </div>
            <div className="p-5 grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                <label className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wide pl-1">Jours Semaine</label>
                <div className="relative w-full">
                  <select defaultValue="mon-fri" className="w-full bg-background-light dark:bg-background-dark text-gray-900 dark:text-white border-none rounded-lg py-3 pl-4 pr-10 focus:ring-2 focus:ring-primary/50 transition-all font-medium appearance-none cursor-pointer">
                    <option value="mon-fri">Lun - Ven</option>
                    <option value="mon-sat">Lun - Sam</option>
                    <option value="all">Tous les jours</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">expand_more</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                <label className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wide pl-1">Seuil Soir Tard</label>
                <div className="relative w-full">
                  <input type="time" defaultValue="19:00" className="w-full bg-background-light dark:bg-background-dark text-gray-900 dark:text-white border-none rounded-lg py-3 pl-4 pr-4 focus:ring-2 focus:ring-primary/50 transition-all font-medium cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center pt-2">
          <button className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform text-lg">history</span>
            <span className="text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 group-hover:decoration-primary transition-all">Voir l'historique des changements</span>
          </button>
        </div>

      </main>

      <nav className="fixed bottom-0 left-0 z-50 w-full bg-surface-light dark:bg-surface-dark border-t border-subtle-border dark:border-subtle-border-dark pb-safe">
        {/* Navigation */}
      </nav>

    </div>
  );
};

export default AdminDriversAndRules;
