'use client';

import { motion } from 'framer-motion';

interface MeshGradientProps {
  className?: string;
  animate?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

export function MeshGradient({
  className = '',
  animate = true,
  intensity = 'medium',
}: MeshGradientProps) {
  const opacityMap = {
    low: { blob: 0.1, secondary: 0.05 },
    medium: { blob: 0.2, secondary: 0.1 },
    high: { blob: 0.3, secondary: 0.15 },
  };

  const opacity = opacityMap[intensity];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Primary green blob */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px]"
        style={{
          background: `radial-gradient(circle, rgba(0, 255, 136, ${opacity.blob}) 0%, transparent 70%)`,
          top: '-20%',
          left: '-10%',
        }}
        animate={
          animate
            ? {
                x: [0, 100, 50, 0],
                y: [0, 50, 100, 0],
                scale: [1, 1.1, 0.9, 1],
              }
            : undefined
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Purple blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px]"
        style={{
          background: `radial-gradient(circle, rgba(124, 58, 237, ${opacity.blob}) 0%, transparent 70%)`,
          top: '10%',
          right: '-10%',
        }}
        animate={
          animate
            ? {
                x: [0, -80, -40, 0],
                y: [0, 80, 40, 0],
                scale: [1, 0.9, 1.1, 1],
              }
            : undefined
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Cyan blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px]"
        style={{
          background: `radial-gradient(circle, rgba(0, 212, 255, ${opacity.secondary}) 0%, transparent 70%)`,
          bottom: '10%',
          left: '20%',
        }}
        animate={
          animate
            ? {
                x: [0, 60, -30, 0],
                y: [0, -40, 20, 0],
                scale: [1, 1.2, 0.95, 1],
              }
            : undefined
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Pink accent blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[90px]"
        style={{
          background: `radial-gradient(circle, rgba(255, 0, 128, ${opacity.secondary}) 0%, transparent 70%)`,
          bottom: '20%',
          right: '10%',
        }}
        animate={
          animate
            ? {
                x: [0, -50, 25, 0],
                y: [0, 30, -15, 0],
                scale: [1, 0.85, 1.05, 1],
              }
            : undefined
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
}

export function StaticMeshGradient({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(at 40% 20%, rgba(0, 255, 136, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(124, 58, 237, 0.15) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(0, 212, 255, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 50%, rgba(255, 0, 128, 0.08) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(0, 255, 136, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 100%, rgba(124, 58, 237, 0.1) 0px, transparent 50%)
          `,
        }}
      />
    </div>
  );
}
