'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  revealDelay?: number;
  characters?: string;
}

const DEFAULT_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export function ScrambleText({
  text,
  className = '',
  scrambleSpeed = 50,
  revealDelay = 100,
  characters = DEFAULT_CHARACTERS,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    const finalText = text;

    const interval = setInterval(() => {
      setDisplayText(
        finalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return finalText[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= finalText.length) {
        clearInterval(interval);
        setIsComplete(true);
      }

      iteration += 1 / 3;
    }, scrambleSpeed);

    return () => clearInterval(interval);
  }, [text, scrambleSpeed, characters]);

  useEffect(() => {
    const timer = setTimeout(scramble, revealDelay);
    return () => clearTimeout(timer);
  }, [scramble, revealDelay]);

  return (
    <motion.span
      className={`font-mono ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText ||
        text
          .split('')
          .map(() => characters[0])
          .join('')}
      {!isComplete && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-accent-green ml-1 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        />
      )}
    </motion.span>
  );
}

export function useScrambleText(text: string, delay: number = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isRevealing, setIsRevealing] = useState(false);
  const characters = DEFAULT_CHARACTERS;

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsRevealing(true);
      let iteration = 0;

      const interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, delay, characters]);

  return { displayText, isRevealing };
}
