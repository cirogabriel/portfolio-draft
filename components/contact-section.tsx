'use client';

import { motion } from 'framer-motion';
import { contact } from '@/lib/data';

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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

  const socialLinks = [
    { label: 'LinkedIn', url: contact.linkedin, icon: '↗' },
    { label: 'GitHub', url: contact.github, icon: '↗' },
    { label: 'Twitter', url: contact.twitter, icon: '↗' },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-sm font-mono font-semibold text-gray-600 uppercase tracking-widest">
              Contacto
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Cuéntame sobre tu proyecto
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Estoy disponible para consultoría, colaboraciones y proyectos desafiantes. Contáctame para discutir cómo puedo ayudarte.
            </p>
          </motion.div>

          {/* Email CTA */}
          <motion.a
            href={`mailto:${contact.email}`}
            variants={itemVariants}
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="px-10 py-4 bg-black text-white font-bold text-lg rounded-full hover:bg-gray-900 transition-colors duration-300 shadow-lg hover:shadow-xl">
              {contact.email}
            </div>
          </motion.a>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 pt-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-black font-semibold hover:text-gray-600 transition-colors duration-300"
                whileHover={{ x: 4 }}
              >
                {link.label}
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
