import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export const FluidBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // Skill P3 + P7: respect prefers-reduced-motion — disable parallax & animations
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return; // Skip mouse tracking for reduced-motion users
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 40 - 20,
        y: (e.clientY / window.innerHeight) * 40 - 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#050505]">
      {/* Dynamic Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Ambient Glow 1 - Top Left Purple */}
      <motion.div
        animate={prefersReducedMotion ? {} : { x: mousePos.x * 0.8, y: mousePos.y * 0.8 }}
        transition={{ type: 'spring', damping: 30, stiffness: 60 }}
        className="absolute -top-[100px] -left-[100px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Ambient Glow 2 - Bottom Right Blue */}
      <motion.div
        animate={prefersReducedMotion ? {} : { x: mousePos.x * -0.9, y: mousePos.y * -0.9 }}
        transition={{ type: 'spring', damping: 35, stiffness: 50 }}
        className="absolute -bottom-[150px] -right-[100px] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"
      />

      {/* Ambient Glow 3 - Top Right Emerald */}
      <motion.div
        animate={prefersReducedMotion ? {} : { x: mousePos.x * 0.6, y: mousePos.y * 0.6 }}
        transition={{ type: 'spring', damping: 40, stiffness: 45 }}
        className="absolute top-[200px] right-[10%] w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Center Subtle Ambient Ring — static for reduced-motion users */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 blur-[130px] ${prefersReducedMotion ? '' : 'animate-pulse-glow'}`}
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(59, 130, 246, 0.15) 50%, rgba(16, 185, 129, 0.1) 80%, transparent 100%)'
        }}
      />

      {/* Smooth Dark Sheen Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505] pointer-events-none" />
    </div>
  );
};
