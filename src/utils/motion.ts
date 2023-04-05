import { Variants } from "framer-motion";

export const textVariant = ({ delay }: { delay: number }): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

type TransitionType = 'inertia' | 'just' | 'keyframes' | 'spring' | 'tween'
type Direction = "left" | "right" | "up" | 'down'

export const fadeIn = ({ direction, type, delay, duration }: { direction: Direction, type: TransitionType, delay: number, duration: number }): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = ({ delay, duration }: { delay: number, duration: number }) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = ({ delay, duration, direction, type }: { delay: number, duration: number, direction: Direction, type: TransitionType }): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = ({ staggerChildren, delayChildren }: { staggerChildren: number, delayChildren: number }): Variants => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const pixelDust = ({ blurFrom, blurTo }: { blurFrom: number, blurTo: number }): Variants => {
  return {
    hidden: {
      opacity: 0,
      filter: `blur(${blurFrom}px)`
    },
    visible: {
      opacity: 1,
      filter: `blur(${blurTo}px)`
    }
  }
}
