"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import BrandLogo from "../ui/BrandLogo";

const badges = ["React", "Next.js", "Tailwind CSS", "REST APIs", "AI APIs", "Socket.IO"];
const metrics = [
  ["Realtime", "Socket.IO"],
  ["AI APIs", "LLM tools"],
  ["Dashboards", "Role-based UI"]
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
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyanGlow sm:mb-5 sm:tracking-[0.28em]">
            Portfolio / Full-stack developer
          </p>
          <h1 className="text-strong max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Amanpal Singh
          </h1>
          <p className="text-primary mt-4 max-w-3xl text-xl font-medium leading-tight sm:text-2xl md:mt-5 md:text-3xl">
            Building clean, responsive, AI-powered, and real-time web applications.
          </p>
          <p className="text-muted mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 md:mt-5">
            I build responsive web applications, real-time systems, AI-powered tools, and role-based dashboards using React, Next.js, Tailwind CSS, REST APIs, and modern development workflows.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyanGlow sm:w-auto dark:bg-white dark:text-ink dark:hover:bg-cyan-100">
              View Projects <ArrowDown size={18} />
            </a>
            <a href="#contact" className="border-soft text-strong hover:bg-tint inline-flex w-full items-center justify-center gap-2 rounded-md border px-5 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-cyanGlow/60 sm:w-auto">
              Contact Me <Mail size={18} />
            </a>
            <a href="/Amanpal-Singh-CV.pdf" download className="border-soft text-strong hover:bg-soft inline-flex w-full items-center justify-center gap-2 rounded-md border px-5 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-violetGlow/60 sm:w-auto">
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
          className="glass relative rounded-lg p-4 sm:p-6"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border-soft flex flex-col gap-4 border-b pb-4 sm:flex-row sm:items-center sm:justify-between sm:pb-5">
            <div className="flex items-center gap-4">
              <BrandLogo decorative idPrefix="hero-logo" className="h-12 w-12 shrink-0 drop-shadow-[0_0_24px_rgba(125,211,252,0.2)] sm:h-14 sm:w-14" />
              <div>
                <p className="text-subtle text-sm">Current focus</p>
                <h2 className="text-strong mt-1 text-xl font-semibold tracking-tight sm:text-2xl">Practical product interfaces</h2>
              </div>
            </div>
            <span className="rounded-md border border-greenGlow/20 bg-greenGlow/10 px-3 py-1.5 text-xs font-semibold text-greenGlow">
              Available
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {metrics.map(([label, value]) => (
              <div key={label} className="border-soft bg-soft rounded-md border p-4">
                <p className="text-subtle text-xs uppercase tracking-[0.18em]">{label}</p>
                <p className="text-strong mt-2 text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <pre className="border-soft bg-code text-primary mt-5 overflow-x-auto rounded-md border p-3 text-xs leading-6 sm:p-4 sm:text-sm sm:leading-7">
{`const focus = [
  "clean UI",
  "API workflows",
  "real-world dashboards"
];`}
          </pre>

          <div className="mt-5 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="border-soft bg-soft text-primary rounded-md border px-2.5 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
