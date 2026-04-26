'use client';

import { motion } from 'framer-motion';
import { aboutData } from '@/lib/data';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-black font-mono leading-tight">
              {aboutData.title}
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed font-mono">
              {aboutData.description}
            </p>

            <p className="text-gray-600 text-sm font-mono">
              Check out my <a href="#projects" className="underline text-black font-semibold">projects</a>, or <a href="#contact" className="underline text-black font-semibold">send me an email</a>.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 pt-4">
              {aboutData.highlights.map((item) => (
                <span key={item} className="px-4 py-2 border border-gray-300 text-sm font-mono text-gray-700 hover:border-black hover:text-black transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual Element */}
          <motion.div
            className="relative h-96 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200" />
            <motion.div
              className="relative z-10 text-center space-y-4 px-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-6xl font-black text-black font-mono">◆</div>
              <p className="text-gray-700 font-mono text-sm">
                Software Engineer<br />& AI Enthusiast
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
