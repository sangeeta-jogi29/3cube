import React, { useState, useEffect } from "react";
import { Heart, Phone, ClipboardCheck, Hospital, Users, FileText, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";
const Shorecare = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Medical Assessment",
      description: "Meticulous coordination and consultation with our team of experienced medical professionals, including doctors, nurses, and specialists to thoroughly assess the seafarer's condition.",
      color: "#0a70af"
    },
    {
      icon: <Hospital className="w-8 h-8" />,
      title: "Hospital Coordination",
      description: "Booking and coordinating with hospitals or clinics for immediate admission, treatment, and comprehensive documentation handling.",
      color: "#0856a0"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Treatment Monitoring",
      description: "Arranging and monitoring medical treatment, including surgery, medication, and rehabilitation services for both inpatient and outpatient care.",
      color: "#063d70"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Regular Updates",
      description: "Prompt and transparent updates on crew member's status provided to seafarer's family and employer, fostering informed involvement.",
      color: "#0a70af"
    }
  ];

  const features = [
    { icon: <Shield className="w-6 h-6" />, text: "24/7 Emergency Response" },
    { icon: <Users className="w-6 h-6" />, text: "Experienced Medical Team" },
    { icon: <Clock className="w-6 h-6" />, text: "Rapid Coordination" },
    { icon: <Phone className="w-6 h-6" />, text: "Family Communication" }
  ];

  return (
    <>
    <Header />
    <div className="bg-white overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#cfeeff]/30 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#0a70af] to-[#063d70] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section - Image Left, Content Right */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#cfeeff] via-white to-[#cfeeff]"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0a70af] to-[#063d70] rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80" 
                  alt="Medical Care"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a70af]/80 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-xl animate-[float_3s_ease-in-out_infinite]">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#cfeeff] rounded-full p-3">
                      <Heart className="w-8 h-8 text-[#0a70af]" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#0a70af]">24/7</div>
                      <div className="text-sm text-gray-600">Medical Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#0a70af]/10 rounded-full px-6 py-3 mb-6">
                  <Shield className="w-5 h-5 text-[#0a70af]" />
                  <span className="text-[#0a70af] font-semibold">Medical Coordination & Care</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-bold text-[#0a70af] mb-6 leading-tight">
                  Shore Care
                  <span className="block text-[#063d70]">Services</span>
                </h1>
                
                <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                  Our Medical Coordination and Care Service is a reassurance for seafarers who sign off from their vessels on medical grounds.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed">
                  The services include meticulous coordination and consultation with our team of experienced medical professionals to thoroughly assess the seafarer's condition and recommend the most appropriate action.
                </p>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}
                  >
                    <div className="text-[#0a70af]">{feature.icon}</div>
                    <span className="text-gray-700 font-medium text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              <button className="group bg-[#0a70af] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#063d70] transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-3">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Timeline Style */}
      <section className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0a70af] mb-4">Our Services</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#0a70af] to-[#cfeeff] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical coordination from assessment to recovery
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0a70af] via-[#0856a0] to-[#063d70]"></div>

            {services.map((service, idx) => (
              <div 
                key={idx}
                className={`relative mb-16 lg:mb-24 ${idx % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}
                onMouseEnter={() => setActiveService(idx)}
              >
                <div className={`lg:grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`${idx % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'} mb-8 lg:mb-0`}>
                    <div 
                      className={`inline-flex items-center gap-3 bg-[#cfeeff] rounded-2xl p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 ${activeService === idx ? 'scale-110' : ''}`}
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <div 
                        className="text-white rounded-xl p-3" 
                        style={{ backgroundColor: service.color }}
                      >
                        {service.icon}
                      </div>
                      <span className="text-2xl font-bold" style={{ color: service.color }}>
                        0{idx + 1}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-[#0a70af] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={`${idx % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <img 
                        src={idx === 0 ? "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" :
                             idx === 1 ? "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" :
                             idx === 2 ? "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80" :
                             "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"}
                        alt={service.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a70af]/60 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300"
                     style={{ backgroundColor: activeService === idx ? service.color : '#cfeeff' }}>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Process Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a70af] via-[#0856a0] to-[#063d70]"></div>
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} className="w-full h-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Comprehensive Care Journey
              </h2>
              <div className="w-32 h-2 bg-[#cfeeff] rounded-full mb-8"></div>
              <p className="text-xl text-[#cfeeff] leading-relaxed mb-12">
                From the moment a seafarer signs off on medical grounds, we ensure a seamless coordination of care at every step.
              </p>

              <div className="space-y-6">
                {[
                  "Immediate medical assessment and diagnosis",
                  "Hospital admission and treatment coordination",
                  "Ongoing monitoring and family communication",
                  "Rehabilitation support and follow-up care"
                ].map((step, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    style={{ animation: `slideInLeft 0.6s ease-out ${idx * 0.15}s both` }}
                  >
                    <CheckCircle className="w-6 h-6 text-[#cfeeff] flex-shrink-0 mt-1" />
                    <span className="text-white text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=700&q=80" 
                  alt="Medical Team"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a70af]/40 to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-4xl font-bold text-[#0a70af] mb-1">100%</div>
                <div className="text-gray-600 font-medium">Coordination Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white via-[#cfeeff]/30 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-20 h-20 text-[#0a70af] mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl font-bold text-[#0a70af] mb-6">
            We're Here to Help
          </h2>
          <p className="text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Contact our medical coordination team 24/7 for immediate assistance and support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0a70af] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#063d70] transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              Contact Us Now
            </button>
            <button className="bg-white text-[#0a70af] px-12 py-5 rounded-full font-bold text-lg border-2 border-[#0a70af] hover:bg-[#0a70af] hover:text-white transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
};

export default Shorecare;