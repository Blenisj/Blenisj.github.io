import { GradientBackground } from '../components/background/gradient-background';
import { NavBar } from '../components/layout/navbar.tsx';
import { About } from '../components/pages/about';
import { Experience } from '../components/pages/experience';
import { Home } from '../components/pages/home';
import { Projects } from '../components/pages/projects';

export default function App() {
  return (
    <>
    <GradientBackground />
    <main id="top" className="portfolio-shell text-light">
      <NavBar />
      <Home />
      <Experience />
      <Projects />
      <About />
    </main>
    </>
  );
}
