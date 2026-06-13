"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-8 max-w-3xl text-center md:mb-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyanGlow sm:tracking-[0.24em]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base md:mt-4 md:text-lg md:leading-7">{description}</p>
      ) : null}
    </motion.div>
  );
}
