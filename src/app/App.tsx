import { GradientBackground } from '../components/background/gradient-background';
import { NavBar } from '../components/layout/navbar.tsx';
import { About } from '../components/pages/about';
import { Contact } from '../components/pages/contact';
import { Experience } from '../components/pages/experience';
import { Home } from '../components/pages/home';
import { Projects } from '../components/pages/projects';
import { ProjectDetails } from '../components/pages/project-details';
import { SkillsAndTools } from '../components/pages/skillsAndTools';
import { projects } from '../constants/portfolio.constants';

export default function App() {
  const projectSlug = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1];
  const selectedProject = projects.find((project) => project.slug === projectSlug);

  if (selectedProject) {
    return (
      <>
        <GradientBackground />
        <ProjectDetails project={selectedProject} />
      </>
    );
  }

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
