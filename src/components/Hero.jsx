import { curve, heroBackground, bgImg2 } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useEffect, useRef, useState } from "react";
import Notification from "./Notification";
import BgVid from "../assets/hero/bg_vid.mp4";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Unleashing AI Creativity for&nbsp;the&nbsp; {` `}
            <span className="inline-block relative">
              Digital Era {" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Stoira is a cutting-edge AI media house that blends technology and creativity to produce innovative and immersive experiences.
          </p>
          <Button white onClick={toggleModal}>Get started</Button>
        </div>

        { }
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
            <div className="bg-white bg-opacity-80 rounded-lg p-6 w-[90%] max-w-md shadow-lg border-2 border-purple-700 ">
              <h2 className="text-xl font-bold mb-4 text-black">Get Started</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-black">Name</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 bg-black opacity-70"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-black">Email</label>
                  <input
                    type="email"
                    className="w-full border rounded-lg px-3 py-2 bg-black opacity-70"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-black">Phone</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 bg-black opacity-70"
                    placeholder="Your Phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-black">Company Name</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 bg-black opacity-70"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-black">Message</label>
                  <textarea
                    className="w-full border rounded-lg px-3 py-2 bg-black opacity-70"
                    placeholder="Your Message"
                    rows="4"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <Button
                    white
                    onClick={(e) => {
                      e.preventDefault();
                      toggleModal();
                    }}
                    className="text-black text-[1rem]"

                  >
                    Close
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("Form Submitted");
                      toggleModal();
                    }}
                    className="text-black text-[1rem]"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-7 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <video
                  ref={videoRef}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  autoPlay
                  loop
                  muted
                  playsInline

                  alt="AI video"
                >
                  <source src={BgVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[19rem] xl:flex "
                    title="AI Film generation"
                  />
                </ScrollParallax>
              </div>
            </div>

          </div>


          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section >
  );
};

export default Hero;
