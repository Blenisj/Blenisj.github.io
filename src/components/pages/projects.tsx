import { ArrowUpRight } from "lucide-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { projects } from "../../constants/portfolio.constants";

export const Projects = () => {
  return (
    <div className="row g-4">
      {projects.map((project) => (
        <div className="col-md-6 col-xl-4 scroll-reveal" key={project.title}>
          <Card
            className="project-card h-100 border border-secondary"
            sx={{
              backgroundColor:
                "color-mix(in srgb, var(--portfolio-background) 60%, transparent)",
              color: "var(--portfolio-muted)",
            }}
            elevation={0}
          >
            <CardContent className="p-0">
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
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};
