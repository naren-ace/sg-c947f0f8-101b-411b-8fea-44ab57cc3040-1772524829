"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Code2, Cpu, Globe } from "lucide-react";
import { GridBackground } from "@/components/effects/GridBackground";
import { FloatingElements } from "@/components/effects/FloatingElements";
import { TypewriterText } from "@/components/effects/TypewriterText";
import { GlitchText } from "@/components/effects/GlitchText";
import { Logo } from "@/components/brand/Logo";
import { useState } from "react";
import { ContactModal } from "./ContactModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const floatVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const techBadges = [
  { icon: Code2, label: "Full-Stack" },
  { icon: Cpu, label: "AI-Powered" },
  { icon: Globe, label: "Cloud-Native" },
  { icon: Zap, label: "High-Performance" },
];

export function HeroSection() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Animated Grid Background */}
        <GridBackground />
        
        {/* Floating 3D Elements */}
        <FloatingElements />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-secondary/20 rounded-full blur-[100px] opacity-20" />

        {/* Main Content */}
        <div className="container relative z-10 pt-32 pb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto text-center"
          >
            {/* Floating Logo Badge */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-8"
            >
              <motion.div
                variants={floatVariants}
                animate="animate"
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-150" />
                <div className="relative glass-card p-4 rounded-2xl border-primary/30">
                  <Logo className="w-16 h-16 text-primary" animated />
                </div>
              </motion.div>
            </motion.div>

            {/* Announcement Badge */}
            <motion.div variants={itemVariants} className="flex justify-center mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 cursor-pointer group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  Now accepting new projects for 2026
                </span>
                <ArrowRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-6"
            >
              <span className="block text-foreground">We Build</span>
              <span className="block mt-2">
                <GlitchText
                  text="The Future"
                  className="gradient-text"
                />
              </span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 h-12"
            >
              <span>Crafting </span>
              <TypewriterText
                words={["intelligent software", "digital experiences", "scalable systems", "AI solutions"]}
                className="text-primary font-semibold"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              We&apos;re a team of engineers, designers, and strategists who transform
              ambitious ideas into exceptional digital products that drive real business impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <motion.button
                onClick={() => setContactOpen(true)}
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(var(--primary), 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Start Your Project
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-card rounded-xl font-semibold text-lg border-border hover:border-primary/50 transition-colors"
              >
                Explore Our Work
              </motion.a>
            </motion.div>

            {/* Tech Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {techBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-default"
                >
                  <badge.icon size={16} className="text-primary" />
                  {badge.label}
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { value: "50+", label: "Projects Shipped" },
                { value: "99%", label: "Client Satisfaction" },
                { value: "10x", label: "Faster Delivery" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-4 rounded-xl text-center group hover:border-primary/30 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
}