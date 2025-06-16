import React from 'react';
import redSea from '../../assets/red-sea.png';
import mark from '../../assets/mark.png';
import zeaborn from '../../assets/Zeaborn.png';
import pacificBasin from '../../assets/Pacificbasin.png';
import anglo from '../../assets/anglo.png';
import msc from '../../assets/msc.jpg';
import seaways from '../../assets/Seaways.jpg';
import landbridge from '../../assets/landbridge.jpg';
// Add more logos as needed


const ClientsSection = () => {
  const logos = [
    { src: redSea, alt: 'Red Sea' },
    { src: mark, alt: 'Mark' },
    { src: zeaborn, alt: 'Zeaborn' },
    { src: pacificBasin, alt: 'Pacific Basin' },
    { src: anglo, alt: 'Anglo' },
    { src: msc, alt: 'MSC' },
    { src: seaways, alt: 'Seaways' },
    { src: landbridge, alt: 'Landbridge' },
   
  ];

  return (
    <section className="bg-[#d0e9f9] w-full  px-6 py-16 fade-in">
      <h3 className="text-center font-semibold mb-10 text-[30px] max-w-md mx-auto">
        Our Valued Partners
      </h3>
      <div className="grid grid-cols-4 gap-x-16 gap-y-10 max-w-4xl mx-auto place-items-center">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            tabIndex="0"
            draggable="false"
            className="max-h-24 w-auto"
          />
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
