
import React from 'react';

const AccountSettings: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111317] dark:text-white h-screen flex flex-col overflow-hidden selection:bg-primary/30">

      <header className="bg-white dark:bg-[#1a2230] px-4 py-3 flex items-center justify-center relative shadow-sm z-10">
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-center">Paramètres</h2>
      </header>

      <main className="flex-1 overflow-y-auto hide-scrollbar pb-24">

        <div className="bg-white dark:bg-[#1a2230] pb-6 pt-4 mb-4 rounded-b-2xl shadow-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full h-24 w-24 ring-4 ring-background-light dark:ring-background-dark shadow-md"
                style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFFaQ6A94KFX0O35F1-xFp7QBN8s6b-gFQiC7_AjJGtt5Lx9e0k7SunaVrCEoitfzM51qS1PetjJUBk9mQh9KtJNE3w68ThBPdt7YPTiIZHliws7x0LHA1wqL4Fp38o_OSIMdqTaJigKRUavQXFcS6_iB7g4zJmnNAetDRMJ8FqVFtTdUE4llu6qJEgZvV5DaxpEXzdwxW7wjIeFl-6AaQ59ye2VzpzekjK_RCKC6tz824uSZKgmKvWTN4pVU9aWqwkWOYU6Jjhw")` }}
              >
              </div>
              <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full border-2 border-white dark:border-[#1a2230] shadow-sm">
                <span className="material-symbols-outlined text-sm font-bold block" style={{ fontSize: '16px' }}>edit</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-[#111317] dark:text-white">Jean Dupont</h1>
              <p className="text-[#646f87] dark:text-gray-400 text-sm font-medium mt-1">+237 699 12 34 56</p>
              <div className="mt-2 px-3 py-1 bg-primary/10 rounded-full">
                <p className="text-primary text-xs font-bold uppercase tracking-wide">Chauffeur</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 mb-6">
          <h3 className="text-[#646f87] dark:text-gray-400 text-sm font-bold uppercase tracking-wider mb-3 ml-2">Préférences</h3>
          <div className="bg-white dark:bg-[#1a2230] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
            {/* Settings items */}
          </div>
        </div>

        <div className="px-4 mb-8">
          <h3 className="text-[#646f87] dark:text-gray-400 text-sm font-bold uppercase tracking-wider mb-3 ml-2">Sécurité</h3>
          <div className="bg-white dark:bg-[#1a2230] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
            {/* Security items */}
          </div>
        </div>

        <div className="px-4 flex flex-col items-center gap-6">
          <button className="w-full bg-white dark:bg-[#1a2230] border border-red-100 dark:border-red-900/30 text-red-500 font-bold py-4 rounded-xl shadow-sm hover:bg-red-50 dark:hover:bg-red-900/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">logout</span>
            Déconnexion
          </button>
          <div className="text-center pb-6">
            <p className="text-xs text-[#646f87] dark:text-gray-500 font-medium">RideLedger v1.0.4</p>
          </div>
        </div>

      </main>

      <nav className="bg-white dark:bg-[#1a2230] border-t border-gray-100 dark:border-gray-800 fixed bottom-0 w-full pb-safe pt-2 px-2 z-50 h-[80px]">
        {/* Navigation */}
      </nav>

    </div>
  );
};

export default AccountSettings;
