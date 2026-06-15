"use client";

import { GraduationCap } from "lucide-react";
import MotionCard from "@/components/ui/MotionCard";
import SectionHeader from "@/components/ui/SectionHeader";

const education = [
  {
    school: "Lovely Professional University, Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    detail: "Since Sept 2022"
  },
  {
    school: "M.R. Citi Public Senior Secondary School, Balachaur, SBS Nagar",
    degree: "Intermediate",
    detail: "76.4% | April 2019 - March 2021"
  },
  {
    school: "Balachaur Public Senior Secondary School, Balachaur, SBS Nagar",
    degree: "Matriculation",
    detail: "94.1% | April 2017 - March 2019"
  }
];

export default function Education() {
  return (
    <section id="education" className="section-pad px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Education" title="Computer science foundation and consistent growth." />
        <div className="grid gap-5">
          {education.map((item, index) => (
            <MotionCard key={item.school} delay={index * 0.05} className="p-4 sm:p-6">
              <div className="flex gap-3 sm:gap-4">
                <div className="h-fit shrink-0 rounded-md border border-cyanGlow/20 bg-cyanGlow/10 p-2.5 text-cyanGlow sm:p-3">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-strong text-lg font-semibold sm:text-xl">{item.school}</h3>
                  <p className="text-muted mt-2">{item.degree}</p>
                  <p className="mt-2 text-sm font-medium text-cyanGlow">{item.detail}</p>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
