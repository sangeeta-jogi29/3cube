import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

import rmaImage from '../../assets/rma_section.jpeg';
import manTech from '../../assets/rma_sec.png'
import Header from '../Header';
import Footer from '../Footer';

const RmaSection = () => {
  useEffect(() => {
    const ctx = document.getElementById('illnessChart');
    if (ctx) {
      const chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            'Dental', 'Body Ache / Fever', 'Musculoskeletal', 'Dermatology',
            'Abdominal Pain', 'Cardiac', 'Other'
          ],
          datasets: [{
            label: 'Number of Cases',
            data: [17, 20, 17, 18, 10, 4, 18],
            backgroundColor: (context) => {
              const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
              gradient.addColorStop(0, '#42a5f5');
              gradient.addColorStop(1, '#80d6ff');
              return gradient;
            },
            borderRadius: 8,
            hoverBackgroundColor: '#0288d1',
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#1976d2',
              titleFont: { weight: 'bold' },
              bodyFont: { size: 14 },
              padding: 10,
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Cases',
                font: { size: 16 }
              },
              ticks: { stepSize: 5 }
            },
            x: {
              title: {
                display: true,
                text: 'Illness Categories',
                font: { size: 16 }
              },
              ticks: {
                autoSkip: false,
                maxRotation: 45,
                minRotation: 45
              }
            }
          },
          animation: {
            duration: 8000,
            easing: 'easeOutBounce'
          }
        }
      });
      return () => chartInstance.destroy();
    }
  }, []);

  return (
    <>
      <Header />

      {/* RMA Section */}
      <main className="w-full bg-[#f8fbff] pt-16 pb-24 relative shadow-2xl" 
      >
        <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left content */}
          <section className="md:col-span-5 flex flex-col justify-center max-w-[480px]">
            
            <h1 className="text-[#075b8d] font-extrabold text-4xl  mb-6">Remote Medical Assistance</h1>
            <p className="text-[#4a5568] text-base leading-relaxed mb-8">
              Maritime remote medical assistance plays a vital role in protecting the health of seafarers and passengers on
              vessels. This service grants access to expert medical advice and support, often using customised telemedicine
              technologies, to ensure timely and effective responses to medical emergencies. Maritime remote medical assistance is a
              cornerstone of marine safety, supported by robust infrastructure and specialised medical professionals.
            </p>
            <div className="flex items-center space-x-6 text-sm font-semibold">
              <a href="#" className="bg-[#0a70af] text-white rounded-full px-5 py-2.5 flex items-center gap-2 hover:bg-[#4a4ae6] transition">
                Start now <i className="fas fa-chevron-right text-[10px]"></i>
              </a>
            </div>
          </section>

          {/* Right content */}
          <section className="md:col-span-7 relative flex justify-end">
            <div className="absolute -bottom-20 -right-20 w-[700px] h-[300px] bg-gradient-to-r from-green-600 to-green-800 rotate-[-15deg] rounded-[10px] shadow-[0_20px_40px_rgba(0,0,0,0.15)]"></div>
            <div className="relative bg-white rounded-xl shadow-lg p-6 w-[600px] max-w-full z-20" style={{ minHeight: '350px' }}>
              <img className="rounded-xl" src="https://storage.googleapis.com/a1aa/image/7ca30b06-83c6-489d-5849-ba1c9f46c960.jpg" alt="Dashboard Screenshot" />
            </div>
            <div className="absolute bottom-[-40px] left-[-40px] bg-white rounded-xl shadow-lg p-6 w-[400px] max-w-full z-30" style={{ minHeight: '220px' }}>
              <img className="rounded-xl" src={rmaImage} alt="Settings Screenshot" />
            </div>
          </section>
        </div>
      </main>

      {/* Distribution Section */}
      <section className="bg-[#f8fbff] text-white py-20" style={{
        clipPath: 'polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)'
      }}>
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 relative">

          {/* Steps + Circle */}
          <div className="flex flex-col md:flex-row items-center gap-12 flex-1">
            <div className="relative w-[200px] h-[150px] flex-shrink-0">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" fill="none">
                <circle cx="300" cy="300" r="190" stroke="white" strokeWidth="3" />
              </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-gradient-to-l from-green-500 to-green-800 flex flex-col items-center justify-center text-center px-2 text-white font-bold uppercase tracking-widest text-xl shadow-2xl animate-bounce">
  Distribution<br />of<br />Case<br />Trends
</div>




            </div>

            <div className="flex flex-col gap-10">
              {[
                {
                  step: "", label: "Illness (77%)", color: "pink-600", gradient: "from-[#e600b8] to-[#ff00d4]",
                  text: "RMA's focus on general and internal medicine, supported by 18+ duty doctors and multilingual communication, ensures timely diagnosis and treatment for the majority illness cases onboard."
                },
                {
                  step: "", label: "Injury (11.2%)", color: "blue-600", gradient: "from-[#1e40af] to-[#3b82f6]",
                  text: "Orthopaedic surgeons and physiotherapists in the RMA team enable efficient injury care, reducing the need for evacuation by providing real-time support and rehabilitation guidance."
                },
                {
                  step: "", label: "Surgery (9.2%)", color: "yellow-600", gradient: "from-[#f97316] to-[#eab308]",
                  text: "With experienced general and orthopaedic surgeons available remotely, RMA helps manage surgical decisions onboard, ensuring proper pre-op and post-op care even in emergencies."
                },
                {
                  step: "", label: "Psychiatry (2.8%)", color: "purple-400", gradient: "from-[#a78bfa] to-[#22d3ee]",
                  text: "Psychiatrists in the RMA team assist in managing mental health conditions onboard, providing counselling and medication guidance to enhance crew wellbeing."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 animate-fade-slide-in" style={{ animationDelay: `${0.8 * idx}s` }}>
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${item.gradient} border-0 border-black flex flex-col items-center justify-center text-center `}>
                    <span className={`text-${item.color} font-extrabold text-[14px] uppercase`}></span>
                    <span className={`text-${item.color} font-extrabold text-lg`}>{item.step}</span>
                  </div>
                  <div className={`rounded-full px-6 py-3 max-w-[320px] text-white bg-gradient-to-r ${item.gradient}`}>
                    <p className="font-extrabold uppercase text-sm tracking-widest mb-1 text-center">{item.label}</p>
                    <p className="text-[14px] text-center">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chart Area */}
          <div className="w-full md:w-[500px] bg-white rounded-xl shadow-md p-6 text-black">
            <h3 className="text-xl font-bold text-center text-blue-700 mb-6">Distribution of Illness Category Cases</h3>
            <canvas id="illnessChart" height={300}></canvas>
          </div>
        </div>
      </section>




      {/* Remote mission */}
<section className="mt-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
    <div className="relative flex-shrink-0 mt-20">
      <img
        alt="Smiling man in suit outdoor urban background"
        className="rounded-3xl w-72 md:w-120 drop-shadow-lg"
        height="500"
        src={manTech}
        width="400"
      />
      


<div class="relative w-full h-[350px] bg-[#eef5fb] rounded-2xl flex items-center justify-center mt-10 mb-1 overflow-hidden">

 
  <img
    alt="Zig Image 1"
    class="absolute top-6 left-8 w-32 md:w-36 rounded-2xl drop-shadow-lg border-4 border-white rotate-[-6deg]"
    src="https://storage.googleapis.com/a1aa/image/f060a5df-5bbc-4bce-0789-15074cc6f8fb.jpg"
  />
  
  <img
    alt="Zig Image 2"
    class="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 w-32 md:w-36 rounded-2xl drop-shadow-lg border-4 border-white rotate-[4deg]"
    src="https://storage.googleapis.com/a1aa/image/f060a5df-5bbc-4bce-0789-15074cc6f8fb.jpg"
  />

  <img
    alt="Zig Image 3"
    class="absolute bottom-6 right-8 w-32 md:w-36 rounded-2xl drop-shadow-lg border-4 border-white rotate-[-3deg]"
    src="https://storage.googleapis.com/a1aa/image/f060a5df-5bbc-4bce-0789-15074cc6f8fb.jpg"
  />

 
  <div class="absolute bottom-4 bg-gradient-to-r from-[#064269] to-[#6daccd] text-white rounded-full px-6 py-2 text-sm font-semibold shadow-md flex items-center gap-2 hover:scale-105 transition">
    <i class="fas fa-ship"></i>
    2000+ Vessels Supported
  </div>
</div>


    </div>
    <div className="mt-12 md:mt-0 flex-1 max-w-2xl">
      
      <h2 className="text-[#1a1a3d] font-extrabold text-4xl sm:text-3xl mb-1 leading-tight">
        Your Crew’s Health, Our Remote Mission⚕️
      </h2>
      <p className="text-sm text-[#0a70af] font-semibold mb-2 select-none">
        Seamless Medical Assistance for Global Crews
      </p>
      <p className="text-[#6b6b8a] text-sm sm:text-base mb-8 max-w-xl">
       Our expert team ensures fast and effective diagnosis through the combined strength of 18+ duty doctors and specialists, 
       supported by 4+ senior medical advisors. With multilingual capabilities in English, Russian, Ukrainian, Mandarin, Hindi, Tagalog, and 
       other Indian languages, we ensure clear communication and timely medical assistance for seafarers across the globe.
      </p>

      <div className="bg-[#f9fbfd] px-4 py-12 sm:px-8 lg:px-16 rounded-2xl shadow-sm max-w-5xl mx-auto">
  <h3 className="text-2xl sm:text-2xl font-bold text-center text-[#1a1a3d] mb-10">
    Why Our RMA Service Stands Out
  </h3>

  <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5 text-lx text-[#6b6b8a]">
    {[
      {
        icon: "fas fa-network-wired",
        title: "Value Integrated System.",
      },
      {
        icon: "fas fa-user-md",
        title: "Doctors Trained in Maritime Scenarios.",
      },
      {
        icon: "fas fa-bolt",
        title: "Focused Case & Speedy Recovery.",
      },
      {
        icon: "fas fa-headset",
        title: "Immediate Response on Email, Call & Video.",
      },
      {
        icon: "fas fa-ambulance",
        title:
          "Saving Lives, Averting Diversion, Port Visit and Med Sign-off.",
      },
    ].map((item, index) => (
      <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-md transition">
        <div className="text-[#0a70af] text-xl">
          <i className={item.icon}></i>
        </div>
        <h3 className="font-semibold text-[#1a1a3d] select-none">
          {item.title}
        </h3>
      </div>
    ))}
  </div>
</div>


    </div>
  </div>

 {/* RMA Statistics Section */}
<div className="mt-20 bg-[#e8f4fb] py-12 px-4 sm:px-8 lg:px-16 rounded-2xl shadow-md max-w-7xl mx-auto">
  <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1a1a3d] mb-10">
    Key Outcomes of Remote Medical Assistance
  </h2>

  {/* Featured Total Cases */}
  <div className="max-w-sm mx-auto mb-10">
    <div className="bg-[#e8f4fb] border border-[#0a70af] rounded-xl p-6 shadow-xl ring-2 ring-[#0a70af]/30 text-center">
      <span className="text-3xl sm:text-4xl font-extrabold text-[#0a70af]">10,768</span>
      <p className="text-[#1a1a3d] font-medium mt-1 select-none">Total Cases</p>
    </div>
  </div>

  {/* 6 Stat Boxes */}
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-[#1a1a3d] text-sm sm:text-base font-semibold">
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <span className="text-2xl sm:text-3xl font-extrabold text-[#0a70af]">3%</span>
      <p className="text-[#6b6b8a] font-medium mt-1 select-none">Mental Health Cases</p>
    </div>

    <div className="bg-white rounded-xl p-5 shadow-sm">
      <span className="text-2xl sm:text-3xl font-extrabold text-[#0a70af]">10,122</span>
      <p className="text-[#6b6b8a] font-medium mt-1 select-none">Recovery Onboard</p>
    </div>

    <div className="bg-white rounded-xl p-5 shadow-sm">
      <span className="text-2xl sm:text-3xl font-extrabold text-[#0a70af]">1.07%</span>
      <p className="text-[#6b6b8a] font-medium mt-1 select-none">Med Sign-off</p>
    </div>

    <div className="bg-white rounded-xl p-5 shadow-sm">
      <span className="text-2xl sm:text-3xl font-extrabold text-[#0a70af]">962</span>
      <p className="text-[#6b6b8a] font-medium mt-1 select-none">Avoided Med Sign-off</p>
    </div>

    <div className="bg-white rounded-xl p-5 shadow-sm">
      <span className="text-2xl sm:text-3xl font-extrabold text-[#0a70af]">635</span>
      <p className="text-[#6b6b8a] font-medium mt-1 select-none">Avoided Diversion</p>
    </div>

    <div className="bg-white rounded-xl p-5 shadow-sm">
      <span className="text-2xl sm:text-3xl font-extrabold text-[#0a70af]">551</span>
      <p className="text-[#6b6b8a] font-medium mt-1 select-none">Avoided Port Doctor Visit</p>
    </div>
  </div>
</div>



</section>
{/* About Section End */}





      <Footer />
    </>
  );
};

export default RmaSection;
