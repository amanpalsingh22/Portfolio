"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Bell,
  Boxes,
  BriefcaseBusiness,
  ClipboardCheck,
  Database,
  GitPullRequestArrow,
  LayoutDashboard,
  ShieldCheck,
  UsersRound
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const points = [
  "Contributed to Vivgram, a cloud-based platform for animal care and research facility operations, with role-focused dashboard interfaces using Next.js, React, and Material UI.",
  "Built frontend workflows for room, rack, and cage visibility, including capacity tracking, utilization states, movement requests, and overcrowding-focused operational views.",
  "Developed task management interfaces for scheduling, assigning, tracking, and completing daily room and service-area work with API-driven status updates.",
  "Implemented request and protocol-oriented screens for faculty and operations users, supporting transfer, breeding, approval, and status-tracking workflows.",
  "Improved operational visibility with responsive dashboards for health reports, observations, inventory/rack data, performance analytics, and role-aware navigation."
];

const highlights = [
  ["Product", "Vivgram"],
  ["Role groups", "5+"],
  ["Facility views", "Rooms / Racks / Cages"],
  ["Focus", "Research Ops"]
];

const modules = [
  ["Room, rack, cage tracking", LayoutDashboard],
  ["Task scheduling", ClipboardCheck],
  ["Transfer and breeding requests", GitPullRequestArrow],
  ["Health reports and alerts", Bell],
  ["Inventory and buffer management", Database],
  ["Performance analytics", BarChart3]
];

const roles = ["Technicians", "Facility Supervisors", "Operation Managers", "Project Coordinators", "Faculty"];
const tech = ["Next.js", "React", "Material UI", "REST APIs", "Role-based UI", "Dashboard UX"];
const operations = ["Capacity", "Utilization", "Overcrowding", "Audit trails", "Health trends", "Task stats"];

function DashboardPreview() {
  return (
    <div className="rounded-lg border border-white/10 bg-ink/80 p-4 shadow-glow">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-greenGlow" />
        </div>
        <span className="rounded-md border border-greenGlow/20 bg-greenGlow/10 px-2.5 py-1 text-xs font-semibold text-greenGlow">
          Live ops
        </span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-3">
          {["Room capacity", "Rack movements", "Cage alerts", "Task groups"].map((item, index) => (
            <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-slate-300">{item}</span>
                <span className={`h-2 w-2 rounded-full ${index % 2 === 0 ? "bg-cyanGlow" : "bg-greenGlow"}`} />
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-white/10">
                <span className="block h-full rounded-full bg-cyanGlow/80" style={{ width: `${54 + index * 11}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Activity visibility</p>
            <LayoutDashboard size={18} className="text-cyanGlow" />
          </div>
          <div className="mt-5 grid h-36 grid-cols-5 items-end gap-2">
            {[44, 78, 58, 92, 68].map((height, index) => (
              <span
                key={height}
                className={`${index % 2 === 0 ? "bg-cyanGlow/70" : "bg-greenGlow/70"} rounded-t`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {["Health reports", "Requests", "Protocols", "Analytics"].map((label) => (
              <span key={label} className="rounded-md border border-white/10 bg-black/20 px-2.5 py-2 text-xs text-slate-300">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title="Professional dashboard experience."
          description="A focused case study from Vivgram-style research operations: role-based lab workflows, API-driven modules, and practical dashboard UX."
        />
        <motion.article
          className="glass overflow-hidden rounded-lg border border-cyanGlow/15"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanGlow">July 2025 - Jan 2026</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">Frontend / Full-Stack Developer</h3>
                  <p className="mt-2 text-lg text-slate-300">Virtuous / Vivgram</p>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/10 text-cyanGlow">
                  <BriefcaseBusiness size={28} />
                </div>
              </div>

              <p className="mt-6 max-w-3xl leading-7 text-slate-300">
                Built and improved frontend workflows for a research facility operations platform that helps teams manage animal care tasks, room and cage activity, requests, protocols, inventory, alerts, and analytics from role-specific dashboards.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                {highlights.map(([label, value]) => (
                  <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-6 grid gap-3 text-slate-300">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 leading-7">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-greenGlow" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/10 bg-white/[0.025] p-6 md:p-8 lg:border-l lg:border-t-0">
              <DashboardPreview />

              <div className="mt-6">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyanGlow">
                  <UsersRound size={17} />
                  Role-aware access
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {roles.map((role) => (
                    <span key={role} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanGlow">Dashboard modules</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {modules.map(([module, Icon]) => (
                    <div key={module} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
                      <Icon size={16} className="text-greenGlow" />
                      {module}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanGlow">Operational coverage</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {operations.map((item) => (
                    <span key={item} className="rounded-md border border-greenGlow/15 bg-greenGlow/10 px-3 py-2 text-xs font-medium text-emerald-50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {tech.map((item) => (
                  <span key={item} className="rounded-md border border-cyanGlow/20 bg-cyanGlow/10 px-3 py-2 text-xs font-medium text-cyan-50">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
