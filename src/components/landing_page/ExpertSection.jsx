import React from "react";
import manTech from "../../assets/man_tech.jpg";
import doctor from "../../assets/Doctor.png";
import how from  "../../assets/How_it_works.png";

export default function ExpertSection() {
  return (
    <>
    <section className="w-full bg-[#d0e9f9]">
       <svg class="w-full h-16" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,100 100,0 100,100" fill="#0a70af" />
            </svg>
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
          <div className="relative flex-shrink-0">
            <img
              alt="Smiling man in suit outdoor urban background"
              className="rounded-3xl w-84 md:w-80 drop-shadow-lg border-4 border-white"
              height={320}
              width={320}
              src={manTech}
            />
            <img
              alt="Doctor on call"
              className="absolute -bottom-8 -left-8 rounded-2xl w-50 md:w-40 drop-shadow-lg border-4 border-white"
              height={160}
              width={160}
              src={doctor}
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#064269] to-[#6daccd] text-white rounded-full px-6 py-2 font-semibold text-sm drop-shadow-lg select-none">
              2000 +<br />
              Trusted Clients
            </div>
          </div>

          
    
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-3xl font-semibold mb-4">
              Driven By Knowledge, Guided by Experts
            </h2>
            <p className="text-lg text-black/70 leading-6">
              Our team of specialists is the driving force behind our vision.
              Each member brings a unique blend of expertise, passion, and
              innovation to the table. Together, they work tirelessly to solve
              complex challenges, deliver breakthrough solutions, and ensure the
              highest standards in every aspect of our service. With their
              unwavering dedication, we are shaping a healthier and smarter
              future.
            </p>
           </div>
        </div>
      </div>
    </section>

    <svg className="w-full h-16 -mt-1" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="100,100 0,0 0,100" fill="#0a70af" />
        </svg>
   <section className="w-full bg-[white] py-16">
  <div className="flex flex-col items-center justify-center text-center">
    {/* Stylish Heading */}
    <h2 className="text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0a70af] to-[#064269]">
      🚀 How it Works
    </h2>

    {/* Underline Accent */}
    <div className="w-20 h-1 bg-[#0a70af] rounded-full mt-2 mb-4"></div>

    {/* Optional Tagline */}
    <p className="text-sm text-gray-600  mb-8">
      A simple process for digital medical clearance
    </p>

    {/* Centered Image */}
    <img
      src={how}
      alt="How it works illustration"
      className="w-[300] h-auto "
    />
  </div>
</section>
    </>
  );
}
