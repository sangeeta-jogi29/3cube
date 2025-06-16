import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="top-0 left-0 w-full z-50 bg-[#0a70af] border-b border-[#e6ecf7]">

      <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="3Cube icon logo" className="w-30 h-auto" />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg font-semibold text-white items-center">
          <li>
            <Link to="/" className="px-4 py-2 rounded-md hover:bg-[#3f91c7] transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="px-4 py-2 rounded-md hover:bg-[#3f91c7] transition-colors duration-300">
              About
            </Link>
          </li>

         {/* Services Dropdown */}
<li className="relative group">
  <span className="px-4 py-2 rounded-md hover:bg-[#3f91c7] cursor-pointer transition-colors duration-300">
    Services
  </span>
  <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-white text-black rounded-md shadow-lg w-38 z-45">
    <li>
      <Link to="/rma" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
        <i className="fas fa-briefcase-medical text-[#0a70af]"></i> RMA
      </Link>
    </li>
    <li>
      <Link to="/mhealth" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
        <i className="fas fa-spa text-[#0a70af]"></i> M-Health
      </Link>
    </li>
    <li>
      <Link to="/wellness" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
        <i className="fas fa-heartbeat text-[#0a70af]"></i> Wellness
      </Link>
    </li>
    <li>
      <Link to="/services/pharma" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
        <i className="fas fa-pills text-[#0a70af]"></i> Pharma
      </Link>
    </li>
    <li>
      <Link to="/services/shorecare" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
        <i className="fas fa-hospital text-[#0a70af]"></i> Shorecare
      </Link>
    </li>
    <li>
      <Link to="/services/training" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
        <i className="fas fa-user-graduate text-[#0a70af]"></i> Training
      </Link>
    </li>
  </ul>
</li>


          <li>
            <Link to="/technology" className="px-4 py-2 rounded-md hover:bg-[#3f91c7] transition-colors duration-300">
              Technology
            </Link>
          </li>
          <li>
            <Link to="/contact" className="px-4 py-2 rounded-md hover:bg-[#3f91c7] transition-colors duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
