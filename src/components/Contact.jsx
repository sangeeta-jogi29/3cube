import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import bgImage from '../assets/video_call_contact.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', subject: '', message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, message } = formData;
    if (!firstName.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in required fields: First Name, Email, and Message.');
      return;
    }
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  };

 

  return (
    <>
    <Header/>
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
     <section
  className="relative text-white py-16 px-6 md:px-16 bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(10, 112, 175, 0.9), rgba(10, 112, 175, 0.6)), url(${bgImage})`,
  }}
>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-20">
    <div className="max-w-xl flex flex-col gap-4">
      <h1 className="text-4xl md:text-5xl font-extrabold">
        <span className="text-white">Contact</span> Us
      </h1>
      <p className="max-w-md opacity-90 text-base md:text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <nav className="mt-4 text-sm font-medium opacity-80" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1 text-teal-200">
          <li>
            <a href="#" className="hover:underline">Homepage</a>
            <span className="mx-1">&gt;</span>
          </li>
          <li aria-current="page" className="font-semibold text-white">Contact Us</li>
        </ol>
      </nav>
    </div>
  </div>
</section>




      <section className="max-w-7xl mx-auto my-20 px-4 md:px-8 grid md:grid-cols-2 gap-14">
  {/* ───────── Contact info ───────── */}
  <div className="space-y-8">
    <header>
      <p className="uppercase text-xs font-semibold tracking-wider text-[#0a70af]">Let’s Connect</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
        Stay in Touch&nbsp;With&nbsp;Us
      </h2>
    </header>

    <p className="text-gray-600 leading-relaxed max-w-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
      luctus nec ullamcorper mattis.
    </p>

    <ul className="space-y-6">
      {/* Address */}
      <li className="flex items-start gap-4">
        <i className="fas fa-map-marker-alt text-[#0a70af] text-3xl pt-1"></i>
        <div>
          <h4 className="font-semibold text-gray-900">Our Address</h4>
          <p className="text-gray-600 text-sm">
            3Cube Medicare Pvt. Ltd. (Service Delivery Partner),
            33 Maker Chamber III, Nariman Point,
            Mumbai, Maharashtra 400021
          </p>
        </div>
      </li>

      {/* Email */}
      <li className="flex items-start gap-4">
        <i className="fas fa-envelope text-[#0a70af] text-3xl pt-1"></i>
        <div>
          <h4 className="font-semibold text-gray-900">Email Address</h4>
          <p className="text-gray-600 text-sm"> info@3cubemedicare.com</p>
        </div>
      </li>

      {/* Phone */}
      <li className="flex items-start gap-4">
        <i className="fas fa-phone-alt text-[#0a70af] text-3xl pt-1"></i>
        <div>
          <h4 className="font-semibold text-gray-900">Telephone</h4>
          <p className="text-gray-600 text-sm">(+44) 123 456 789</p>
        </div>
      </li>
    </ul>
  </div>

  {/* ───────── Testimonial ───────── */}
  <div className="relative bg-[#cfeeff] rounded-2xl shadow-xl p-10 pt-16">
    {/* Avatar */}
    <div className="absolute -top-10 right-10 w-40 h-40 rounded-full ring-4 ring-white overflow-hidden shadow-md">
      <img
        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/333b5f09-e531-4a9d-bfbc-61d0b3213b81.png"
        alt="Mrs. John Kole"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Quote & author */}
    <i className="fas fa-quote-left text-[#0a70af] text-3xl mb-9 block"></i>
    <p className="text-gray-800 leading-relaxed">
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
      luctus nec ullamcorper mattis.”
    </p>

    <footer className="mt-6 font-semibold text-gray-900">
      Mrs.&nbsp;John&nbsp;Kole
      <span className="block text-sm text-[#0a70af] tracking-widest uppercase">
        Head&nbsp;Director
      </span>
    </footer>
  </div>
</section>




      {/* Map & Form Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
  <iframe
    loading="lazy"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d72.8258333!3d18.9211111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce05c7bfcf7b%3A0xa9c0e5e1!2s3Cube%20Medicare!5e0!3m2!1sen!2sin!4v1718677600000!5m2!1sen!2sin"
    width="100%"
    height="450"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    title="3Cube Medicare Map"
    className="w-full h-full min-h-[20rem] rounded-xl border-none"
  ></iframe>
</div>



        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Lets Send Message For Us</h3>
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium text-gray-700">First Name</label>
                <input type="text" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} required className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0a70af]" />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Last Name</label>
                <input type="text" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0a70af]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0a70af]" />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Subject</label>
                <select value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0a70af]">
                  <option value="" disabled>-- Choose Subject --</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows="4" required className="w-full rounded-md border border-gray-300 px-4 py-2 resize-y focus:ring-2 focus:ring-[#0a70af]"></textarea>
            </div>

            <button type="submit" className="w-full bg-[#0a70af] text-white py-3 rounded-md hover:bg-[#4c98c3] transition font-semibold">Send Message</button>
          </form>
        </div>
      </section>

      {/* Section */}
      <section className="bg-gray-50 mt-24 py-8 px-6 md:px-16">
        
      </section>
    </div>
    <Footer/>
  </>
  );
};

export default Contact;
