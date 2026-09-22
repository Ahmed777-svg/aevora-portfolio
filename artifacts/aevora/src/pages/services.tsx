import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Code2, ShieldAlert, BrainCircuit, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { JsonLd } from "@/components/JsonLd";
import { PageMeta } from "@/components/PageMeta";

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://aevora.replit.app/services",
  "url": "https://aevora.replit.app/services",
  "name": "Services | Ahmed Khaled Mahmoud",
  "description": "Software engineering, cybersecurity, and AI services offered by Ahmed Khaled Mahmoud.",
  "provider": {
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

const iconMap: Record<string, any> = {
  Code2,
  ShieldAlert,
  BrainCircuit,
};

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-32 pt-10"
    >
      <PageMeta title="Services" description="Software engineering, cybersecurity, and AI services offered by Ahmed Khaled Mahmoud." ogImage="og-services.png" url="/services" />
      <JsonLd data={servicesSchema} id="jsonld-services" />
      <section className="container mx-auto px-6 mb-20 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass border-primary/30 text-primary-foreground text-sm font-medium">
            Our Capabilities
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">
            Elite <span className="text-gradient-primary">Engineering</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We don't build standard applications. We architect highly secure, infinitely scalable, and intelligent digital systems.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-6 space-y-32">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          const isEven = index % 2 !== 0;

          return (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 w-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary shadow-[0_0_30px_rgba(108,59,255,0.3)]">
                  <Icon size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{service.title}</h2>
                <p className="text-xl text-white/60 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-white/80"
                    >
                      <CheckCircle2 className="text-accent mr-4 flex-shrink-0" size={20} />
                      <span className="text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 h-auto glow-purple text-lg">
                    Discuss Your Needs
                  </Button>
                </Link>
              </div>

              <div className="lg:w-1/2 w-full relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="glass aspect-square rounded-3xl border border-white/10 p-8 flex flex-col relative overflow-hidden group">
                  <div className="flex-1 flex flex-col justify-center font-mono text-sm text-white/50 space-y-2">
                    <p className="text-primary">{`// Initiating ${service.title.toLowerCase().replace(' ', '_')} protocol`}</p>
                    {service.features.map((f, i) => (
                      <motion.p 
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (i * 0.2) }}
                      >
                        {`> Loading module: ${f}... [OK]`}
                      </motion.p>
                    ))}
                    <motion.p 
                      className="text-accent mt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.5 }}
                    >
                      {`> System optimized and running at peak capacity.`}
                    </motion.p>
                    <div className="w-2 h-4 bg-primary animate-pulse mt-2" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
