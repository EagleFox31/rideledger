
import React from 'react';

const AdminBudgetAndReports: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111317] dark:text-white antialiased">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark pb-24">

        <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center p-4 justify-between">
            <button className="text-[#111317] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h2 className="text-[#111317] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Budget &amp; Rapports</h2>
            <div className="flex w-10 items-center justify-end">
              <button className="flex items-center justify-center text-primary dark:text-primary">
                <span className="material-symbols-outlined">calendar_month</span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center pb-4 pt-1 gap-4">
            <button className="text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <span className="text-sm font-semibold text-[#111317] dark:text-white">Octobre 2023</span>
            <button className="text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </header>

        <main className="flex flex-col px-4 pt-6 gap-6">
          <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x pb-2">
            <div className="flex min-w-[160px] flex-1 flex-col gap-2 rounded-xl p-5 bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 snap-start">
              <div className="flex justify-between items-start">
                <p className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wider">Budget Total</p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-1.5 rounded-full">
                  <span className="material-symbols-outlined text-primary text-[18px]">account_balance_wallet</span>
                </div>
              </div>
              <div>
                <p className="text-[#111317] dark:text-white tracking-tight text-xl font-bold">5.0M XAF</p>
                <p className="text-emerald-600 text-xs font-medium mt-1">+0% vs prev</p>
              </div>
            </div>
            <div className="flex min-w-[160px] flex-1 flex-col gap-2 rounded-xl p-5 bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 snap-start">
              <div className="flex justify-between items-start">
                <p className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wider">Dépenses</p>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-1.5 rounded-full">
                  <span className="material-symbols-outlined text-orange-600 text-[18px]">trending_down</span>
                </div>
              </div>
              <div>
                <p className="text-[#111317] dark:text-white tracking-tight text-xl font-bold">3.2M XAF</p>
                <p className="text-emerald-600 text-xs font-medium mt-1">+12% vs prev</p>
              </div>
            </div>
            <div className="flex min-w-[160px] flex-1 flex-col gap-2 rounded-xl p-5 bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 snap-start relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10"></div>
              <div className="flex justify-between items-start relative z-10">
                <p className="text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider">Solde Net</p>
                <div className="bg-primary/10 dark:bg-primary/20 p-1.5 rounded-full">
                  <span className="material-symbols-outlined text-primary text-[18px]">savings</span>
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-primary dark:text-white tracking-tight text-xl font-bold">1.8M XAF</p>
                <p className="text-red-500 text-xs font-medium mt-1">-5% vs prev</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-surface-light dark:bg-surface-dark p-5 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h3 className="text-[#111317] dark:text-white text-base font-semibold">Performance Mensuelle</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">1 Oct - 31 Oct</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-500 dark:text-gray-400">Utilisation</span>
                <p className="text-lg font-bold text-[#111317] dark:text-white">64%</p>
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-between text-xs mb-1.5 font-medium text-gray-500 dark:text-gray-400">
                <span>Dépenses (3.2M)</span>
                <span>Budget (5.0M)</span>
              </div>
              <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full relative" style={{ width: '64%' }}>
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/30"></div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-[#111621]/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 z-50 max-w-md mx-auto">
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111317] dark:text-white font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <span className="material-symbols-outlined text-[20px]">table_chart</span>
              CSV
            </button>
            <button className="flex-[2] flex items-center justify-center gap-2 h-12 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
              <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
              Exporter Rapport PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminBudgetAndReports;
