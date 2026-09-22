import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-12 md:p-20 text-center border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Partner with Aevora to architect the intelligent, secure systems your enterprise needs to dominate the next decade.
            </p>
            
            <Link href="/contact">
              <Button className="h-14 px-10 text-lg rounded-full bg-primary hover:bg-primary/90 text-white glow-purple transition-all duration-300">
                Initiate Project
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
