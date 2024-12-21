import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid } from "../assets";
import { Gradient } from "./design/Roadmap";
import waves from "../assets/roadmap/waves.mp4"
import { useEffect, useRef } from "react";

const Roadmap = () => {
  const videoRef = useRef(null); // Reference for the video element

  useEffect(() => {
    if (videoRef.current) {
      // Slow down the video by setting the playback rate to 0.05 (very slow speed)
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="Why Choose Stoira?" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item, index) => {
            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      {/* You can add additional content here if needed */}
                    </div>

                    {/* Conditionally apply margin-top of 0 to the 4th image */}
                    <div
                      className={`mb-10 -my-10 -mx-15 ${index === 3 || index === 0 ? 'mt-[-10rem]' : ''}`}
                    >
                      {item.id === "0" ? (
                        <video
                          ref={videoRef}  // Attach ref to the video element
                          src={waves}
                          width={628}
                          height={426}
                          loop
                          autoPlay
                          muted
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
            );
          })}

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
