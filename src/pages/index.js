import AboutMe from '../components/AboutMe'
import Projects from '@/components/Projects'
import Hobbies from '@/components/Hobbies'

export default function Home() {
  return (
    <div>
      <main className="container mx-auto px-4 min-h-screen">
        <section id="about">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="hobbies">
          <Hobbies />
        </section>
      </main>
    </div>
  )
}
