import React from "react";
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
  return (
    <section className="relative w-full overflow-hidden py-20 
      bg-gradient-to-b from-[#c7e2f5] to-[#87c3e6]">

      {/* PREMIUM HEADING */}
      <div className="text-center mb-14">
        <h3 className="text-[36px] font-bold text-[#03344c] tracking-wide
          bg-gradient-to-r from-[#03344c] to-[#046d97] bg-clip-text text-transparent">
          Our Valued Partners
        </h3>

        <div className="mx-auto mt-3 w-24 h-[4px] 
          bg-gradient-to-r from-[#046d97] to-[#76c7f2] rounded-full shadow"></div>
      </div>

      {/* HIGH-CONTRAST GLASS BOX */}
      <div className="
        max-w-6xl mx-auto backdrop-blur-xl bg-white border border-white/40
        rounded-3xl shadow-xl py-10 px-4 overflow-hidden
      ">
        <div className="relative overflow-hidden">
          <div className="flex gap-20 animate-scroll items-center">
            {logos.concat(logos).map((src, i) => (
              <img
                key={i}
                src={src}
                alt="client-logo"
                className="
                  h-20 w-auto opacity-85 hover:opacity-100 transition-all
                  hover:scale-110 hover:drop-shadow-[0_0_12px_#5dc0ff]
                "
                draggable="false"
              />
            ))}
          </div>
        </div>
      </div>

      {/* WAVE EFFECT */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 fill-[#7ebede]"
        >
          <path d="M321.39,56.44c58-10.79,113.4-30.13,172-41.86C607.27-3.62,703.7-1.43,790.89,22.2c55.59,14.72,108.79,36.34,162.68,54.44,57.79,19.41,119.52,33.52,183.43,28.48V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* ANIMATION */}
      <style>{`
        .animate-scroll {
          animation: scroll 28s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
