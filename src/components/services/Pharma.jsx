import React, { useState, useEffect } from "react";
import { Pill, Package, ClipboardList, ShieldCheck, TrendingDown, Users, CheckCircle2, AlertCircle, Sparkles, Calendar, DollarSign, Zap } from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";
const Pharma = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Compliance Assured",
      description: "12-month certification compliance guaranteed",
      stat: "100%",
      color: "from-[#0a70af] to-[#0856a0]"
    },
    {
      icon: <TrendingDown className="w-10 h-10" />,
      title: "Cost Optimization",
      description: "Significant reduction in duplicate orders",
      stat: "40%",
      color: "from-[#0856a0] to-[#063d70]"
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "Well-Stocked",
      description: "Essential medicines always available",
      stat: "24/7",
      color: "from-[#063d70] to-[#0a70af]"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Rapid Response",
      description: "Emergency preparedness optimized",
      stat: "Instant",
      color: "from-[#0a70af] to-[#063d70]"
    }
  ];

  const challenges = [
    "Duplication of orders across teams",
    "Oversight and missed restocking",
    "Higher operational costs",
    "Resource inefficiency",
    "Compliance complexities"
  ];

  const solutions = [
    "Synchronized medical and pharma teams",
    "Automated inventory tracking",
    "Cost-effective procurement",
    "Streamlined certification process",
    "Enhanced care delivery onboard"
  ];

  return (
    <>
    <Header/>
    <div className="bg-gradient-to-b from-white via-[#cfeeff]/20 to-white">
      {/* Hero Section - Unique Card Style */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#cfeeff]/40 to-white"></div>
          <div 
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#0a70af]/10 to-[#cfeeff]/30 blur-3xl"
            style={{ animation: 'pulse 4s ease-in-out infinite' }}
          ></div>
          <div 
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#063d70]/10 to-[#cfeeff]/20 blur-3xl"
            style={{ animation: 'pulse 5s ease-in-out infinite' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg mb-8 border border-[#0a70af]/20">
              <Pill className="w-6 h-6 text-[#0a70af]" />
              <span className="text-[#0a70af] font-bold text-lg">Pharmaceutical Services</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0a70af] via-[#0856a0] to-[#063d70] bg-clip-text text-transparent">
                Pharma
              </span>
            </h1>
            
            <p className="text-3xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
              Medical Chest Management & Pharmaceutical Excellence
            </p>
          </div>

          {/* Hero Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2 bg-white rounded-3xl p-10 shadow-xl border border-[#0a70af]/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-[#0a70af] to-[#063d70] rounded-2xl p-5 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-[#0a70af] mb-4">Essential Healthcare Bridge</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Pharmacists are an essential part of the healthcare ecosystem. They bridge the gap between patients and their treatment, fostering adherence and optimising therapeutic outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0a70af] to-[#063d70] rounded-3xl p-10 shadow-xl text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative">
                <Package className="w-12 h-12 mb-4 text-[#cfeeff]" />
                <div className="text-5xl font-bold mb-2">12</div>
                <div className="text-[#cfeeff] text-lg">Months Certification Cycle</div>
              </div>
            </div>
          </div>

          {/* Team Collaboration Banner */}
          <div className="bg-gradient-to-r from-[#cfeeff] via-white to-[#cfeeff] rounded-3xl p-8 shadow-lg border-2 border-[#0a70af]/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#0a70af] rounded-full p-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0a70af]">Integrated Team Approach</h3>
                  <p className="text-gray-600">Medical and pharmaceutical teams working together</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0a70af]">100%</div>
                <div className="text-sm text-gray-600">Medicine Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge vs Solution - Side by Side Comparison */}
      <section id="section-1" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0a70af] mb-6">
              The Challenge & Our Solution
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#0a70af] to-[#cfeeff] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Challenge Card */}
            <div 
              className={`bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-10 border-2 border-red-200 transition-all duration-700 ${
                isVisible['section-1'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-red-500 rounded-2xl p-4">
                  <AlertCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-red-700">Traditional Challenges</h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Medical Chest Management involves various teams onboard and onshore, leading to:
              </p>

              <div className="space-y-4">
                {challenges.map((challenge, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
                    style={{ animation: `slideIn 0.5s ease-out ${idx * 0.1}s both` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution Card */}
            <div 
              className={`bg-gradient-to-br from-[#cfeeff] to-blue-50 rounded-3xl p-10 border-2 border-[#0a70af]/30 transition-all duration-700 ${
                isVisible['section-1'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#0a70af] rounded-2xl p-4">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#0a70af]">Our Pharma Solution</h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With our Duty of Care, we provide effective solutions through our Pharma team:
              </p>

              <div className="space-y-4">
                {solutions.map((solution, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
                    style={{ animation: `slideIn 0.5s ease-out ${idx * 0.1 + 0.3}s both` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0a70af] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Scales Objective - Bento Grid Style */}
      <section id="section-2" className="py-20 px-6 bg-gradient-to-br from-[#cfeeff]/30 via-white to-[#cfeeff]/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left Content */}
              <div className="lg:col-span-3 p-12 bg-gradient-to-br from-[#0a70af] to-[#063d70] text-white">
                <ClipboardList className="w-16 h-16 mb-6 text-[#cfeeff]" />
                <h2 className="text-5xl font-bold mb-6">Medical Scales Objective</h2>
                <p className="text-xl text-[#cfeeff] leading-relaxed mb-8">
                  The main objective of Medical Scales is to ensure a well-stocked Medical Chest, which can be used to manage commonly seen medical concerns onboard and during emergencies.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="w-8 h-8 text-[#cfeeff]" />
                    <span className="text-2xl font-bold">Annual Certification</span>
                  </div>
                  <p className="text-[#cfeeff]">
                    The chest must be certified once every 12 months to comply with requirements
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-2 relative min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80"
                  alt="Medical Chest"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a70af]/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Floating Cards */}
      <section id="section-3" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0a70af] mb-6">
              Beyond Compliance
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Synchronization with medical teams and process optimization leads to better results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-[#0a70af]/10 ${
                  isVisible['section-3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className={`bg-gradient-to-br ${benefit.color} rounded-xl p-4 inline-flex mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>

                <div className="text-5xl font-bold text-[#0a70af] mb-3">{benefit.stat}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow - Horizontal Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a70af] mb-6">Our Pharma Process</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#0a70af] to-[#cfeeff] mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#0a70af] via-[#0856a0] to-[#063d70] hidden lg:block"></div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { 
                  icon: <ClipboardList className="w-8 h-8" />, 
                  title: "Assessment", 
                  desc: "Evaluate current medical chest inventory and requirements",
                  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80"
                },
                { 
                  icon: <Package className="w-8 h-8" />, 
                  title: "Optimization", 
                  desc: "Streamline procurement and eliminate duplications",
                  image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80"
                },
                { 
                  icon: <ShieldCheck className="w-8 h-8" />, 
                  title: "Certification", 
                  desc: "Ensure compliance and enhance care delivery",
                  image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80"
                }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#0a70af]/10">
                    <div className="relative h-48 overflow-hidden">
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a70af] to-transparent opacity-60"></div>
                      
                      <div className="absolute top-4 left-4 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-[#0a70af]">{idx + 1}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#cfeeff] rounded-lg p-2 text-[#0a70af]">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-[#0a70af]">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>

                  {/* Connector Dot */}
                  <div className="hidden lg:block absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-[#0a70af] rounded-full shadow-lg z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a70af] via-[#0856a0] to-[#063d70]"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 inline-flex mb-8">
            <DollarSign className="w-12 h-12 text-[#cfeeff]" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cost Savings & Better Care
          </h2>
          <p className="text-2xl text-[#cfeeff] mb-10 leading-relaxed">
            Experience optimized medical chest management with significant cost reduction and enhanced care delivery
          </p>
          <button className="bg-white text-[#0a70af] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#cfeeff] transition-all duration-300 hover:shadow-2xl hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
  
};

export default Pharma;