import React from 'react';
import logo from '../assets/logo.png';
import { FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Mail Us Section */}
      
      <section className="bg-[#0a70af] text-white text-center px-20 py-16 fade-in">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-xl font-semibold mb-4">Mail Us</h3>
          <p className="text-xs mb-6">
            We make sure to be available and accessible all the time.
          </p>
          <form
            className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded px-4 py-2 bg-white text-black w-full sm:w-auto flex-grow"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-[#3ad6b8] text-black font-semibold rounded px-6 py-2 hover:bg-[#2bb89e] transition duration-300"
            >
              SEND
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-4">No spam. We hate it too.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a70af] text-white px-12 py-10 fade-in">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-40">
          {/* Logo and Description */}
          <div className="flex-1">
            <img
              src={logo}
              alt="3CubeMedicare logo"
              className="w-30 md:w-40 mb-4"
            />
            <p className="text-lx mb-4 max-w-[300px]">
              We combine data and technology to deliver world-leading enterprise solutions.
            </p>
            <div className="flex space-x-4">
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/3cube/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f28c4f]"
              >
                <FaLinkedinIn className="text-3xl" />
              </a>
              <a
                aria-label="YouTube"
                href="https://youtube.com/@3cubemedicare129?si=JBN6uYw0N06E51xf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f28c4f]"
              >
                <FaYoutube className="text-3xl" />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="hover:text-[#f28c4f]"
              >
                <FaInstagram className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex-1 text-lx">
            <h3 className="font-semibold text-lg mb-3">Get In Touch</h3>
            <p className="mb-2">Email: info@3cubemedicare.com</p>
            <address className="not-italic mb-2">
              Address: 3Cube Medicare Pvt. Ltd. (Service Delivery Partner),<br />
              33 Maker Chamber III, Nariman Point,<br />
              Mumbai, Maharashtra 400021
            </address>
            <p>+1 234 567 890</p>
          </div>

          {/* Company Links */}
          <div className="flex-1 text-lx">
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
      </footer>
    </>
  );
};

export default Footer;