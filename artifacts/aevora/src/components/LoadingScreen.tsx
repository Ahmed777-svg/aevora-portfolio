import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #0A0F2C 0%, #05070F 100%)" }}
        >
          <div className="relative flex items-center justify-center">
            {/* Outer spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute w-40 h-40 rounded-full"
              style={{
                border: "2px solid transparent",
                borderTopColor: "#6C3BFF",
                borderRightColor: "transparent",
                borderBottomColor: "#00D1FF",
                borderLeftColor: "transparent",
              }}
            />

            {/* Inner spinning ring (reverse) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              className="absolute w-28 h-28 rounded-full"
              style={{
                border: "1.5px solid transparent",
                borderTopColor: "#00D1FF",
                borderRightColor: "#6C3BFF",
                borderBottomColor: "transparent",
                borderLeftColor: "transparent",
              }}
            />

            {/* Glow blob behind letters */}
            <div
              className="absolute w-24 h-24 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(108,59,255,0.35) 0%, rgba(0,209,255,0.15) 60%, transparent 100%)",
                filter: "blur(8px)",
              }}
            />

            {/* AKM Letters */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10 select-none"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "2.2rem",
                letterSpacing: "0.18em",
                background: "linear-gradient(90deg, #6C3BFF 0%, #00D1FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "none",
                filter: "drop-shadow(0 0 12px rgba(108,59,255,0.7)) drop-shadow(0 0 24px rgba(0,209,255,0.4))",
              }}
            >
              AKM
            </motion.div>
          </div>

          {/* Pulsing subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.6, 0] }}
            transition={{ duration: 2.4, times: [0, 0.2, 0.8, 1], repeat: Infinity }}
            className="absolute bottom-[38%] text-white/40 text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Initializing
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
