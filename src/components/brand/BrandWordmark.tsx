"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";

interface BrandWordmarkProps {
  className?: string;
  logoSize?: number;
  showTagline?: boolean;
}

export function BrandWordmark({
  className = "",
  logoSize = 36,
  showTagline = false,
}: BrandWordmarkProps) {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo size={logoSize} animated={false} />
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-foreground">
          Ace<span className="text-primary">Innovations</span>
        </span>
        {showTagline && (
          <span className="text-xs text-muted-foreground tracking-wider uppercase">
            Building Tomorrow
          </span>
        )}
      </div>
    </motion.div>
  );
}