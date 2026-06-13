"use client";

import { HeartHandshake, MicVocal } from "lucide-react";
import MotionCard from "@/components/ui/MotionCard";
import SectionHeader from "@/components/ui/SectionHeader";

const items = [
  {
    title: "Social Work",
    date: "July 2023",
    description:
      "Volunteered to serve meals to visually impaired and differently-abled individuals at an NGO.",
    Icon: HeartHandshake
  },
  {
    title: "Event Management",
    date: "March 2024",
    description:
      "Volunteered in backstage management and supported event discipline coordination.",
    Icon: MicVocal
  }
];

export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="section-pad px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Beyond Code" title="Leadership, service, and calm execution." />
        <div className="grid gap-5 md:grid-cols-2">
          {items.map(({ title, date, description, Icon }, index) => (
            <MotionCard key={title} delay={index * 0.05} className="p-6">
              <Icon className="mb-5 text-violetGlow" size={28} />
              <p className="text-sm font-medium text-cyanGlow">{date}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{description}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
