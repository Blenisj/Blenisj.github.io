import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import type { ComponentType } from "react";
import MarqueeModule, { type MarqueeProps } from "react-fast-marquee";
import { AboutModal } from "../modals/about-modal";
import { interests } from "../../constants/portfolio.constants";
import { surface } from "../../constants/theme.constants";

// The package ships both a CJS default and an ESM named export.
const marqueeExport =
  MarqueeModule as unknown as ComponentType<MarqueeProps> & {
    default?: ComponentType<MarqueeProps>;
  };
const Marquee = marqueeExport.default ?? marqueeExport;

type Interest = (typeof interests)[number];

const maskGradient =
  "linear-gradient(to right, transparent, black 12%, black 88%, transparent)";

export const About = () => {
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(
    null,
  );

  return (
    <>
      <div
        className="position-relative start-50 translate-middle-x overflow-hidden py-5"
        style={{ width: "85vw" }}
      >
        <Marquee
          speed={30}
          pauseOnHover
          autoFill
          className="d-flex align-items-center z-3 mb-5"
          style={{ maskImage: maskGradient, WebkitMaskImage: maskGradient }}
        >
          {interests.map((interest) => (
            <button
              className="btn d-inline-block mx-4 p-0 text-start"
              type="button"
              key={interest.name}
              onClick={() => setSelectedInterest(interest)}
              aria-label={`View details about ${interest.name}`}
            >
              <Card
                className="border border-secondary rounded-2"
                sx={{
                  width: 360,
                  height: 200,
                  overflow: "hidden",
                  backgroundColor: surface(80),
                }}
                elevation={0}
              >
                <CardContent
                  sx={{
                    position: "relative",
                    height: "100%",
                    padding: 0,
                    "&:last-child": { paddingBottom: 0 },
                    "&:hover .interest-name-overlay, &:focus-within .interest-name-overlay":
                      {
                        opacity: 1,
                      },
                  }}
                >
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={interest.image}
                    alt={interest.name}
                  />
                  <Box
                    className="interest-name-overlay"
                    sx={{
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                      left: 0,
                      padding: 2,
                      color: "var(--portfolio-muted)",
                      background: `linear-gradient(transparent, ${surface(85)})`,
                      opacity: 0,
                      transition: "opacity 180ms ease",
                    }}
                  >
                    <strong>{interest.name}</strong>
                  </Box>
                </CardContent>
              </Card>
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
