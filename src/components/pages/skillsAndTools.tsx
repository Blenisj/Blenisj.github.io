import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Code2, Layers3, Wrench } from 'lucide-react';
import { skillsAndTools } from '../../constants/portfolio.constants';

const categoryIcons = [Code2, Layers3, Wrench];

export const SkillsAndTools = () => (
	<section className="portfolio-section container py-5" id="skills" aria-labelledby="skills-heading">
		<div className="text-center mx-auto mb-5 scroll-reveal" style={{ maxWidth: 760 }}>
			<p className="portfolio-kicker mb-2">03</p>
			<h2 id="skills-heading" className="display-2 fw-semibold">Skills &amp; tools</h2>
			<p className="portfolio-copy lead mb-0">
				The technologies and tools I use to build, test, and deliver digital experiences.
			</p>
		</div>

		<div className="row g-4">
			{skillsAndTools.map((group, index) => {
				const Icon = categoryIcons[index];

				return (
					<div className="col-md-6 col-xl-4 skills-card-pop" key={group.category}>
						<Card
							  className="h-100 border border-secondary rounded-2"
							  sx={{ backgroundColor: 'color-mix(in srgb, var(--portfolio-background) 60%, transparent)', color: 'var(--portfolio-muted)' }}
							elevation={0}
						>
							<CardContent className="p-4">
								<Icon className="mb-3 portfolio-accent" aria-hidden="true" />
								<h3 className="fs-4 fw-semibold">{group.category}</h3>
								<div className="d-flex flex-wrap gap-2 mt-4">
									{group.items.map((item) => (
										<span className="badge rounded-pill border border-secondary px-3 py-2" key={item} style={{ backgroundColor: 'var(--portfolio-background)', color: 'var(--portfolio-muted)' }}>
											{item}
										</span>
									))}
								</div>
							</CardContent>
						</Card>
					</div>
				);
			})}
		</div>
	</section>
);
