import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Interest } from "../../constants/portfolio.constants";

type AboutModalProps = {
  item: Interest;
  onClose: () => void;
};

const isVideo = (source: string) => /\.(mp4|webm|mov)$/i.test(source);

export const AboutModal = ({ item, onClose }: AboutModalProps) => {
  const slides = item.images.length ? item.images : [item.image];
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);
  //TODO add gradient edge to modal to make it more obvious
  const step = (offset: number) =>
    setSlide((current) => (current + offset + slides.length) % slides.length);

  return (
    <div
      className="modal d-block portfolio-modal-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-content border-secondary portfolio-surface">
          <div className="modal-header border-secondary">
            <h2 id="about-modal-title" className="modal-title fs-3">
              {item.name}
            </h2>
            <button
              className="btn-close btn-close-white"
              type="button"
              aria-label="Close details"
              onClick={onClose}
            />
          </div>
          <div className="modal-body">
            <div className="position-relative mb-3">
              {isVideo(slides[slide]) ? (
                <video
                  className="w-100 rounded-2 object-fit-cover bg-black about-modal-media"
                  src={slides[slide]}
                  title={`${item.name} video`}
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  className="w-100 rounded-2 object-fit-cover about-modal-media"
                  src={slides[slide]}
                  alt={`${item.name} ${slide + 1} of ${slides.length}`}
                />
              )}
              {slides.length > 1 && (
                <>
                  <button
                    className="btn btn-dark btn-sm opacity-75 rounded-circle position-absolute top-50 start-0 translate-middle-y ms-2 d-flex align-items-center"
                    type="button"
                    aria-label="Previous image"
                    onClick={() => step(-1)}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    className="btn btn-dark btn-sm opacity-75 rounded-circle position-absolute top-50 end-0 translate-middle-y me-2 d-flex align-items-center"
                    type="button"
                    aria-label="Next image"
                    onClick={() => step(1)}
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-2">
                    {slides.map((source, index) => (
                      <button
                        className={`btn btn-sm p-0 border-0 rounded-circle about-modal-dot ${
                          index === slide ? "bg-light" : "bg-secondary"
                        }`}
                        type="button"
                        key={source}
                        aria-label={`Show image ${index + 1}`}
                        aria-current={index === slide}
                        onClick={() => setSlide(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <p className={item.links?.length ? "mb-3" : "mb-0"}>{item.text}</p>
            {item.links?.length ? (
              <div className="d-flex flex-wrap gap-2">
                {item.links.map((link) => (
                  <a
                    className="btn btn-sm portfolio-link border"
                    href={link.href}
                    key={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
