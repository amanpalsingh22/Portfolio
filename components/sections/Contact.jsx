"use client";

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
              <MotionCard key={label} delay={index * 0.03} className="p-5">
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} className="flex items-center gap-4">
                  <span className="rounded-md border border-cyanGlow/20 bg-cyanGlow/10 p-3 text-cyanGlow">
                    <Icon size={22} />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-400">{label}</span>
                    <span className="block break-all font-semibold text-white">{value}</span>
                  </span>
                </a>
              </MotionCard>
            ))}
          </div>
          <MotionCard className="p-6 md:p-8">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-slate-300">
                  Name
                  <input name="name" value={form.name} onChange={updateField} required className="rounded-md border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-cyanGlow focus:shadow-glow" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm text-slate-300">
                  Email
                  <input name="email" type="email" value={form.email} onChange={updateField} required className="rounded-md border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-cyanGlow focus:shadow-glow" placeholder="you@example.com" />
                </label>
              </div>
              <label className="grid gap-2 text-sm text-slate-300">
                Subject
                <input name="subject" value={form.subject} onChange={updateField} required className="rounded-md border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-cyanGlow focus:shadow-glow" placeholder="Project, internship, or role" />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Message
                <textarea name="message" value={form.message} onChange={updateField} required rows={6} className="resize-none rounded-md border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-cyanGlow focus:shadow-glow" placeholder="Tell me what you want to build." />
              </label>
              {status.message ? (
                <p className={`rounded-md border px-4 py-3 text-sm ${status.type === "success" ? "border-greenGlow/30 bg-greenGlow/10 text-green-100" : "border-red-400/30 bg-red-400/10 text-red-100"}`}>
                  {status.message}
                </p>
              ) : null}
              <button type="submit" disabled={isSending} className="inline-flex w-fit items-center gap-2 rounded-md bg-cyanGlow px-5 py-3 font-semibold text-ink transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0">
                {isSending ? "Sending..." : "Send Message"} <Send size={18} />
              </button>
            </form>
          </MotionCard>
        </div>
      </div>
    </section>
  );
}
