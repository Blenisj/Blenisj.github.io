import { ArrowUpRight } from "lucide-react";
import { projects } from "../../constants/portfolio.constants";

export const Projects = () => (
  <div className="row g-4">
    {projects.map((project) => (
      <div className="col-md-6 col-xl-4 scroll-reveal" key={project.slug}>
        <div className="card h-100 border border-secondary rounded-2 portfolio-card text-start">
          <div className="card-body p-4">
            <h3 className="fs-4 fw-semibold">{project.title}</h3>
            <p className="portfolio-copy">{project.description}</p>
            <p className="portfolio-accent small mb-4">
              {project.technologies.join(" · ")}
            </p>
            <a
              className="portfolio-link d-inline-flex align-items-center gap-2"
              href={`/projects/${project.slug}`}
            >
              View project
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);
