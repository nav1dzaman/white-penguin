import React, { useState } from "react";
import LOGO from "../assets/svg/Logo.svg";
import LOGOTEXT from "../assets/svg/logoTest.svg";
import FB from "../assets/svg/fb.svg";
import INS from "../assets/svg/ins.svg";
import X from "../assets/svg/x.svg";
import LINKDIN from "../assets/svg/linkdin.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log(email);
    setEmail("");
  };

  return (
    <footer className="bg-white mt-8  p-8 px-24">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <div className="flex items-center">
            <img src={LOGO} alt="WhitePenguin Logo" className="h-16 w-auto" />
            <img
              src={LOGOTEXT}
              alt="WhitePenguin Logo"
              className="h-6 w-auto -ml-3 mt-2 md:h-8"
            />
          </div>
          <div className="flex space-x-2 mt-2 ml-4">
            <a href="#" className="">
              <div className="w-8 h-8 bg-[#008080] flex items-center justify-center rounded">
                <img src={FB} alt="Facebook" className="w-4 h-4" />
              </div>
            </a>
            <a href="#" className="">
              <div className="w-8 h-8 bg-[#008080] flex items-center justify-center rounded">
                <img src={INS} alt="Twitter" className="w-4 h-4" />
              </div>
            </a>
            <a href="#" className="">
              <div className="w-8 h-8 bg-[#008080] flex items-center justify-center rounded">
                <img src={X} alt="Instagram" className="w-4 h-4" />
              </div>
            </a>
            <a href="#" className="">
              <div className="w-8 h-8 bg-[#008080] flex items-center justify-center rounded">
                <img src={LINKDIN} alt="LinkedIn" className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-[#3B3B3B]">
          <div>
            <h3 className="font-semibold border-b-2 border-[#008080] mb-2 text-[#008080] font-poppins inline-block pb-1">
              Links
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline font-poppins">
                  Waitlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-poppins">
                  School care
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-poppins">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-poppins">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-poppins">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-8 md:items-end">
          <div>
            <h3 className="font-semibold border-b-2 border-[#008080] mb-2 text-[#008080] font-poppins inline-block pb-1">
              Newsletter
            </h3>

            <div className="relative w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-[#9F9F9F] rounded-lg px-3 py-3 w-full focus:outline-none pr-28"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="absolute top-1 bottom-1 right-1 bg-[#008080] text-white px-4 rounded hover:bg-[#006666] transition-colors"
                onClick={handleSubscribe}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-[#FF7C80] text-white px-4 py-2 rounded-lg font-poppins">
              Quick Survey
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-4 mb-4">
        <hr className="mb-4"></hr>
        <p>Copyright © 2025 WhitePenguin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
