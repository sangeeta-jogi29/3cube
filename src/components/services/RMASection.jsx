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
              gradient.addColorStop(0, '#0a70af');
              gradient.addColorStop(1, '#42a5f5');
              return gradient;
            },
            borderRadius: 10,
            hoverBackgroundColor: '#075b8d',
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#1a1a3d',
              titleFont: { weight: 'bold', size: 14 },
              bodyFont: { size: 13 },
              padding: 12,
              cornerRadius: 8,
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)',
              },
              title: {
                display: true,
                text: 'Number of Cases',
                font: { size: 14, weight: '600' }
              },
              ticks: { stepSize: 5 }
            },
            x: {
              grid: {
                display: false,
              },
              title: {
                display: true,
                text: 'Illness Categories',
                font: { size: 14, weight: '600' }
              },
              ticks: {
                autoSkip: false,
                maxRotation: 45,
                minRotation: 45
              }
            }
          },
          animation: {
            duration: 1200,
            easing: 'easeInOutQuart'
          }
        }
      });
      return () => chartInstance.destroy();
    }
  }, []);

  return (
    <>
<Header />
    <div className="w-full overflow-x-hidden bg-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(10, 112, 175, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(10, 112, 175, 0.5);
          }
        }

        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-fade-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.7s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInRight 0.9s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .transition-smooth {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .card-shadow {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .card-shadow-lg {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .card-shadow-xl {
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
        }

        .gradient-border {
          position: relative;
          background: white;
          border-radius: 16px;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 2px;
          background: linear-gradient(135deg, #0a70af, #42a5f5);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>

      {/* Hero Section with Header */}
      <section className="relative bg-gradient-to-br from-[#f8fbff] via-white to-[#eef5fb] pt-20 pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#0a70af] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#42a5f5] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-left">
              <div className="inline-block mb-4">
                <span className="text-[#0a70af] font-semibold text-sm tracking-wider uppercase bg-[#e8f4fb] px-4 py-2 rounded-full">
                  Medical Excellence at Sea
                </span>
              </div>
              <h1 className="text-[#1a1a3d] font-bold text-4xl lg:text-5xl xl:text-6xl mb-6 leading-tight">
                Remote Medical <span className="text-[#0a70af]">Assistance</span>
              </h1>
              <p className="text-[#6b6b8a] text-lg leading-relaxed mb-8 max-w-xl">
                Maritime remote medical assistance plays a vital role in protecting the health of seafarers and passengers on vessels. This service grants access to expert medical advice and support, often using customised telemedicine technologies, to ensure timely and effective responses to medical emergencies.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center gap-2 bg-[#0a70af] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#075b8d] transition-smooth hover-lift card-shadow-lg">
                  Get Started
                  <i className="fas fa-arrow-right text-sm"></i>
                </a>
                <a href="#" className="inline-flex items-center gap-2 bg-white text-[#0a70af] font-semibold px-8 py-4 rounded-xl border-2 border-[#0a70af] hover:bg-[#f8fbff] transition-smooth">
                  Learn More
                </a>
              </div>

              {/* Stats Bar */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { value: '2000+', label: 'Vessels' },
                  { value: '10,768', label: 'Cases Handled' },
                  { value: '18+', label: 'Duty Doctors' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center lg:text-left">
                    <div className="text-[#0a70af] font-bold text-2xl lg:text-3xl">{stat.value}</div>
                    <div className="text-[#6b6b8a] text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-fade-right">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800" 
                  alt="Medical Professional" 
                  className="rounded-2xl card-shadow-xl w-full transition-smooth hover-lift"
                />
              </div>
              
              {/* Floating Card 1 */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl card-shadow-xl p-4 z-20 max-w-[250px] animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-[#e8f4fb] p-3 rounded-lg">
                    <i className="fas fa-user-md text-[#0a70af] text-xl"></i>
                  </div>
                  <div>
                    <div className="text-[#1a1a3d] font-bold text-lg">24/7 Support</div>
                    <div className="text-[#6b6b8a] text-sm">Expert Medical Team</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-br from-[#0a70af] to-[#075b8d] rounded-xl card-shadow-xl p-4 z-20 max-w-[200px] text-white animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 mb-2">
                  <i className="fas fa-check-circle text-xl"></i>
                  <span className="font-semibold">Verified</span>
                </div>
                <div className="text-sm opacity-90">ISO Certified Medical Services</div>
              </div>

              {/* Background Accent */}
              <div className="absolute -z-10 -right-12 -bottom-12 w-72 h-72 bg-gradient-to-br from-[#42a5f5] to-[#0a70af] rounded-3xl blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution & Trends Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-down">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a3d] mb-4">
              Medical Case Distribution & Trends
            </h2>
            <p className="text-[#6b6b8a] text-lg max-w-3xl mx-auto">
              A comprehensive overview of the medical cases handled onboard vessels, highlighting RMA's clinical expertise across key treatment areas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Case Distribution Cards */}
            <div className="space-y-6 animate-fade-left">
              {[
                {
                  label: 'Illness', percentage: '77%', 
                  gradient: 'from-[#e600b8] to-[#ff00d4]',
                  icon: 'fas fa-heartbeat',
                  text: "RMA's focus on general and internal medicine, supported by 18+ duty doctors and multilingual communication, ensures timely diagnosis and treatment."
                },
                {
                  label: 'Injury', percentage: '11.2%', 
                  gradient: 'from-[#1e40af] to-[#3b82f6]',
                  icon: 'fas fa-band-aid',
                  text: "Orthopaedic surgeons and physiotherapists enable efficient injury care, reducing evacuation needs with real-time support."
                },
                {
                  label: 'Surgery', percentage: '9.2%', 
                  gradient: 'from-[#f97316] to-[#eab308]',
                  icon: 'fas fa-stethoscope',
                  text: "Experienced surgeons manage surgical decisions remotely, ensuring proper pre-op and post-op care in emergencies."
                },
                {
                  label: 'Psychiatry', percentage: '2.8%', 
                  gradient: 'from-[#a78bfa] to-[#22d3ee]',
                  icon: 'fas fa-brain',
                  text: "Psychiatrists assist in managing mental health conditions, providing counselling and medication guidance."
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl card-shadow-lg p-6 transition-smooth hover-lift border border-gray-100"
                  style={{ animationDelay: `${0.1 * idx}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-r ${item.gradient} p-4 rounded-xl flex-shrink-0`}>
                      <i className={`${item.icon} text-white text-2xl`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-[#1a1a3d] font-bold text-xl">{item.label}</h3>
                        <span className={`bg-gradient-to-r ${item.gradient} text-white font-bold text-lg px-4 py-1 rounded-full`}>
                          {item.percentage}
                        </span>
                      </div>
                      <p className="text-[#6b6b8a] text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Chart */}
            <div className="bg-white rounded-xl card-shadow-xl p-6 lg:p-8 border border-gray-100 animate-fade-right sticky top-24">
              <h3 className="text-xl font-bold text-[#1a1a3d] mb-6 text-center">
                Illness Category Distribution
              </h3>
              <canvas id="illnessChart" className="w-full"></canvas>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RMA Section */}
      <section className="py-20 bg-gradient-to-br from-[#f8fbff] to-[#eef5fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image Collage */}
            <div className="relative animate-fade-right order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500" 
                  alt="Medical Professional" 
                  className="rounded-2xl card-shadow-xl w-full transition-smooth hover-lift"
                />
              </div>

              {/* Image Grid Below */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=200',
                  'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=200',
                  'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=200'
                ].map((src, idx) => (
                  <img 
                    key={idx}
                    src={src} 
                    alt={`Medical Service ${idx + 1}`} 
                    className="rounded-xl card-shadow w-full h-32 object-cover transition-smooth hover-scale"
                    style={{ animationDelay: `${0.2 * idx}s` }}
                  />
                ))}
              </div>

              {/* Stat Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0a70af] to-[#42a5f5] text-white rounded-full px-8 py-3 card-shadow-xl flex items-center gap-3 whitespace-nowrap animate-pulse-glow">
                <i className="fas fa-ship text-xl"></i>
                <span className="font-bold">2000+ Vessels Supported</span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="animate-fade-left order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a3d] mb-4 leading-tight">
                Your Crew's Health, Our Remote Mission <span className="text-[#0a70af]">⚕️</span>
              </h2>
              <p className="text-[#0a70af] font-semibold mb-4">
                Seamless Medical Assistance for Global Crews
              </p>
              <p className="text-[#6b6b8a] mb-8 leading-relaxed">
                Our expert team ensures fast and effective diagnosis through the combined strength of 18+ duty doctors and specialists, supported by 4+ senior medical advisors. With multilingual capabilities in English, Russian, Ukrainian, Mandarin, Hindi, Tagalog, and other Indian languages.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                {[
                  { icon: 'fas fa-network-wired', title: 'Value Integrated System', color: 'from-[#0a70af] to-[#42a5f5]' },
                  { icon: 'fas fa-user-md', title: 'Doctors Trained in Maritime Scenarios', color: 'from-[#1e40af] to-[#3b82f6]' },
                  { icon: 'fas fa-bolt', title: 'Focused Case & Speedy Recovery', color: 'from-[#f97316] to-[#eab308]' },
                  { icon: 'fas fa-headset', title: 'Immediate Response on Email, Call & Video', color: 'from-[#e600b8] to-[#ff00d4]' },
                  { icon: 'fas fa-ambulance', title: 'Saving Lives, Averting Diversion & Port Visits', color: 'from-[#a78bfa] to-[#22d3ee]' }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-4 bg-white rounded-xl p-4 card-shadow transition-smooth hover-lift"
                    style={{ animationDelay: `${0.1 * idx}s` }}
                  >
                    <div className={`bg-gradient-to-r ${item.color} p-3 rounded-lg flex-shrink-0`}>
                      <i className={`${item.icon} text-white text-lg`}></i>
                    </div>
                    <span className="text-[#1a1a3d] font-semibold">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a3d] mb-4">
              Key Outcomes of Remote Medical Assistance
            </h2>
            <p className="text-[#6b6b8a] text-lg">
              Proven results that demonstrate our commitment to maritime health and safety
            </p>
          </div>

          {/* Featured Stat */}
          <div className="max-w-md mx-auto mb-12 animate-scale-in">
            <div className="gradient-border p-8 text-center">
              <div className="text-6xl font-bold text-[#0a70af] mb-2">10,768</div>
              <div className="text-[#6b6b8a] font-semibold text-lg">Total Cases Handled</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { value: '3%', label: 'Mental Health Cases', icon: 'fas fa-brain' },
              { value: '10,122', label: 'Recovery Onboard', icon: 'fas fa-check-circle' },
              { value: '1.07%', label: 'Med Sign-off', icon: 'fas fa-file-signature' },
              { value: '962', label: 'Avoided Med Sign-off', icon: 'fas fa-shield-alt' },
              { value: '635', label: 'Avoided Diversion', icon: 'fas fa-ship' },
              { value: '551', label: 'Avoided Port Doctor', icon: 'fas fa-anchor' }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-white to-[#f8fbff] rounded-xl p-6 card-shadow-lg text-center transition-smooth hover-lift border border-gray-100 animate-fade-up"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div className="bg-[#e8f4fb] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className={`${stat.icon} text-[#0a70af] text-lg`}></i>
                </div>
                <div className="text-3xl font-bold text-[#0a70af] mb-2">{stat.value}</div>
                <div className="text-[#6b6b8a] text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

  
    </div>
    <Footer />
    </>
  );
};

export default RmaSection;