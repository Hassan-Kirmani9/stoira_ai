import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import islandVideo from "../assets/island.mp4";


const Benefits = () => {

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Explore Our AI-Powered Offerings"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto ">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    style={{
                      backgroundColor: item.bg,
                      padding: '8px',
                      borderRadius: '8px',
                    }}
                  />

                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10"
                  onTouchStart={(e) => {
                    const video = e.currentTarget.querySelector("video");
                    if (video) {
                      video.play(); // Start playing the video on touch
                      e.currentTarget.style.opacity = "1"; // Make the video visible
                    }
                  }}
                  onTouchEnd={(e) => {
                    const video = e.currentTarget.querySelector("video");
                    if (video) {
                      video.pause(); // Pause the video when touch ends
                      e.currentTarget.style.opacity = "0"; // Hide the video
                    }
                  }}
                >
                  {item.imageUrl && (
                    <video
                      src={item.videoUrl}
                      width={380}
                      height={362}
                      className="w-full h-full object-cover"
                      loop
                      muted
                    />
                  )}
                </div>

              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
