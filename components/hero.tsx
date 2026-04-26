'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      {!isComplete && <motion.span
        className="ml-1 inline-block w-1 h-12 bg-black"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />}
    </span>
  );
};

export function Hero() {
  const mainText = 'Hello, my name is Ciro';
  const subtitleText = 'Computer Science Student specializing in Software Engineering & AI.';

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 md:px-12 pt-24">
      <motion.div
        className="max-w-3xl w-full text-center space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Title with Pacifico Font and Typewriter */}
        <div className="space-y-4">
          <h1 style={{ fontFamily: "'Pacifico', cursive" }} className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-tight italic">
            <TypewriterText text={mainText} speed={80} />
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          {subtitleText}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
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
