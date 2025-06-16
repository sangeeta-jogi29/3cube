import React from 'react';

const testimonials = [
  {
    name: 'Carlos M.',
    role: 'Offshore Engineer',
    image: 'https://storage.googleapis.com/a1aa/image/985252a5-5982-49a3-a07e-7c021496951e.jpg',
    text: '3Cube Medicare provided excellent support during a medical emergency at sea. Their team’s quick response saved the day.',
  },
  {
    name: 'Leslie Knope',
    role: 'Ship Captain',
    image: 'https://storage.googleapis.com/a1aa/image/01009d51-b252-471b-c4c0-9fcfbf88302e.jpg',
    text: 'The personalized care and mental health support made all the difference during my long voyages.',
  },
  {
    name: 'Paolo Warren',
    role: 'Deck Officer',
    image: 'https://storage.googleapis.com/a1aa/image/1f5c65ff-7407-4046-80dd-da4d176d330e.jpg',
    text: 'Training programs by 3Cube Medicare helped our crew stay prepared and healthy at all times.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#0a70af] w-full px-6 py-16 text-white fade-in">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center font-semibold mb-10 text-[30px]">
          Testimonials & Endorsements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-12 text-xs font-semibold">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3"
            >
              <img
                alt={`User avatar of ${testimonial.name}`}
                className="rounded-full"
                height="48"
                width="48"
                src={testimonial.image}
              />
              <p className="text-white/70 italic text-[14px]">"{testimonial.text}"</p>
              <div className="mt-2">{testimonial.name}</div>
              <div className="text-white/50 text-[12px]">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
