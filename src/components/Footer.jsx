import React from 'react';
import logo from '../assets/logo.png';
import { FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Mail Us Section */}
      <section className="bg-[#d0e9f9] text-[#0a3c63] text-center px-6 py-12 sm:py-16 fade-in">
        <div className="max-w-[700px] mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Mail Us</h3>
          <p className="text-sm sm:text-base mb-6">
            We make sure to be available and accessible all the time.
          </p>
          <form
            className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded px-4 py-3 bg-white text-[#0a3c63] w-full sm:w-auto flex-grow focus:outline-none focus:ring-2 focus:ring-[#0a70af]"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-[#0a70af] text-white font-semibold rounded px-6 py-3 hover:bg-[#084d7a] transition duration-300"
            >
              SEND
            </button>
          </form>
          <p className="text-xs text-[#0a3c63]/70 mt-4">No spam. We hate it too.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a70af] text-white px-6 sm:px-12 py-10 fade-in">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
          {/* Logo and Description */}
          <div className="flex-1">
            <img
              src={logo}
              alt="3CubeMedicare logo"
              className="w-32 md:w-40 mb-4"
            />
            <p className="text-sm sm:text-base mb-4 max-w-[300px]">
              We combine data and technology to deliver world-leading enterprise solutions.
            </p>
            <div className="flex space-x-4">
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/3cube/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f28c4f] transition-colors"
              >
                <FaLinkedinIn className="text-2xl sm:text-3xl" />
              </a>
              <a
                aria-label="YouTube"
                href="https://youtube.com/@3cubemedicare129?si=JBN6uYw0N06E51xf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f28c4f] transition-colors"
              >
                <FaYoutube className="text-2xl sm:text-3xl" />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="hover:text-[#f28c4f] transition-colors"
              >
                <FaInstagram className="text-2xl sm:text-3xl" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex-1 text-sm sm:text-base">
            <h3 className="font-semibold text-lg mb-3">Get In Touch</h3>
            <p className="mb-2">Email: info@3cubemedicare.com</p>
            <address className="not-italic mb-2 leading-relaxed">
              3Cube Medicare Pvt. Ltd. (Service Delivery Partner),<br />
              33 Maker Chamber III, Nariman Point,<br />
              Mumbai, Maharashtra 400021
            </address>
            <p>+1 234 567 890</p>
          </div>

          {/* Company Links */}
          <div className="flex-1 text-sm sm:text-base">
            <h3 className="font-semibold text-lg mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">What We Do</a></li>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 text-center text-xs sm:text-sm text-white/70">
          &copy; {new Date().getFullYear()} 3Cube Medicare Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
