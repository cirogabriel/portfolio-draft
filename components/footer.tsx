'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-black text-black font-mono">◆</h3>
            <p className="text-gray-600 text-sm font-mono mt-2">
              Software Engineer & AI Specialist
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm font-mono text-gray-700">
            <a href="#" className="hover:text-black transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-black transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Twitter
            </a>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2 text-sm font-mono">
            <motion.div
              className="w-2 h-2 rounded-full bg-black"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-gray-700">Available for work</span>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Bottom */}
        <motion.p
          className="text-center text-xs font-mono text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          &copy; {currentYear} All rights reserved. Built with Next.js + React
        </motion.p>
      </div>
    </footer>
  );
}
