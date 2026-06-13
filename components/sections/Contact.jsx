"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import MotionCard from "@/components/ui/MotionCard";
import SectionHeader from "@/components/ui/SectionHeader";

const links = [
  ["Email", "amanpalsingh878@gmail.com", "mailto:amanpalsingh878@gmail.com", Mail],
  ["Phone", "+91-8872131699", "tel:+918872131699", Phone],
  ["LinkedIn", "Amanpal Singh", "https://www.linkedin.com/in/amanpal-singh-", Linkedin],
  ["GitHub", "amanpalsingh22", "https://github.com/amanpalsingh22", Github],
  ["Location", "Punjab, India", "#contact", MapPin]
];

const formVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12
    }
  }
};

const fieldVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }

      setStatus({ type: "success", message: "Message sent. I will get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to send message right now."
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="section-pad px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Contact" title="Open for internships, freelance work, and developer roles." />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4">
            {links.map(([label, value, href, Icon], index) => (
              <MotionCard key={label} delay={index * 0.03} className="p-4 sm:p-5">
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} className="flex items-center gap-4">
                  <span className="shrink-0 rounded-md border border-cyanGlow/20 bg-cyanGlow/10 p-3 text-cyanGlow">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-slate-400">{label}</span>
                    <span className="block break-all font-semibold text-white">{value}</span>
                  </span>
                </a>
              </MotionCard>
            ))}
          </div>
          <MotionCard className="p-4 sm:p-6 md:p-8">
            <motion.form
              className="grid gap-4"
              onSubmit={handleSubmit}
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <motion.div className="grid gap-4 md:grid-cols-2" variants={formVariants}>
                <motion.label className="grid gap-2 text-sm text-slate-300" variants={fieldVariants}>
                  Name
                  <input name="name" value={form.name} onChange={updateField} required className="rounded-md border border-white/10 bg-white/10 px-4 py-3 text-base text-white outline-none transition focus:border-cyanGlow focus:shadow-glow" placeholder="Your name" />
                </motion.label>
                <motion.label className="grid gap-2 text-sm text-slate-300" variants={fieldVariants}>
                  Email
                  <input name="email" type="email" value={form.email} onChange={updateField} required className="rounded-md border border-white/10 bg-white/10 px-4 py-3 text-base text-white outline-none transition focus:border-cyanGlow focus:shadow-glow" placeholder="you@example.com" />
                </motion.label>
              </motion.div>
              <motion.label className="grid gap-2 text-sm text-slate-300" variants={fieldVariants}>
                Subject
                <input name="subject" value={form.subject} onChange={updateField} required className="rounded-md border border-white/10 bg-white/10 px-4 py-3 text-base text-white outline-none transition focus:border-cyanGlow focus:shadow-glow" placeholder="Project, internship, or role" />
              </motion.label>
              <motion.label className="grid gap-2 text-sm text-slate-300" variants={fieldVariants}>
                Message
                <textarea name="message" value={form.message} onChange={updateField} required rows={5} className="resize-none rounded-md border border-white/10 bg-white/10 px-4 py-3 text-base text-white outline-none transition focus:border-cyanGlow focus:shadow-glow md:rows-6" placeholder="Tell me what you want to build." />
              </motion.label>
              {status.message ? (
                <motion.p variants={fieldVariants} className={`rounded-md border px-4 py-3 text-sm ${status.type === "success" ? "border-greenGlow/30 bg-greenGlow/10 text-green-100" : "border-red-400/30 bg-red-400/10 text-red-100"}`}>
                  {status.message}
                </motion.p>
              ) : null}
              <motion.button variants={fieldVariants} type="submit" disabled={isSending} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyanGlow px-5 py-3 font-semibold text-ink transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-fit">
                {isSending ? "Sending..." : "Send Message"} <Send size={18} />
              </motion.button>
            </motion.form>
          </MotionCard>
        </div>
      </div>
    </section>
  );
}
