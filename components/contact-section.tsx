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
    <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-black text-black font-mono leading-tight">
              Tell me about<br />your next project
            </h2>
            <p className="text-gray-700 text-lg font-mono max-w-2xl mx-auto">
              Let&apos;s discuss how I can help you build intelligent solutions that matter.
            </p>
          </motion.div>

          {/* Email CTA */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center flex-wrap pt-4"
          >
            <motion.a
              href={`mailto:${contact.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white font-mono font-semibold text-sm hover:bg-gray-900 transition-colors"
            >
              Get Started
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-black text-black font-mono font-semibold text-sm hover:bg-black hover:text-white transition-colors"
            >
              WhatsApp
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8 pt-6 border-t border-gray-200 mt-8 pt-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 font-mono hover:text-black transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {link.label} {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
