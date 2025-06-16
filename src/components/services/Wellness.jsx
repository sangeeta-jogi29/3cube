import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import WellnessChart from "./WellnessChart";
import WellnessBarChart from "./WellnessBarChart";
import proactive from "../../assets/proactive.png";
import screening from "../../assets/screening.png";
import mentalWell from "../../assets/mental-well.png";
import emergency from "../../assets/emergency.png";
import wellnessBg from "../../assets/bg-wellness.jpg";
import surveyIllustration from "../../assets/4973739.jpg";

import "../../styles/Wellness.css"; // Custom scroll animation CSS

const scrollCards = [
  {
    img: proactive,
    title: "Proactive Health Survey",
    text: "Proactive Health Checks are essential in achieving an environment of The Healthy Ship. Our team surveys vessels every quarter to determine if they face physical or psychological challenges. This helps us evaluate their well-being and address any concerns before they become major problems.",
  },
  {
    img: screening,
    title: "Seafarers Screened",
    text: "Over 19,000+ crew members have been screened globally.",
  },
  {
    img: mentalWell,
    title: "Mental Wellness",
    text: "Onboard therapy, helplines, and personal follow-ups ensure crew stability.",
  },
  {
    img: emergency,
    title: "Emergency Support",
    text: "Real-time response to any medical or psychological crises on board.",
  },
];

const MHealthSection = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-[#e6f2fa] via-white to-[#cfe6f3] text-[#0a70af] font-sans">
  <div className="max-w-[1400px] mx-auto px-6 py-5 space-y-10">
    {/* Hero */}
    <section
      className="relative bg-cover bg-center shadow-md rounded-xl p-6 md:p-8 flex items-center justify-center border border-[#b3d8ef] h-50"
      style={{ backgroundImage: `url(${wellnessBg})` }}
    >
      <div className="bg-white bg-opacity-80 rounded-xl px-8 py-4">
        <h2 className="text-4xl font-bold text-center tracking-wide">WELLNESS</h2>
      </div>
    </section>

    {/* Scrolling Cards + Description */}
    <section className="bg-white shadow-xl rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-10 border border-[#b3d8ef]">
      {/* Auto-scrolling cards */}
      <div className="w-full md:w-[60%] border-2 border-[#0a70af] bg-[#e6f2fa] rounded-xl shadow-inner p-6 scroll-wrapper">
        <div className="scroll-content">
          {[...scrollCards, ...scrollCards].map((card, idx) => (
            <div key={idx} className="scroll-card mb-6">
              <img
                src={card.img}
                alt={card.title}
                loading="lazy"
                className="w-full h-60 mb-4 rounded-lg object-cover"
              />
              <h3 className="font-semibold text-2xl mb-3">{card.title}</h3>
              <p className="text-base leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side description with image */}
      
      <div className="w-full md:w-[40%] flex flex-col justify-center space-y-6">
  {/* Label Box */}
  <div className="self-center bg-[#0a70af] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
    Wellness Screening Insights
  </div>

  {/* Image */}
  <img
    src={surveyIllustration}
    alt="Survey Illustration"
    className="w-full h-72 object-cover rounded-lg shadow-sm"
  />

  {/* Description */}
  <p className="text-center text-lg leading-relaxed text-gray-800">
    Our care model delivers exceptional well-being support at sea through automation, screenings, and proactive outreach.
  </p>
</div>

    </section>

    {/* Donut Chart Section FIXED */}
    <section className="bg-[#e6f2fa] rounded-xl p-6 md:p-10 border border-[#b3d8ef] shadow-md">
      <WellnessChart />
    </section>
    <WellnessBarChart />

    {/* Wellness Steps Section */}
    <section className="py-8 bg-white text-gray-900 font-['Inter']">
      <div className="text-center max-w-4xl mx-auto mb-8">
        <span className="inline-flex items-center px-4 py-1 mb-4 rounded-full text-[#0a70af] bg-[#b3d8ef] text-sm font-semibold gap-2">
          <i className="fas fa-heartbeat text-[#0a70af]"></i>
          Enhancing Onboard Health and Wellbeing
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Investing in Your Total Well-Being
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Wellness initiatives are vital for individuals as they promote the absence of illness and the presence of physical, 
          mental, and emotional well-being. Investing in our health through proactive measures builds a foundation for a more vibrant, 
          productive, and fulfilling life.
        </p>
      </div>

      {/* Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {[
          {
            step: "01",
            title: "Physical",
            icon: "fa-dumbbell",
            img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6283c78f-c0ca-4b55-83ac-4efc38b70742.png",
            description: "Prioritising physical wellness empowers us to lead longer, healthier, and more active lives.",
          },
          {
            step: "02",
            title: "Mind",
            icon: "fa-brain",
            img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/17941098-6910-49e5-b254-4fa0a3cd288d.png",
            description: "Prioritising mental wellness helps us build resilience, good mood, and improve our overall quality of life.",
          },
          {
            step: "03",
            title: "Physiological",
            icon: "fa-heartbeat",
            img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3ed3ea9c-35f7-4248-bc26-975c91ad9928.png",
            description: "Physiological wellness supports our body's systems, which are essential for overall health.",
          },
        ].map((step, idx) => (
          <article key={idx} className="flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-full border-2 border-dashed border-gray-300 shadow-lg overflow-hidden mb-6">
              <img
                src={step.img}
                alt={step.title}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <span className="text-sm text-gray-400 tracking-widest mb-2 uppercase">
              Step- {step.step}
            </span>
            <h3 className="text-xl font-semibold mb-2 text-[#0a70af] flex items-center gap-2">
              <i className={`fas ${step.icon} text-[#0a70af]`}></i>
              {step.title}
            </h3>
            <p className="text-gray-600 max-w-xs">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  </div>
</div>


      <Footer />
    </>
  );
};

export default MHealthSection;
