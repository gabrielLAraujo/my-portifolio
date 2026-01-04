'use client';

import { motion } from 'framer-motion';

export function SectionTransition() {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden">
      {/* Gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-transparent" />

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-accent-green/30 to-transparent"
      />
    </div>
  );
}
