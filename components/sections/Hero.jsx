"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const badges = ["React", "Next.js", "Tailwind CSS", "REST APIs", "AI APIs", "Socket.IO"];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen px-4 pt-32 md:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
            Amanpal Singh
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-medium text-slate-100 md:text-3xl">
            Full-Stack Web Developer building modern, AI-powered, and real-time web applications.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            I build responsive web applications, real-time systems, AI-powered tools, and role-based dashboards using React, Next.js, Tailwind CSS, REST APIs, and modern development workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-cyanGlow px-5 py-3 font-semibold text-ink shadow-glow transition hover:-translate-y-1">
              View Projects <ArrowDown size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyanGlow/60 hover:bg-white/10">
              Contact Me <Mail size={18} />
            </a>
            <a href="/Amanpal-Singh-CV.pdf" download className="inline-flex items-center gap-2 rounded-md border border-violetGlow/40 px-5 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-violetGlow/15">
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
          className="neon-border glass relative rounded-lg p-4"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="rounded-lg border border-white/10 bg-ink/80 p-4">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-greenGlow" />
              <span className="ml-3 text-xs text-slate-400">amanpal.dev/dashboard</span>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-md border border-cyanGlow/20 bg-cyanGlow/10 p-4">
                <p className="text-xs text-slate-400">Realtime</p>
                <p className="mt-2 text-2xl font-semibold text-white">Socket.IO</p>
              </div>
              <div className="rounded-md border border-violetGlow/20 bg-violetGlow/10 p-4">
                <p className="text-xs text-slate-400">AI Tools</p>
                <p className="mt-2 text-2xl font-semibold text-white">LLM APIs</p>
              </div>
              <div className="rounded-md border border-greenGlow/20 bg-greenGlow/10 p-4">
                <p className="text-xs text-slate-400">Dashboards</p>
                <p className="mt-2 text-2xl font-semibold text-white">RBAC</p>
              </div>
            </div>
            <pre className="mt-4 overflow-hidden rounded-md border border-white/10 bg-black/40 p-4 text-sm leading-7 text-cyan-100">
{`const developer = {
  name: "Amanpal Singh",
  stack: ["React", "Next.js", "APIs"],
  focus: "polished real-world apps"
};`}
            </pre>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="h-24 rounded-md border border-white/10 bg-gradient-to-br from-cyanGlow/20 to-transparent p-4">
                <div className="h-2 w-20 rounded bg-cyanGlow/80" />
                <div className="mt-4 h-2 w-32 rounded bg-white/20" />
                <div className="mt-2 h-2 w-24 rounded bg-white/15" />
              </div>
              <div className="h-24 rounded-md border border-white/10 bg-gradient-to-br from-violetGlow/20 to-transparent p-4">
                <div className="grid h-full grid-cols-5 items-end gap-2">
                  {[35, 58, 44, 74, 62].map((height) => (
                    <span key={height} className="rounded-t bg-cyanGlow/70" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {badges.map((badge, index) => (
              <motion.span
                key={badge}
                className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-200"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.18 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
