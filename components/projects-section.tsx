'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './project-card';
import { projects } from '@/lib/data';

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="space-y-2 mb-4">
            <p className="text-sm font-mono font-semibold text-gray-600 uppercase tracking-widest">
              Portafolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Proyectos destacados
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg max-w-2xl"
          >
            Selección de proyectos que demuestran mi experiencia en desarrollo de software, machine learning e inteligencia artificial.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-colors duration-300 inline-block">
            Ver todos los proyectos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
