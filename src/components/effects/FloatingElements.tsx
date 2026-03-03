"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "cube" | "sphere" | "ring" | "code" | "node";
}

export function FloatingElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const elements: FloatingElement[] = [
    { id: 1, x: 10, y: 20, size: 60, duration: 20, delay: 0, type: "cube" },
    { id: 2, x: 85, y: 15, size: 50, duration: 25, delay: 2, type: "sphere" },
    { id: 3, x: 75, y: 60, size: 70, duration: 22, delay: 1, type: "ring" },
    { id: 4, x: 15, y: 70, size: 45, duration: 18, delay: 3, type: "code" },
    { id: 5, x: 90, y: 80, size: 55, duration: 24, delay: 0.5, type: "node" },
    { id: 6, x: 5, y: 45, size: 40, duration: 21, delay: 1.5, type: "sphere" },
    { id: 7, x: 50, y: 10, size: 35, duration: 19, delay: 2.5, type: "cube" },
    { id: 8, x: 60, y: 85, size: 48, duration: 23, delay: 0.8, type: "ring" },
  ];

  const renderElement = (el: FloatingElement) => {
    switch (el.type) {
      case "cube":
        return (
          <div
            className="relative"
            style={{
              width: el.size,
              height: el.size,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="absolute inset-0 border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-transparent"
              animate={{ rotateX: 360, rotateY: 360 }}
              transition={{ duration: el.duration, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: "preserve-3d" }}
            />
          </div>
        );
      case "sphere":
        return (
          <div
            className="rounded-full bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-transparent border border-cyan-500/20"
            style={{ width: el.size, height: el.size }}
          />
        );
      case "ring":
        return (
          <motion.div
            className="rounded-full border-2 border-pink-500/30"
            style={{ width: el.size, height: el.size }}
            animate={{ rotate: 360 }}
            transition={{ duration: el.duration, repeat: Infinity, ease: "linear" }}
          />
        );
      case "code":
        return (
          <div
            className="font-mono text-violet-500/40 text-xs leading-tight select-none"
            style={{ fontSize: el.size / 5 }}
          >
            <div>{"{ }"}</div>
            <div>{"</>"}</div>
            <div>{"[ ]"}</div>
          </div>
        );
      case "node":
        return (
          <svg width={el.size} height={el.size} viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="8"
              fill="rgba(139, 92, 246, 0.5)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="20"
              cy="30"
              r="5"
              fill="rgba(34, 211, 238, 0.4)"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
            />
            <motion.circle
              cx="80"
              cy="30"
              r="5"
              fill="rgba(236, 72, 153, 0.4)"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.circle
              cx="30"
              cy="80"
              r="5"
              fill="rgba(139, 92, 246, 0.4)"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2.3, repeat: Infinity, delay: 0.9 }}
            />
            <motion.circle
              cx="70"
              cy="80"
              r="5"
              fill="rgba(34, 211, 238, 0.4)"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2.1, repeat: Infinity, delay: 1.2 }}
            />
            <line x1="50" y1="50" x2="20" y2="30" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
            <line x1="50" y1="50" x2="80" y2="30" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
            <line x1="50" y1="50" x2="30" y2="80" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
            <line x1="50" y1="50" x2="70" y2="80" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
          </svg>
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute"
          style={{ left: `${el.x}%`, top: `${el.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: 1,
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            opacity: { duration: el.duration / 2, repeat: Infinity, ease: "easeInOut" },
            y: { duration: el.duration, repeat: Infinity, ease: "easeInOut", delay: el.delay },
            x: { duration: el.duration * 1.3, repeat: Infinity, ease: "easeInOut", delay: el.delay },
            scale: { duration: 0.8, delay: el.delay },
          }}
        >
          {renderElement(el)}
        </motion.div>
      ))}
    </div>
  );
}