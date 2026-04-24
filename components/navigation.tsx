'use client';

import { motion } from 'framer-motion';

export function Navigation() {
  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md px-6 py-4 rounded-full border border-gray-200/50 shadow-sm">
        {/* Logo */}
        <motion.div
          className="font-bold text-xl text-black"
          whileHover={{ scale: 1.05 }}
        >
          &lt;DEV /&gt;
        </motion.div>

        {/* Nav Items */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-gray-600 font-medium hover:text-black transition-colors duration-300 relative"
              whileHover={{ color: '#000' }}
              group
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-black"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="px-6 py-2 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-colors duration-300 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Conectar
        </motion.button>
      </div>
    </motion.nav>
  );
}
