"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import BrandLogo from "../ui/BrandLogo";

const navItems = [
  ["Home", "#home"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["About", "#about"],
  ["Certificates", "#certificates"],
  ["Education", "#education"],
  ["Extracurriculars", "#extracurriculars"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sectionIds = navItems.map(([, href]) => href.replace("#", ""));

    function updateActiveSection() {
      const scrollPosition = window.scrollY + 170;
      const currentId = sectionIds.reduce((current, id) => {
        const section = document.getElementById(id);

        if (!section) {
          return current;
        }

        return section.offsetTop <= scrollPosition ? id : current;
      }, "home");

      setActiveId(currentId);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-lg px-5 py-3">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-white">
          <BrandLogo decorative idPrefix="navbar-logo" className="h-9 w-9 shrink-0 drop-shadow-[0_0_18px_rgba(125,211,252,0.18)]" />
          <span>
            Amanpal Singh<span className="text-cyanGlow">.</span>
          </span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => {
            const isActive = activeId === href.replace("#", "");

            return (
              <a
                key={label}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-md px-3 py-2 text-sm transition ${isActive ? "bg-white/[0.08] text-white" : "text-slate-300 hover:bg-white/[0.06] hover:text-white"}`}
              >
                {label}
                {isActive ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px rounded-full bg-cyanGlow" />
                ) : null}
              </a>
            );
          })}
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md border border-white/10 p-2 text-slate-100 transition hover:bg-white/[0.06] lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <div className="glass mx-auto mt-2 grid max-w-7xl gap-1 rounded-lg p-3 lg:hidden">
          {navItems.map(([label, href]) => {
            const isActive = activeId === href.replace("#", "");

            return (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-3 py-3 text-sm transition ${isActive ? "bg-white/[0.08] text-white" : "text-slate-200 hover:bg-white/[0.06]"}`}
              >
                {label}
              </a>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}
