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
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-black transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-lg">
          {/* Image container */}
          <div className="relative h-48 overflow-hidden bg-gray-100">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* Content container */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Title */}
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link arrow */}
            <div className="flex items-center gap-2 text-black font-semibold text-sm">
              <span>Ver proyecto</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
