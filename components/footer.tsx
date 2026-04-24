'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">&lt;DEV /&gt;</h3>
            <p className="text-gray-400 text-sm">
              Ingeniero en Software & Especialista en IA
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white mb-3">Enlaces</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Availability */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white">Disponibilidad</h4>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-3 h-3 rounded-full bg-green-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-gray-400">
                Disponible para proyectos
              </span>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">
            Diseñado y desarrollado con React + Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
