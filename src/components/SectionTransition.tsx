"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function SectionTransition() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <motion.div
      ref={ref}
      className="relative h-32 w-full overflow-hidden"
      style={{ opacity }}
    >
      {/* Gradiente animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20"
        style={{
          backgroundSize: "200% 100%",
          x: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
        }}
      />

      {/* Ondas animadas */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/wave.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Partículas flutuantes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-primary/30"
          style={{
            left: `${20 + i * 15}%`,
            top: "50%",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Gradiente de transição */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"
        style={{ opacity: gradientOpacity }}
      />
    </motion.div>
  );
} 