import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import type { ComponentType } from "react";
import MarqueeModule, { type MarqueeProps } from "react-fast-marquee";
import { AboutModal } from "../modals/about-modal";
import { interests } from "../../constants/portfolio.constants";

const marqueeExport =
  MarqueeModule as unknown as ComponentType<MarqueeProps> & {
    default?: ComponentType<MarqueeProps>;
  };
const Marquee = marqueeExport.default ?? marqueeExport;

export const About = () => {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  return (
    <section
      className="about-section portfolio-section container"
      id="about"
      aria-label="About me"
    >
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-4 scroll-reveal"
          style={{ maxWidth: 760 }}
        >
          <p className="portfolio-kicker mb-2">05</p>
          <h2 id="about-heading" className="display-2 fw-semibold">
            About me
          </h2>
          <p className="portfolio-copy lead mb-0">
            Outside of work, these are some of the interests and activities that
            keep me curious, creative, and connected to the world around me.
          </p>
        </div>
        <div
          className="position-relative start-50 translate-middle-x overflow-hidden py-5"
          style={{ width: "85vw" }}
        >
          <Marquee
            speed={30}
            pauseOnHover
            autoFill
            className="d-flex align-items-center z-3 mb-5"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          >
            {interests.map((interest) => (
              <button
                className="btn d-inline-block mx-4 p-0 text-start"
                type="button"
                onClick={() => setSelectedInterest(interest.name)}
                aria-label={`View details about ${interest.name}`}
              >
                <Card
                  className="border border-secondary rounded-2"
                  sx={{
                    width: 360,
                    height: 200,
                    overflow: "hidden",
                    backgroundColor:
                      "color-mix(in srgb, var(--portfolio-background) 80%, transparent)",
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
                        background:
                          "linear-gradient(transparent, color-mix(in srgb, var(--portfolio-background) 85%, transparent))",
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
      </div>
      {selectedInterest && (
        <AboutModal
          item={
            interests.find((interest) => interest.name === selectedInterest)!
          }
          onClose={() => setSelectedInterest(null)}
        />
      )}
    </section>
  );
};
