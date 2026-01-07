import React, { useState, useEffect } from "react";
import { Brain, Users, Award, Activity, ChevronRight, Anchor, Compass, Ship } from "lucide-react";
import Footer from "../Footer";
import Header from "../Header";

const Training = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = document.querySelectorAll('.scroll-section');
      sections.forEach((section, idx) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(idx);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courses = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Mental Health First Aid",
      description: "Create awareness and destigmatize conversations around mental health by equipping participants with comprehensive understanding of common mental health concerns, triggers, and symptoms.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Gender Sensitisation",
      description: "Remove barriers created by discrimination and prejudice. Break down invisible walls so all genders can coexist and work professionally to deliver their roles effectively.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Induction Course",
      description: "Equip seafarers with a strong mindset to cope with challenges at sea. Impart awareness of critical mindsets and skills to maintain a focused and balanced mind.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "YH (Your Health) 360",
      description: "Highlights nine key elements of physical and mental well-being. Delivered over 12 hours including Yoga and Fitness to promote holistic health.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
    }
  ];

  return (
    <>
    <Header />
    <div className="bg-white">
      {/* Hero Section - Full Viewport */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a70af] via-[#0856a0] to-[#063d70]">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8 animate-[fadeInDown_1s_ease-out]">
            <Anchor className="w-20 h-20 text-[#cfeeff] mx-auto mb-4 animate-[float_3s_ease-in-out_infinite]" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-[fadeInUp_1s_ease-out_0.2s_both] leading-tight">
            Seafarer Training
            <span className="block text-[#cfeeff] mt-2">Programs</span>
          </h1>
          
          <p className="text-2xl text-[#cfeeff] max-w-4xl mx-auto mb-12 leading-relaxed animate-[fadeInUp_1s_ease-out_0.4s_both]">
            Seafaring demands mental resilience and preparedness. Our tailor-made courses equip maritime crew with essential skills to excel in one of the most demanding environments.
          </p>
          
          <button className="group bg-[#cfeeff] text-[#0a70af] px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-[fadeInUp_1s_ease-out_0.6s_both] inline-flex items-center gap-3">
            Explore Our Courses
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Courses Section - Horizontal Scroll Effect */}
      <section className="scroll-section py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0a70af] mb-4">Our Training Courses</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#0a70af] to-[#cfeeff] mx-auto rounded-full"></div>
          </div>

          {/* Grid Layout for Courses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#cfeeff] to-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                style={{
                  animation: `fadeInScale 0.8s ease-out ${idx * 0.2}s both`
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a70af] via-[#0a70af]/70 to-transparent opacity-80"></div>
                  
                  <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md rounded-2xl p-4 text-white border border-white/30">
                    {course.icon}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-[#0a70af] mb-4 group-hover:text-[#063d70] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: "4+", label: "Training Programs", icon: <Ship className="w-8 h-8" /> },
              { value: "36+", label: "Hours of Content", icon: <Compass className="w-8 h-8" /> },
              { value: "98%", label: "Success Rate", icon: <Award className="w-8 h-8" /> },
              { value: "15+", label: "Expert Trainers", icon: <Users className="w-8 h-8" /> }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="text-center p-6 bg-gradient-to-br from-[#cfeeff] to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animation: `fadeInUp 0.8s ease-out ${idx * 0.1}s both` }}
              >
                <div className="text-[#0a70af] mx-auto mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-[#0a70af] mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - Split Layout */}
      <section className="scroll-section relative overflow-hidden bg-gradient-to-br from-[#0a70af] to-[#063d70] py-20">
        <div className="absolute inset-0 opacity-10">
          <div 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
            className="w-full h-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Training Philosophy
              </h2>
              <div className="w-32 h-2 bg-[#cfeeff] rounded-full mb-8"></div>
              <p className="text-2xl text-[#cfeeff] leading-relaxed mb-8">
                At 3Cube, we design specific training courses based on a deep understanding of targeted skills, knowledge requirements, and learner needs.
              </p>
              <p className="text-xl text-white/90 leading-relaxed">
                Our courses ensure participants gain theoretical insights and develop the competence to apply their learning in real-world maritime scenarios.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "Practical Focus", desc: "Real-world application of skills and knowledge" },
                { title: "Expert Instructors", desc: "Industry veterans with extensive sea experience" },
                { title: "Continuous Support", desc: "Post-training assistance and resources" }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-[#cfeeff]/30 hover:bg-white/20 transition-all duration-300 hover:translate-x-2"
                  style={{ animation: `slideInRight 0.8s ease-out ${idx * 0.2}s both` }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[#cfeeff] text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-[#cfeeff]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[#0a70af] mb-6">Ready to Get Started?</h2>
          <p className="text-2xl text-gray-700 mb-10">
            Join thousands of seafarers who have enhanced their skills with our comprehensive training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0a70af] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#063d70] transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Contact Us Today
            </button>
            <button className="bg-white text-[#0a70af] px-12 py-5 rounded-full font-bold text-lg border-2 border-[#0a70af] hover:bg-[#0a70af] hover:text-white transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
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
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-50px);
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
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
};

export default Training;