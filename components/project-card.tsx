'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group"
    >
      <a href={link} className="block">
        <div className="bg-white rounded-lg overflow-hidden border border-gray-300 hover:border-black transition-all duration-300 h-full flex flex-col">
          {/* Image container */}
          <div className="relative h-56 overflow-hidden bg-gray-100">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Content container */}
          <div className="p-8 flex flex-col flex-grow">
            {/* Title */}
            <h3 className="text-2xl font-black text-black mb-3 font-mono group-hover:text-gray-700 transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow font-mono">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 border border-gray-300 text-gray-700 text-xs font-mono group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            <span className="text-black font-mono text-sm font-semibold group-hover:underline">
              View Project →
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
