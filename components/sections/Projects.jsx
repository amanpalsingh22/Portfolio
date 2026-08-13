"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Images, Maximize2, Radio, X } from "lucide-react";
import MotionCard from "@/components/ui/MotionCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { trackEvent } from "@/lib/analytics";

const projects = [
  {
    title: "Germany Quiz Image Trivia",
    duration: "May - June 2026",
    description:
      "Built and published a native Android quiz app for learning German history, flags, football players, personalities, places, and culture through interactive image-based quizzes.",
    features: [
      "Published Android app on Google Play",
      "Daily quiz and category-based learning",
      "Image guessing and 4/6 option quiz modes",
      "History timeline learning with explanations"
    ],
    accent: "green",
    githubUrl: "https://github.com/amanpalsingh22/Germany-Quiz",
    demoUrl: "https://play.google.com/store/apps/details?id=com.studex.germanyhistoryquiz&pcampaignid=web_share",
    demoLabel: "Play Store",
    gallerySummary: "Published Android app screens covering daily quizzes, category browsing, history learning, profile stats, and quiz explanations.",
    screenshots: [
      { src: "/projects/germany-quiz/store-promo.png", label: "Store promo" },
      { src: "/projects/germany-quiz/home-categories.png", label: "Home categories" },
      { src: "/projects/germany-quiz/history-events.png", label: "History events" },
      { src: "/projects/germany-quiz/profile-stats.png", label: "Profile stats" },
      { src: "/projects/germany-quiz/quiz-explanation.png", label: "Quiz explanation" }
    ]
  },
  {
    title: "Real-time Chat Application",
    duration: "June - July 2025",
    description:
      "Built a real-time chat application using React and Tailwind CSS with customizable user-selectable themes. Implemented instant messaging using Socket.IO and integrated Cloudinary for secure media uploads.",
    features: [
      "Real-time messaging",
      "Socket.IO integration",
      "Cloudinary media uploads",
      "Custom theme switching"
    ],
    accent: "cyan",
    githubUrl: "https://github.com/amanpalsingh22/Chatter",
    demoUrl: "https://chatty.amanpalsingh.in",
    demoLabel: "Live Demo",
    gallerySummary: "Polished MacBook mockups showing the chat workspace, login flow, settings, and profile screens.",
    screenshots: [
      { src: "/projects/chatter/chats-page-showcase-v2.png", label: "Chats page" },
      { src: "/projects/chatter/login-page-showcase-v2.png", label: "Login page" },
      { src: "/projects/chatter/settings-page-showcase-v2.png", label: "Settings page" },
      { src: "/projects/chatter/profile-page-showcase-v2.png", label: "Profile page" }
    ]
  },
  {
    title: "AI Quiz Generator",
    duration: "April - May 2025",
    description:
      "Built Quizzy, an AI-powered quiz workspace where users can generate quizzes from topics or readable PDFs, save generated quizzes, and attempt them through a polished answer flow.",
    features: [
      "Topic and PDF quiz generation",
      "Saved quiz library and replay flow",
      "In-progress quiz attempt screen",
      "Secure login and profile workspace"
    ],
    accent: "violet",
    demoUrl: "https://quizzy.amanpalsingh.in",
    demoLabel: "Live Demo",
    gallerySummary: "Quizzy screens covering login, topic generation, PDF upload, saved quiz library, and the in-progress quiz attempt experience.",
    screenshots: [
      { src: "/projects/ai-quiz/generate-topic.png", label: "Topic builder" },
      { src: "/projects/ai-quiz/generate-pdf.png", label: "PDF builder" },
      { src: "/projects/ai-quiz/my-quizzes.png", label: "My quizzes" },
      { src: "/projects/ai-quiz/quiz-attempt.png", label: "Quiz attempt" },
      { src: "/projects/ai-quiz/login.png", label: "Login" }
    ]
  }
];

function ProjectMockup({ accent }) {
  const color = accent === "violet" ? "bg-violetGlow" : accent === "green" ? "bg-greenGlow" : "bg-cyanGlow";

  return (
    <div className="border-soft bg-preview-stage flex h-[280px] flex-col rounded-lg border p-3 sm:h-[332px] sm:p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-greenGlow" />
        </div>
        <span className="text-subtle text-xs">preview</span>
      </div>
      <div className="grid flex-1 gap-3 min-[420px]:grid-cols-[0.7fr_1fr]">
        <div className="space-y-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-preview-cell h-8 rounded-md" />
          ))}
        </div>
        <div className="border-soft bg-soft rounded-md border p-3">
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

function ProjectScreenshots({ screenshots, title, summary }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartX = useRef(null);
  const activeScreenshot = activeIndex === null ? null : screenshots[activeIndex];

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? screenshots.length - 1 : current - 1));
  }, [screenshots.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === screenshots.length - 1 ? 0 : current + 1));
  }, [screenshots.length]);

  const handleTouchStart = useCallback((event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((event) => {
    if (touchStartX.current === null) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 48) {
      return;
    }

    if (deltaX > 0) {
      showPrevious();
    } else {
      showNext();
    }
  }, [showNext, showPrevious]);

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
      <div className="border-soft bg-preview-stage h-[280px] rounded-lg border p-2.5 sm:h-[332px] sm:p-3">
        <button
          type="button"
          onClick={() => setActiveIndex(0)}
          aria-label={`Open ${title} ${screenshots[0].label} screenshot`}
          className="border-soft bg-deep group relative h-44 w-full cursor-zoom-in overflow-hidden rounded-md border text-left sm:h-56"
        >
          <Image
            src={screenshots[0].src}
            alt={`${title} ${screenshots[0].label} screen`}
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-contain object-center brightness-110 contrast-105 transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <span className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyanGlow/40 bg-black/55 text-cyan-50 shadow-glow backdrop-blur transition group-hover:scale-105 group-hover:bg-cyanGlow/20 sm:right-3 sm:top-3 sm:h-9 sm:w-9">
            <Maximize2 size={15} />
          </span>
          <div className="absolute inset-0 border-2 border-transparent transition group-hover:border-cyanGlow/60 group-focus-visible:border-cyanGlow" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/72 to-transparent p-2.5 sm:p-3">
            <div className="flex items-end justify-between gap-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-cyan-100 sm:text-xs sm:tracking-[0.18em]">
                {screenshots[0].label}
              </p>
              <span className="inline-flex items-center gap-1 rounded-md border border-cyanGlow/35 bg-cyanGlow/15 px-2 py-1 text-[0.68rem] font-semibold text-cyan-50 shadow-glow transition group-hover:border-cyanGlow group-hover:bg-cyanGlow/25 sm:gap-1.5 sm:px-2.5 sm:py-1.5 sm:text-xs">
                <Images size={13} /> {screenshots.length} screens
              </span>
            </div>
          </div>
        </button>
        <div className="mt-3 flex justify-start gap-2 overflow-x-auto pb-1 sm:justify-center">
          {screenshots.slice(1).map((screenshot, index) => {
            const screenshotIndex = index + 1;

            return (
              <button
                type="button"
                key={screenshot.src}
                onClick={() => setActiveIndex(screenshotIndex)}
                aria-label={`Open ${title} ${screenshot.label} screenshot`}
                className="border-soft bg-soft group relative h-14 w-14 shrink-0 cursor-zoom-in overflow-hidden rounded-md border sm:h-16 sm:w-16"
              >
                <Image
                  src={screenshot.src}
                  alt={`${title} ${screenshot.label} screen`}
                  fill
                  sizes="120px"
                  className="object-cover object-center brightness-110 contrast-105 opacity-80 transition group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      </div>

      {activeScreenshot ? createPortal(
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} ${activeScreenshot.label} screenshot preview`}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/45 p-2 backdrop-blur-xl sm:p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={() => setActiveIndex(null)}
        >
          <motion.div
            className="glass flex max-h-[94svh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border-cyanGlow/20 shadow-[0_30px_120px_rgba(0,0,0,0.35)] sm:rounded-2xl dark:shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
            initial={{ opacity: 0, scale: 0.97, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-soft flex items-start justify-between gap-3 border-b px-3 py-3 sm:px-4 sm:py-4 md:px-5">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="text-strong truncate text-sm font-semibold md:text-base">{title}</p>
                  <span className="rounded-md border border-cyanGlow/25 bg-cyanGlow/10 px-2.5 py-1 text-xs font-semibold text-cyanGlow">
                    {activeIndex + 1} / {screenshots.length}
                  </span>
                </div>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.14em] text-cyanGlow sm:text-xs sm:tracking-[0.18em]">
                  {activeScreenshot.label}
                </p>
                <p className="text-muted mt-1 hidden text-sm md:block">
                  {summary}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={activeScreenshot.src}
                  target="_blank"
                  rel="noreferrer"
                  className="border-soft bg-soft text-strong hidden items-center gap-2 rounded-md border px-3 py-2 text-sm transition hover:border-cyanGlow md:inline-flex"
                >
                  Open image <ExternalLink size={16} />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label="Close screenshot preview"
                  className="border-soft bg-soft text-strong rounded-md border p-2 transition hover:border-cyanGlow"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div
              className="bg-modal-stage relative h-[50svh] min-h-[220px] overflow-hidden sm:min-h-[280px] md:h-[58vh]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={activeScreenshot.src}
                alt={`${title} ${activeScreenshot.label} full-size screen`}
                fill
                sizes="100vw"
                className="object-contain brightness-110 contrast-105"
                priority
              />
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 p-2 text-white shadow-glow backdrop-blur transition hover:border-cyanGlow hover:bg-cyanGlow/15 sm:left-3 sm:p-2.5 md:left-5"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 p-2 text-white shadow-glow backdrop-blur transition hover:border-cyanGlow hover:bg-cyanGlow/15 sm:right-3 sm:p-2.5 md:right-5"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="border-soft bg-soft border-t p-2.5 sm:p-3 md:p-4">
              <div className="flex justify-center gap-2 overflow-x-auto pb-1">
              {screenshots.map((screenshot, index) => (
                <button
                  type="button"
                  key={screenshot.src}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${screenshot.label} screenshot`}
                  title={screenshot.label}
                  className={`group h-14 w-14 shrink-0 rounded-lg border p-1.5 text-left transition sm:h-16 sm:w-16 md:h-20 md:w-20 ${activeIndex === index ? "scale-[1.03] border-cyanGlow bg-cyanGlow/10 shadow-glow" : "border-soft bg-raised opacity-70 hover:opacity-100"}`}
                >
                  <span className="border-soft relative block h-full w-full overflow-hidden rounded-md border">
                    <Image
                      src={screenshot.src}
                      alt={`${title} ${screenshot.label} thumbnail`}
                      fill
                      sizes="160px"
                      className="object-cover object-center transition group-hover:scale-105"
                      loading="lazy"
                    />
                  </span>
                </button>
              ))}
              </div>
              <p className="text-subtle mt-2 text-center text-[0.7rem] sm:mt-3 sm:text-xs">
                Swipe or use arrows to browse. Press Esc to close.
              </p>
            </div>
          </motion.div>
        </motion.div>
        , document.body
      ) : null}
    </>
  );
}

function ProjectAction({ href, icon: Icon, label, onClick }) {
  const className = "inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-md border px-3 py-2 text-xs font-semibold transition";

  if (!href) {
    return (
      <span
        aria-disabled="true"
        title={`${label} coming soon`}
        className={`${className} border-soft bg-soft text-subtle cursor-not-allowed`}
      >
        <Icon size={14} /> {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className={`${className} border-cyanGlow/25 bg-cyanGlow/10 text-cyanGlow hover:-translate-y-0.5 hover:border-cyanGlow hover:shadow-glow`}
    >
      <Icon size={14} /> {label}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Real-world builds across mobile, realtime, and AI."
          description="Each project highlights practical product thinking: responsive UI, API workflows, integration details, and clean user experience."
        />
        <div className="grid items-stretch gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <MotionCard key={project.title} delay={index * 0.05} className="flex h-full flex-col p-4 sm:p-5">
              {project.screenshots ? (
                <ProjectScreenshots screenshots={project.screenshots} title={project.title} summary={project.gallerySummary} />
              ) : (
                <ProjectMockup accent={project.accent} />
              )}
              <div className="mt-5 flex-1">
                <p className="text-sm font-medium text-cyanGlow">{project.duration}</p>
                <h3 className="text-strong mt-2 text-xl font-semibold sm:text-2xl">{project.title}</h3>
                <p className="text-muted mt-3 text-sm leading-6">{project.description}</p>
                <ul className="text-muted mt-4 grid gap-2 text-sm">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyanGlow" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:mt-6">
                <ProjectAction href={project.githubUrl} icon={Github} label="GitHub" />
                <ProjectAction
                  href={project.demoUrl}
                  icon={Radio}
                  label={project.demoLabel || "Demo"}
                  onClick={() => trackEvent("Project Demo Click", { project: project.title })}
                />
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
