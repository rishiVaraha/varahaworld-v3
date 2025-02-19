"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, Variant } from "framer-motion";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

const variants: Record<string, Variant> = {
  hidden: ({
    direction,
    distance,
  }: {
    direction: string;
    distance: number;
  }) => {
    switch (direction) {
      case "left":
        return { x: -distance, opacity: 0 };
      case "right":
        return { x: distance, opacity: 0 };
      case "up":
        return { y: distance, opacity: 0 };
      case "down":
        return { y: -distance, opacity: 0 };
      case "zoom-in":
        return { scale: 0.8, opacity: 0 };
      case "zoom-out":
        return { scale: 1.2, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  },
};

interface AnimatedElementProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down" | "zoom-in" | "zoom-out";
  className?: string;
  threshold?: number;
  animationDuration?: number;
  animationDistance?: number;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  direction = "up",
  className = "",
  threshold = 0.1,
  animationDuration = 0.5,
  animationDistance = 100,
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const elementTop = element.offsetTop;
      const elementBottom = elementTop + element.clientHeight;
      const viewportBottom = scrollPosition + window.innerHeight;

      if (
        elementTop < viewportBottom - element.clientHeight * threshold &&
        elementBottom > scrollPosition + element.clientHeight * threshold
      ) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }
  }, [scrollPosition, controls, threshold]);

  return (
    <motion.div
      ref={ref}
      className={className}
      custom={{ direction, distance: animationDistance }}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: animationDuration }}
    >
      {children}
    </motion.div>
  );
};

export default function AnimatedContentExample() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-32">
        <AnimatedElement
          direction="left"
          animationDuration={0.3}
          animationDistance={150}
          className="rounded-lg bg-white p-6 shadow-md"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-700">
            Fast Left Animation (0.3s)
          </h2>
          <p className="text-gray-600">
            This section animates quickly from the left.
          </p>
        </AnimatedElement>

        <AnimatedElement
          direction="right"
          animationDuration={1}
          animationDistance={200}
          className="rounded-lg bg-white p-6 shadow-md"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-700">
            Slow Right Animation (1s)
          </h2>
          <p className="text-gray-600">
            This section animates slowly from the right.
          </p>
        </AnimatedElement>

        <AnimatedElement
          direction="up"
          className="rounded-lg bg-white p-6 shadow-md"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-700">
            Default Up Animation (0.5s)
          </h2>
          <p className="text-gray-600">
            This section animates from the bottom up with default settings.
          </p>
        </AnimatedElement>

        <AnimatedElement
          direction="down"
          animationDuration={0.7}
          animationDistance={120}
          className="rounded-lg bg-white p-6 shadow-md"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-700">
            Custom Down Animation (0.7s)
          </h2>
          <p className="text-gray-600">
            This section animates from the top down with custom duration and
            distance.
          </p>
        </AnimatedElement>

        <AnimatedElement
          direction="zoom-in"
          animationDuration={0.5}
          className="rounded-lg bg-white p-6 shadow-md"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-700">
            Zoom In Animation (0.5s)
          </h2>
          <p className="text-gray-600">This section zooms in as it appears.</p>
        </AnimatedElement>

        <AnimatedElement
          direction="zoom-out"
          animationDuration={0.5}
          className="rounded-lg bg-white p-6 shadow-md"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-700">
            Zoom Out Animation (0.5s)
          </h2>
          <p className="text-gray-600">This section zooms out as it appears.</p>
        </AnimatedElement>
      </div>
    </div>
  );
}
