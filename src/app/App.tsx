import { GradientBackground } from '../components/background/gradient-background';
import { NavBar } from '../components/layout/navbar';

export default function App() {
  return (
    <>
    <GradientBackground />
    <main id="top" className="portfolio-shell text-light">

    <NavBar />

      <section className="portfolio-hero container d-flex align-items-center py-5">
        <div className="row w-100">
          <div className="col-lg-8">
          <p className="portfolio-accent mb-4 fw-semibold text-uppercase">
            Developer portfolio
          </p>
          <h1 className="display-3 fw-bold lh-1">
            Building thoughtful digital experiences.
          </h1>
          <p className="portfolio-copy mt-4 mb-0 fs-5 lh-lg">
            Welcome to my portfolio. This page is the starting point for sharing
            my work, experience, and the ideas behind what I build.
          </p>
            <div className="mt-5 d-flex flex-wrap gap-3">
              <a
                className="portfolio-primary btn rounded-pill px-4 py-3 fw-semibold"
                href="#projects"
              >
                View projects
              </a>
              <a
                className="portfolio-link btn rounded-pill border px-4 py-3 fw-semibold"
                href="#about"
              >
                About me
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section container py-5">
        <div className="row g-4">
          <div className="col-md-4" id="about">
          <p className="portfolio-copy small">01</p>
          <h2 className="mt-2 fs-4 fw-semibold">About</h2>
          <p className="portfolio-copy mt-2">A place for a short introduction.</p>
          </div>
          <div className="col-md-4" id="experience">
          <p className="portfolio-copy small">02</p>
          <h2 className="mt-2 fs-4 fw-semibold">Experience</h2>
          <p className="portfolio-copy mt-2">A snapshot of your professional journey.</p>
          </div>
          <div className="col-md-4" id="projects">
          <p className="portfolio-copy small">03</p>
          <h2 className="mt-2 fs-4 fw-semibold">Projects</h2>
          <p className="portfolio-copy mt-2">Selected work and experiments.</p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
