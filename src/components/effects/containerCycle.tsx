import { useState, useEffect, Children, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedDivColumnsCycleProps {
  children: ReactNode;
  interval?: number;
  className?: string;
  cols?: number;
}

export default function AnimatedDivColumnsCycle({
  children,
  interval = 5000,
  className = "",
  cols = 1,
}: AnimatedDivColumnsCycleProps) {
  const allChildren = Children.toArray(children);
  const columns: ReactNode[][] = Array.from({ length: cols }, () => []);

  // Distribute testimonials across columns evenly
  allChildren.forEach((child, index) => {
    const colIndex = index % cols;
    columns[colIndex].push(child);
  });

  return (
    <div
      className={`grid gap-6`}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {columns.map((columnChildren, i) => (
        <AnimatedColumn
          key={i}
          items={columnChildren}
          interval={interval + i * 300} // slight offset to desync
          className={className}
        />
      ))}
    </div>
  );
}

interface AnimatedColumnProps {
  items: ReactNode[];
  interval: number;
  className?: string;
}

function AnimatedColumn({
  items,
  interval,
  className = "",
}: AnimatedColumnProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, items.length]);

  const variants = {
    hidden: { opacity: 0, y: -20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0)",
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <motion.div className="relative min-h-[150px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={className}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {items[index]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
