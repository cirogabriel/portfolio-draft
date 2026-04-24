'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ASCIIArtAnimation = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  const asciiLines = [
    '                    ___________________________',
    '                   /                           \\',
    '      ░░░░░░░░░░░ |  ◆◆◆ EXECUTING ◆◆◆  |',
    '      ░░AI ENGINE░░ |  ◆◆◆  CODE  ◆◆◆   |',
    '      ░░░░░░░░░░░ |___________________________|',
    '           ███           ',
    '      ━━━━━━━━━━━━━━━━━━━━━',
    '      ║ learning... ███░░░░ 45% ║',
    '      ║ training...  ████░░░ 62% ║',
    '      ║ deploying... █████░░ 78% ║',
    '      ━━━━━━━━━━━━━━━━━━━━━',
  ];

  useEffect(() => {
    setVisibleLines(0);
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev < asciiLines.length ? prev + 1 : asciiLines.length));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <pre className="text-xs md:text-sm text-black font-mono leading-snug whitespace-pre">
      {asciiLines.slice(0, visibleLines).map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </pre>
  );
};

export function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col">
      {/* Hero Content */}
      <div className="flex-1 flex items-center px-6 md:px-12 py-12 md:py-24">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title and Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Main Title */}
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-black font-mono leading-none tracking-tighter">
                  SOFTWARE
                  <br />
                  ENGINEER
                  <br />
                  <span className="text-5xl md:text-6xl">+ AI</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 max-w-md leading-relaxed font-mono">
                Your intelligent development partner, building scalable systems and machine learning solutions.
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-4 flex-wrap">
                <button className="px-6 md:px-8 py-3 bg-black text-white font-mono font-semibold text-sm md:text-base hover:bg-gray-900 transition-colors">
                  Get Started
                </button>
                <button className="text-black font-mono text-sm md:text-base font-semibold hover:underline">
                  See My Work &gt;
                </button>
              </div>
            </motion.div>

            {/* Right Side - ASCII Art Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-end"
            >
              <div className="w-full max-w-md">
                <ASCIIArtAnimation />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
