import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 left-0 w-full z-50 bg-[#0a70af] border-b border-[#e6ecf7]">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="3Cube icon logo" className="w-30 h-auto" />
        </Link>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-semibold text-white items-center">
          <li>
            <Link
              to="/"
              className="px-4 py-2 rounded-md hover:bg-[#3f91c7] transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-4 py-2 rounded-md hover:bg-[#3f91c7] transition-colors duration-300"
            >
              About
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="relative group">
            <span className="px-4 py-2 rounded-md hover:bg-[#3f91c7] cursor-pointer transition-colors duration-300">
              Services
            </span>
            <ul className="absolute top-full left-0 ml-4 mt-2 hidden group-hover:block bg-white text-black rounded-md shadow-lg w-38 z-45">

              <li>
                <Link
                  to="/rma"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <i className="fas fa-briefcase-medical text-[#0a70af]"></i> RMA
                </Link>
              </li>
              <li>
                <Link
                  to="/mhealth"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <i className="fas fa-spa text-[#0a70af]"></i> M-Health
                </Link>
              </li>
              <li>
                <Link
                  to="/wellness"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <i className="fas fa-heartbeat text-[#0a70af]"></i> Wellness
                </Link>
              </li>
              <li>
                <Link
                  to="/pharma"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <i className="fas fa-pills text-[#0a70af]"></i> Pharma
                </Link>
              </li>
              <li>
                <Link
                  to="/shorecare"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <i className="fas fa-hospital text-[#0a70af]"></i> Shorecare
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <i className="fas fa-user-graduate text-[#0a70af]"></i> Training
                </Link>
              </li>
            </ul>
          </li>

          <li>
  <Link
    to="/achievements"
    className="px-4 py-2 rounded-md hover:bg-[#3f91c7] transition-colors duration-300"
  >
    Achievements
  </Link>
</li>

          <li>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-md hover:bg-[#3f91c7] transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col md:hidden space-y-2 mt-4 bg-[#0a70af] text-white w-full px-6 py-4 absolute left-0 top-full z-40 rounded-b-md shadow-lg">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 rounded-md hover:bg-[#3f91c7] transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 rounded-md hover:bg-[#3f91c7] transition-colors duration-300"
              >
                About
              </Link>
            </li>

            {/* Mobile Services Dropdown */}
            <li>
              <details className="group">
                <summary className="px-4 py-2 rounded-md cursor-pointer hover:bg-[#3f91c7] transition-colors duration-300 flex justify-between items-center">
                  Services
                  <span className="ml-2">▼</span>
                </summary>
                <ul className="mt-2 bg-[#0a70af] rounded-md shadow-lg overflow-hidden text-white">
                  <li>
                    <Link
                      to="/rma"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-[#3f91c7] transition-colors duration-300"
                    >
                      <i className="fas fa-briefcase-medical text-white"></i> RMA
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mhealth"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-[#3f91c7] transition-colors duration-300"
                    >
                      <i className="fas fa-spa text-white"></i> M-Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/wellness"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-[#3f91c7] transition-colors duration-300"
                    >
                      <i className="fas fa-heartbeat text-white"></i> Wellness
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pharma"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-[#3f91c7] transition-colors duration-300"
                    >
                      <i className="fas fa-pills text-white"></i> Pharma
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shorecare"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-[#3f91c7] transition-colors duration-300"
                    >
                      <i className="fas fa-hospital text-white"></i> Shorecare
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/training"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-[#3f91c7] transition-colors duration-300"
                    >
                      <i className="fas fa-user-graduate text-white"></i> Training
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
  <Link
    to="/achievements"
    className="block px-4 py-2 rounded-md hover:bg-[#3f91c7] transition-colors duration-300"
  >
    Achievements
  </Link>
</li>

            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 rounded-md hover:bg-[#3f91c7] transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
