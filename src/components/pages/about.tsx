import { useState } from "react";
import type { ComponentType } from "react";
import MarqueeModule, { type MarqueeProps } from "react-fast-marquee";
import { AboutModal } from "../modals/about-modal";
import { interests, type Interest } from "../../constants/portfolio.constants";

// The package ships both a CJS default and an ESM named export.
const marqueeExport =
  MarqueeModule as unknown as ComponentType<MarqueeProps> & {
    default?: ComponentType<MarqueeProps>;
  };
const Marquee = marqueeExport.default ?? marqueeExport;

export const About = () => {
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(
    null,
  );

  return (
    <>
      <div className="about-marquee-frame position-relative start-50 translate-middle-x overflow-hidden py-5">
        <Marquee
          speed={30}
          pauseOnHover
          autoFill
          className="d-flex align-items-center z-3 mb-5"
        >
          {interests.map((interest) => (
            <button
              className="btn interest-card-button d-inline-block mx-4 p-0 text-start"
              type="button"
              key={interest.name}
              onClick={() => setSelectedInterest(interest)}
              aria-label={`View details about ${interest.name}`}
            >
              <div className="card interest-card border border-secondary rounded-2">
                <div className="card-body position-relative h-100 p-0">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={interest.image}
                    alt={interest.name}
                  />
                  <div className="interest-name-overlay">
                    <strong>{interest.name}</strong>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </Marquee>
      </div>
      {selectedInterest && (
        <AboutModal
          item={selectedInterest}
          onClose={() => setSelectedInterest(null)}
        />
      )}
    </>
  );
};
