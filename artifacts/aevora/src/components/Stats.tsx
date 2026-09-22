import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;

        if (progress < duration * 1000) {
          const nextCount = Math.min(end, (progress / (duration * 1000)) * end);
          setCount(Math.floor(nextCount));
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export function Stats() {
  const stats = [
    { value: 10, suffix: "+", label: "Projects" },
    { value: 5, suffix: "+", label: "Technologies" },
    { value: 3, suffix: "+", label: "Years Learning" },
    { value: 100, suffix: "%", label: "Dedication" },
  ];

  return (
    <section className="py-24 relative z-10 border-y border-white/5 bg-background/50 backdrop-blur-sm stats-section">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 text-gradient-primary stats-number">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-white/60 font-medium uppercase tracking-wider text-sm stats-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
