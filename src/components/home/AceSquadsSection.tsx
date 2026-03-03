"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Code2, Rocket, LucideIcon } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.4, 0, 0.2, 1] },
  }),
};

const iconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  code: Code2,
  rocket: Rocket,
};

const pillars = [
  {
    icon: "lightbulb",
    title: "Product Strategy",
    description:
      "We embed with your team to understand your market, users, and competitive landscape. From discovery to roadmap, every decision is grounded in data and domain expertise.",
    capabilities: [
      "Market & user research",
      "Product roadmapping",
      "Technical feasibility analysis",
      "Competitive positioning",
    ],
  },
  {
    icon: "code",
    title: "Technical Engineering",
    description:
      "Full-stack development powered by AI-augmented workflows. We build scalable, maintainable systems using modern architectures and battle-tested engineering practices.",
    capabilities: [
      "Full-stack development",
      "AI-augmented delivery",
      "Cloud-native architecture",
      "CI/CD & DevOps",
    ],
  },
  {
    icon: "rocket",
    title: "Growth Operations",
    description:
      "Launching is only the beginning. We instrument your product for growth, optimizing funnels, performance, and visibility to drive sustainable traction.",
    capabilities: [
      "Technical SEO",
      "Funnel instrumentation",
      "Performance optimization",
      "Analytics & attribution",
    ],
  },
];

export function AceSquadsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="squads"
      ref={ref}
      className="relative py-24 lg:py-32 bg-card/30"
      data-testid="squads-section"
    >
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--border)), transparent)",
        }}
      />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-xs font-medium tracking-[0.2em] uppercase mb-4 text-primary"
          >
            ACE Squads
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight"
          >
            Integrated Expertise.
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground"
          >
            Our squads combine three disciplines into a single, high-velocity unit. No
            silos. No handoff friction. Just seamless execution.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const isPrimary = i % 2 === 0;
            const Icon = iconMap[pillar.icon] || Lightbulb;

            return (
              <motion.div
                key={pillar.title}
                custom={3 + i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="glass-card-hover rounded-xl p-7 flex flex-col"
                data-testid={`squad-card-${i}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: isPrimary
                      ? "hsl(216 100% 50% / 0.08)"
                      : "hsl(259 72% 58% / 0.08)",
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{
                      color: isPrimary ? "hsl(var(--primary))" : "hsl(var(--accent))",
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground tracking-tight mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6 text-muted-foreground">
                  {pillar.description}
                </p>
                <ul className="mt-auto space-y-2.5">
                  {pillar.capabilities.map((cap, ci) => (
                    <li key={ci} className="flex items-center gap-2.5 text-sm">
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{
                          background: isPrimary
                            ? "hsl(var(--primary))"
                            : "hsl(var(--accent))",
                        }}
                      />
                      <span className="text-muted-foreground">{cap}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}