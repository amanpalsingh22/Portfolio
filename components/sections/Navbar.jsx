"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Certificates", "#certificates"],
  ["Education", "#education"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-lg px-4 py-3">
        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
          Amanpal Singh<span className="text-cyanGlow">.</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md border border-white/10 p-2 text-slate-100 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <div className="glass mx-auto mt-2 grid max-w-7xl gap-1 rounded-lg p-3 lg:hidden">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm text-slate-200 transition hover:bg-white/10"
            >
              {label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
