import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid } from "../assets";
import { Gradient } from "./design/Roadmap";
import waves from "../assets/roadmap/waved1.png";
import funnel from "../assets/roadmap/funnel2.gif";
import immersive from "../assets/roadmap/immersive.gif";
import immersivest from "../assets/roadmap/immersivestatic.png";
import funnelStatic from "../assets/roadmap/funnel222.png";
import { useEffect, useRef, useState } from "react";
import stlogo from "../assets/roadmap/stlogo.png"; // Import the overlay image

const Roadmap = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [immersiveHover, setImmersiveHover] = useState(false);


  const videoRefs = useRef([]);

  const handleMouseEnter = (videoElement) => {
    if (videoElement) {
      videoElement.play();
    }
  };

  const handleMouseLeave = (videoElement) => {
    if (videoElement) {
      videoElement.pause();
    }
  };
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, roadmap.length);
  }, []);

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="Why Choose Stoira?" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item, index) => (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${index === 1 ? 'md:w-[39rem]' : ''} bg-conic-gradient ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15 ">
                <div className="absolute top-0 left-0 max-w-full">
                  <img className="w-full" src={grid} width={550} height={550} alt="Grid" />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                  </div>

                  <div
                    className={`mb-10 -my-10 -mx-15 ${index === 0 ? 'md:mt-[-8.5rem]' : ''
                      } ${index === 3 ? 'mt-[-10rem]' : ''} ${index === 1 ? 'mt-[-10rem] md:w-[136rem]' : ''
                      } ${index === 2 ? 'mt-[-10rem] md:w-[136rem]' : ''
                      }`}
                  >
                    {index === 0 ? (
                      <div
                        className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <img
                          src={hoveredIndex === 0 ? waves : waves}
                          width={628}
                          height={426}
                          alt="Wave"
                          className="mx-auto md:mx-0 bg-transparent"
                          onMouseEnter={() => setHoveredIndex(0)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        />
                        {/* Overlay image with consistent size */}
                        <img
                          src={stlogo}
                          alt="Overlay Logo"
                          className={`w-[70rem] md:h-[22rem] absolute top-[50%] left-[50%]  ${isHovered ? "roadmap-spinning" : "roadmap-still"
                            }`}
                        />

                        {/* Scoped CSS for spinning */}
                        <style jsx>{`
  .roadmap-still {
    transform: translate(-50%, -50%);
    width: 70rem;
  }

  .roadmap-spinning {
    animation: roadmap-spin 6s linear infinite;
    transform: translate(-50%, -50%);
    width: 70rem;
  }

  @keyframes roadmap-spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

@media (min-width: 640px) {
  .roadmap-still,
  .roadmap-spinning {
    width: 70rem !important; /* Use !important to override other rules */
  }
}

`}</style>

                      </div>

                    ) : index === 1 ? (
                      <img
                        src={hoveredIndex === 1 ? funnel : funnelStatic}
                        width={328}
                        height={426}
                        alt="Funnel"
                        className="mx-auto md:mx-0 md:translate-x-36"
                        onMouseEnter={() => setHoveredIndex(1)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      />
                    ) :
                      index === 2 ? (
                        <img
                        src={immersiveHover === 2 ? immersive : immersivest}
                          width={628}
                          height={426}
                          alt="Immersive"
                          className="mx-auto md:mx-0"
                          onMouseEnter={() => setImmersiveHover(2)}
                          onMouseLeave={() => setImmersiveHover(false)}
                        />
                      ) : (
                        <img
                          className="w-full"
                          src={item.imageUrl}
                          width={628}
                          height={426}
                          alt={item.title}
                        />
                      )}
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
          <Gradient />
        </div>

      </div>
    </Section>
  );
};

export default Roadmap;
