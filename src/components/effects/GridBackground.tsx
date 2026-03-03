"use client";

import { useEffect, useRef } from "react";

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 60;
      const perspective = 800;
      const horizonY = canvas.height * 0.5;

      // Draw perspective grid
      ctx.strokeStyle = "rgba(139, 92, 246, 0.15)";
      ctx.lineWidth = 1;

      // Horizontal lines with perspective
      for (let i = 0; i <= 20; i++) {
        const y = horizonY + (i * i * 3);
        if (y > canvas.height) break;

        const alpha = Math.max(0, 0.3 - (i * 0.015));
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines converging to horizon
      const vanishingPointX = canvas.width / 2;
      for (let i = -15; i <= 15; i++) {
        const bottomX = vanishingPointX + (i * gridSize * 3);
        const alpha = Math.max(0, 0.2 - Math.abs(i) * 0.01);
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(vanishingPointX, horizonY);
        ctx.lineTo(bottomX, canvas.height);
        ctx.stroke();
      }

      // Floating particles
      for (let i = 0; i < 50; i++) {
        const x = ((i * 137.5 + time * 50) % canvas.width);
        const y = ((i * 91.3 + time * 30) % (canvas.height * 0.6)) + canvas.height * 0.2;
        const size = (Math.sin(time + i) + 1) * 1.5 + 1;
        const alpha = (Math.sin(time * 2 + i) + 1) * 0.15 + 0.1;

        ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Glowing orbs
      const orbs = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: 150, color: "139, 92, 246" },
        { x: canvas.width * 0.8, y: canvas.height * 0.4, radius: 120, color: "236, 72, 153" },
        { x: canvas.width * 0.5, y: canvas.height * 0.6, radius: 180, color: "34, 211, 238" },
      ];

      orbs.forEach((orb, index) => {
        const pulseX = Math.sin(time + index) * 20;
        const pulseY = Math.cos(time * 0.7 + index) * 20;
        const pulseRadius = Math.sin(time * 1.5 + index) * 20;

        const gradient = ctx.createRadialGradient(
          orb.x + pulseX,
          orb.y + pulseY,
          0,
          orb.x + pulseX,
          orb.y + pulseY,
          orb.radius + pulseRadius
        );
        gradient.addColorStop(0, `rgba(${orb.color}, 0.15)`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, 0.05)`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x + pulseX, orb.y + pulseY, orb.radius + pulseRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.8 }}
      aria-hidden="true"
    />
  );
}