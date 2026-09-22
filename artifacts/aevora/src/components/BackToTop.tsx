import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          data-testid="button-back-to-top"
          className="fixed bottom-8 right-8 z-[150] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          style={{
            background: "linear-gradient(135deg, rgba(108,59,255,0.25) 0%, rgba(0,209,255,0.15) 100%)",
            border: "1px solid rgba(108,59,255,0.5)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 0 16px rgba(108,59,255,0.35), 0 0 32px rgba(0,209,255,0.15)",
          }}
          whileHover={{
            boxShadow: "0 0 24px rgba(108,59,255,0.6), 0 0 48px rgba(0,209,255,0.3)",
          }}
        >
          <ArrowUp size={18} className="text-white group-hover:text-accent transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
