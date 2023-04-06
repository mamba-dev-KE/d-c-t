import type { Variants } from "framer-motion";
import { fadeIn, pixelDust, zoomIn } from "../utils/motion";

export const imageZoom = zoomIn({ delay: 0, duration: 0.5 })
export const imageFadeIn = fadeIn({ delay: 0, direction: "up", duration: 1, type: "tween" })
export const pixelDusts = pixelDust({ blurFrom: 10, blurTo: 0 })

export const container: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};