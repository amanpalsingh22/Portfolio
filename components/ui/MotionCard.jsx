"use client";

import { motion } from "framer-motion";

export default function MotionCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`glass rounded-lg ${className}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      {children}
    </motion.div>
  );
}
