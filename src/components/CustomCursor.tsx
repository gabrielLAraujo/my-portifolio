'use client';

import { useEffect, useState, useCallback, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CursorState {
  isHovering: boolean;
  isClicking: boolean;
  cursorText: string;
  cursorVariant: 'default' | 'button' | 'link' | 'text';
}

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function CustomCursor() {
  const isMounted = useIsMounted();
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    isHovering: false,
    isClicking: false,
    cursorText: '',
    cursorVariant: 'default',
  });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    if (!isMounted) return;

    // Check for touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Use requestAnimationFrame to avoid synchronous setState
    requestAnimationFrame(() => setIsVisible(true));

    const handleMouseMove = (e: MouseEvent) => {
      moveCursor(e);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => {
      setCursorState((prev) => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursorState((prev) => ({ ...prev, isClicking: false }));
    };

    // Add event listeners for interactive elements
    const addHoverListeners = () => {
      // Buttons
      document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setCursorState((prev) => ({ ...prev, isHovering: true, cursorVariant: 'button' }));
        });
        el.addEventListener('mouseleave', () => {
          setCursorState((prev) => ({ ...prev, isHovering: false, cursorVariant: 'default' }));
        });
      });

      // Links
      document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setCursorState((prev) => ({ ...prev, isHovering: true, cursorVariant: 'link' }));
        });
        el.addEventListener('mouseleave', () => {
          setCursorState((prev) => ({ ...prev, isHovering: false, cursorVariant: 'default' }));
        });
      });

      // Text inputs
      document.querySelectorAll('input, textarea').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setCursorState((prev) => ({ ...prev, isHovering: true, cursorVariant: 'text' }));
        });
        el.addEventListener('mouseleave', () => {
          setCursorState((prev) => ({ ...prev, isHovering: false, cursorVariant: 'default' }));
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Initial setup
    addHoverListeners();

    // Re-add listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [moveCursor, isMounted]);

  if (!isVisible) return null;

  const getCursorSize = () => {
    if (cursorState.isClicking) return 16;
    if (cursorState.isHovering) return 48;
    return 24;
  };

  const getCursorColor = () => {
    switch (cursorState.cursorVariant) {
      case 'button':
        return 'rgba(0, 255, 136, 0.3)';
      case 'link':
        return 'rgba(124, 58, 237, 0.3)';
      case 'text':
        return 'rgba(0, 212, 255, 0.2)';
      default:
        return 'rgba(0, 255, 136, 0.2)';
    }
  };

  const getBorderColor = () => {
    switch (cursorState.cursorVariant) {
      case 'button':
        return 'rgba(0, 255, 136, 0.8)';
      case 'link':
        return 'rgba(124, 58, 237, 0.8)';
      case 'text':
        return 'rgba(0, 212, 255, 0.6)';
      default:
        return 'rgba(0, 255, 136, 0.6)';
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            width: getCursorSize(),
            height: getCursorSize(),
            backgroundColor: getCursorColor(),
            borderColor: getBorderColor(),
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="rounded-full border-2 -translate-x-1/2 -translate-y-1/2"
          style={{
            boxShadow: cursorState.isHovering ? `0 0 20px ${getCursorColor()}` : 'none',
          }}
        />
      </motion.div>

      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          animate={{
            scale: cursorState.isClicking ? 0.5 : 1,
            opacity: cursorState.isHovering ? 0 : 1,
          }}
          className="w-2 h-2 rounded-full bg-accent-green -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }

        @media (max-width: 768px), (hover: none) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}
