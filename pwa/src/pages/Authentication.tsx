
import React from 'react';

const Authentication: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-main dark:text-gray-100 overflow-x-hidden antialiased selection:bg-primary/30">
      {/* Background Pattern/Gradient */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-white/5"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col flex-1 w-full max-w-md mx-auto px-6 py-8 justify-center min-h-[100dvh]">

        {/* Logo & Header */}
        <div className="flex flex-col items-center mb-10 space-y-6">
          <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center shadow-sm backdrop-blur-sm border border-primary/10">
            <span className="material-symbols-outlined text-primary text-[32px]">local_taxi</span>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-text-main dark:text-white">RideLedger</h1>
            <p className="text-text-muted dark:text-gray-400 text-sm font-medium">Authentication</p>
          </div>
        </div>

        {/* Greeting */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">Welcome Back</h2>
          <p className="text-text-muted dark:text-gray-400 text-base">Sign in to manage your fleet and budget.</p>
        </div>

        {/* Role Switcher */}
        <div className="mb-8">
          <div className="flex p-1 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
            <label className="flex-1 cursor-pointer">
              <input defaultChecked name="role" type="radio" value="driver" className="peer sr-only" />
              <div className="flex items-center justify-center py-2.5 rounded-lg text-sm font-semibold text-text-muted dark:text-gray-400 transition-all peer-checked:bg-background-light dark:peer-checked:bg-background-dark peer-checked:text-text-main dark:peer-checked:text-white peer-checked:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                Driver
              </div>
            </label>
            <label className="flex-1 cursor-pointer">
              <input name="role" type="radio" value="admin" className="peer sr-only" />
              <div className="flex items-center justify-center py-2.5 rounded-lg text-sm font-semibold text-text-muted dark:text-gray-400 transition-all peer-checked:bg-background-light dark:peer-checked:bg-background-dark peer-checked:text-text-main dark:peer-checked:text-white peer-checked:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                Admin
              </div>
            </label>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-5">
          {/* Email/Phone Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted dark:text-gray-500 pl-1">Email or Phone</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted dark:text-gray-500 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined text-[22px]">mail</span>
              </div>
              <input type="text" placeholder="Enter your email or phone" className="w-full h-14 pl-12 pr-4 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl text-base text-text-main dark:text-white placeholder-text-muted/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center px-1">
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted dark:text-gray-500">Password</label>
              <a href="#" className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">Forgot Password?</a>
            </div>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted dark:text-gray-500 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined text-[22px]">lock</span>
              </div>
              <input type="password" placeholder="Enter your password" className="w-full h-14 pl-12 pr-12 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl text-base text-text-main dark:text-white placeholder-text-muted/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main dark:hover:text-white transition-colors p-1">
                <span className="material-symbols-outlined text-[22px]">visibility_off</span>
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 space-y-6">
          <button className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-luxe hover:shadow-luxe-hover transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2">
            Log In
          </button>

          {/* Biometric / Separator */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-border-light dark:border-border-dark"></div>
            <button title="Login with FaceID" className="flex-shrink-0 mx-4 h-10 w-10 flex items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary/50 text-text-muted hover:text-primary transition-all shadow-sm group">
              <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">face</span>
            </button>
            <div className="flex-grow border-t border-border-light dark:border-border-dark"></div>
          </div>

          {/* Bottom Link */}
          <div className="text-center">
            <p className="text-sm text-text-muted dark:text-gray-400">
              Don't have an account?
              <a href="#" className="font-bold text-text-main dark:text-white hover:text-primary dark:hover:text-primary transition-colors">Contact Admin</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Authentication;
