'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 md:px-12">
      <motion.div
        className="max-w-3xl w-full text-center space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Title with Pacifico Font */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight" style={{ fontFamily: 'Pacifico, cursive' }}>
            Hello, my name is
          </h1>
          <motion.h1 
            className="text-7xl md:text-8xl lg:text-9xl font-black text-black leading-tight" 
            style={{ fontFamily: 'Pacifico, cursive' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ciro
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Computer Science Student specializing in Software Engineering & AI.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button className="px-8 py-3 bg-black text-white font-mono font-semibold hover:bg-gray-900 transition-colors">
            Get In Touch
          </button>
          <button className="px-8 py-3 border-2 border-black text-black font-mono font-semibold hover:bg-black hover:text-white transition-colors">
            View Projects
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
