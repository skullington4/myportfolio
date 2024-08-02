import AboutMe from '../components/AboutMe';
import Projects from '@/components/Projects';
import Hobbies from '@/components/Hobbies';

export default function Home() {
  return (
    <div>
      <main className="container mx-auto px-4 min-h-screen">
        <section id="about" className="mb-8"> {/* Added margin-bottom */}
          <AboutMe />
        </section>
        <section id="projects" className="mb-8"> {/* Added margin-bottom */}
          <Projects />
        </section>
        <section id="hobbies">
          <Hobbies />
        </section>
      </main>
    </div>
  );
}
