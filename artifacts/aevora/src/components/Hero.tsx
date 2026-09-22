import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { Download, Eye } from "lucide-react";

const TYPING_PHRASES = [
  "Software Engineer",
  "BFCAI Student",
  "Problem Solver",
  "Tech Enthusiast",
];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_PHRASES[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % TYPING_PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index]);

  return (
    <span
      className="inline-block min-w-[2px]"
      style={{
        background: "linear-gradient(90deg, #6C3BFF 0%, #00D1FF 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse" }}
        style={{ WebkitTextFillColor: "#00D1FF", color: "#00D1FF" }}
      >
        |
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full glass border-primary/30 text-primary-foreground text-sm font-medium"
          >
            The Next Generation of Tech
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 leading-[1.1] tracking-tight hero-heading">
            Engineering the <span className="text-gradient-primary">Future</span>
          </h1>

          {/* Typing animation */}
          <div className="text-2xl md:text-3xl font-serif font-semibold mb-8 h-10 flex items-center justify-center">
            <TypingText />
          </div>

          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed hero-subtext">
            Aevora builds intelligent, secure, and scalable digital systems for the world's most ambitious companies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/projects">
              <Button className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white glow-purple transition-all duration-300">
                View Our Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full glass border-white/20 hover:bg-white/10 text-white transition-all duration-300 hero-outline-btn">
                Contact Sales
              </Button>
            </Link>
            {/* CV button pair */}
            <div className="flex items-center gap-3">
              {/* View CV — ghost outline */}
              <a href="/Ahmed_Khaled_CV.pdf" target="_blank" rel="noopener noreferrer">
                <button
                  className="group inline-flex items-center gap-2 h-14 px-7 rounded-full text-base font-semibold transition-all duration-300"
                  style={{
                    border: "1.5px solid rgba(0,245,255,0.55)",
                    background: "rgba(0,245,255,0.06)",
                    color: "#00F5FF",
                    boxShadow: "0 0 10px rgba(0,245,255,0.12)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,245,255,0.14)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 22px rgba(0,245,255,0.32)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,245,255,0.06)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 10px rgba(0,245,255,0.12)";
                  }}
                >
                  <Eye size={18} className="group-hover:scale-110 transition-transform duration-200" />
                  View CV
                </button>
              </a>
              {/* Download CV — solid filled */}
              <a href="/Ahmed_Khaled_CV.pdf" download="Ahmed_Khaled_CV.pdf">
                <button
                  className="group inline-flex items-center gap-2 h-14 px-7 rounded-full text-base font-semibold transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #00D1FF 0%, #00F5FF 100%)",
                    color: "#070B14",
                    border: "none",
                    boxShadow: "0 0 20px rgba(0,245,255,0.4), 0 4px 16px rgba(0,245,255,0.25)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(0,245,255,0.65), 0 4px 20px rgba(0,245,255,0.4)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,245,255,0.4), 0 4px 16px rgba(0,245,255,0.25)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <Download size={18} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
