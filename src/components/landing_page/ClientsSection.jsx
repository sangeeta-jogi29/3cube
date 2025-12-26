import React, { useEffect, useRef, useState } from "react";
import redSea from "../../assets/red-sea.png";
import mark from "../../assets/mark.png";
import zeaborn from "../../assets/Zeaborn.png";
import pacificBasin from "../../assets/Pacificbasin.png";
import anglo from "../../assets/anglo.png";
import msc from "../../assets/msc.jpg";
import seaways from "../../assets/Seaways.jpg";
import landbridge from "../../assets/landbridge.jpg";

const logos = [
  redSea,
  mark,
  zeaborn,
  pacificBasin,
  anglo,
  msc,
  seaways,
  landbridge,
];

const ClientsSection = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let lastTime = performance.now();
    const speed = 40; // px per second (smooth & stable)
    let rafId;

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      slider.scrollLeft += (speed * delta) / 1000;

      // seamless loop without jump
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft -= slider.scrollWidth / 2;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#c7e2f5] to-[#87c3e6]">

      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h3 className="text-3xl font-bold text-[#03344c]">
          Our Valued Partners
        </h3>
        <div className="mx-auto mt-3 w-20 h-1 bg-[#046d97] rounded-full" />
      </div>

      {/* Slider Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg px-4 py-8">
        <div
          ref={sliderRef}
          className="
            flex items-center gap-12
            overflow-x-auto overflow-y-visible
            py-6
            cursor-grab select-none
            scrollbar-hide
            touch-pan-x
          "
        >
          {[...logos, ...logos].map((src, i) => {
            const isActive = activeIndex === i;

            return (
              <img
                key={i}
                src={src}
                alt="client-logo"
                draggable="false"
                onClick={() => setActiveIndex(i)}
                className={`
                  h-16 md:h-20 w-auto flex-shrink-0
                  transition-transform duration-300
                  origin-center cursor-pointer
                  ${
                    isActive
                      ? "scale-110 drop-shadow-[0_10px_25px_rgba(4,109,151,0.35)]"
                      : "opacity-80 hover:opacity-100 hover:scale-105"
                  }
                `}
              />
            );
          })}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
