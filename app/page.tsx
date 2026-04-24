import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <section id="inicio">
        <Hero />
      </section>
      <section id="proyectos">
        <ProjectsSection />
      </section>
      <section id="contacto">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}
