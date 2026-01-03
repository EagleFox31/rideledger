
import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased selection:bg-primary/30">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24">

        <header className="sticky top-0 z-30 bg-surface-light/95 backdrop-blur-md dark:bg-surface-dark/95 border-b border-border-subtle px-4 pt-safe-top pb-2 transition-colors">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">local_taxi</span>
              </div>
              <h2 className="text-text-main dark:text-white text-xl font-bold tracking-tight">RideLedger</h2>
            </div>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full text-text-main hover:bg-background-light dark:text-white dark:hover:bg-surface-dark transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-surface-dark"></span>
            </button>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="relative inline-block text-left w-full max-w-[200px]">
              <div className="group relative flex items-center gap-2 cursor-pointer">
                <span className="text-2xl font-bold text-text-main dark:text-white">Octobre 2023</span>
                <span className="material-symbols-outlined text-primary pt-1">expand_more</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 space-y-6">

          <section className="relative overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark p-6 shadow-porcelain border border-border-subtle dark:border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text-main dark:text-white">Budget Mensuel</h3>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary-dark">
                Mensuel
              </span>
            </div>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-text-main dark:text-white">4 500 XAF</span>
              <span className="text-lg font-medium text-text-muted">/ 5 000 XAF</span>
            </div>
            <div className="relative h-3 w-full rounded-full bg-background-light dark:bg-gray-800 mb-2">
              <div className="absolute top-0 left-0 h-full rounded-full bg-primary transition-all duration-500 ease-out" style={{ width: '90%' }}></div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-text-muted">Dépensé: 90%</span>
              <span className="font-semibold text-primary-dark">Reste: 500 XAF</span>
            </div>
          </section>

          <section>
            <div className="relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl shadow-porcelain border border-border-subtle dark:border-gray-800 overflow-hidden">
              <div className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-900/20 shrink-0 h-10 w-10">
                  <span className="material-symbols-outlined text-orange-600 dark:text-orange-400">warning</span>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <p className="text-text-main dark:text-white text-sm font-semibold leading-tight">Risque de dépassement</p>
                  <p className="text-text-muted text-xs font-medium leading-normal mt-0.5">Projection +10% à la fin du mois</p>
                </div>
                <div className="shrink-0">
                  <button className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">Voir</button>
                </div>
              </div>
              <div className="h-1 w-full bg-orange-100 dark:bg-orange-900/20">
                <div className="h-full bg-orange-500/50 w-3/4"></div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-text-main dark:text-white px-1">Détails Chauffeurs</h3>
            <div className="rounded-xl bg-surface-light dark:bg-surface-dark p-5 shadow-porcelain border border-border-subtle dark:border-gray-800">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-background-light dark:bg-gray-800 flex items-center justify-center">
                    <span className="material-symbols-outlined text-text-muted">light_mode</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-main dark:text-white">Jour / Nuit</h4>
                    <p className="text-xs text-text-muted">Activités standards</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-gray-300 dark:text-gray-600">chevron_right</span>
              </div>
              <div className="grid grid-cols-3 gap-4 divide-x divide-border-subtle dark:divide-gray-700">
                <div className="pr-2">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-text-muted mb-1">Actuel</p>
                  <p className="text-lg font-bold text-primary">1 200 XAF</p>
                </div>
                <div className="px-2">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-text-muted mb-1">Pénalités</p>
                  <p className="text-lg font-bold text-red-500/80">50 XAF</p>
                </div>
                <div className="pl-2">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-text-muted mb-1">Proj.</p>
                  <p className="text-lg font-bold text-text-main dark:text-gray-300">2 100 XAF</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-surface-light dark:bg-surface-dark p-5 shadow-porcelain border border-border-subtle dark:border-gray-800">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-background-light dark:bg-gray-800 flex items-center justify-center">
                    <span className="material-symbols-outlined text-text-muted">dark_mode</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-main dark:text-white">Soir Tard</h4>
                    <p className="text-xs text-text-muted">Horaires décalés</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-gray-300 dark:text-gray-600">chevron_right</span>
              </div>
              <div className="grid grid-cols-3 gap-4 divide-x divide-border-subtle dark:divide-gray-700">
                <div className="pr-2">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-text-muted mb-1">Semaine</p>
                  <p className="text-lg font-bold text-text-main dark:text-white">300 XAF</p>
                </div>
                <div className="px-2">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-text-muted mb-1">Mois</p>
                  <p className="text-lg font-bold text-primary">900 XAF</p>
                </div>
                <div className="pl-2">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-text-muted mb-1">Proj.</p>
                  <p className="text-lg font-bold text-text-main dark:text-gray-300">1 200 XAF</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-xl bg-surface-light dark:bg-surface-dark p-5 shadow-porcelain border border-border-subtle dark:border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-text-main dark:text-white">Évolution Hebdomadaire</h3>
              <button className="text-xs font-semibold text-primary">Voir tout</button>
            </div>
            <div className="flex h-32 w-full items-end justify-between gap-2 px-2">
              <div className="group flex w-full flex-col items-center gap-2">
                <div className="relative w-full rounded-t-sm bg-primary/20 dark:bg-primary/10 transition-all hover:bg-primary/30" style={{ height: '40%' }}></div>
                <span className="text-xs text-text-muted">S1</span>
              </div>
              <div className="group flex w-full flex-col items-center gap-2">
                <div className="relative w-full rounded-t-sm bg-primary/30 dark:bg-primary/20 transition-all hover:bg-primary/40" style={{ height: '55%' }}></div>
                <span className="text-xs text-text-muted">S2</span>
              </div>
              <div className="group flex w-full flex-col items-center gap-2">
                <div className="relative w-full rounded-t-sm bg-primary/50 dark:bg-primary/40 transition-all hover:bg-primary/60" style={{ height: '35%' }}></div>
                <span className="text-xs text-text-muted">S3</span>
              </div>
              <div className="group flex w-full flex-col items-center gap-2">
                <div className="relative w-full rounded-t-sm bg-primary shadow-[0_0_15px_-3px_rgba(201,167,105,0.4)] transition-all" style={{ height: '75%' }}></div>
                <span className="text-xs font-bold text-text-main dark:text-white">S4</span>
              </div>
            </div>
          </section>

        </main>

        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface-light dark:bg-surface-dark border-t border-border-subtle dark:border-gray-800 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
          <div className="flex h-16 items-center justify-around px-2">
            <a href="#" className="flex flex-1 flex-col items-center justify-center gap-1 py-1 text-primary">
              <span className="material-symbols-outlined text-[26px] font-variation-settings-'FILL'1">dashboard</span>
              <span className="text-[10px] font-semibold">Dashboard</span>
            </a>
            <a href="#" className="flex flex-1 flex-col items-center justify-center gap-1 py-1 text-text-muted hover:text-text-main dark:hover:text-white transition-colors group">
              <span className="material-symbols-outlined text-[26px] group-hover:scale-105 transition-transform">tune</span>
              <span className="text-[10px] font-medium">Gestion</span>
            </a>
            <a href="#" className="flex flex-1 flex-col items-center justify-center gap-1 py-1 text-text-muted hover:text-text-main dark:hover:text-white transition-colors group">
              <span className="material-symbols-outlined text-[26px] group-hover:scale-105 transition-transform">groups</span>
              <span className="text-[10px] font-medium">Chauffeurs</span>
            </a>
            <a href="#" className="flex flex-1 flex-col items-center justify-center gap-1 py-1 text-text-muted hover:text-text-main dark:hover:text-white transition-colors group">
              <span className="material-symbols-outlined text-[26px] group-hover:scale-105 transition-transform">account_balance_wallet</span>
              <span className="text-[10px] font-medium">Budget</span>
            </a>
          </div>
          <div className="h-safe-bottom w-full"></div>
        </nav>

      </div>
    </div>
  );
};

export default AdminDashboard;
