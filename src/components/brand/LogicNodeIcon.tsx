"use client";

import { motion } from "framer-motion";

interface LogicNodeIconProps {
  className?: string;
  size?: number;
}

export function LogicNodeIcon({ className = "", size = 24 }: LogicNodeIconProps) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <defs>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(216, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(259, 72%, 58%)" />
        </linearGradient>
      </defs>

      {/* Central node */}
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        fill="url(#nodeGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      />

      {/* Outer nodes */}
      <motion.circle
        cx="12"
        cy="4"
        r="2"
        fill="url(#nodeGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      />
      <motion.circle
        cx="19"
        cy="8"
        r="2"
        fill="url(#nodeGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      />
      <motion.circle
        cx="19"
        cy="16"
        r="2"
        fill="url(#nodeGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
      <motion.circle
        cx="12"
        cy="20"
        r="2"
        fill="url(#nodeGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      />
      <motion.circle
        cx="5"
        cy="16"
        r="2"
        fill="url(#nodeGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      />
      <motion.circle
        cx="5"
        cy="8"
        r="2"
        fill="url(#nodeGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      />

      {/* Connection lines */}
      <motion.path
        d="M12 9 L12 6 M14.5 10.5 L17.5 8.5 M14.5 13.5 L17.5 15.5 M12 15 L12 18 M9.5 13.5 L6.5 15.5 M9.5 10.5 L6.5 8.5"
        stroke="url(#nodeGradient)"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.svg>
  );
}