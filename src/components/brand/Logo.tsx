"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export function Logo({ className = "", size = 32, animated = true }: LogoProps) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: size, height: size }}
      initial="hidden"
      animate="visible"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(216, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(259, 72%, 58%)" />
        </linearGradient>
        <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {animated && (
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#logoGradient)"
          strokeWidth="0.5"
          fill="none"
          variants={glowVariants}
          initial="initial"
          animate="animate"
          style={{ filter: "blur(4px)" }}
        />
      )}

      <motion.path
        d="M50 15 L25 75 L35 75 L50 40 L65 75 L75 75 L50 15Z"
        fill="url(#logoGradient)"
        filter="url(#logoGlow)"
        variants={animated ? pathVariants : undefined}
      />

      <motion.path
        d="M35 60 L65 60"
        stroke="url(#logoGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        variants={animated ? pathVariants : undefined}
      />

      <motion.circle
        cx="50"
        cy="50"
        r="42"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="8 4"
        variants={animated ? pathVariants : undefined}
      />
    </motion.svg>
  );
}