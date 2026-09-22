import { motion } from "framer-motion";
import { Code2, ShieldAlert, BrainCircuit, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Link } from "wouter";

const iconMap: Record<string, any> = {
  Code2,
  ShieldAlert,
  BrainCircuit,
};

export function Services() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Expertise</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We deliver uncompromising engineering solutions across three core pillars.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group glass p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:glow-purple border border-white/10 hover:border-primary/50 bg-white/[0.02]"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-primary group-hover:text-accent">
                  <Icon size={28} />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={`/services#${service.id}`} className="inline-flex items-center text-primary hover:text-accent font-medium transition-colors">
                  Explore {service.title} <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
