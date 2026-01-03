
import React from 'react';

const DriverHistory2: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111317] dark:text-white antialiased">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark pb-28">

        <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-all duration-200">
          <div className="flex items-center p-4 justify-between">
            <button className="text-[#111317] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h2 className="text-[#111317] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Historique &amp; détails</h2>
            <div className="flex w-10 items-center justify-end">
              <button className="flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="flex bg-gray-200 dark:bg-gray-800 p-1 rounded-xl">
              <button className="flex-1 py-1.5 px-3 rounded-lg bg-surface-light dark:bg-surface-dark text-primary dark:text-white shadow-sm text-sm font-semibold transition-all">Semaine</button>
              <button className="flex-1 py-1.5 px-3 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm font-medium transition-all">Mois</button>
            </div>
          </div>
        </header>

        <main className="flex flex-col px-4 pt-6 gap-6">
          <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x pb-2">
            <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-xl p-4 bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 snap-start">
              <div className="flex justify-between items-start">
                <p className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">Revenus Nuit</p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-1.5 rounded-full">
                  <span className="material-symbols-outlined text-primary text-[16px]">account_balance_wallet</span>
                </div>
              </div>
              <div>
                <p className="text-[#111317] dark:text-white tracking-tight text-lg font-bold">245k XAF</p>
                <p className="text-emerald-600 text-[10px] font-medium mt-0.5">Cette semaine</p>
              </div>
            </div>
            <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-xl p-4 bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 snap-start">
              <div className="flex justify-between items-start">
                <p className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">Courses</p>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-1.5 rounded-full">
                  <span className="material-symbols-outlined text-indigo-600 text-[16px]">local_taxi</span>
                </div>
              </div>
              <div>
                <p className="text-[#111317] dark:text-white tracking-tight text-lg font-bold">32</p>
                <p className="text-gray-500 dark:text-gray-400 text-[10px] font-medium mt-0.5">Total</p>
              </div>
            </div>
            <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-xl p-4 bg-surface-light dark:bg-surface-dark shadow-sm border border-red-100 dark:border-red-900/30 snap-start">
              <div className="flex justify-between items-start">
                <p className="text-red-500 dark:text-red-400 text-[10px] font-bold uppercase tracking-wider">Pénalités</p>
                <div className="bg-red-50 dark:bg-red-900/20 p-1.5 rounded-full">
                  <span className="material-symbols-outlined text-red-600 text-[16px]">gavel</span>
                </div>
              </div>
              <div>
                <p className="text-red-600 dark:text-red-400 tracking-tight text-lg font-bold">-10k XAF</p>
                <p className="text-red-400/80 text-[10px] font-medium mt-0.5">2 incidents</p>
              </div>
            </div>
          </div>
        </main>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-[#111621]/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 z-50 max-w-md mx-auto">
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111317] dark:text-white font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <span className="material-symbols-outlined text-[20px]">download</span>
              Reçu
            </button>
            <button className="flex-[2] flex items-center justify-center gap-2 h-12 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
              <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
              Exporter Rapport
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DriverHistory2;
