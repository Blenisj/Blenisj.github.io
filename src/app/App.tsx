import { GradientBackground } from '../components/background/gradient-background';
import { NavBar } from '../components/layout/navbar.tsx';
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
      <section className="portfolio-section container py-5" id="about" aria-labelledby="about-heading">
        <div className="row g-4 scroll-reveal">
          <div className="col-lg-3">
            <p className="portfolio-kicker mb-2">01</p>
            <h2 id="about-heading" className="fs-2 fw-semibold">About</h2>
          </div>
          <div className="col-lg-9">
            <p className="portfolio-copy lead mb-0">Add a longer introduction about yourself, your interests, and the kind of work you want to do.</p>
          </div>
        </div>
      </section>
      <Experience />
      <Projects />
    </main>
    </>
  );
}
