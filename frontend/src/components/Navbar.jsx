import React from "react";
import headerLogo from "../assets/Header-logo.png";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto py-4">
      <nav className="flex items-center justify-evenly w-full">
        {/* Logo Section */}
        <div>
          <img className="w-40" src={headerLogo} alt="Company Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-10 text-lg font-semibold tracking-wide uppercase">
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#flooring" className="nav-link">
              Flooring
            </a>
          </li>
          <li>
            <a href="#architectural-products" className="nav-link">
              Architectural Products
            </a>
          </li>
          <li>
            <a href="#resources" className="nav-link">
              Resources
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
