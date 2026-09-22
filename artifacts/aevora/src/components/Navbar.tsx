import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? "glass bg-background/40 py-3 border-white/5 dark:border-white/5 light-mode-nav-scrolled" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer relative group">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 group-hover:glow-purple transition-all duration-500">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-white dark:text-white light-mode-text">AEVORA</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <span
                className={`text-sm font-medium transition-colors cursor-pointer hover:text-white dark:hover:text-white nav-link ${
                  location === link.path ? "text-white dark:text-white nav-link-active" : "text-white/60 dark:text-white/60"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: "rgba(108,59,255,0.12)",
              border: "1px solid rgba(108,59,255,0.3)",
              boxShadow: theme === "light" ? "0 0 12px rgba(108,59,255,0.3)" : "none",
            }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={16} className="text-accent" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={16} className="text-primary" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2 h-auto glow-purple transition-all duration-300">
              Start a Project
            </Button>
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "rgba(108,59,255,0.12)", border: "1px solid rgba(108,59,255,0.3)" }}
          >
            {theme === "dark" ? <Sun size={15} className="text-accent" /> : <Moon size={15} className="text-primary" />}
          </motion.button>
          <button
            className="text-white p-2 nav-link"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`text-lg font-medium block cursor-pointer nav-link ${
                    location === link.path ? "text-primary" : "text-white/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-primary w-full text-white rounded-full py-6 mt-4 glow-purple" onClick={() => setMobileMenuOpen(false)}>
                Start a Project
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
