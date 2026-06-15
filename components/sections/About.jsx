"use client";

import { Brain, Gauge, Handshake, Layers, Rocket, Users } from "lucide-react";
import MotionCard from "@/components/ui/MotionCard";
import SectionHeader from "@/components/ui/SectionHeader";

const strengths = [
  ["Problem Solver", Brain],
  ["Team Player", Users],
  ["Project Management", Layers],
  ["Adaptable Developer", Gauge],
  ["Fast Learner", Rocket],
  ["AI Tool Explorer", Handshake]
];

export default function About() {
  return (
    <section id="about" className="section-pad px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="About" title="Practical engineering with a polished interface." />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <MotionCard className="p-4 sm:p-6 md:p-8">
            <p className="text-muted text-base leading-7 sm:text-lg sm:leading-8">
              Amanpal Singh is a Computer Science Engineering student at Lovely Professional University and a full-stack web developer focused on building practical, scalable, and visually polished web applications. He has experience developing role-based dashboards, real-time chat systems, AI quiz generation tools, and responsive frontend interfaces. His work combines strong problem-solving skills, clean UI development, API integration, and adaptability across modern web technologies.
            </p>
          </MotionCard>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {strengths.map(([label, Icon], index) => (
              <MotionCard key={label} delay={index * 0.04} className="p-4 sm:p-5">
                <Icon className="mb-3 text-cyanGlow sm:mb-4" size={22} />
                <h3 className="text-strong font-semibold">{label}</h3>
              </MotionCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
