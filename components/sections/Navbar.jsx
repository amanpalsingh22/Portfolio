"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
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
  const [theme, setTheme] = useState(() => {
    if (typeof document === "undefined") {
      return "light";
    }

    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

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

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-lg px-3 py-2.5 sm:px-5 sm:py-3">
        <a href="#home" className="text-strong flex min-w-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] sm:gap-3 sm:text-sm sm:tracking-[0.22em]">
          <BrandLogo decorative priority sizes="44px" className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
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
                className={`relative rounded-md px-3 py-2 text-sm transition ${isActive ? "bg-tint text-strong" : "text-muted hover:bg-soft hover:text-strong"}`}
              >
                {label}
                {isActive ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px rounded-full bg-cyanGlow" />
                ) : null}
              </a>
            );
          })}
        </div>
        <div className="ml-2 flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={theme === "dark"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            suppressHydrationWarning
            className="border-soft text-strong hover:bg-soft inline-flex items-center gap-2 rounded-md border px-2.5 py-2 text-sm font-semibold transition"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="border-soft text-strong hover:bg-soft shrink-0 rounded-md border p-2 transition lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="glass mx-auto mt-2 grid max-h-[calc(100svh-5.5rem)] max-w-7xl gap-1 overflow-y-auto rounded-lg p-2.5 lg:hidden">
          {navItems.map(([label, href]) => {
            const isActive = activeId === href.replace("#", "");

            return (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-3 py-3 text-sm transition ${isActive ? "bg-tint text-strong" : "text-muted hover:bg-soft hover:text-strong"}`}
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
