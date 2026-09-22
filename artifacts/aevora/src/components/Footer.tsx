import { useState } from "react";
import { Link } from "wouter";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SocialIconProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  disabled?: boolean;
}

function SocialIcon({ icon, label, href, disabled = false }: SocialIconProps) {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <div className="relative flex items-center justify-center">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.92 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none z-50 whitespace-nowrap"
          >
            <div
              className="px-3 py-1.5 rounded-lg text-xs font-medium"
              style={{
                background: "rgba(5, 7, 15, 0.85)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(0, 209, 255, 0.25)",
                color: "#00D1FF",
                boxShadow: "0 0 10px rgba(0,209,255,0.3), 0 0 20px rgba(0,209,255,0.1)",
              }}
            >
              {label}
            </div>
            {/* Arrow */}
            <div
              className="w-2 h-2 mx-auto -mt-1 rotate-45"
              style={{
                background: "rgba(5, 7, 15, 0.85)",
                border: "1px solid rgba(0, 209, 255, 0.25)",
                borderTop: "none",
                borderLeft: "none",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon button */}
      <div
        className={`w-10 h-10 rounded-full glass flex items-center justify-center transition-all duration-300 ${
          disabled
            ? "opacity-35 cursor-not-allowed"
            : "hover:bg-white/10 hover:scale-110"
        }`}
        style={
          hovered && !disabled
            ? { boxShadow: "0 0 14px rgba(0,209,255,0.4)", borderColor: "rgba(0,209,255,0.4)" }
            : {}
        }
      >
        <span
          className={`transition-colors duration-300 ${
            disabled ? "text-white/30" : hovered ? "text-accent" : "text-white/60"
          }`}
        >
          {icon}
        </span>
      </div>
    </div>
  );

  if (disabled) {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-testid={`social-${label.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {inner}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid={`social-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {inner}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer mb-6">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="font-serif font-bold text-lg tracking-tight text-white">AEVORA</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Engineering the future through elite software architecture, uncompromising cybersecurity, and advanced AI systems.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services#software-engineering"><span className="text-white/50 hover:text-primary transition-colors text-sm cursor-pointer">Software Engineering</span></Link></li>
              <li><Link href="/services#cybersecurity"><span className="text-white/50 hover:text-primary transition-colors text-sm cursor-pointer">Cybersecurity</span></Link></li>
              <li><Link href="/services#ai-systems"><span className="text-white/50 hover:text-primary transition-colors text-sm cursor-pointer">AI Systems</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about"><span className="text-white/50 hover:text-primary transition-colors text-sm cursor-pointer">About Us</span></Link></li>
              <li><Link href="/projects"><span className="text-white/50 hover:text-primary transition-colors text-sm cursor-pointer">Projects</span></Link></li>
              <li><Link href="/contact"><span className="text-white/50 hover:text-primary transition-colors text-sm cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif">Connect</h4>
            <div className="flex space-x-3">
              <SocialIcon
                icon={<Twitter size={18} />}
                label="Coming Soon"
                disabled
              />
              <SocialIcon
                icon={<Github size={18} />}
                label="GitHub"
                href="https://github.com/Ahmed777-svg"
              />
              <SocialIcon
                icon={<Linkedin size={18} />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/ahmed-khaled-28ab933b4"
              />
              <SocialIcon
                icon={<Mail size={18} />}
                label="Gmail"
                href="mailto:ahmedkhaled153710@gmail.com"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Aevora. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-white/40 text-xs hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-white/40 text-xs hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
