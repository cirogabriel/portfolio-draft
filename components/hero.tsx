'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  const [displayedCode, setDisplayedCode] = useState('');
  const [isLooping, setIsLooping] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);

  const codeSnippets = [
    `const ai = new NeuralNetwork();
ai.train(data).then(() => {
  console.log("Ready");
});`,
    `function optimize(model) {
  return model
    .enhance()
    .compile()
    .deploy();
}`,
    `const innovation = () => {
  const ideas = generate();
  return ideas
    .filter(isViable)
    .map(execute);
};`,
  ];

  useEffect(() => {
    let currentSnippetIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      const currentSnippet = codeSnippets[currentSnippetIndex];

      if (!isDeleting) {
        if (charIndex < currentSnippet.length) {
          setDisplayedCode(currentSnippet.substring(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(typeWriter, 30);
        } else {
          setIsLooping(true);
          timeout = setTimeout(() => {
            isDeleting = true;
            typeWriter();
          }, 2500);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedCode(currentSnippet.substring(0, charIndex - 1));
          charIndex--;
          timeout = setTimeout(typeWriter, 20);
        } else {
          isDeleting = false;
          currentSnippetIndex = (currentSnippetIndex + 1) % codeSnippets.length;
          timeout = setTimeout(typeWriter, 500);
        }
      }
    };

    timeout = setTimeout(typeWriter, 800);
    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 -z-10" />

      {/* Grid pattern background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <motion.div
        className="w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-sm font-mono font-semibold text-gray-600 uppercase tracking-widest">
                Ingeniero en Software & AI
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                Código que
                <br />
                <span className="relative inline-block">
                  transforma
                  <motion.span
                    className="absolute bottom-1 left-0 h-1 bg-black"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed max-w-xl"
            >
              Creando soluciones inteligentes que combinan software robusto con IA de vanguardia. Especializado en machine learning, arquitectura de sistemas y desarrollo full-stack.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-colors duration-300">
                Ver Proyectos
              </button>
              <button className="px-8 py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-colors duration-300">
                Contactar
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - ASCII Code Animation */}
          <motion.div
            variants={itemVariants}
            className="relative"
            ref={codeRef}
          >
            <div className="bg-black rounded-lg p-6 shadow-2xl border border-gray-300">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-auto text-xs text-gray-500 font-mono">
                  main.py
                </span>
              </div>

              {/* Code display with typewriter effect */}
              <pre className="font-mono text-sm text-green-400 leading-relaxed min-h-[120px] overflow-hidden">
                <code>{displayedCode}</code>
                <motion.span
                  className="ml-1 inline-block w-2 h-5 bg-green-400"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </pre>

              {/* Bottom decoration */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-500 font-mono">
                  $ python main.py --mode=production
                </p>
              </div>
            </div>

            {/* Glow effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-black/10 to-black/5 rounded-lg -z-10 blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
