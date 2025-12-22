 import React from "react";

import seafarerVideo from "../../assets/Seafarer.mp4";

const SlideshowSection = () => {
  return (
    <section
      id="slideshow-section"
      className="relative w-full h-screen overflow-hidden bg-slate-950"
      aria-label="Maritime Healthcare Hero Section"
    >
      {/* Background Video */}
      <video
        src={seafarerVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-transparent" />

      {/* Decorative Gradient Accent */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0a70af]/20 rounded-full blur-3xl" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-12 flex items-center animate-fadeIn">
        <div className="max-w-3xl">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#0a70af]/20 text-[#8cc9f2] text-sm font-medium tracking-wide">
            Maritime Healthcare Excellence
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Exceptional Care for
            <span className="block text-[#4fb3ff]">Every Crew, Everywhere</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed">
            3Cube Medicare provides industry-grade maritime medical solutions,
            combining global expertise, rapid response, and technology-driven
            care to protect seafarers across the world’s oceans.
          </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-2xl bg-[#0a70af] px-7 py-4 text-white font-semibold shadow-lg hover:bg-[#095e96] hover:shadow-xl transition-all duration-300">
              Explore Services
              
            </button>

            <button className="rounded-2xl border border-white/30 px-7 py-4 text-white font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default SlideshowSection;
