"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function AnimateOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimateOnScrollProps) {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { y: 0, x: 20 },
    right: { y: 0, x: -20 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: directions[direction].y,
        x: directions[direction].x,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
