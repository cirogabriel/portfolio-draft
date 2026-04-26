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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo/Brand - Left */}
        <div className="font-black text-2xl text-black font-mono">
          ◆
        </div>

        {/* Nav Items - Right */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-700 font-mono font-medium hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <button className="text-sm text-gray-700 font-mono hover:text-black transition-colors md:hidden">
          Menu
        </button>
      </div>
    </nav>
  );
}
