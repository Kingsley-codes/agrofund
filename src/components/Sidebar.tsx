"use client";

import { CldImage } from "next-cloudinary";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { PiPlantDuotone } from "react-icons/pi";
import { FaMoneyBills } from "react-icons/fa6";
import { TbCreditCardPay } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  const navItems = [
    { icon: <MdDashboard />, label: "Dashboard", active: true },
    { icon: <FaUsers />, label: "Users", active: false },
    { icon: <PiPlantDuotone />, label: "Produce", active: false },
    { icon: <TbCreditCardPay />, label: "Payments", active: false },
    { icon: <FaMoneyBills />, label: "Withdrawals", active: false },
  ];

  const bottomNavItems = [
    { icon: <IoSettingsOutline />, label: "Settings", active: false },
  ];

  return (
    <aside className="w-72 hidden lg:flex flex-col h-full border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f1a0c]">
      {/* Logo Section */}
      <div className="p-6 flex items-center gap-3">
        <div className="h-7 w-7">
          <CldImage
            src="y3byxgonrtyk5ti1290h"
            alt="Agrofund Hub logo"
            width={24}
            height={24}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold leading-none tracking-tight">
            Agrofund Hub
          </h1>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
            Admin Portal
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 flex flex-col gap-2 overflow-y-auto">
        {navItems.map((item) => (
          <a
            key={item.label}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
              item.active
                ? "bg-primary text-black shadow-sm shadow-primary/30"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 group"
            }`}
            href="#"
          >
            <span
              className={`material-symbols-outlined ${
                item.active ? "" : "group-hover:text-primary transition-colors"
              }`}
              style={{ fontSize: "24px" }}
            >
              {item.icon}
            </span>
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        {bottomNavItems.map((item) => (
          <a
            key={item.label}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group"
            href="#"
          >
            <span
              className="material-symbols-outlined group-hover:text-primary transition-colors"
              style={{ fontSize: "24px" }}
            >
              {item.icon}
            </span>
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}

        {/* User Profile */}
        <div className="mt-4 flex items-center gap-3 px-4 py-3 bg-slate-50 dark:bg-white/5 rounded-xl">
          <div
            className="size-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7FVrX9bE3VIiPSKpwKwMA1j9VUCBGAQ15XMLyO9CKSo-miKnL8qxhtE-LV1SCiFnU26Z_5lUmFqZDJ5ZjQg5NVUKpzV6TaJbPWoLM0oDf23Gx3qLVBr18OaB91BlSDXXQkGxHPHNr1JyVzLNa8lcCtaTPb1bY5PT8tKs75POUnYT94s7rCHL5O-LDtkx-NJ5Pd1t1JknEbmZFJVhGlEcQB7upkSE4G5QiurDv6yBuOUrXseuOCqPFWp6bmX2Vf_UeSgcc9IflJ6c')`,
            }}
            aria-label="Admin user profile picture showing a smiling man"
          />
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-bold truncate">Alex Morgan</span>
            <span className="text-xs text-slate-500 truncate">Super Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
