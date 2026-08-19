
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { experiences } from '../../constants/experience.constants';
import { ExperienceModal } from '../modals/experience-modal';
import '../../styles/experience.css';

export const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const selectedItem = experiences.find((experience) => experience.id === selectedExperience);

  return (
    <section className="experience-timeline portfolio-section" id="experience" aria-labelledby="experience-heading">
      <div className="container py-5">
        <div className="experience-heading text-center mx-auto scroll-reveal mb-5">
          <p className="portfolio-kicker mb-2">02</p>
          <h2 id="experience-heading" className="display-2 fw-semibold">Experience</h2>
          <p className="portfolio-copy lead mb-0">A timeline of the roles and experiences that have shaped my work.</p>
        </div>

        <div className="experience-list position-relative">
          <div className="experience-progress-track" aria-hidden="true">
            <div className="experience-progress" />
          </div>
          {experiences.map((experience) => (
            <article className="experience-item row g-0 position-relative scroll-reveal" key={experience.id}>
              <time className="experience-period col-md-4 text-md-end pe-md-5">{experience.period}</time>
              <div className="experience-marker" aria-hidden="true" />
              <div className="experience-content col-md-8 ps-md-5">
                <button
                  className="experience-preview btn p-0 text-start"
                  type="button"
                  onClick={() => setSelectedExperience(experience.id)}
                  aria-label={`View details for ${experience.role} at ${experience.organization}`}
                >
                  <div className="experience-card">
                    <div className="experience-card-heading d-flex justify-content-between align-items-start gap-3 mb-3">
                      <div>
                        <h3 className="fs-4 fw-semibold mb-1">{experience.role}</h3>
                        <p className="portfolio-accent mb-0">{experience.organization}</p>
                      </div>
                      <ArrowUpRight className="experience-card-arrow" size={24} aria-hidden="true" />
                    </div>
                    <img className="experience-image mb-3" src={experience.image} alt="" />
                    <p className="portfolio-copy mb-0">{experience.description.split(' ● ')[0]}</p>
                  </div>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedItem && <ExperienceModal experience={selectedItem} onClose={() => setSelectedExperience(null)} />}
    </section>
  );
};
