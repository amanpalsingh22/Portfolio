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
    <section id="home" className="flex min-h-screen items-center px-4 pt-28 md:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-cyanGlow">
            Portfolio / Full-stack developer
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
            Amanpal Singh
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-medium leading-tight text-slate-100 md:text-3xl">
            Building clean, responsive, AI-powered, and real-time web applications.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            I build responsive web applications, real-time systems, AI-powered tools, and role-based dashboards using React, Next.js, Tailwind CSS, REST APIs, and modern development workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-cyan-100">
              View Projects <ArrowDown size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyanGlow/60 hover:bg-white/10">
              Contact Me <Mail size={18} />
            </a>
            <a href="/Amanpal-Singh-CV.pdf" download className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-violetGlow/60 hover:bg-white/10">
              Download CV <Download size={18} />
            </a>
          </div>
          <div className="mt-7 flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/amanpalsingh22" target="_blank" className="rounded-md border border-white/15 p-3 text-slate-200 transition hover:border-cyanGlow hover:text-cyanGlow">
              <Github size={21} />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/amanpal-singh-" target="_blank" className="rounded-md border border-white/15 p-3 text-slate-200 transition hover:border-cyanGlow hover:text-cyanGlow">
              <Linkedin size={21} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="glass relative rounded-lg p-6"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <BrandLogo decorative idPrefix="hero-logo" className="h-14 w-14 shrink-0 drop-shadow-[0_0_24px_rgba(125,211,252,0.2)]" />
              <div>
                <p className="text-sm text-slate-400">Current focus</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">Practical product interfaces</h2>
              </div>
            </div>
            <span className="rounded-md border border-greenGlow/20 bg-greenGlow/10 px-3 py-1.5 text-xs font-semibold text-greenGlow">
              Available
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {metrics.map(([label, value]) => (
              <div key={label} className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>

          <pre className="mt-5 overflow-hidden rounded-md border border-white/10 bg-black/25 p-4 text-sm leading-7 text-slate-200">
{`const focus = [
  "clean UI",
  "API workflows",
  "real-world dashboards"
];`}
          </pre>

          <div className="mt-5 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
