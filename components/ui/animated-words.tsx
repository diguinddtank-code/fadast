'use client';

import * as React from 'react';
import { motion } from 'motion/react';

interface AnimatedWordsProps {
  text: string;
  elementType?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number;
}

export function AnimatedWords({ text, elementType = 'h2', className = '', delay = 0 }: AnimatedWordsProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const MotionTag = motion[elementType as keyof typeof motion] as any;

  return (
    <MotionTag
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
