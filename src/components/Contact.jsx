import React, { useState } from 'react';

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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      alert('Please enter your email address.');
      return;
    }
    alert('Thank you for subscribing!');
    setNewsletterEmail('');
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-teal-600 text-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-20">
          <div className="max-w-xl flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              <span className="bg-white text-teal-700 px-2 py-1 rounded">Contact</span> Us
            </h1>
            <p className="max-w-md opacity-80 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <nav className="mt-4 text-sm font-medium opacity-70" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-1 text-teal-200">
                <li><a href="#" className="hover:underline">Homepage</a><span className="mx-1">&gt;</span></li>
                <li aria-current="page" className="font-semibold text-white">Contact Us</li>
              </ol>
            </nav>
          </div>
          <div className="flex-grow h-48 md:h-64 bg-teal-500 rounded-lg opacity-25" aria-hidden="true"></div>
        </div>
      </section>

      {/* Contact Info + Testimonial */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20 flex flex-col md:flex-row items-start gap-12 md:gap-24">
        <div className="flex-1 max-w-md space-y-6">
          <p className="uppercase text-sm font-semibold tracking-wide text-teal-700">Lets Connected</p>
          <h2 className="text-3xl font-extrabold max-w-xl">Stay In Touch With Us</h2>
          <p className="text-gray-600 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <ul className="space-y-6">
            <li className="flex items-center gap-3">
              <span className="material-icons text-teal-600">location_on</span>
              <div>
                <h4 className="font-semibold">Our Address</h4>
                <p className="text-gray-600 text-sm">California State Long St. 42 Block</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-icons text-teal-600">email</span>
              <div>
                <h4 className="font-semibold">Email Address</h4>
                <p className="text-gray-600 text-sm">Hello@Email.co</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-icons text-teal-600">phone</span>
              <div>
                <h4 className="font-semibold">Telephone</h4>
                <p className="text-gray-600 text-sm">(+44) 123 456 789</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex-1 max-w-md bg-teal-100 rounded-2xl p-8 relative">
          <blockquote className="relative text-gray-800 text-base">
            <span className="material-icons absolute top-6 left-6 text-teal-600 text-4xl select-none">format_quote</span>
            <p className="pl-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
          </blockquote>
          <footer className="mt-6 font-semibold">
            Mrs. John Kole
            <span className="block text-sm text-teal-600 tracking-widest uppercase">Head Director</span>
          </footer>
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/333b5f09-e531-4a9d-bfbc-61d0b3213b81.png"
            alt="Professional"
            className="absolute top-0 right-0 w-32 h-32 rounded-2xl object-cover -translate-y-2/3 translate-x-1/4 shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
          <iframe
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19854.815935606347!2d-0.1382485032392762!3d51.50048409310813"
            width="100%"
            height="450"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            className="w-full h-full min-h-[20rem] rounded-xl border-none"
          ></iframe>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Lets Send Message For Us</h3>
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium text-gray-700">First Name</label>
                <input type="text" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} required className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-teal-600" />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Last Name</label>
                <input type="text" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-teal-600" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-teal-600" />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Subject</label>
                <select value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-teal-600">
                  <option value="" disabled>-- Choose Subject --</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows="4" required className="w-full rounded-md border border-gray-300 px-4 py-2 resize-y focus:ring-2 focus:ring-teal-600"></textarea>
            </div>

            <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition font-semibold">Send Message</button>
          </form>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 mt-24 py-8 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h4 className="font-semibold text-xl md:text-2xl text-gray-900">Subscribe Our Newsletter</h4>
          <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-md gap-2">
            <input type="email" placeholder="Email Address" value={newsletterEmail} onChange={e => setNewsletterEmail(e.target.value)} required className="flex-grow rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-teal-600" />
            <button type="submit" className="bg-teal-600 text-white rounded-md px-6 py-2 font-semibold hover:bg-teal-700 transition">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
