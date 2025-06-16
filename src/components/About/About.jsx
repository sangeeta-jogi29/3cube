import { useEffect } from 'react';
import rmaHome from '../../assets/rma_home.png';
import founder from '../../assets/founder.png';
import Header from '../Header';
import Footer from '../Footer';

const About = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });
    fadeElements.forEach(element => observer.observe(element));
  }, []);

  return (
    <>
      <Header />

      <div className="bg-white font-serif" style={{ fontFamily: "'Merriweather', serif" }}>
        {/* Top Image */}
        <div className="w-full">
          <img src={rmaHome} alt="services image of 3cube" className="w-full object-cover" style={{ height: '400px' }} />
        </div>

        {/* ABOUT US */}
        <div className="bg-[#0a70af] py-16 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-semibold mb-4">ABOUT US</h1>
            <p className="text-lg font-sans text-[#d1cfe3]">
              3Cube Medicare embarked on the Healthy Ship initiative with the objective to Bridge The Healthcare Gaps by Automating, Organising, Simplifying the health and medical needs of the Industry and delivering Superior Care to our seafarers.
            </p>
            <hr className="border-t border-white border-opacity-20 mt-8 w-1/2 mx-auto" />
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="bg-[#0a70af] py-12 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex flex-col items-center mb-8">
              
              <p className="text-xl font-serif italic">
                <span className="font-bold">3Cube Medicare</span> embarked on the Healthy Ship initiative with the objective to Bridge The Healthcare Gaps by Automating, Organising, Simplifying the health and medical needs of the Industry and delivering Superior Care to our seafarers.
              </p>
            </div>
            <p className="text-base font-sans">
              Ravjyot S Khuman<br />
              <span className="text-sm opacity-70">Founder of 3CubeMedicare</span>
            </p>

            {/* Arrows */}
            <div className="flex justify-center space-x-4 mt-6">
              <button className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#4f3ca7] transition">
                <i className="fas fa-arrow-left text-sm"></i>
              </button>
              <button className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#4f3ca7] transition">
                <i className="fas fa-arrow-right text-sm"></i>
              </button>
            </div>

            {/* Features */}
            <hr className="border-t border-white border-opacity-20 mt-10 mb-10 w-1/2 mx-auto" />
            <h2 className="text-2xl font-semibold mb-6">Integrated Health Solutions for Seafarers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                {
                  icon: "fa-file-alt",
                  title: "Focused Medical Approach",
                  desc: "3Cube Care Protocols are designed in alignment with DG Guidelines and International Maritime Health protocols to ensure targeted care and timely assistance for seafarers dealing with physical or psychological concerns."
                },
                {
                  icon: "fa-cogs",
                  title: "Timely Health Assistance",
                  desc: "Immediate medical support helps address minor issues before they become serious, reducing diversions, delays, repatriation costs, and safeguarding seafarers’ well-being and lives."
                },
                {
                  icon: "fa-rocket",
                  title: "Accessible Expert Support",
                  desc: "Our medical team is available via Email, WhatsApp, Call, and the 3Cube Platform to ensure that seafarers, ships, and crew managers receive timely and expert guidance."
                },
                {
                  icon: "fa-check-circle",
                  title: "Specialized Psychiatric Care",
                  desc: "Leveraging advanced technology and our global maritime psychiatrist team, we provide specialized care onboard, during port stays, and post-sailing, ensuring holistic care throughout the voyage."
                }
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start space-x-3">
                  <i className={`fas ${icon} mt-1 text-white`}></i>
                  <div>
                    <p className="font-semibold mb-1">{title}</p>
                    <p className="text-[#cfcff3]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Polygon Divider */}
        <svg className="w-full h-16 -mt-1" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="100,100 0,0 0,100" fill="#0a70af" />
        </svg>

        {/* STATS */}
        <div className="bg-[#cfeeff] py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-lg mb-6">
              Our commitment to ensuring focused services and care is delivered through dedicated efforts by our team of Doctors, Psychologists, Psychiatrists, and Maritime Industry Experts.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-6">
              <div>
                <p className="text-[#0a70af] text-3xl font-bold">800+</p>
                <p className="text-sm text-[#0a70af]">Seafarers Counseled Onboard</p>
              </div>
              <div>
                <p className="text-[#0a70af] text-3xl font-bold">1500+</p>
                <p className="text-sm text-[#0a70af]">Pre-Joining Psychometric Assessments</p>
              </div>
            </div>
            <img
              src="https://storage.googleapis.com/a1aa/image/99f4faca-1ee6-451f-d08f-7edb9ee3c545.jpg"
              alt="Meeting"
              className="rounded-lg mx-auto object-cover"
              style={{ height: '200px' }}
              width="800"
            />
          </div>
        </div>

        {/* Polygon Divider */}
        <svg className="w-full h-16 -mt-1" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,100 100,0 100,100" fill="#0a70af" />
        </svg>

        {/* TEAM */}
        <div className="bg-white py-16 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-lg mb-6">
              We work according to the specialization of each expert and medical need of the seafarers. Our team of healthcare professionals ensures timely support and a human approach for seafarers onboard and ashore.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                'ffe38294-bf1c-4976-84ae-35d82c8432e2',
                '282d0cf1-3d68-439a-8f06-fe42c3c81da0',
                '4ac23977-de3f-4f74-e20c-a38fcbfcd048',
                'c1f3cefb-4e97-45ed-10e4-3bb8be877086'
              ].map(id => (
                <img key={id} src={`https://storage.googleapis.com/a1aa/image/${id}.jpg`} alt="Team member" className="rounded-lg w-full h-auto" />
              ))}
            </div>
            <div className="mt-6">
              <button className="border border-[#0a70af] rounded-full px-4 py-1 text-sm text-[#0a70af] hover:bg-[#0a70af] hover:text-white transition flex items-center space-x-2">
                <span>See Our Team</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
