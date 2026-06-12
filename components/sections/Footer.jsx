import { Github, Linkedin, Mail } from "lucide-react";
import BrandLogo from "../ui/BrandLogo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-3 md:flex-row md:text-left">
          <BrandLogo decorative idPrefix="footer-logo" className="h-10 w-10 shrink-0" />
          <div>
            <h2 className="font-semibold text-white">Amanpal Singh</h2>
            <p className="text-sm text-slate-400">Full-Stack Web Developer</p>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <a aria-label="GitHub" href="https://github.com/amanpalsingh22" target="_blank" className="rounded-md border border-white/10 p-2 text-slate-300 transition hover:text-cyanGlow">
            <Github size={18} />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/amanpal-singh-" target="_blank" className="rounded-md border border-white/10 p-2 text-slate-300 transition hover:text-cyanGlow">
            <Linkedin size={18} />
          </a>
          <a aria-label="Email" href="mailto:amanpalsingh878@gmail.com" className="rounded-md border border-white/10 p-2 text-slate-300 transition hover:text-cyanGlow">
            <Mail size={18} />
          </a>
        </div>
        <p className="text-sm text-slate-500">&copy; 2026 Amanpal Singh. All rights reserved.</p>
      </div>
    </footer>
  );
}
