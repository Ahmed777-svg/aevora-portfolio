import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        zIndex: 200,
        background: "linear-gradient(90deg, #6C3BFF 0%, #00D1FF 100%)",
        boxShadow: "0 0 10px rgba(0,209,255,0.7), 0 0 20px rgba(108,59,255,0.4)",
      }}
    />
  );
}
