import rmaBack from "../../assets/rma_back.png";
import mHealthBack from "../../assets/MHealth_back.jpg";
import wellnessBack from "../../assets/wellness_back.jpg";
import pharmaBack from "../../assets/pharma_back.png";
import shorecareBack from "../../assets/shorecare_back.jpg";
import trainingBack from "../../assets/training_back.jpg";
import { Link } from 'react-router-dom';



const services = [
  {
    title: "RMA",
    icon: "fas fa-briefcase-medical",
    description: "Remote Medical Assistance with 24/7 expert support.",
    image: rmaBack,
    link: "/rma",
    label: "Remote Medical Assistance service"
  },
  {
    title: "M-Health",
    icon: "fas fa-spa",
    description: "Dedicated mental health support and counselling.",
    image: mHealthBack,
    link: "/mhealth",
    label: "Mental Health support service"
  },
  {
    title: "Wellness",
    icon: "fas fa-heartbeat",
    description: "Programs to promote physical and emotional wellbeing.",
    image: wellnessBack,
    link: "/wellness",
    label: "Wellness programs service"
  },
  {
    title: "Pharma",
    icon: "fas fa-pills",
    description: "Quality medications and medical supplies onboard.",
    image: pharmaBack,
    link: "pharma-services.html",
    label: "Pharma medical supplies service"
  },
  {
    title: "Shorecare",
    icon: "fas fa-hospital",
    description: "Seamless care coordination during shore leave.",
    image: shorecareBack,
    link: "shorecare-services.html",
    label: "Shorecare coordination service"
  },
  {
    title: "Training",
    icon: "fas fa-user-graduate",
    description: "Comprehensive medical training programs for crew.",
    image: trainingBack,
    link: "training-services.html",
    label: "Medical training programs service"
  },
];

export default function Services() {
  return (
    
      <section
        aria-label="Services Section"
        className="services-section bg-[#0a70af] py-28 px-6 text-center mx-auto  shadow-lg mb-0 fade-in"
      >
         <div className="relative w-[900px] h-[100px] mx-auto mb-8">
  {/* Skewed blue background */}
  <div
    className="absolute top-0 left-0 w-[102%] h-full bg-[#064267] z-[1] rounded-sm"
    style={{ transform: 'skew(-20deg)' }}
  ></div>

  {/* White content with skew */}
  <div
    className="relative z-[2] bg-white text-center py-[10px] rounded-md"
    style={{ transform: 'skew(-20deg)' }}
  >
    <h3
      className="text-transparent bg-gradient-to-r from-[#0a70af] to-[#1a1a3d] bg-clip-text font-bold text-3xl lg:text-5xl leading-snug"

      style={{
        transform: 'skew(20deg)',
        fontFamily: 'Times New Roman, serif',
        margin: 0
      }}
    >
      Our Services
    </h3>
  </div>
  </div>
  
        <div
          id="services-carousel"
          role="list"
          className="services-carousel flex flex-wrap justify-center gap-10 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              tabIndex={index === 0 ? 0 : -1}
              role="listitem"
              aria-label={service.label}
              className="service-card bg-white rounded-3xl p-8 shadow-md flex flex-col items-center w-56 cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <img
                src={service.image}
                alt={`${service.title} Logo`}
                className="service-logo w-50 h-40 object-contain mb-0 mt-0"
                draggable="false"
              />
              <h3 className="text-xl font-semibold text-[#0a70af] mb-2 flex items-center gap-2">
                <i className={service.icon}></i> {service.title}
              </h3>
              <p className="text-sm text-gray-700 mb-4 flex-grow">
                {service.description}
              </p>
              <Link to={service.link} className="btn-know-more bg-[#0a70af] text-white rounded-full px-8 py-2 font-semibold hover:bg-[#2a89c0] focus:outline-none focus:ring-blue-400 transition duration-300">Know more</Link>

            </div>
          ))}
        </div>
      </section>
    
  );
}
