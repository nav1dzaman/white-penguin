import React from "react";
import Logo from "../assets/svg/Logo.svg";
import LogoText from "../assets/svg/logoTest.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4  bg-white">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="WhitePenguin Logo" className="h-16 w-auto" />
        <img
          src={LogoText}
          alt="WhitePenguin Logo"
          className="h-6 w-auto -ml-3 mt-2 md:h-8"
        />
      </div>

      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a
          href="#"
          className="hover:text-teal-600 font-poppins text-[#4B5563] text-18px"
        >
          Waitlist
        </a>
        <a
          href="#"
          className="hover:text-teal-600 font-poppins text-[#4B5563] text-18px"
        >
          Who is it For?
        </a>
        <a
          href="#"
          className="hover:text-teal-600 font-poppins text-[#4B5563] text-18px"
        >
          How It Works
        </a>
        <a
          href="#"
          className="hover:text-teal-600 font-poppins text-[#4B5563] text-18px"
        >
          Solutions
        </a>
        <a
          href="#"
          className="hover:text-teal-600 font-poppins text-[#4B5563] text-18px"
        >
          FAQ
        </a>
      </div>

      {/* Right: Button */}
      <div>
        <button className="bg-[#2BA197] text-white font-poppins px-6 py-2 rounded-lg shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
          Join Waitlist
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
