import React, { useEffect, useRef } from "react";

import rmaBack from "../../assets/RMA1.jpg";
import mHealthBack from "../../assets/MH1.jpg";
import wellnessBack from "../../assets/Well1.jpg";
import pharmaBack from "../../assets/Phar1.jpg";
import shorecareBack from "../../assets/shorecare_back.jpg";
import trainingBack from "../../assets/Training1.jpg";

const services = [
  {
    title: "Remote Medical Assistance",
    short: "RMA",
    description:
      "24/7 access to qualified maritime doctors providing real-time medical guidance, emergency response, and clinical decision support across global waters.",
    image: rmaBack,
  },
  {
    title: "Mental Health Support",
    short: "M-Health",
    description:
      "Confidential counselling and psychological support programs designed to help seafarers manage stress, isolation, and emotional challenges at sea.",
    image: mHealthBack,
  },
  {
    title: "Wellness Programs",
    short: "Wellness",
    description:
      "Preventive healthcare initiatives focusing on fitness, nutrition, fatigue management, and overall wellbeing to improve crew performance and morale.",
    image: wellnessBack,
  },
  {
    title: "Pharmaceutical Services",
    short: "Pharma",
    description:
      "Supply and management of certified medicines and medical equipment onboard, aligned with international maritime medical regulations.",
    image: pharmaBack,
  },
  {
    title: "Shore-Based Medical Care",
    short: "Shorecare",
    description:
      "End-to-end coordination of diagnostics, specialist consultations, and treatment during port stays, ensuring continuity of medical care.",
    image: shorecareBack,
  },
  {
    title: "Medical Training",
    short: "Training",
    description:
      "Structured medical training programs enabling crew members to respond effectively to onboard emergencies and comply with safety standards.",
    image: trainingBack,
  },
];

export default function Services() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full pt-16 pb-28 px-6 bg-[#eef6fb] overflow-hidden">

      {/* Directional light */}
      <div className="pointer-events-none absolute -top-60 left-1/2 -translate-x-1/2
        w-[1200px] h-[1200px]
        bg-[radial-gradient(circle,rgba(4,109,151,0.15)_0%,transparent_60%)]" />

      {/* Vertical focus column */}
      <div className="pointer-events-none absolute inset-y-24 left-1/2 -translate-x-1/2
        w-[640px] hidden lg:block
        bg-gradient-to-b from-transparent via-[#046d97]/15 to-transparent" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-[40px] font-bold tracking-tight
            bg-gradient-to-r from-[#043f5c] to-[#046d97]
            bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-700 text-lg">
            Integrated maritime healthcare solutions built to protect crew
            health, safety, and operational continuity worldwide.
          </p>
        </div>

        {/* Timeline line */}
        <div className="hidden lg:block absolute left-1/2 top-[260px] bottom-32 w-[2px]
          bg-gradient-to-b from-transparent via-[#046d97] to-transparent" />

        {/* Timeline items */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`
                relative flex flex-col lg:flex-row items-center gap-20
                ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
                opacity-0 translate-y-14 transition-all duration-700 ease-out
              `}
            >
              {/* Background number */}
              <div className="absolute -top-14 lg:top-1/2 lg:-translate-y-1/2
                left-1/2 -translate-x-1/2
                text-[110px] font-bold tracking-tight
                text-[#046d97]/10">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 relative z-10">
                <img
                  src={service.image}
                  alt={service.title}
                  draggable="false"
                  className="
                    w-full h-[360px] object-cover rounded-3xl
                    shadow-[0_30px_60px_rgba(0,0,0,0.18)]
                    ring-2 ring-[#046d97]/10
                  "
                />
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 relative z-10">
                <h3 className="text-3xl font-bold text-[#043f5c] mb-3">
                  {service.title}
                </h3>

                <span className="inline-block mb-5 text-sm font-semibold
                  tracking-wide text-[#046d97] uppercase">
                  {service.short}
                </span>

                <p className="text-gray-700 text-[17px] leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>

              {/* Separator */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2
                w-28 h-[2px]
                bg-gradient-to-r from-transparent via-[#046d97] to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
