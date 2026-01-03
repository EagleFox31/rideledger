
import React from 'react';

const DriverDashboard2: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white transition-colors duration-200">
      <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden">

        <header className="sticky top-0 z-20 flex items-center bg-surface-light dark:bg-surface-dark px-6 py-4 justify-between shadow-sm bg-opacity-90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shadow-inner ring-2 ring-white dark:ring-gray-700"
                style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuEL7SrCUVnlfGJ19cZJ9vqxKelGKhc87ti5rThA3i_T-IhlWD_dhf9tIDoUGg3pXd9VtWBrgchwj2DZi1nJFm1C4H_N_SknqlhC2VcvlOx4KTT4J79Rt0aYbpcVNWepR0GlsjQwQef1BNL-a-pkmknLXTps86AN8D4-Pijt8tBhOM0DYf--Uo0OUMovCHlCIocv6zDfHD-mR7k48kRccAJX8PAVfwD_69V0VvPFr6BdFT_UR_m4lK6yxlLG6o0l_TCzAHLZ9wBQ")` }}
              >
              </div>
              <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-white dark:border-surface-dark"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Bienvenue</span>
              <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Philippe</h2>
            </div>
          </div>
          <button className="flex items-center justify-center rounded-full size-10 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
            <span className="material-symbols-outlined text-[#111318] dark:text-white" style={{ fontSize: '24px' }}>notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
          </button>
        </header>

        <main className="flex-1 overflow-y-auto pb-24 px-6 pt-6 no-scrollbar">

          <div className="relative w-full rounded-lg bg-surface-light dark:bg-surface-dark p-6 shadow-soft mb-6 overflow-hidden group">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 dark:bg-primary/10 transition-transform group-hover:scale-110 duration-700"></div>
            <div className="absolute right-10 top-10 h-16 w-16 rounded-full bg-primary/5 dark:bg-primary/10 blur-xl"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-2">
                <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Total Semaine</p>
                <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">
                  +12.5%
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-[#111318] dark:text-white tracking-tight text-4xl font-extrabold leading-tight">85 000</p>
                <span className="text-lg font-bold text-gray-400 dark:text-gray-500">XAF</span>
              </div>
              <p className="text-gray-400 dark:text-gray-500 text-xs font-medium mt-1">12 Nov - 18 Nov</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex flex-col justify-between rounded-lg bg-surface-light dark:bg-surface-dark p-4 shadow-soft">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20">
                  <span className="material-symbols-outlined text-primary text-[20px]">local_taxi</span>
                </div>
                <p className="text-[#111318] dark:text-white text-sm font-bold leading-normal">Trajets</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-2xl font-bold text-[#111318] dark:text-white">16</span>
                </div>
                <div className="flex flex-col gap-1 text-xs font-medium">
                  <span className="text-green-600 dark:text-green-400 flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-green-500"></span> 14 Complets
                  </span>
                  <span className="text-red-500 dark:text-red-400 flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-red-500"></span> 2 Manqués
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-surface-light dark:bg-surface-dark p-4 shadow-soft">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-full bg-purple-50 dark:bg-purple-900/20">
                  <span className="material-symbols-outlined text-purple-600 text-[20px]">dark_mode</span>
                </div>
                <p className="text-[#111318] dark:text-white text-sm font-bold leading-normal">Activité Soir</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-2xl font-bold text-[#111318] dark:text-white">Actif</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="inline-flex items-center rounded bg-purple-100 dark:bg-purple-900/40 px-2 py-0.5 text-xs font-bold text-purple-700 dark:text-purple-300">
                    &gt; 19h00
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">Projections</h3>
              <span className="material-symbols-outlined text-gray-400 text-sm">trending_up</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between rounded-lg bg-surface-light dark:bg-surface-dark p-4 shadow-soft border-l-4 border-primary">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Est. Fin de Semaine</span>
                  <span className="text-sm text-gray-400">Basé sur la tendance actuelle</span>
                </div>
                <div className="text-right">
                  <p className="text-[#111318] dark:text-white text-lg font-extrabold tracking-tight">120 000 <span className="text-xs font-bold text-gray-400">XAF</span></p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-surface-light dark:bg-surface-dark p-4 shadow-soft border-l-4 border-purple-500">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Est. Fin du Mois</span>
                  <span className="text-sm text-gray-400">Objectif: 500k XAF</span>
                </div>
                <div className="text-right">
                  <p className="text-[#111318] dark:text-white text-lg font-extrabold tracking-tight">450 000 <span className="text-xs font-bold text-gray-400">XAF</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 p-5 shadow-lg text-white mb-6">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-yellow-400 mt-0.5">lightbulb</span>
              <div>
                <h4 className="font-bold text-sm mb-1">Astuce Performance</h4>
                <p className="text-xs text-gray-300 leading-relaxed">Les vendredis soirs entre 20h et 23h sont les plus rentables. Prévoyez d'être disponible !</p>
              </div>
            </div>
          </div>

        </main>

        <nav className="sticky bottom-0 z-30 w-full bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-safe pt-2">
          <div className="flex h-16 w-full items-center justify-around px-2">
            <button className="flex flex-1 flex-col items-center justify-center gap-1 text-primary group">
              <div className="flex h-8 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">dashboard</span>
              </div>
              <span className="text-xs font-bold">Dashboard</span>
            </button>
            <button className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors group">
              <div className="flex h-8 w-16 items-center justify-center rounded-full bg-transparent group-hover:bg-primary/5 transition-colors">
                <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">history</span>
              </div>
              <span className="text-xs font-medium">Historique</span>
            </button>
            <button className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors group">
              <div className="flex h-8 w-16 items-center justify-center rounded-full bg-transparent group-hover:bg-primary/5 transition-colors">
                <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">person</span>
              </div>
              <span className="text-xs font-medium">Profil</span>
            </button>
          </div>
          <div className="h-6 w-full bg-surface-light dark:bg-surface-dark"></div>
        </nav>

      </div>
    </div>
  );
};

export default DriverDashboard2;
