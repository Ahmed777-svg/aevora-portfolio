import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { PageMeta } from "@/components/PageMeta";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://aevora.replit.app/contact",
  "url": "https://aevora.replit.app/contact",
  "name": "Contact Ahmed Khaled Mahmoud",
  "description": "Get in touch with Ahmed Khaled Mahmoud — Software Engineer, BFCAI. Available for freelance work, collaborations, and opportunities.",
  "mainEntity": {
    "@type": "Person",
    "name": "Ahmed Khaled Mahmoud",
    "jobTitle": "Software Engineer",
    "email": "ahmedkhaled153710@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/in/ahmed-khaled-28ab933b4",
      "https://github.com/Ahmed777-svg"
    ]
  }
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("https://formspree.io/f/mrejbwgg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-32 pt-10 min-h-screen relative flex items-center"
    >
      <PageMeta title="Contact" description="Get in touch with Ahmed Khaled Mahmoud — Software Engineer, BFCAI. Available for freelance work, collaborations, and opportunities." ogImage="og-contact.png" url="/contact" />
      <JsonLd data={contactSchema} id="jsonld-contact" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
              Initiate <br /><span className="text-gradient-primary">Protocol</span>
            </h1>
            <p className="text-xl text-white/60 mb-10 max-w-md leading-relaxed">
              Ready to engineer the future? Send your message and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-6 text-white/70">
              <div>
                <h4 className="text-white font-bold mb-1">Secure Channel</h4>
                <p>ahmedkhaled153710@gmail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-6"
                  data-testid="status-success"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center glow-purple">
                    <CheckCircle size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">Message Sent</h3>
                  <p className="text-white/70 text-lg max-w-sm leading-relaxed">
                    Your message has been sent successfully! I'll get back to you soon.
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    className="mt-2 border-white/20 text-white hover:bg-white/10"
                    data-testid="button-send-another"
                  >
                    Send Another
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <Label htmlFor="name" className="text-white/60 group-focus-within:text-primary transition-colors">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        data-testid="input-name"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary focus-visible:border-primary h-12"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="email" className="text-white/60 group-focus-within:text-primary transition-colors">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        data-testid="input-email"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary focus-visible:border-primary h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="message" className="text-white/60 group-focus-within:text-primary transition-colors">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your project or inquiry..."
                      data-testid="input-message"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary focus-visible:border-primary min-h-[150px] resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm" data-testid="status-error">
                      Something went wrong. Please try again or email directly.
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    data-testid="button-submit"
                    className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl glow-purple transition-all duration-300 disabled:opacity-60"
                  >
                    {status === "submitting" ? "Transmitting…" : "Transmit Request"}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
