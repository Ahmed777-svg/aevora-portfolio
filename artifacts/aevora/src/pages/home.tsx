import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { WhyAevora } from "@/components/WhyAevora";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageMeta } from "@/components/PageMeta";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://aevora.replit.app/",
  "url": "https://aevora.replit.app/",
  "name": "Ahmed Khaled Mahmoud | Software Engineer",
  "description": "Personal portfolio of Ahmed Khaled Mahmoud, Software Engineer and BFCAI student specializing in Software Engineering, Cybersecurity, and AI Systems.",
  "about": {
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

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageMeta title="Ahmed Khaled Mahmoud" description="Personal portfolio of Ahmed Khaled Mahmoud, Software Engineer and BFCAI student specializing in Software Engineering, Cybersecurity, and AI Systems." ogImage="og-home.png" url="/" />
      <JsonLd data={homeSchema} id="jsonld-home" />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <WhyAevora />
      <CTASection />
    </motion.div>
  );
}
