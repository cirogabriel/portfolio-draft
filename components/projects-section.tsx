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
    <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-5xl md:text-6xl font-black text-black font-mono mb-6 leading-tight"
          >
            Featured Work
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg font-mono max-w-2xl mx-auto"
          >
            Innovative projects combining software engineering with artificial intelligence
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
