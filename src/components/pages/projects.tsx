const projects = [
	{
		title: 'Project name',
		description: 'Explain what you built, who it was for, and the problem it helped solve.',
		technologies: 'React, TypeScript, CSS',
		link: '#',
	},
	{
		title: 'Another project name',
		description: 'Add a second project description and mention the most interesting part of the work.',
		technologies: 'Technology, Technology, Technology',
		link: '#',
	},
	{
		title: 'A third project name',
		description: 'Use this card for another project, class assignment, experiment, or case study.',
		technologies: 'Technology, Technology',
		link: '#',
	},
];

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
								<article className="portfolio-project h-100">
									<h3 className="fs-4 fw-semibold">{project.title}</h3>
									<p className="portfolio-copy">{project.description}</p>
									<p className="portfolio-accent small mb-4">{project.technologies}</p>
									<a className="portfolio-link" href={project.link}>View project &rarr;</a>
								</article>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
