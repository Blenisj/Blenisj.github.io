import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { ComponentType } from 'react';
import MarqueeModule, { type MarqueeProps } from 'react-fast-marquee';

const marqueeExport = MarqueeModule as unknown as ComponentType<MarqueeProps> & {
  default?: ComponentType<MarqueeProps>;
};
const Marquee = marqueeExport.default ?? marqueeExport;

export const About = () => {
  const interests = [ 
    {
      image: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Powerlifting",
      text: "Our team has been searching for a solution that could streamline our complex workflow. The intuitive design and powerful features have significantly increased our productivity and collaboration."
    },
    {
      image: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Music",
      text: "As a developer who has worked with countless tools, I can confidently say this product stands out in solving real-world challenges. Its seamless integration and robust architecture make it a game-changer."
    },
    {
      image: "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Warhammer 40k",
      text: "What sets this product apart is its incredible adaptability and user-centric design. We've implemented it across multiple departments with remarkable results."
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Michael Chang",
      text: "In the fast-paced world of technology, finding a solution that is both cutting-edge and reliable is rare. This product bridges that gap perfectly."
    },
    
  ];

  return (
    <section className="about-section portfolio-section" id="about" aria-label="About me">
      <div className="overflow-hidden py-5">
        <Marquee gradient={true}
        gradientColor='#0000773c'
        speed={30}
        pauseOnHover={true}
        autoFill={true}
        className="d-flex align-items-center z-3 mb-5"
      >
          {interests.map((interest) => (
            <Card
              key={interest.name}
              className="d-inline-block mx-2 bg-dark bg-opacity-75 border border-secondary rounded-2 text-light"
              sx={{ width: 220, height: 270 }}
              elevation={0}
            >
              <CardContent className="d-flex h-100 flex-column gap-2 overflow-hidden p-2">
                <div className="ratio ratio-4x3">
                  <img className="w-100 h-100 rounded-1 object-fit-cover" src={interest.image} alt="" />
                </div>
                <p className="mb-0 overflow-auto small">{interest.text}</p>
                <strong className="text-danger">{interest.name}</strong>
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
