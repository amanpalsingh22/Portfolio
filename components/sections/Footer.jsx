import { Github, Linkedin, Mail } from "lucide-react";
import BrandLogo from "../ui/BrandLogo";

export default function Footer() {
  return (
    <footer className="border-soft border-t px-4 py-7 sm:py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-3 md:flex-row md:text-left">
          <BrandLogo decorative idPrefix="footer-logo" className="h-10 w-10 shrink-0" />
          <div>
            <h2 className="text-strong font-semibold">Amanpal Singh</h2>
            <p className="text-subtle text-sm">Full-Stack Web Developer</p>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <a aria-label="GitHub" href="https://github.com/amanpalsingh22" target="_blank" className="border-soft text-muted rounded-md border p-2 transition hover:text-cyanGlow">
            <Github size={18} />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/amanpal-singh-" target="_blank" className="border-soft text-muted rounded-md border p-2 transition hover:text-cyanGlow">
            <Linkedin size={18} />
          </a>
          <a aria-label="Email" href="mailto:amanpalsingh878@gmail.com" className="border-soft text-muted rounded-md border p-2 transition hover:text-cyanGlow">
            <Mail size={18} />
          </a>
        </div>
        <p className="text-subtle text-xs sm:text-sm">&copy; 2026 Amanpal Singh. All rights reserved.</p>
      </div>
    </footer>
  );
}
