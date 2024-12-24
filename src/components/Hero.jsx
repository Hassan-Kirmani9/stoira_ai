import { curve, heroBackground, bgImg2 } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useState } from "react";
import Notification from "./Notification";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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

        {/* Modal */}
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
                  >
                    Close
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("Form Submitted");
                      toggleModal();
                    }}
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
                <img
                  src={bgImg2}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[19rem] xl:flex "
                    title="AI Film generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
