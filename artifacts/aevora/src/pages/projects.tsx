import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/JsonLd";
import { PageMeta } from "@/components/PageMeta";

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://aevora.replit.app/projects",
  "url": "https://aevora.replit.app/projects",
  "name": "Projects | Ahmed Khaled Mahmoud",
  "description": "A showcase of software engineering, cybersecurity, and AI projects built by Ahmed Khaled Mahmoud.",
  "author": {
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

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  const categories = ["All", ...allTags.slice(0, 5)]; // Just grab a few common ones for filters

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-32 pt-10 min-h-screen"
    >
      <PageMeta title="Projects" description="A showcase of software engineering, cybersecurity, and AI projects built by Ahmed Khaled Mahmoud." ogImage="og-projects.png" url="/projects" />
      <JsonLd data={projectsSchema} id="jsonld-projects" />
      <section className="container mx-auto px-6 mb-16 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">
            Our <span className="text-gradient-primary">Showcase</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Explore a selection of our most ambitious systems, architectures, and deployments.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant="outline"
                onClick={() => setFilter(cat)}
                className={`rounded-full border-white/10 transition-all ${
                  filter === cat 
                    ? "bg-white text-black hover:bg-white/90" 
                    : "glass text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-6">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative rounded-2xl overflow-hidden glass border border-white/10 cursor-pointer flex flex-col h-[400px]"
              >
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="relative z-20 flex flex-col h-full justify-end p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-6 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-white/90 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-white/50">
            No projects found for this category.
          </div>
        )}
      </section>
    </motion.div>
  );
}
