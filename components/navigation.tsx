'use client';

import { motion } from 'framer-motion';

export function Navigation() {
  const navItems = [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo/Brand - Left */}
        <motion.div
          className="font-black text-2xl text-black font-mono"
          whileHover={{ scale: 1.05 }}
        >
          ◆
        </motion.div>

        {/* Nav Items - Right */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-700 font-mono font-medium hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu */}
        <button className="text-sm text-gray-700 font-mono hover:text-black transition-colors md:hidden">
          Menu
        </button>
      </div>
    </motion.nav>
  );
}
