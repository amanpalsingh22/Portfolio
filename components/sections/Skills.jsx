"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const skillGroups = {
  Languages: ["JavaScript", "C++", "C"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Material UI", "Bootstrap", "HTML", "CSS"],
  "Backend & Data": ["Node.js", "Express.js", "REST APIs", "Socket.IO", "MongoDB", "MySQL"],
  "AI & Integrations": ["OpenAI API", "Anthropic API", "Cloudinary"],
  "Developer Tools": ["Git", "GitHub"],
  "Professional Skills": ["Problem Solving", "Collaboration", "Project Management", "Adaptability"]
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Skills" title="A stack shaped for modern product work." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(skillGroups).map(([group, skills], index) => (
            <motion.div
              key={group}
              className="glass rounded-lg p-4 sm:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <h3 className="text-strong mb-4 text-lg font-semibold sm:mb-5 sm:text-xl">{group}</h3>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-cyanGlow/20 bg-cyanGlow/10 px-2.5 py-1.5 text-xs font-medium text-cyanGlow transition hover:-translate-y-1 hover:border-cyanGlow/70 hover:bg-cyanGlow/15 hover:shadow-glow sm:px-3 sm:py-2 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
