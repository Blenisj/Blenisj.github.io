import { useEffect } from 'react';
import type { ExperienceItem } from '../../types/experience.types';

type ExperienceModalProps = {
  experience: ExperienceItem;
  onClose: () => void;
};

export const ExperienceModal = ({ experience, onClose }: ExperienceModalProps) => {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  return (
    <div className="experience-modal modal d-block" role="presentation" onClick={onClose}>
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="dialog"
        aria-modal="true"
        aria-labelledby="experience-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-content experience-modal-content">
          <div className="modal-header border-secondary">
            <div>
              <p className="portfolio-accent small mb-1">{experience.period}</p>
              <h2 id="experience-modal-title" className="modal-title fs-3">{experience.role}</h2>
              <p className="portfolio-copy mb-0">{experience.organization}</p>
            </div>
            <button
              className="btn-close btn-close-white"
              type="button"
              aria-label="Close experience details"
              onClick={onClose}
            />
          </div>
          <div className="modal-body">
            <img className="experience-modal-image mb-4" src={experience.image} alt="" />
            <div className="portfolio-copy experience-details">
              {experience.description.split(' ● ').map((detail) => <p key={detail}>{detail}</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
