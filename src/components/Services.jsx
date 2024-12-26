import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import experience from "../assets/services/ai.jpeg"
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Powerful AI Tools at Your Fingertips."
          text="Elevate your creative projects with our cutting-edge products."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right opacity-50  md:opacity-100"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto ">
              <h4 className="h4 mb-4 md:text-white ">Audiobook App</h4>
              <p className="body-2 mb-[3rem] md:text-n-3 text-white">
                Enjoy a wide range of audiobooks with dynamic narration and effects. Our app enhances your listening experience, bringing stories to life.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">AI Music Creator</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Compose original music with ease. Our AI music creator helps you generate high-quality tracks for any project, all powered by AI.
                </p>


              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={440}
                  alt="Scary robot"
                />

                <VideoBar />
              </div>
            </div>
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={experience}
                  className="h-full w-full object-cover opacity-65"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b lg:p-15">
                <h4 className="h4 translate-y-6">AI Image Upscaling Tool</h4>
                <p className="body-2 text-n-3 translate-y-7">
                  Boost your image quality instantly with AI-driven upscaling. Improve clarity and resolution without losing detail, perfect for creatives and professionals.                </p>
              </div>

            </div>


          </div>

          <Gradient />
        </div>
      </div>
    </Section >
  );
};

export default Services;
