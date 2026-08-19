const experiences = [
	{
		role: 'Your role or title',
		company: 'Company or organization',
		dates: 'Month Year - Present',
		description: 'Add a short description of your responsibilities, accomplishments, or what you learned here.',
	},
	{
		role: 'Another role or title',
		company: 'Another company or organization',
		dates: 'Month Year - Month Year',
		description: 'Add another experience, internship, volunteer role, or leadership position.',
	},
];

export const Experience = () => {
	return (
		<section className="portfolio-section container py-5" id="experience" aria-labelledby="experience-heading">
			<div className="row g-4">
				<div className="col-lg-3 scroll-reveal">
					<p className="portfolio-kicker mb-2">02</p>
					<h2 id="experience-heading" className="fs-2 fw-semibold">Experience</h2>
				</div>

				<div className="col-lg-9">
					{experiences.map((experience) => (
						<article className="portfolio-entry scroll-reveal" key={`${experience.company}-${experience.role}`}>
							<div className="d-flex flex-wrap justify-content-between gap-2">
								<h3 className="fs-4 fw-semibold mb-1">{experience.role}</h3>
								<p className="portfolio-copy small mb-1">{experience.dates}</p>
							</div>
							<p className="portfolio-accent mb-2">{experience.company}</p>
							<p className="portfolio-copy mb-0">{experience.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};
