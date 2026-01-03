
import React from 'react';

const DriverDashboard: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-text-primary-light dark:text-text-primary-dark transition-colors duration-300">
      <div className="relative flex h-full min-h-screen w-full max-w-md mx-auto flex-col pb-24 overflow-x-hidden shadow-2xl bg-background-light dark:bg-background-dark">

        <header className="flex items-center px-6 pt-12 pb-4 justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full size-12 shadow-sm border-2 border-white dark:border-background-dark ring-1 ring-black/5"
                style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBW8NlXrxXF2fBLORP47OoJpIIlK76iIH5Hms6EHTLiKsSYW-mMYDcvO4zEjgre057ADczb1t1DIkSzjR0vfAhGmzlJ1i8MSJk3tNpQyw4OTMwkBEJci8XwCeuuhsyB_0cmuIxrsm4-3hZbMm_WK6LDzwG4uLZpnxJJjciyV9h6HDNcCJQl-p-FwIRA1D68HkxIqO7nLB5G3AR2Ql0_dJDTQup9Ki9jeVFXB9TMayM6j5x0dtZX8P2ISBZVmQzLwWMNT0UINLmgDg")` }}
              >
              </div>
              <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-white dark:border-background-dark"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-medium uppercase tracking-wider">Bonjour,</span>
              <h2 className="text-xl font-bold leading-tight tracking-tight">Marc Dubois</h2>
            </div>
          </div>
          <button className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-surface-dark shadow-card text-text-primary-light dark:text-text-primary-dark hover:text-primary transition-colors relative">
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-2.5 right-2.5 size-1.5 bg-red-500 rounded-full"></span>
          </button>
        </header>

        <main className="flex flex-col gap-6 px-6 pt-2">

          <div className="relative w-full rounded-2xl bg-white dark:bg-surface-dark p-6 shadow-soft flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-tr-full -ml-8 -mb-8"></div>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium mb-1 z-10">Solde Actuel (Octobre)</p>
            <div className="flex items-baseline gap-1 z-10">
              <h1 className="text-4xl font-extrabold text-primary tracking-tight">2 450,00</h1>
              <span className="text-lg font-bold text-primary">XAF</span>
            </div>
            <div className="w-full mt-6 flex flex-col gap-2 z-10">
              <div className="flex justify-between text-xs text-text-secondary-light dark:text-text-secondary-dark font-medium">
                <span>Progression</span>
                <span>82%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[82%] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-card">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-medium">Projection Fin de Mois</p>
                <p className="text-text-primary-light dark:text-text-primary-dark font-bold">~ 2 800,00 XAF</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-300 dark:text-gray-600">chevron_right</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col p-4 rounded-xl bg-white dark:bg-surface-dark shadow-card border-l-4 border-red-400">
              <div className="flex justify-between items-start mb-2">
                <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-orange-400">
                  <span className="material-symbols-outlined text-[20px]">light_mode</span>
                </div>
              </div>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-medium">Pénalités Matin</p>
              <p className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mt-1">- 50 XAF</p>
            </div>
            <div className="flex flex-col p-4 rounded-xl bg-white dark:bg-surface-dark shadow-card border-l-4 border-green-400">
              <div className="flex justify-between items-start mb-2">
                <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-indigo-400">
                  <span className="material-symbols-outlined text-[20px]">bedtime</span>
                </div>
              </div>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-medium">Pénalités Soir</p>
              <p className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mt-1 text-opacity-50">- 0 XAF</p>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-white dark:bg-surface-dark shadow-soft p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-text-primary-light dark:text-text-primary-dark">Présence &amp; Absences</h3>
              <div className="flex gap-2 text-xs font-medium">
                <span className="flex items-center gap-1 text-text-secondary-light dark:text-text-secondary-dark"><span className="size-2 rounded-full bg-red-400"></span> Retard</span>
                <span className="flex items-center gap-1 text-text-secondary-light dark:text-text-secondary-dark"><span className="size-2 rounded-full bg-primary"></span> Présent</span>
              </div>
            </div>
            <div className="grid grid-cols-7 mb-2">
              {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                <div key={i} className="text-center text-xs text-text-secondary-light dark:text-text-secondary-dark font-medium py-1">{day}</div>
              ))}
            </div>
            {/* Calendar grid would be dynamically generated */}
          </div>
          <div className="h-4"></div>
        </main>

        <nav className="fixed bottom-0 w-full max-w-md mx-auto bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-6 pt-3 px-6 z-30">
          <div className="flex justify-around items-center">
            <button className="flex flex-col items-center gap-1 w-20 group">
              <div className="flex items-center justify-center p-1 rounded-full bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary text-[24px]">dashboard</span>
              </div>
              <span className="text-[10px] font-bold text-primary">Dashboard</span>
            </button>
            <button className="flex flex-col items-center gap-1 w-20 group">
              <div className="flex items-center justify-center p-1 rounded-full text-text-secondary-light dark:text-text-secondary-dark group-hover:bg-gray-50 dark:group-hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined text-[24px]">history</span>
              </div>
              <span className="text-[10px] font-medium text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-primary-light dark:group-hover:text-text-primary-dark transition-colors">Historique</span>
            </button>
          </div>
        </nav>

      </div>
    </div>
  );
};

export default DriverDashboard;
