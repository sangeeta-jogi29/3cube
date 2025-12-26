import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Offshore Engineer",
    image: "https://storage.googleapis.com/a1aa/image/985252a5-5982-49a3-a07e-7c021496951e.jpg",
    text: "3Cube Medicare provided excellent support during a medical emergency at sea. Their team’s quick response saved the day.",
  },
  {
    name: "Leslie Knope",
    role: "Ship Captain",
    image: "https://storage.googleapis.com/a1aa/image/01009d51-b252-471b-c4c0-9fcfbf88302e.jpg",
    text: "The personalized care and mental health support made all the difference during my long voyages.",
  },
  {
    name: "Paolo Warren",
    role: "Deck Officer",
    image: "https://storage.googleapis.com/a1aa/image/1f5c65ff-7407-4046-80dd-da4d176d330e.jpg",
    text: "Training programs by 3Cube Medicare helped our crew stay prepared and healthy at all times.",
  },
  {
    name: "Anna L.",
    role: "Medical Officer",
    image: "https://storage.googleapis.com/a1aa/image/2f3c9eaa-45c3-4e8f-8b2c-1234567890ab.jpg",
    text: "Their rapid medical guidance and professional handling of emergencies made me confident onboard.",
  },
  {
    name: "Mark R.",
    role: "Chief Engineer",
    image: "https://storage.googleapis.com/a1aa/image/3a4b1cde-1234-5678-9012-abcdef123456.jpg",
    text: "3Cube’s training programs improved our crew’s overall health and preparedness significantly.",
  },
  {
    name: "Sofia P.",
    role: "Navigation Officer",
    image: "https://storage.googleapis.com/a1aa/image/4b5c2dfe-2345-6789-0123-fedcba987654.jpg",
    text: "The mental health support initiatives by 3Cube helped our team stay motivated during long voyages.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const total = testimonials.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Swipe handlers for mobile
  const handleTouchStart = (e) => setTouchStartX(e.changedTouches[0].clientX);
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    if (deltaX > 50) prevSlide();
    if (deltaX < -50) nextSlide();
  };

  return (
    <section className="w-full px-6 py-20 relative overflow-hidden bg-[#d0e9f9]">
      <div className="max-w-7xl mx-auto text-center text-[#0a3c63]">
        <h3 className="text-4xl sm:text-5xl font-bold mb-14 tracking-wide">
          Testimonials & Endorsements
        </h3>

        <div
          className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-3xl" // Added rounded-3xl here
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="flex-none w-full px-4">
                <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center text-center gap-6 transition-transform duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-20 h-20 object-cover border-2 border-[#0a70af]"
                  />
                  <p className="text-[#0a3c63] italic text-base leading-relaxed">
                    “{testimonial.text}”
                  </p>
                  <div className="text-[#0a70af] text-lg font-semibold">{testimonial.name}</div>
                  <div className="text-[#3c5a78] text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                idx === currentIndex ? "bg-[#0a70af]" : "bg-[#3c5a78]/50"
              }`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
