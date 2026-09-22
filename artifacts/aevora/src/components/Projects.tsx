import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Link } from "wouter";
import { Button } from "./ui/button";

export function Projects() {
  return (
    <section className="py-32 relative z-10 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Featured Work</h2>
            <p className="text-xl text-white/60">
              A selection of our most ambitious and technically challenging projects.
            </p>
          </div>
          <Link href="/projects">
            <Button variant="outline" className="glass border-white/20 hover:bg-white/10 text-white rounded-full">
              View All Projects
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass border border-white/10 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/80 mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white/90 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
