import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { ComponentType } from 'react';
import MarqueeModule, { type MarqueeProps } from 'react-fast-marquee';
import { AboutModal } from '../modals/about-modal';

const marqueeExport = MarqueeModule as unknown as ComponentType<MarqueeProps> & {
  default?: ComponentType<MarqueeProps>;
};
const Marquee = marqueeExport.default ?? marqueeExport;

export const About = () => {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const interests = [ 
    {
      image: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Powerlifting",
      text: "Competed on the UC powerlifitng team for several years. still an avid lifter and intend to keep competing for the foreseeable future"
    },
    {
      image: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Music",
      text: "ive been playing guitar for years and love to mess around in DAWs to record my own songs"
    },
    {
      image: "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Warhammer 40k",
      text: "to let out my inner nerd i love to play Warhammer 40k."
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "not sure",
      text: "blah blah blah."
    },
    
  ];

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
