import { GradientBackground } from "../components/background/gradient-background";
import { NavBar } from "../components/layout/navbar";
import { About } from "../components/pages/about";
import { Contact } from "../components/pages/contact";
import { Experience } from "../components/pages/experience";
import { Home } from "../components/pages/home";
import { Projects } from "../components/pages/projects";
import { ProjectDetails } from "../components/pages/project-details";
import { SkillsAndTools } from "../components/pages/skills-and-tools";
import { projects } from "../constants/portfolio.constants";

const projectSlugPattern = /^\/projects\/([^/]+)\/?$/;

export default function App() {
  const projectSlug = window.location.pathname.match(projectSlugPattern)?.[1];
  const selectedProject = projects.find(
    (project) => project.slug === projectSlug,
  );

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
      <main id="top" className="portfolio-shell">
        <NavBar />
        <Home />

        <section
          className="portfolio-section container py-5"
          id="skills"
          aria-labelledby="skills-heading"
        >
          <div
            className="text-center mx-auto mb-5 scroll-reveal"
            style={{ maxWidth: 760 }}
          >
            <p className="portfolio-kicker mb-2">01</p>
            <h2 id="skills-heading" className="display-2 fw-semibold">
              Skills &amp; tools
            </h2>
            <p className="portfolio-copy lead mb-0">
              The technologies and tools I use to build, test, and deliver
              digital experiences.
            </p>
          </div>
          <SkillsAndTools />
        </section>

        <section
          className="portfolio-section container py-5"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div
            className="text-center mx-auto mb-5 scroll-reveal"
            style={{ maxWidth: 760 }}
          >
            <p className="portfolio-kicker mb-2">02</p>
            <h2 id="experience-heading" className="display-2 fw-semibold">
              Experience
            </h2>
            <p className="portfolio-copy lead mb-0">
              A timeline of the roles and experiences that have shaped my work.
            </p>
          </div>
          <Experience />
        </section>

        <section
          className="portfolio-section container py-5"
          id="projects"
          aria-labelledby="projects-heading"
        >
          <div
            className="text-center mx-auto mb-5 scroll-reveal"
            style={{ maxWidth: 760 }}
          >
            <p className="portfolio-kicker mb-2">03</p>
            <h2 id="projects-heading" className="display-2 fw-semibold">
              Projects
            </h2>
            <p className="portfolio-copy lead mb-0">
              A selection of things I have designed, built, and shipped.
            </p>
          </div>
          <Projects />
        </section>

        <section
          className="portfolio-section container py-5"
          id="about"
          aria-labelledby="about-heading"
        >
          <div
            className="text-center mx-auto mb-5 scroll-reveal"
            style={{ maxWidth: 760 }}
          >
            <p className="portfolio-kicker mb-2">04</p>
            <h2 id="about-heading" className="display-2 fw-semibold">
              About me
            </h2>
            <p className="portfolio-copy lead mb-0">
              Outside of work, these are some of the interests and activities
              that keep me curious, creative, and connected to the world around
              me.
            </p>
          </div>
          <About />
        </section>

        <section
          className="portfolio-section container py-5"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div
            className="text-center mx-auto mb-5 scroll-reveal"
            style={{ maxWidth: 760 }}
          >
            <p className="portfolio-kicker mb-2">05</p>
            <h2 id="contact-heading" className="display-2 fw-semibold">
              Let&apos;s connect.
            </h2>
            <p className="portfolio-copy lead mb-0">
              I&apos;m always open to conversations about new opportunities,
              interesting projects, and ways to build useful things together.
            </p>
          </div>
          <Contact />
        </section>
      </main>
    </>
  );
}
