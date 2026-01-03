
import React from 'react';

const DriverHistory: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main antialiased selection:bg-primary/20 selection:text-primary">
      <div className="relative mx-auto flex h-full min-h-screen w-full max-w-md flex-col overflow-x-hidden bg-background-light dark:bg-background-dark shadow-2xl">

        <header className="sticky top-0 z-30 flex items-center justify-between bg-surface-light/90 dark:bg-surface-dark/90 px-5 py-4 backdrop-blur-md border-b border-border-color dark:border-gray-800">
          <div className="flex size-10 items-center justify-center rounded-full text-text-main dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <h1 className="flex-1 text-center text-lg font-bold tracking-tight text-text-main dark:text-white">Historique</h1>
          <div className="flex size-10 items-center justify-center rounded-full text-text-main dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined">calendar_month</span>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 flex flex-col gap-6">
          <div className="flex w-full items-center justify-center rounded-xl bg-gray-200/50 dark:bg-gray-800 p-1">
            <label className="relative flex-1 cursor-pointer">
              <input defaultChecked name="period" type="radio" value="week" className="peer sr-only" />
              <div className="flex h-9 w-full items-center justify-center rounded-lg text-sm font-medium text-text-sub transition-all duration-200 peer-checked:bg-white peer-checked:text-text-main peer-checked:shadow-sm dark:text-gray-400 dark:peer-checked:bg-surface-dark dark:peer-checked:text-white">
                Cette semaine
              </div>
            </label>
            <label className="relative flex-1 cursor-pointer">
              <input name="period" type="radio" value="month" className="peer sr-only" />
              <div className="flex h-9 w-full items-center justify-center rounded-lg text-sm font-medium text-text-sub transition-all duration-200 peer-checked:bg-white peer-checked:text-text-main peer-checked:shadow-sm dark:text-gray-400 dark:peer-checked:bg-surface-dark dark:peer-checked:text-white">
                Ce mois
              </div>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2 rounded-2xl bg-surface-light dark:bg-surface-dark p-5 shadow-clean border border-border-color dark:border-gray-800">
              <div className="flex items-center gap-2 text-text-sub dark:text-gray-400">
                <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                <span className="text-xs font-semibold uppercase tracking-wider">Total Gagné</span>
              </div>
              <p className="text-2xl font-bold tracking-tight text-primary">150 000 <span className="text-sm font-medium text-text-sub">XAF</span></p>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl bg-surface-light dark:bg-surface-dark p-5 shadow-clean border border-border-color dark:border-gray-800">
              <div className="flex items-center gap-2 text-text-sub dark:text-gray-400">
                <span className="material-symbols-outlined text-xl">warning</span>
                <span className="text-xs font-semibold uppercase tracking-wider">Pénalités</span>
              </div>
              <p className="text-2xl font-bold tracking-tight text-danger">-5 000 <span className="text-sm font-medium text-text-sub">XAF</span></p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-sub dark:text-gray-400 px-1">Activités Récentes</h3>
          </div>
        </main>

        <div className="fixed inset-x-0 bottom-0 z-50 transform rounded-t-3xl bg-surface-light dark:bg-surface-dark shadow-[0_-8px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out translate-y-0 border-t border-border-color dark:border-gray-800">
          {/* Bottom sheet detail view */}
        </div>

      </div>
    </div>
  );
};

export default DriverHistory;
