import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  contactEmailHref,
  type Project,
} from "../../constants/portfolio.constants";

type ProjectDetailsProps = {
  project: Project;
};

export const ProjectDetails = ({ project }: ProjectDetailsProps) => (
  <main className="portfolio-shell">
    <section
      className="container min-vh-100 d-flex align-items-center py-5"
      aria-labelledby="project-title"
    >
      <div className="row justify-content-center w-100">
        <div className="col-lg-9">
          <a
            className="portfolio-link d-inline-flex align-items-center gap-2 mb-5"
            href="/#projects"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back to projects
          </a>
          <p className="portfolio-kicker mb-3">Project case study</p>
          <h1 id="project-title" className="display-1 fw-semibold mb-4">
            {project.title}
          </h1>
          <p className="portfolio-copy lead mb-4">{project.description}</p>
          <div className="d-flex flex-wrap gap-2 mb-5">
            {project.technologies.map((technology) => (
              <span
                className="badge rounded-pill border border-secondary px-3 py-2 portfolio-badge"
                key={technology}
              >
                {technology}
              </span>
            ))}
          </div>
          <div className="border-top border-secondary pt-4">
            <h2 className="fs-3 mb-3">About this project</h2>
            <p className="portfolio-copy mb-4">{project.details}</p>
            <a
              className="btn portfolio-primary rounded-pill px-4"
              href={contactEmailHref}
            >
              Discuss a project
              <ExternalLink size={16} className="ms-2" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
);
