"use client";

import { Award } from "lucide-react";
import MotionCard from "@/components/ui/MotionCard";
import SectionHeader from "@/components/ui/SectionHeader";

const certificates = [
  "Full Stack Web Development Bootcamp - Feb 2025",
  "Data Structures and Algorithms using C++ - April 2025",
  "Generative AI for Everyone - DeepLearning.AI - May 2024",
  "Generative AI with Large Language Models - DeepLearning.AI and Amazon Web Services - April 2024",
  "Introduction to Large Language Models - Google Cloud - April 2024"
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-pad px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Certificates" title="Focused learning across full-stack, DSA, and AI." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <MotionCard key={certificate} delay={index * 0.04} className="p-6">
              <Award className="mb-5 text-greenGlow" size={28} />
              <h3 className="text-lg font-semibold leading-7 text-white">{certificate}</h3>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
