import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { experiences } from "../../constants/portfolio.constants";
import "../../styles/experience.css";

export const Experience = () => (
  <section
    className="experience-timeline portfolio-section container"
    id="experience"
    aria-labelledby="experience-heading"
  >
    <div className="container py-5">
      <div
        className="text-center mx-auto scroll-reveal mb-5"
        style={{ maxWidth: 680 }}
      >
        <p className="portfolio-kicker mb-2">02</p>
        <h2 id="experience-heading" className="display-2 fw-semibold">
          Experience
        </h2>
        <p className="portfolio-copy lead mb-0">
          A timeline of the roles and experiences that have shaped my work.
        </p>
      </div>

      <div className="position-relative mx-auto" style={{ maxWidth: 980 }}>
        <div
          className="experience-progress-track position-absolute top-0 bottom-0"
          aria-hidden="true"
        >
          <div className="experience-progress position-absolute top-0 start-0 w-100" />
        </div>
        {experiences.map((experience) => (
          <article
            className="experience-item row g-0 position-relative scroll-reveal mb-5 ps-4 ps-md-0"
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
              <Card
                className="experience-card-reveal border border-secondary rounded-2 p-4 text-start"
                sx={{
                  backgroundColor:
                    "color-mix(in srgb, var(--portfolio-background) 60%, transparent)",
                  color: "var(--portfolio-muted)",
                }}
                elevation={0}
              >
                <CardContent className="p-0">
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div
                      className="ratio ratio-1x1 shrink-0"
                      style={{ width: 72 }}
                    >
                      <img
                        className="w-100 h-100 object-fit-cover rounded-1"
                        src={experience.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="fs-4 fw-semibold mb-1">
                        {experience.role}
                      </h3>
                      <p className="portfolio-accent mb-0">
                        {experience.organization}
                      </p>
                    </div>
                  </div>
                  <p className="portfolio-copy small lh-base mb-0">
                    {experience.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
