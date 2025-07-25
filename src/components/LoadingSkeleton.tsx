"use client";

import { motion } from "framer-motion";

interface LoadingSkeletonProps {
  variant?: "card" | "text" | "circle" | "button";
  width?: string;
  height?: string;
  className?: string;
}

export function LoadingSkeleton({
  variant = "text",
  width = "100%",
  height = "20px",
  className = "",
}: LoadingSkeletonProps) {
  const baseClasses =
    "bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 rounded animate-pulse";

  const variants = {
    card: "rounded-xl h-64",
    text: "rounded h-4",
    circle: "rounded-full",
    button: "rounded-lg h-12",
  };

  return (
    <motion.div
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0.6 }}
      animate={{
        opacity: [0.6, 1, 0.6],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-blue-50 dark:bg-blue-900 rounded-xl overflow-hidden shadow-lg p-6 space-y-4">
      <LoadingSkeleton variant="card" height="200px" />
      <LoadingSkeleton variant="text" width="80%" height="24px" />
      <div className="space-y-2">
        <LoadingSkeleton variant="text" width="100%" />
        <LoadingSkeleton variant="text" width="90%" />
        <LoadingSkeleton variant="text" width="75%" />
      </div>
      <div className="flex gap-2">
        <LoadingSkeleton variant="button" width="100px" />
        <LoadingSkeleton variant="button" width="100px" />
      </div>
    </div>
  );
}

export function SkillCardSkeleton() {
  return (
    <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-6 space-y-4">
      <LoadingSkeleton variant="text" width="60%" height="20px" />
      <div className="grid grid-cols-2 gap-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-2 p-2 rounded-lg bg-blue-100 dark:bg-blue-800"
          >
            <LoadingSkeleton variant="circle" width="20px" height="20px" />
            <LoadingSkeleton variant="text" width="70%" height="16px" />
          </div>
        ))}
      </div>
    </div>
  );
}
