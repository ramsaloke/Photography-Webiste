import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-gray-800 text-white z-50 shadow-md">
      {/* Logo Section */}
      <div className="text-2xl font-semibold flex items-center h-10">
        <h2 className="w-20 h-14 transition-transform duration-300 hover:scale-110 font-bold">
          BG <br />
          <span className="text-orange-500">PhotoGraphy</span>
        </h2>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-white text-3xl"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex space-x-12 p-4`}
      >
        <ul className="flex flex-col md:flex-row justify-center md:space-x-8">
          <li>
            <a href="#home" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-200">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-200">
              Contact
            </a>
          </li>
          <li>
            <a  href="#book" className="text-[#FF5733] hover:text-[#C70039] font-bold   transition-transform transform hover:scale-105">
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
