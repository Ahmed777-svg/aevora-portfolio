import { motion } from "framer-motion";
import { Zap, Server, ShieldCheck, Globe } from "lucide-react";

export function WhyAevora() {
  const reasons = [
    {
      title: "Zero Compromises",
      description: "We do not cut corners. Every line of code is optimized, tested, and built for scale.",
      icon: Zap
    },
    {
      title: "Bleeding Edge",
      description: "We employ the latest stable technologies to give our clients an unfair advantage.",
      icon: Globe
    },
    {
      title: "Battle Tested",
      description: "Our systems handle millions of daily requests for enterprise clients.",
      icon: Server
    },
    {
      title: "Always Secure",
      description: "Security is not an afterthought—it is the foundation of our engineering process.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Why <span className="text-gradient-primary">Aevora?</span>
            </h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              We are not an agency. We are an elite engineering task force. We take on the most complex technical challenges and deliver solutions that redefine what's possible.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2 rounded-lg bg-primary/20 text-primary">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-lg font-bold text-white">{reason.title}</h4>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px]" />
            <div className="relative glass border border-white/10 rounded-2xl p-8 overflow-hidden">
              <div className="font-mono text-sm text-primary/80 mb-6 flex justify-between border-b border-white/10 pb-4">
                <span>system.status</span>
                <span className="text-accent animate-pulse">ONLINE</span>
              </div>
              <div className="space-y-4 font-mono text-xs text-white/50">
                <p>{`> Initializing secure connection...`}</p>
                <p className="text-white/80">{`> Connected to Aevora Neural Net`}</p>
                <p>{`> Loading modules: [AI, SEC, ENG]`}</p>
                <p className="text-accent">{`> System operational at 99.999% efficiency`}</p>
                <p>{`> Awaiting input...`}</p>
                <div className="w-2 h-4 bg-primary animate-pulse mt-2" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
