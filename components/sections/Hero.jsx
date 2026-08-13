"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import BrandLogo from "../ui/BrandLogo";
import { trackEvent } from "@/lib/analytics";

const badges = ["Next.js", "AI APIs", "Socket.IO"];
const focusAreas = [
  ["Product UI", "Clean interfaces"],
  ["AI Workflows", "Practical automations"],
  ["Realtime Apps", "Live interactions"]
];

export default function Hero() {
  return (
    <section id="home" className="flex min-h-[100svh] items-center px-4 pb-10 pt-24 sm:pt-28 md:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cyanGlow sm:mb-5 sm:tracking-[0.28em]">
            Amanpal Singh / Portfolio
          </p>
          <h1 className="text-strong max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Full-Stack Developer.
          </h1>
          <p className="text-primary mt-4 max-w-3xl text-xl font-medium leading-tight sm:text-2xl md:mt-5 md:text-3xl">
            Building clean, responsive, AI-powered, and real-time web applications.
          </p>
          <p className="text-muted mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 md:mt-5">
            I build complete web products—from real-time chat systems and AI tools to role-based dashboards—using React, Next.js, APIs, and modern backend integrations.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyanGlow sm:w-auto dark:bg-white dark:text-ink dark:hover:bg-cyan-100">
              View Projects <ArrowDown size={18} />
            </a>
            <a href="#contact" className="border-soft text-strong hover:bg-tint inline-flex w-full items-center justify-center gap-2 rounded-md border px-5 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-cyanGlow/60 sm:w-auto">
              Contact Me <Mail size={18} />
            </a>
            <a href="/Amanpal-Singh-CV.pdf" download onClick={() => trackEvent("CV Download")} className="border-soft text-strong hover:bg-soft inline-flex w-full items-center justify-center gap-2 rounded-md border px-5 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-violetGlow/60 sm:w-auto">
              Download CV <Download size={18} />
            </a>
          </div>
          <div className="mt-7 flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/amanpalsingh22" target="_blank" className="border-soft text-muted rounded-md border p-3 transition hover:border-cyanGlow hover:text-cyanGlow">
              <Github size={21} />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/amanpal-singh-" target="_blank" className="border-soft text-muted rounded-md border p-3 transition hover:border-cyanGlow hover:text-cyanGlow">
              <Linkedin size={21} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="glass relative overflow-hidden rounded-lg p-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-6 dark:shadow-[0_18px_55px_rgba(0,0,0,0.22)]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyanGlow/10 blur-3xl" />
          <div className="border-soft relative flex flex-col gap-4 border-b pb-4 sm:flex-row sm:items-center sm:justify-between sm:pb-5">
            <div className="flex items-center gap-4">
              <BrandLogo decorative priority sizes="64px" className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
              <div>
                <p className="text-subtle text-sm">Current focus</p>
                <h2 className="text-strong mt-1 text-xl font-semibold tracking-tight sm:text-2xl">Practical product interfaces</h2>
              </div>
            </div>
            <span className="rounded-md border border-greenGlow/20 bg-greenGlow/10 px-3 py-1.5 text-xs font-semibold text-greenGlow">
              Available
            </span>
          </div>

          <div className="relative mt-5 grid gap-3">
            {focusAreas.map(([label, value]) => (
              <div key={label} className="border-soft bg-soft flex items-center justify-between gap-4 rounded-md border px-4 py-3">
                <p className="text-subtle text-xs font-semibold uppercase tracking-[0.18em]">{label}</p>
                <p className="text-strong text-sm font-semibold sm:text-base">{value}</p>
              </div>
            ))}
          </div>

          <div className="border-soft relative mt-5 border-t pt-5">
            <p className="text-subtle mb-3 text-xs font-semibold uppercase tracking-[0.18em]">Selected stack</p>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span key={badge} className="border-soft bg-soft text-primary rounded-md border px-3 py-2 text-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
