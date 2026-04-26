export default function Home() {
  return (
    <main className="bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="font-black text-2xl text-black font-mono">◆</div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-sm text-gray-700 font-mono hover:text-black">About</a>
            <a href="#projects" className="text-sm text-gray-700 font-mono hover:text-black">Projects</a>
            <a href="#contact" className="text-sm text-gray-700 font-mono hover:text-black">Contact</a>
          </div>
        </div>
      </nav>

      <section id="inicio" className="min-h-screen bg-white flex items-center justify-center px-6 md:px-12 pt-16">
        <div className="max-w-3xl w-full text-center space-y-8">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight" style={{ fontFamily: 'Pacifico, cursive' }}>
              Hello, my name is
            </h1>
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-black text-black leading-tight" style={{ fontFamily: 'Pacifico, cursive' }}>
              Ciro
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-mono">
            Computer Science Student specializing in Software Engineering & AI.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 bg-black text-white font-mono font-semibold hover:bg-gray-900">
              Get In Touch
            </button>
            <button className="px-8 py-3 border-2 border-black text-black font-mono font-semibold hover:bg-black hover:text-white">
              View Projects
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-black font-mono leading-tight">
                I'm a Software Engineer & AI Enthusiast
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-mono">
                who builds intelligent systems and user-friendly applications that solve real problems. Passionate about machine learning, full-stack development, and creating impactful solutions.
              </p>
            </div>
            <div className="relative h-96 rounded-lg bg-gray-100 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200"></div>
              <div className="relative z-10 text-center space-y-4 px-8">
                <div className="text-6xl font-black text-black font-mono">◆</div>
                <p className="text-gray-700 font-mono text-sm">
                  Software Engineer & AI Enthusiast
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black text-black font-mono mb-6">
              Featured Work
            </h2>
            <p className="text-gray-700 text-lg font-mono max-w-2xl mx-auto">
              Projects showcasing expertise in software engineering and artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <a href="#" className="block group">
              <div className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:border-black">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-6xl font-black text-gray-400 font-mono">◆</div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-black text-black font-mono">
                    AI Task Manager
                  </h3>
                  <p className="text-gray-700 font-mono text-sm">
                    An intelligent task management system powered by machine learning algorithms that predict task priorities and deadlines.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 border border-gray-300 text-xs font-mono text-gray-700">Machine Learning</span>
                    <span className="px-3 py-1 border border-gray-300 text-xs font-mono text-gray-700">React</span>
                  </div>
                  <p className="text-black font-mono font-semibold text-sm">
                    View Project →
                  </p>
                </div>
              </div>
            </a>

            <a href="#" className="block group">
              <div className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:border-black">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-6xl font-black text-gray-400 font-mono">◆</div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-black text-black font-mono">
                    Neural Code Assistant
                  </h3>
                  <p className="text-gray-700 font-mono text-sm">
                    A real-time code completion tool using transformer-based models, providing intelligent suggestions for developers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 border border-gray-300 text-xs font-mono text-gray-700">Deep Learning</span>
                    <span className="px-3 py-1 border border-gray-300 text-xs font-mono text-gray-700">Next.js</span>
                  </div>
                  <p className="text-black font-mono font-semibold text-sm">
                    View Project →
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-28 px-6 md:px-12 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black font-mono">
                Contact me
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 font-mono text-sm mb-2">Email</p>
                    <a href="mailto:ciro@example.com" className="text-white font-mono hover:text-gray-300">
                      ciro@example.com
                    </a>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 font-mono text-sm placeholder-gray-600 focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 font-mono text-sm placeholder-gray-600 focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 font-mono text-sm placeholder-gray-600 focus:outline-none focus:border-white resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-white text-black font-mono font-semibold hover:bg-gray-200"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <p className="text-xs font-mono text-gray-600">
            © 2026 All rights reserved. Built with Next.js + React
          </p>
        </div>
      </footer>
    </main>
  );
}
