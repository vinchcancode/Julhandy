import React, { useState, useEffect } from "react";
import Logo from "../assets/JulHandy.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-screen bg-white z-50 shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-screen-2xl mx-auto px-8 flex justify-between items-center">
        <div>
          <Link to="/">
            <img className="w-36" src={Logo} alt="Company Logo" />
          </Link>
        </div>
        <ul className="flex space-x-10 text-md tracking-wide uppercase font-primary">
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Flooring">FLOORING</Link>
          </li>
          <li>
            <Link to="/Architectural-Products">Architectural Products</Link>
          </li>
          <li>
            <Link to="/Resources">RESOURCES</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
