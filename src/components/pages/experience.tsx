import { experiences } from "../../constants/portfolio.constants";
import "../../styles/experience.css";

export const Experience = () => (
  <div className="experience-list position-relative mx-auto">
    <div
      className="experience-progress-track position-absolute top-0 bottom-0"
      aria-hidden="true"
    >
      <div className="experience-progress position-absolute top-0 start-0 w-100" />
    </div>
    {experiences.map((experience) => (
      <article
        className="experience-item row g-0 position-relative mb-5 ps-4 ps-md-0"
        key={experience.id}
      >
        <time className="experience-period-reveal col-md-4 d-md-flex align-items-md-center justify-content-md-end text-md-end pe-md-5 pb-3 pb-md-0 fs-4 fw-semibold portfolio-copy">
          {experience.period}
        </time>
        <div
          className="experience-marker experience-marker-reveal position-absolute rounded-circle"
          aria-hidden="true"
        />
        <div className="experience-content col-md-8 ps-md-5">
          <div className="card experience-card-reveal border border-secondary rounded-2 portfolio-card text-start">
            <div className="card-body p-4">
              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="ratio ratio-1x1 experience-logo">
                  <img
                    className="w-100 h-100 object-fit-cover rounded-1"
                    src={experience.image}
                    alt={`${experience.organization} logo`}
                  />
                </div>
                <div>
                  <h3 className="fs-4 fw-semibold mb-1">{experience.role}</h3>
                  <p className="portfolio-accent mb-0">
                    {experience.organization}
                  </p>
                </div>
              </div>
              <p className="portfolio-copy small lh-base mb-0">
                {experience.description}
              </p>
            </div>
          </div>
        </div>
      </article>
    ))}
  </div>
);
