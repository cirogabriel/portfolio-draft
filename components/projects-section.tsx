const projects = [
  {
    id: 1,
    title: 'AI Task Manager',
    description: 'An intelligent task management system powered by machine learning algorithms that predict task priorities and deadlines based on historical data and user behavior patterns.',
    tags: ['Machine Learning', 'React', 'Python', 'TensorFlow'],
    link: '#',
  },
  {
    id: 2,
    title: 'Neural Code Assistant',
    description: 'A real-time code completion tool using transformer-based models, providing intelligent suggestions for developers across multiple programming languages and frameworks.',
    tags: ['Deep Learning', 'TypeScript', 'Next.js', 'GPT'],
    link: '#',
  },
];

const ProjectCard = ({ title, description, tags, link }: any) => {
  return (
    <a href={link} className="block group">
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:border-black transition-colors duration-300 h-full flex flex-col">
        {/* Image Placeholder */}
        <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
          <div className="text-6xl font-black text-gray-400 font-mono">◆</div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-4 flex flex-col flex-grow">
          <h3 className="text-2xl font-black text-black font-mono">
            {title}
          </h3>
          <p className="text-gray-700 font-mono text-sm leading-relaxed flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 border border-gray-300 text-xs font-mono text-gray-700 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <p className="text-black font-mono font-semibold text-sm pt-2 group-hover:underline">
            View Project →
          </p>
        </div>
      </div>
    </a>
  );
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-black font-mono mb-6">
            Featured Work
          </h2>
          <p className="text-gray-700 font-mono text-lg max-w-2xl mx-auto">
            Projects showcasing expertise in software engineering and artificial intelligence
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
