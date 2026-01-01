"use client";

export default function Header() {
  return (
    <header className="h-20 flex items-center justify-between px-6 lg:px-10 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0f1a0c]/80 backdrop-blur-md z-10">
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-2 text-slate-600 dark:text-slate-300">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Dashboard Overview
        </h2>
      </div>

      <div className="flex items-center gap-4 lg:gap-8">
        {/* Search */}
        <div className="hidden md:flex items-center h-10 w-64 lg:w-80 bg-slate-100 dark:bg-white/5 rounded-xl px-4 border border-transparent focus-within:border-primary transition-colors">
          <span
            className="material-symbols-outlined text-slate-400"
            style={{ fontSize: "20px" }}
          >
            search
          </span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-full text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
            placeholder="Search users, IDs..."
            type="text"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="size-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors relative">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              notifications
            </span>
            <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border border-white dark:border-black"></span>
          </button>

          <button className="hidden sm:flex h-10 px-4 items-center justify-center rounded-xl bg-primary text-black text-sm font-bold hover:bg-primary-dark transition-colors gap-2">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              add
            </span>
            <span>New Opportunity</span>
          </button>
        </div>
      </div>
    </header>
  );
}
