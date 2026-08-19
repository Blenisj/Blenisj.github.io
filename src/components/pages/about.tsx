import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { ComponentType } from 'react';
import MarqueeModule, { type MarqueeProps } from 'react-fast-marquee';
import { AboutModal } from '../modals/about-modal';
import { interests } from '../../constants/portfolio.constants';

const marqueeExport = MarqueeModule as unknown as ComponentType<MarqueeProps> & {
  default?: ComponentType<MarqueeProps>;
};
const Marquee = marqueeExport.default ?? marqueeExport;

export const About = () => {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  return (
    <section className="about-section portfolio-section" id="about" aria-label="About me">
      <div className="overflow-hidden py-5">
        <Marquee 
        gradientColor='#0000773c'
        speed={30}
        pauseOnHover={true}
        autoFill={true}
        className="d-flex align-items-center z-3 mb-5"
      >
          {interests.map((interest) => (
            <button
              className="btn d-inline-block mx-4 p-0 text-start"
              type="button"
              onClick={() => setSelectedInterest(interest.name)}
              aria-label={`View details about ${interest.name}`}
            >
              <Card
                className="bg-dark bg-opacity-75 border border-secondary rounded-2 text-light"
                sx={{ width: 300, height: 350 }}
                elevation={0}
              >
                <CardContent className="d-flex h-100 flex-column gap-2 overflow-hidden p-2">
                  <div className="ratio ratio-4x3">
                    <img className="w-100 h-100 rounded-1 object-fit-cover" src={interest.image} alt="" />
                  </div>
                  <strong className="text-danger">{interest.name}</strong>
                </CardContent>
              </Card>
            </button>
          ))}
        </Marquee>
      </div>
      {selectedInterest && (
        <AboutModal
          item={interests.find((interest) => interest.name === selectedInterest)!}
          onClose={() => setSelectedInterest(null)}
        />
      )}
    </section>
  );
};
