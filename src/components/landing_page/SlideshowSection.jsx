import { useState, useEffect } from 'react';
import frontPage from '../../assets/front_page.png';
import digital3 from '../../assets/digital3.png';

const SlideshowSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prev => (prev === 1 ? 2 : 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="slideshow-section"
      className="relative w-full overflow-hidden px-6 py-20 bg-gradient-to-br from-[#e9f3fa] to-white"
    >
      {/* Background blob */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#0a70af]/10 rounded-full blur-3xl z-0"></div>

      {/* Slideshow container with fixed height to avoid layout shift */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[400px]">
        {/* Slides container */}
        <div className="relative w-full h-full">
          {/* Slide 1 */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentPage === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center h-full">
              <div>
                <h1 className="font-bold text-[40px] md:text-[48px] font-serif leading-tight tracking-tight">
                  Exceptional Care for <span className="text-[#0a70af]">Every Crew</span>, Everywhere
                </h1>
                <p className="mt-6 text-lg text-black/70 font-normal leading-7 max-w-xl">
                  At 3Cube Medicare, we go beyond treatment; we deliver trust at sea. With our expert medical team and holistic approach, we address your crew’s health needs with speed, compassion, and precision.
                </p>
                <button className="mt-8 inline-flex items-center gap-2 bg-[#0a70af] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#095e96] transition duration-300">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={frontPage}
                  alt="Ship showing all services"
                  className="w-[300px] md:w-[420px] h-[400px] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className={`absolute inset-0 transition-opacity duration-800 ${
              currentPage === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center h-full">
              <div>
                <h1 className="font-bold text-[36px] md:text-[44px] font-serif leading-tight tracking-tight">
                  Delivering <span className="text-[#0a70af]">Smart Maritime Healthcare</span> Through Technology
                </h1>
                <p className="mt-6 text-lg text-black/70 font-normal leading-7 max-w-xl">
                  Leveraging the latest in medical and digital technology, 3Cube Medicare ensures your crew receives real-time, high-quality healthcare even in the middle of the ocean.
                </p>
                <button className="mt-8 inline-flex items-center gap-2 bg-[#0a70af] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#095e96] transition duration-300">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={digital3}
                  alt="Technological Maritime Healthcare"
                  className="w-[300px] md:w-[460px] h-[440px] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideshowSection;
