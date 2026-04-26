import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <section id="inicio" className="pt-16">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contacto">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}
