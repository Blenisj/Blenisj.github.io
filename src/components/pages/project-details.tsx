import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, Maximize2, X } from "lucide-react";
import { type Project } from "../../constants/portfolio.constants";

type ProjectDetailsProps = {
  project: Project;
};

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  useEffect(() => {
    if (!isImageZoomed) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsImageZoomed(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isImageZoomed]);
  //TODO fix x to backout of zoom
  return (
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
            <div className="row align-items-start g-4 mb-5">
              <div className={project.image ? "col-lg-7" : "col-12"}>
                <h1 id="project-title" className="display-1 fw-semibold mb-4">
                  {project.title}
                </h1>
                <p className="portfolio-copy lead mb-4">
                  {project.description}
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      className="badge rounded-pill border border-secondary px-3 py-2 portfolio-badge"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
              {project.image && (
                <div className="col-lg-5">
                  <button
                    className="btn project-image-button d-block w-100 p-0 border-0"
                    type="button"
                    aria-label={`Expand ${project.title} preview image`}
                    onClick={() => setIsImageZoomed(true)}
                  >
                    <img
                      className="w-100 rounded-3 border border-secondary object-fit-cover"
                      src={project.image}
                      alt={`${project.title} preview`}
                    />
                    <span className="project-image-zoom-hint rounded-circle p-2">
                      <Maximize2 size={16} aria-hidden="true" />
                    </span>
                  </button>
                </div>
              )}
            </div>
            <div className="border-top border-secondary pt-4">
              <h2 className="fs-3 mb-3">About this project</h2>
              <p className="portfolio-copy mb-4">{project.details}</p>
              <div className="d-flex flex-wrap gap-3">
                {project.github && (
                  <a
                    className="btn portfolio-link border rounded-pill px-4 d-inline-flex align-items-center gap-2"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit GitHub
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                )}
                {project.externalUrl && (
                  <a
                    className="btn portfolio-link border rounded-pill px-4 d-inline-flex align-items-center gap-2"
                    href={project.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.externalLabel ?? "Visit site"}
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {isImageZoomed && project.image && (
        <div
          className="modal d-block portfolio-modal-backdrop"
          role="presentation"
          onClick={() => setIsImageZoomed(false)}
        >
          <div
            className="modal-dialog modal-fullscreen d-flex align-items-center justify-content-center m-0 p-3"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} preview image`}
          >
            <button
              className="btn btn-dark opacity-75 rounded-circle position-absolute top-0 end-0 m-4 d-flex align-items-center"
              type="button"
              aria-label="Close image"
              onClick={() => setIsImageZoomed(false)}
            >
              <X size={20} />
            </button>
            <img
              className="mw-100 mh-100 rounded-3 object-fit-contain"
              src={project.image}
              alt={`${project.title} preview`}
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  );
};
