import { ArrowUpRight } from 'lucide-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { projects } from '../../constants/portfolio.constants';

export const Projects = () => {
	return (
		<section className="portfolio-section container py-5" id="projects" aria-labelledby="projects-heading">
			<div className="row g-4">
				<div className="col-lg-3 scroll-reveal">
					<p className="portfolio-kicker mb-2">03</p>
					<h2 id="projects-heading" className="fs-2 fw-semibold">Projects</h2>
				</div>

				<div className="col-lg-9">
					<div className="row g-4">
						{projects.map((project) => (
							<div className="col-md-6 scroll-reveal" key={project.title}>
                <Card
                  className="project-card border border-secondary"
                  sx={{
                    backgroundColor: 'color-mix(in srgb, var(--portfolio-background) 60%, transparent)',
                    color: 'var(--portfolio-muted)',
                  }}
                  elevation={0}
                >
									<CardContent className="p-0">
										<h3 className="fs-4 fw-semibold">{project.title}</h3>
										<p className="portfolio-copy">{project.description}</p>
										<p className="portfolio-accent small mb-4">{project.technologies.join(' · ')}</p>
										<a className="portfolio-link d-inline-flex align-items-center gap-2" href={`/projects/${project.slug}`}>
											View project
											<ArrowUpRight size={16} aria-hidden="true" />
										</a>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
