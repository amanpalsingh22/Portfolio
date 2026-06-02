"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Github, MonitorUp, Radio, X } from "lucide-react";
import MotionCard from "@/components/ui/MotionCard";
import SectionHeader from "@/components/ui/SectionHeader";

const projects = [
  {
    title: "Real-time Chat Application",
    duration: "June - July 2025",
    description:
      "Built a real-time chat application using React and Tailwind CSS with customizable user-selectable themes. Implemented instant messaging using Socket.IO and integrated Cloudinary for secure media uploads.",
    features: [
      "Real-time messaging",
      "Socket.IO integration",
      "Cloudinary media uploads",
      "Custom theme switching",
      "Responsive mobile-first UI",
      "Tailwind and DaisyUI design system"
    ],
    tech: ["HTML", "CSS", "Tailwind CSS", "React.js", "DaisyUI", "Socket.IO", "Cloudinary"],
    accent: "cyan",
    screenshots: [
      { src: "/projects/chatter/dashboard.png", label: "Dashboard" },
      { src: "/projects/chatter/login.png", label: "Login" },
      { src: "/projects/chatter/themes.png", label: "Theme picker" },
      { src: "/projects/chatter/profile.png", label: "Profile" },
      { src: "/projects/chatter/signup.png", label: "Signup" }
    ]
  },
  {
    title: "AI Quiz Generator",
    duration: "April - May 2025",
    description:
      "Built an AI-powered quiz generation tool where users can upload PDFs and automatically generate quizzes from the PDF content. Integrated ChatGPT API to create questions and built a responsive frontend for quiz creation and management.",
    features: [
      "PDF upload",
      "AI-generated quiz questions",
      "ChatGPT API integration",
      "Responsive quiz management UI",
      "Frontend and backend implementation"
    ],
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Tailwind CSS", "ChatGPT API"],
    accent: "violet"
  },
  {
    title: "Laboratory Operations Dashboard",
    duration: "Virtuous Experience",
    description:
      "A role-based operations dashboard built during professional experience at Virtuous for managing animal research laboratory workflows.",
    features: [
      "Role-based dashboards",
      "Animal and housing management",
      "Inventory management",
      "Request tracking",
      "Task handling",
      "REST API integration",
      "Analytics-oriented navigation"
    ],
    tech: ["Next.js", "React", "Material UI", "REST APIs"],
    accent: "green"
  }
];

function ProjectMockup({ accent }) {
  const color = accent === "violet" ? "bg-violetGlow" : accent === "green" ? "bg-greenGlow" : "bg-cyanGlow";

  return (
    <div className="rounded-lg border border-white/10 bg-ink/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-greenGlow" />
        </div>
        <span className="text-xs text-slate-500">preview</span>
      </div>
      <div className="grid gap-3 md:grid-cols-[0.7fr_1fr]">
        <div className="space-y-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-8 rounded-md bg-white/10" />
          ))}
        </div>
        <div className="rounded-md border border-white/10 bg-white/5 p-3">
          <div className={`h-2 w-24 rounded ${color}`} />
          <div className="mt-5 grid grid-cols-4 items-end gap-2">
            {[45, 68, 52, 80].map((height) => (
              <span key={height} className={`${color} rounded-t opacity-75`} style={{ height: `${height}px` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectScreenshots({ screenshots, title }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeScreenshot = activeIndex === null ? null : screenshots[activeIndex];

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? screenshots.length - 1 : current - 1));
  }, [screenshots.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === screenshots.length - 1 ? 0 : current + 1));
  }, [screenshots.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowLeft") {
        showPrevious();
      }
      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, showNext, showPrevious]);

  return (
    <>
      <div className="rounded-lg border border-white/10 bg-ink/80 p-3">
        <button
          type="button"
          onClick={() => setActiveIndex(0)}
          aria-label={`Open ${title} ${screenshots[0].label} screenshot`}
          className="relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-md border border-white/10 bg-black/40 text-left"
        >
          <Image
            src={screenshots[0].src}
            alt={`${title} ${screenshots[0].label} screen`}
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover object-left-top transition duration-300 hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
              {screenshots[0].label}
            </p>
          </div>
        </button>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {screenshots.slice(1).map((screenshot, index) => {
            const screenshotIndex = index + 1;

            return (
              <button
                type="button"
                key={screenshot.src}
                onClick={() => setActiveIndex(screenshotIndex)}
                aria-label={`Open ${title} ${screenshot.label} screenshot`}
                className="group relative h-16 cursor-zoom-in overflow-hidden rounded-md border border-white/10 bg-white/5"
              >
                <Image
                  src={screenshot.src}
                  alt={`${title} ${screenshot.label} screen`}
                  fill
                  sizes="120px"
                  className="object-cover object-left-top opacity-80 transition group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      </div>

      {activeScreenshot ? createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} ${activeScreenshot.label} screenshot preview`}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md md:p-6"
          onClick={() => setActiveIndex(null)}
        >
          <div className="flex h-full w-full max-w-[96vw] flex-col" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-cyanGlow">
                  {activeScreenshot.label}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close screenshot preview"
                className="rounded-md border border-white/15 bg-white/10 p-2 text-white transition hover:border-cyanGlow"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-lg border border-cyanGlow/25 bg-ink shadow-glow">
              <Image
                src={activeScreenshot.src}
                alt={`${title} ${activeScreenshot.label} full-size screen`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={showPrevious}
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm text-white transition hover:border-cyanGlow"
              >
                <ChevronLeft size={18} /> Previous
              </button>
              <p className="text-sm text-slate-300">
                {activeIndex + 1} / {screenshots.length}
              </p>
              <button
                type="button"
                onClick={showNext}
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm text-white transition hover:border-cyanGlow"
              >
                Next <ChevronRight size={18} />
              </button>
            </div>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {screenshots.map((screenshot, index) => (
                <button
                  type="button"
                  key={screenshot.src}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${screenshot.label} screenshot`}
                  className={`relative h-14 overflow-hidden rounded-md border transition ${activeIndex === index ? "border-cyanGlow" : "border-white/10 opacity-70 hover:opacity-100"}`}
                >
                  <Image
                    src={screenshot.src}
                    alt={`${title} ${screenshot.label} thumbnail`}
                    fill
                    sizes="120px"
                    className="object-cover object-left-top"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        , document.body
      ) : null}
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Real-world builds across realtime, AI, and dashboards."
          description="Each project highlights practical product thinking: responsive UI, API workflows, integration details, and clean user experience."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <MotionCard key={project.title} delay={index * 0.05} className="flex flex-col p-5">
              {project.screenshots ? (
                <ProjectScreenshots screenshots={project.screenshots} title={project.title} />
              ) : (
                <ProjectMockup accent={project.accent} />
              )}
              <div className="mt-5 flex-1">
                <p className="text-sm font-medium text-cyanGlow">{project.duration}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
                <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyanGlow" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-md border border-white/10 bg-white/10 px-2.5 py-1.5 text-xs text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                <a href="#" className="inline-flex items-center justify-center gap-1 rounded-md border border-white/10 px-3 py-2 text-xs text-white transition hover:border-cyanGlow">
                  <MonitorUp size={14} /> Details
                </a>
                <a href="https://github.com/amanpalsingh22" target="_blank" className="inline-flex items-center justify-center gap-1 rounded-md border border-white/10 px-3 py-2 text-xs text-white transition hover:border-cyanGlow">
                  <Github size={14} /> GitHub
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-1 rounded-md border border-white/10 px-3 py-2 text-xs text-white transition hover:border-cyanGlow">
                  <Radio size={14} /> Demo
                </a>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
