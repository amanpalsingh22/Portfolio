"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const points = [
  "Built a role-based laboratory operations dashboard for animal research management using Next.js, React, and Material UI.",
  "Developed modules for animal management, housing management, inventory, directory, and request tracking.",
  "Integrated frontend workflows with REST APIs for rack and cage movement requests, task handling, and operational data management.",
  "Implemented authentication-aware dashboards for technicians, faculty, veterinarians, supervisors, and coordinators.",
  "Improved visibility into lab activities through responsive interfaces, analytics tracking, and structured dashboard navigation."
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Experience" title="Professional dashboard experience." />
        <motion.article
          className="glass neon-border rounded-lg border-l-4 border-l-cyanGlow p-6 md:p-8"
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanGlow">July 2025 - Jan 2026</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">Frontend / Full-Stack Developer</h3>
              <p className="mt-2 text-lg text-slate-300">Virtuous</p>
            </div>
            <div className="rounded-md border border-white/10 bg-white/10 p-4 text-cyanGlow">
              <BriefcaseBusiness size={32} />
            </div>
          </div>
          <ul className="mt-6 grid gap-3 text-slate-300">
            {points.map((point) => (
              <li key={point} className="flex gap-3 leading-7">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-greenGlow" />
                {point}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
