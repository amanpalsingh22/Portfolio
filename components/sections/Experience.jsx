"use client";

import { motion } from "framer-motion";
import {
  Bell,
  BriefcaseBusiness,
  ClipboardCheck,
  GitPullRequestArrow,
  LayoutDashboard
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const points = [
  "Contributed to Vivgram, a cloud-based platform for animal care and research facility operations, with role-focused dashboard interfaces using Next.js, React, and Material UI.",
  "Built frontend workflows for room, rack, and cage visibility, including capacity tracking, utilization states, movement requests, and overcrowding-focused operational views.",
  "Developed task, request, and protocol screens for faculty and operations users with API-driven status updates and role-aware navigation."
];

const highlights = [
  ["Product", "Vivgram"],
  ["Scope", "Research Ops"],
  ["Views", "Rooms / Racks / Cages"]
];

const modules = [
  ["Facility tracking", LayoutDashboard],
  ["Task scheduling", ClipboardCheck],
  ["Requests and protocols", GitPullRequestArrow],
  ["Health reports and alerts", Bell]
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Experience"
          title="Professional dashboard experience."
          description="A focused snapshot of Vivgram-style research operations: role-based lab workflows, API-driven modules, and practical dashboard UX."
        />
        <motion.article
          className="glass overflow-hidden rounded-lg border border-cyanGlow/15"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-4 sm:p-5 md:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyanGlow sm:text-sm sm:tracking-[0.22em]">July 2025 - Jan 2026</p>
                  <h3 className="text-strong mt-2 text-xl font-semibold sm:text-2xl">Frontend / Full-Stack Developer</h3>
                  <p className="text-muted mt-2 text-base sm:text-lg">Virtuous / Vivgram</p>
                </div>
                <div className="border-soft bg-tint flex h-12 w-12 shrink-0 items-center justify-center rounded-md border text-cyanGlow">
                  <BriefcaseBusiness size={24} />
                </div>
              </div>

              <p className="text-muted mt-5 max-w-3xl text-sm leading-6">
                Built and improved frontend workflows for a research facility operations platform that helps teams manage animal care tasks, room and cage activity, requests, protocols, inventory, alerts, and analytics from role-specific dashboards.
              </p>

              <div className="mt-5 grid gap-2 min-[430px]:grid-cols-3 sm:gap-3">
                {highlights.map(([label, value]) => (
                  <div key={label} className="border-soft bg-soft rounded-md border p-3">
                    <p className="text-subtle text-xs uppercase tracking-[0.16em]">{label}</p>
                    <p className="text-strong mt-1.5 text-base font-semibold">{value}</p>
                  </div>
                ))}
              </div>

              <ul className="text-muted mt-5 grid gap-2 text-sm">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 leading-6">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-greenGlow" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-soft bg-soft border-t p-4 sm:p-5 md:p-6 lg:border-l lg:border-t-0">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanGlow">Key work</p>
                <div className="mt-4 grid gap-2 min-[520px]:grid-cols-2 lg:grid-cols-1">
                  {modules.map(([module, Icon]) => (
                    <div key={module} className="border-soft bg-raised text-muted flex items-center gap-3 rounded-md border px-3 py-3 text-sm">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-cyanGlow/10 text-cyanGlow">
                        <Icon size={16} />
                      </span>
                      <span>{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
