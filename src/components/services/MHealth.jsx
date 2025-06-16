import React from "react";
import "../../styles/MHealth.css";
import Header from "../Header";
import Footer from "../Footer";
import MentalHealthChart from "./MentalHealthChart";
import MHIntro from "../../assets/seafarers_MH.jpg";

import mh_assess from "../../assets/mh_assess.jpg";
import cognitive from "../../assets/cognitive_mh.avif";
import performance from "../../assets/performance_mh.jpg";
import anxiety_mh from "../../assets/anxiety_mh.jpg";
import anxiety_mh2 from "../../assets/anxiety_mh2.jpg";
import risk_mh from "../../assets/risk_assess.png";

const MHealth = () => {
  return (
    <>
    <Header />
    <main className="bg-gradient-to-b from-[#b4dbe8] to-[#095f97] min-h-screen flex flex-col text-[#062f4f]">
      {/* Hero Section */}
      <section
  id="hero"
  className="bg-white bg-opacity-90 backdrop-blur rounded-3xl p-8 md:p-12 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 shadow-lg w-full max-w-[1200px] mx-auto mt-10"
  aria-label="MHealth Introduction"
>
  <div className="flex-1 max-w-[1200px]">
    <h1 className="font-extrabold text-4xl sm:text-5xl text-gray-900 leading-tight">
      
      <span className="text-[#0a70af]">M-Health</span>
      <br />
      <span className="text-2xl sm:text-3xl font-semibold">
        Smooth Sailing To Mental Wellbeing
      </span>
    </h1>
    <p className="mt-4 text-gray-700 text-sm sm:text-base font-normal max-w-md leading-relaxed">
      Due to the limited understanding and access to focused care onboard, mental
      health issues are often left unattended or ignored. This can have severe
      consequences for the individual’s ability to cope with the problem, leading to
      lapses in work performance and causing safety concerns. Mental illness among
      seafarers has been a growing concern.
    </p>
    <div className="mt-6 flex flex-wrap gap-4">
       
       <div className="inline-block bg-gradient-to-r from-[#0a5f95] via-[#0a70af] to-[#b4dbe8] text-white py-2 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition">        
      </div>
      <button
        id="try-now-btn"
        className="inline-block border-2 border-[#0a70af] text-[#0a70af] py-2 px-6 rounded-lg font-semibold hover:bg-[#b4dbe8] focus:outline-none focus:ring-2 focus:ring-purple-400 transition">
      </button>
      <div className="inline-block bg-gradient-to-r from-[#b4dbe8] via-[#0a70af] to-[#0a5f95] text-white py-2 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition">        
      </div>
      
    </div>
  </div>

  <div className="flex-1 relative dashed-circle p-6 max-w-xs sm:max-w-lg mx-auto md:mx-0">
    <img
      src={MHIntro}
      alt="Young woman student smiling and holding textbooks"
      className="rounded-4xl shadow-lg w-full object-cover"
      loading="lazy"
    />
    <div className="absolute -top-5 left-6 bg-white shadow-lg rounded-xl px-4 py-2 flex items-center gap-2 text-[#0a70af] text-sm sm:text-base font-semibold">
      <i className="fas fa-users text-[#0a70af] text-base sm:text-lg" aria-hidden="true"></i>
      more than 50% seafarers suffer
    </div>
    <div className="absolute bottom-8 right-6 bg-white shadow-lg rounded-xl px-4 py-2 flex items-center gap-2 text-[#0a70af] text-sm sm:text-base font-semibold">
      <i className="fas fa-user-md text-[#0a70af] text-base sm:text-lg" aria-hidden="true"></i>
      1-on-1 treatment
    </div>
  </div>
</section>


  <MentalHealthChart/>

      {/* Gain from Online Learning */}
     <section
  id="key-concerns"
  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white bg-opacity-90 backdrop-blur rounded-3xl p-8 max-w-5xl mx-auto mt-10 shadow-lg"
  aria-label="Benefits of online learning"
>
  <div className="flex flex-wrap gap-4 p-4 rounded-lg border-2 border-dashed border-[#73b4db]">
    <div className="w-28 h-28 rounded-2xl bg-[#b3d8f0] p-4 flex items-center justify-center shadow-md overflow-hidden">
      <img
        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b8084ba-6ed1-438f-a0fd-bbf18409f70e.png"
        alt="Students learning with books and laptops"
        className="rounded-2xl object-cover w-full h-full"
        loading="lazy"
      />
       
    </div>
  </div>

  <div>
  <h3 className="text-3xl font-extrabold mb-6 text-[#085a8c]">
    <span className="text-[#0a70af]">Psychometric</span> Assessments
  </h3>
  <ul className="space-y-5 text-gray-800 text-base">
    <li className="flex items-start gap-4">
      <i className="fas fa-chart-line text-[#0a70af] text-3xl mt-1 flex-shrink-0"></i>
      <div>
        <h4 className="font-semibold text-lg"> 32,000+</h4>
        <p className="text-sm italic text-gray-600">
        Psychometric Assessments Conducted
        </p>
      </div>
    </li>
    <li className="flex items-start gap-4">
       <i className="fas fa-heartbeat text-[#0a70af] text-3xl mt-1 flex-shrink-0"></i>
      <div>
        <h4 className="font-semibold text-lg">93%</h4>
        <p className="text-sm italic text-gray-600">
          No Underlying Concerns
        </p>
      </div>
    </li>
    <li className="flex items-start gap-4">
     
      <i className="fas fa-brain text-[#0a70af] text-3xl mt-1 flex-shrink-0"></i>
      <div>
        <h4 className="font-semibold text-lg"> 6%</h4>
        <p className="text-sm italic text-gray-600">
          Require Basic Coping Mechanism
        </p>
      </div>
    </li>
    <li className="flex items-start gap-4">
      <i className="fas fa-exclamation-triangle text-[#0a70af] text-3xl mt-1 flex-shrink-0"></i>
      
      <div>
        <h4 className="font-semibold text-lg">1%</h4>
        <p className="text-sm italic text-gray-600">
          Active Disorder
        </p>
      </div>
    </li>
  </ul>
</div>

</section>


      {/* Pyschometric */}
      <section
  id="popular-courses"
  className="bg-gradient-to-r from-[#73b4db] via-[#0a70af] to-[#085a8c] rounded-3xl p-10 max-w-7xl mx-auto mt-10 shadow-lg text-white"
  aria-label="Popular courses offered"
>
  <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-4">
    The Role of Psychometric Assessment
  </h2>
  <p className="text-center mb-10 max-w-7xl mx-auto text-white/90">
    Psychometric tests are a standard and scientiﬁc method to measure an individual’s mental capabilities and behavioural style. 
    Psychometric tests are designed to measure candidates’ suitability for a role based on the required personality characteristics and aptitude (or cognitive abilities). 
    They identify the extent to which candidates’ personality and cognitive abilities match those required to perform the role. Today, these assessments are also widely
    used for screening for mental ﬁtness, treatments and pre-screening to identify any underlying disorders or concerns. 28% of Respondents representing the Maritime Industry
    reported that we are still in Denial of mental health issues. This was followed by 24% who believed we were bargaining on the subject.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        title: "Risk Identification",
        img: risk_mh,
        description: "By assessing aptitude, skills,and psychological health, these tests identify potential risks, contributing to the safety of the crew and the vessel"
      },
      {
        title: "Cognitive and Behavioural Insights",
        img: cognitive,
        description: "Psychometric assessments provide valuable insights into a seafarer’s cognitive abilities, personality traits, and behavioural tendencies, which are critical to safety and efficiency."
      },
      {
        title: "Mental Health Assessment",
        img: mh_assess,
        description: "These tests help to filter out candidates that may not be able to cope with the psychological challenges posed by the demanding conditions at sea."
      },
      {
        title: "Enhanced Performance",
        img: performance,
        description: " Ensuring mental and emotional stability among seafarers leads to safer operations and better performance, reducing the likelihood of accidents and errors."
      },
    ].map((course, idx) => (
      <article
        key={idx}
        className="bg-white bg-opacity-90 rounded-2xl shadow-lg text-[#062f4f] p-4 flex flex-col"
        tabIndex="0"
      >
        <img
          src={course.img}
          alt={course.title}
          className="rounded-xl mb-4 object-cover w-30px h-50 sm:h-45"
          loading="lazy"
        />
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold">{course.title}</h3>
        </div>
        <p className="flex-grow text-sm text-[#336d97]">
          {course.description}
        </p>
      </article>
    ))}
  </div>
</section>

 {/* Statistics */}
   <section
  id="partners"
  className="bg-[#b4dbe8] rounded-3xl py-10 px-4 flex justify-center items-center shadow-innerw-full max-w-[1400px] mx-auto mt-10"
  aria-label="Partner brands"
>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-5xl text-center text-[#1a1a3d] text-sm sm:text-base font-semibold">
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <span className="text-2xl sm:text-3xl font-extrabold text-[#0a70af]"> 13150+</span>
      <p className="text-[#6b6b8a] font-medium mt-1 select-none"> Total Number Of Test</p>
    </div>

    <div className="bg-white rounded-xl p-5 shadow-sm">
      <span className="text-2xl sm:text-3xl font-extrabold text-[#0a70af]">45</span>
      <p className="text-[#6b6b8a] font-medium mt-1 select-none"> Average Time for Testtaken (Minutes)</p>
    </div>

    <div className="bg-white rounded-xl p-5 shadow-sm">
      <span className="text-2xl sm:text-3xl font-extrabold text-[#0a70af]">11%</span>
      <p className="text-[#6b6b8a] font-medium mt-1 select-none"> Joining On Promotion</p>
    </div>

    <div className="bg-white rounded-xl p-5 shadow-sm">
      <span className="text-2xl sm:text-3xl font-extrabold text-[#0a70af]">95%</span>
      <p className="text-[#6b6b8a] font-medium mt-1 select-none">Fit</p>
    </div>

    <div className="bg-white rounded-xl p-5 shadow-sm">
      <span className="text-2xl sm:text-3xl font-extrabold text-[#0a70af]">1%</span>
      <p className="text-[#6b6b8a] font-medium mt-1 select-none">Unfit</p>
    </div>

    <div className="bg-white rounded-xl p-5 shadow-sm">
      <span className="text-2xl sm:text-3xl font-extrabold text-[#0a70af]">4%</span>
      <p className="text-[#6b6b8a] font-medium mt-1 select-none"> Flagged</p>
    </div>
  </div>
</section>

      {/* Join Us Section */}
<section
  id="join-us"
  className="flex flex-col md:flex-row items-center justify-between bg-white bg-opacity-90 backdrop-blur rounded-3xl p-8  w-full max-w-[1200px] mx-auto shadow-lg gap-10 md:gap-0 mt-12 mb-12"
  aria-label="Join NavSkills learning journey"
>
  <div className="max-w-lg text-[#062f4f]">
    <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
      Rising Anxiety Levels Detected in {" "}
      <span className="text-[#0a70af]">Seafarers.</span>
    </h2>
    <p className="text-[#336d97] text-sm md:text-base mb-6 leading-relaxed">
      The Clinical screening statistics indicate that close to 41% of seafarers have a presence of Anxiety. 
      However, 4% - 5% had scores indicating persistence of the syndrome, which, with guidance, can be coped with.
    </p>
    <button
      id="join-btn"
      className="bg-gradient-to-r from-[#4aa8d8] via-[#0a70af] to-[#063e6b] text-white py-2 px-8 rounded-lg font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0a70af] transition"
      type="button"
    >
      Start Your Wellness Journey
    </button>
  </div>

  <div className="flex items-center space-x-6">
    <div
      className="flex flex-col items-center space-y-3 bg-gradient-to-tr from-[#6dbde6] to-[#a3d9f4] rounded-full p-6 shadow-lg relative dashed-circle"
      aria-label="Profile Navique Designs by Naveen Ananthan"
    >
      <img
        className="rounded-full w-32 h-32 object-cover"
        loading="lazy"
        src={anxiety_mh}
        alt="Anxiety image"
      />
      <p className="text-lg font-bold text-[#062f4f] pt-4"></p>
      <small className="text-[#062f4f]"></small>
    </div>

    <div
      className="relative p-2 flex flex-col gap-4 dashed-circle"
      aria-label="Young man student showing thumbs up and books"
    >
      <img
        src={anxiety_mh2}
        alt="Young man student smiling and showing thumbs up holding books"
        className="rounded-full shadow-lg w-40 h-40 object-cover"
        loading="lazy"
      />
      <div
        className="absolute -top-6 left-2 bg-white shadow-3lx rounded-xl px-3 py-1 flex items-center gap-2 text-[#0a70af] text-sm font-semibold whitespace-nowrap border-1"
        aria-label="1000+ Students enrolled"
      >
        <i className="fas fa-users text-[#0a70af] text-base sm:text-lg" aria-hidden="true"></i>
         41% of seafarers  have presence of anxiety
      </div>
      <div
        className="absolute bottom-4 right-0 bg-white shadow-2lx rounded-xl px-3 py-1 flex items-center gap-2 text-[#0a70af] text-sm font-semibold whitespace-nowrap border-1 "
        aria-label="100+ Mentors supporting students"
      >
       <i class="fas fa-user-md text-[#0a70af]"></i>
         4–5% show persistent anxiety
        
      </div>
    </div>
  </div>
</section>

    </main>
     <Footer />
    </>
  );
};

export default MHealth;
