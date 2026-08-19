import { GradientBackground } from '../components/background/gradient-background';
import { NavBar } from '../components/layout/navbar.tsx';
import { About } from '../components/pages/about';
import { Contact } from '../components/pages/contact';
import { Experience } from '../components/pages/experience';
import { Home } from '../components/pages/home';
import { Projects } from '../components/pages/projects';
import { SkillsAndTools } from '../components/pages/skillsAndTools';

export default function App() {
  return (
    <>
    <GradientBackground />
    <main id="top" className="portfolio-shell text-light">
      <NavBar />
      <Home />
      <SkillsAndTools />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </main>
    </>
  );
}
