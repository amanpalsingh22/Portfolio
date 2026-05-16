"use client";

import { CheckCircle2 } from "lucide-react";
import MotionCard from "@/components/ui/MotionCard";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  "I build real projects, not just demos.",
  "I understand frontend workflows, APIs, dashboards, and responsive UI.",
  "I have hands-on experience with AI APIs and real-time communication.",
  "I am adaptable, collaborative, and focused on solving practical problems."
];

export default function WhyHireMe() {
  return (
    <section className="section-pad px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Why Hire Me" title="A practical developer for practical outcomes." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <MotionCard key={reason} delay={index * 0.04} className="p-6">
              <CheckCircle2 className="mb-5 text-greenGlow" size={28} />
              <p className="leading-7 text-slate-200">{reason}</p>
            </MotionCard>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-cyanGlow/20 bg-cyanGlow/10 p-8 text-center">
          <h3 className="text-3xl font-semibold text-white">Let&apos;s build something impactful together.</h3>
          <a href="#contact" className="mt-6 inline-flex rounded-md bg-white px-5 py-3 font-semibold text-ink transition hover:-translate-y-1">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
