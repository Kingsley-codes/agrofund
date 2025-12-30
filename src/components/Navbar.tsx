"use client";

import { CldImage } from "next-cloudinary";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#eaf3e7] dark:border-white/10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7">
            <CldImage
              src="y3byxgonrtyk5ti1290h"
              alt="Agrofund Hub logo"
              width={24}
              height={24}
              className="object-contain w-full h-full"
            />
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-primary dark:text-white">
            Agrofund Hub
          </h2>
        </div>

        <div className="hidden md:flex flex-1 justify-center gap-8">
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Investments
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            How it works
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            About Us
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Contact
          </a>
        </div>

        <div className="flex gap-3">
          <button className="hidden sm:flex h-10 items-center justify-center rounded-xl bg-primary/10 px-4 text-sm font-bold text-text-main dark:text-white hover:bg-primary/20 transition-colors">
            Log In
          </button>
          <button className="flex h-10 items-center justify-center rounded-xl bg-primary px-4 text-sm font-bold text-[#111b0d] hover:bg-[#3cd610] hover:shadow-lg hover:shadow-primary/20 transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
