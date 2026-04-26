'use client';

import { motion } from 'framer-motion';

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
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-black font-mono leading-tight">
              I&apos;m a developer<br />
              <span className="text-3xl md:text-4xl font-semibold text-gray-700">who builds intelligent<br />solutions</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m passionate about creating software that combines clean architecture with cutting-edge AI capabilities. My journey in computer science has led me to specialize in full-stack development and machine learning, always with a focus on building products that make an impact.
            </p>

            <p className="text-gray-600 text-sm">
              Check out my <a href="#projects" className="underline text-black font-semibold">projects</a>, follow me on <a href="#" className="underline text-black font-semibold">Twitter</a>, or <a href="#contact" className="underline text-black font-semibold">send me an email</a>.
            </p>

            {/* Skills/Traits */}
            <div className="flex flex-wrap gap-2 pt-4">
              {['Python', 'JavaScript/TypeScript', 'React', 'Next.js', 'Machine Learning', 'TensorFlow', 'Full-Stack Dev'].map((skill) => (
                <span key={skill} className="px-4 py-2 border border-gray-300 text-sm font-mono text-gray-700 rounded">
                  {skill}
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
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
            <div className="relative z-10 text-center space-y-4 px-8">
              <div className="text-6xl font-black text-black font-mono">◆</div>
              <p className="text-gray-700 font-mono text-sm">
                Turning ideas into<br />intelligent solutions
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
