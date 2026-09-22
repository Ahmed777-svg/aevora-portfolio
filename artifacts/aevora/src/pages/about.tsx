import { motion } from "framer-motion";
import { ShieldCheck, Target, Zap, Code2, Mail, Linkedin, Terminal, Shield, Languages, Download, Eye } from "lucide-react";
import profilePhoto from "@assets/Profile_1777731906014.jpeg";
import { JsonLd } from "@/components/JsonLd";
import { PageMeta } from "@/components/PageMeta";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://aevora.replit.app/about",
  "url": "https://aevora.replit.app/about",
  "name": "About Ahmed Khaled Mahmoud | Software Engineer",
  "description": "Learn about Ahmed Khaled Mahmoud — Software Engineer, BFCAI student, cybersecurity enthusiast, and passionate builder of impactful digital systems.",
  "mainEntity": {
    "@type": "Person",
    "name": "Ahmed Khaled Mahmoud",
    "jobTitle": "Software Engineer",
    "email": "ahmedkhaled153710@gmail.com",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Benha Faculty of Computers and Artificial Intelligence",
      "alternateName": "BFCAI"
    },
    "sameAs": [
      "https://www.linkedin.com/in/ahmed-khaled-28ab933b4",
      "https://github.com/Ahmed777-svg"
    ]
  }
};

export default function About() {
  const values = [
    {
      title: "Uncompromising Quality",
      description: "Building systems that stand the test of time, pushing the boundaries of what is technically possible.",
      icon: ShieldCheck
    },
    {
      title: "Radical Innovation",
      description: "Researching, developing, and implementing the next generation of technological paradigms.",
      icon: Zap
    },
    {
      title: "Absolute Precision",
      description: "From architecture to deployment, every decision is calculated, measured, and verified.",
      icon: Target
    },
    {
      title: "Deep Engineering",
      description: "Combining software craftsmanship with AI and cybersecurity for robust, intelligent solutions.",
      icon: Code2
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-32 pt-10"
    >
      <PageMeta title="About Me" description="Learn about Ahmed Khaled Mahmoud — Software Engineer, BFCAI student, cybersecurity enthusiast, and passionate builder of impactful digital systems." ogImage="og-about.png" url="/about" />
      <JsonLd data={aboutSchema} id="jsonld-about" />
      {/* Hero Header */}
      <section className="container mx-auto px-6 mb-24 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="relative inline-block">
              {/* Outer glow pulse */}
              <motion.div
                animate={{ opacity: [0.4, 0.75, 0.4], scale: [1, 1.06, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: "0 0 32px 8px rgba(0,245,255,0.45), 0 0 64px 16px rgba(0,245,255,0.18)",
                }}
              />
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[5px] rounded-full"
                style={{
                  border: "2px solid transparent",
                  borderTopColor: "#00F5FF",
                  borderRightColor: "transparent",
                  borderBottomColor: "rgba(0,245,255,0.35)",
                  borderLeftColor: "transparent",
                }}
              />
              {/* Static cyan ring */}
              <div
                className="absolute -inset-[3px] rounded-full"
                style={{
                  border: "2px solid rgba(0,245,255,0.55)",
                  boxShadow: "0 0 16px rgba(0,245,255,0.6), inset 0 0 12px rgba(0,245,255,0.08)",
                }}
              />
              {/* Photo — overflow-hidden clips the zoomed image into a circle */}
              <div
                className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden relative z-10 flex-shrink-0"
                style={{ border: "3px solid rgba(0,245,255,0.7)" }}
              >
                <img
                  src={profilePhoto}
                  alt="Ahmed Khaled Mahmoud"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover" as const,
                    objectPosition: "center 12%",
                    transform: "scale(1.75)",
                    transformOrigin: "center 18%",
                    imageRendering: "high-quality" as const,
                  }}
                />
              </div>
            </div>
          </motion.div>

          <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass border border-primary/30 text-white/80 text-sm font-medium">
            About Me
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
            Ahmed Khaled
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Software Engineer &amp; Student at the Faculty of Computers and Artificial Intelligence (BFCAI)
          </p>

          {/* CV buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            {/* View CV — ghost outline */}
            <a href="/Ahmed_Khaled_CV.pdf" target="_blank" rel="noopener noreferrer">
              <button
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300"
                style={{
                  border: "1.5px solid rgba(0,245,255,0.55)",
                  background: "rgba(0,245,255,0.06)",
                  color: "#00F5FF",
                  boxShadow: "0 0 12px rgba(0,245,255,0.14)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,245,255,0.14)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(0,245,255,0.35)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,245,255,0.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(0,245,255,0.14)";
                }}
              >
                <Eye size={18} className="group-hover:scale-110 transition-transform duration-200" />
                View CV
              </button>
            </a>

            {/* Download CV — solid filled */}
            <a href="/Ahmed_Khaled_CV.pdf" download="Ahmed_Khaled_CV.pdf">
              <button
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300"
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
          </motion.div>
        </motion.div>
      </section>

      {/* Bio + Contact */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-12 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors" />
            <h2 className="text-3xl font-serif font-bold text-white mb-6 relative z-10">My Story</h2>
            <p className="text-white/70 text-lg leading-relaxed relative z-10 mb-5">
              I'm Ahmed Khaled Mahmoud — a software engineer and computer science student at BFCAI (Benha Faculty of Computers and Artificial Intelligence), passionate about building intelligent, secure, and scalable digital systems.
            </p>
            <p className="text-white/60 text-base leading-relaxed relative z-10">
              My focus spans full-stack software engineering, artificial intelligence, and cybersecurity. I thrive at the intersection of these disciplines — crafting systems that are not only technically excellent but resilient and future-proof.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-12 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-accent/50 transition-colors flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/20 transition-colors" />
            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-white/60 text-base leading-relaxed mb-10">
                Whether you have a project in mind, want to collaborate, or simply want to connect — I'm always open to a conversation.
              </p>
            </div>
            <div className="relative z-10 flex flex-col gap-4">
              {/* Email */}
              <motion.a
                href="mailto:ahmedkhaled153710@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-email"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 glass border border-white/10 hover:border-primary/60 rounded-2xl px-6 py-4 transition-colors group/btn"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover/btn:bg-primary/40 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5 uppercase tracking-widest">Email</p>
                  <p className="text-white font-medium text-sm">ahmedkhaled153710@gmail.com</p>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/ahmed-khaled-28ab933b4"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 glass border border-white/10 hover:border-accent/60 rounded-2xl px-6 py-4 transition-colors group/btn"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 group-hover/btn:bg-accent/40 transition-colors">
                  <Linkedin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5 uppercase tracking-widest">LinkedIn</p>
                  <p className="text-white font-medium text-sm">ahmed-khaled-28ab933b4</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-primary/40 transition-colors"
          >
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-colors" />
            <h2 className="text-2xl font-serif font-bold text-white mb-4 relative z-10">My Mission</h2>
            <p className="text-white/70 leading-relaxed relative z-10">
              To engineer intelligent, secure, and scalable digital systems that empower businesses and individuals to operate at the frontier of what's technologically possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-accent/40 transition-colors"
          >
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-[60px] group-hover:bg-accent/20 transition-colors" />
            <h2 className="text-2xl font-serif font-bold text-white mb-4 relative z-10">My Vision</h2>
            <p className="text-white/70 leading-relaxed relative z-10">
              A future where software is inseparable from intelligence — where every system learns, adapts, and defends itself, making the digital world safer and more capable for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="container mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Skills & Expertise</h2>
            <p className="text-white/60">What I bring to the table.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/40 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-colors" />
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Languages size={18} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white">Languages</h3>
            </div>
            <div className="space-y-5 relative z-10">
              {[
                { lang: "Arabic", level: "Native", pct: 100 },
                { lang: "English", level: "Fluent", pct: 90 },
              ].map((item, i) => (
                <motion.div
                  key={item.lang}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{item.lang}</span>
                    <span className="text-white/50 text-sm">{item.level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-[#8A7CFF]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Programming */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass p-8 rounded-3xl border border-white/10 hover:border-accent/40 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-[60px] group-hover:bg-accent/20 transition-colors" />
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Code2 size={18} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white">Programming</h3>
            </div>
            <div className="space-y-5 relative z-10">
              {[
                { lang: "C++", level: "Professional", pct: 92 },
              ].map((item, i) => (
                <motion.div
                  key={item.lang}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{item.lang}</span>
                    <span className="text-white/50 text-sm">{item.level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#00D1FF] to-[#6C3BFF]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cybersecurity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/40 transition-colors relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-colors" />
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Shield size={18} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white">Cybersecurity</h3>
            </div>
            <div className="flex flex-wrap gap-3 relative z-10">
              {["Red Team", "Penetration Testing", "Vulnerability Assessment", "Ethical Hacking", "Threat Modeling", "OSINT"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/60 transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-3xl border border-white/10 hover:border-accent/40 transition-colors relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-[60px] group-hover:bg-accent/20 transition-colors" />
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Terminal size={18} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white">Kali Linux Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3 relative z-10">
              {["Nmap", "Metasploit", "Burp Suite", "Wireshark", "Aircrack-ng", "John the Ripper", "Hydra", "Nikto"].map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="px-4 py-1.5 rounded-full text-sm font-medium border border-accent/30 bg-accent/10 text-accent hover:bg-accent/20 hover:border-accent/60 transition-colors cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Core Principles</h2>
            <p className="text-white/60">The values that guide every line of code I write.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:text-primary text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
