"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cpu,
  Layers,
  GitBranch,
  Shield,
  Lightbulb,
  Rocket,
  Code2,
  TrendingUp,
  Zap,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  layers: Layers,
  "git-branch": GitBranch,
  shield: Shield,
  lightbulb: Lightbulb,
  rocket: Rocket,
  code: Code2,
  zap: Zap,
  growth: TrendingUp,
};

const capabilities = [
  {
    icon: "lightbulb",
    title: "Product Strategy",
    description:
      "From market research to technical roadmaps — we define the right problem before engineering the solution.",
  },
  {
    icon: "cpu",
    title: "AI-Augmented Development",
    description:
      "Our engineers work alongside AI agents that handle boilerplate, testing, and docs — so we focus on your business logic.",
  },
  {
    icon: "layers",
    title: "Scalable Architecture",
    description:
      "Architecture that performs under pressure — designed to handle 10x growth without 10x complexity.",
  },
  {
    icon: "shield",
    title: "Security-First Design",
    description:
      "Enterprise-grade security at every layer — authentication, encryption, audit trails, and zero-trust principles.",
  },
  {
    icon: "code",
    title: "Full-Stack Engineering",
    description:
      "End-to-end development from cloud infrastructure to pixel-perfect interfaces, powered by modern frameworks.",
  },
  {
    icon: "growth",
    title: "Growth Engineering",
    description:
      "Technical SEO, funnel instrumentation, and performance optimization to drive sustainable traction post-launch.",
  },
];

const bentoSpans = [
  "sm:col-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-2",
];

interface BentoCardProps {
  cap: (typeof capabilities)[0];
  index: number;
  isInView: boolean;
}

function BentoCard({ cap, index, isInView }: BentoCardProps) {
  const Icon = iconMap[cap.icon] || Cpu;
  const isWide = index === 0 || index === 5;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-card-hover group relative p-7 rounded-2xl ${isWide ? "lg:p-9" : ""} ${bentoSpans[index]}`}
      data-testid={`engine-card-${index}`}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isEven
            ? "radial-gradient(ellipse at 20% 20%, hsl(216 100% 50% / 0.06), transparent 60%)"
            : "radial-gradient(ellipse at 20% 20%, hsl(259 72% 58% / 0.06), transparent 60%)",
        }}
      />

      {/* Corner accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: isEven
            ? "linear-gradient(90deg, transparent, hsl(216 100% 50% / 0.4), transparent)"
            : "linear-gradient(90deg, transparent, hsl(259 72% 58% / 0.4), transparent)",
        }}
      />

      <div className="relative z-10">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: isEven ? "hsl(216 100% 50% / 0.08)" : "hsl(259 72% 58% / 0.08)",
            border: `1px solid ${isEven ? "hsl(216 100% 50% / 0.12)" : "hsl(259 72% 58% / 0.12)"}`,
          }}
        >
          <Icon
            className="w-5 h-5"
            strokeWidth={1.5}
            style={{ color: isEven ? "hsl(var(--primary))" : "hsl(var(--accent))" }}
          />
        </div>
        <h3 className="text-base font-bold text-foreground mb-2 tracking-tight">
          {cap.title}
        </h3>
        <p
          className={`text-sm text-muted-foreground leading-relaxed ${isWide ? "max-w-md" : ""}`}
        >
          {cap.description}
        </p>
      </div>
    </motion.div>
  );
}

export function AceEngineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="engine"
      ref={ref}
      className="relative py-24 lg:py-36 overflow-hidden"
      data-testid="engine-section"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 50%, hsl(216 100% 50% / 0.03), transparent 60%), radial-gradient(ellipse 40% 40% at 80% 60%, hsl(259 72% 58% / 0.025), transparent 50%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-medium tracking-[0.2em] uppercase mb-4 text-primary"
          >
            What We Build
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight"
          >
            Engineering meets intelligence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-base md:text-lg leading-relaxed max-w-xl text-muted-foreground"
          >
            We don&apos;t just write code — we orchestrate intelligence. Our AI-augmented
            squads combine strategy, engineering, and growth into a single high-velocity
            unit to deliver systems that scale.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => (
            <BentoCard key={cap.title} cap={cap} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}