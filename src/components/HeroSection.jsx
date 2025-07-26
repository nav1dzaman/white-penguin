import React from "react";
import BOY1 from "../assets/svg/boy-1.svg";
import BOY2 from "../assets/svg/boy-2.svg";
import TAB from "../assets/svg/tab.svg";
import INFO from "../assets/svg/info.svg";

const HeroSection = () => {
  return (
    <section
      className="bg-white py-6 px-4 text-center relative overflow-hidden"
      style={{ minHeight: "800px" }}
    >
      {/* Background Decorative Dots */}
      <div className="absolute left-10 top-80 md:top-24">
        <img src={BOY1} alt="Boy reading" className="w-32 md:w-40" />
        <div className="w-12 h-12 bg-[#FCE7F3] rounded-full absolute -top-3 left-[95px] md:left-[118px] z-0"></div>
      </div>

      <div className="absolute right-14 top-80 md:top-20">
        <div className="w-12 h-12 bg-[#FCE7F3] rounded-full absolute top-16  -right-6 z-0"></div>
        <img
          src={BOY2}
          alt="Boy jumping"
          className="w-32 md:w-40 relative z-10"
        />
      </div>

      {/* Main Text */}
      <div className="max-w-2xl mx-auto">
        <p className="text-[#6B7280] font-poppins text-sm md:text-lg mb-3">
          Your complete preschool & childcare management system
        </p>

        <h1 className="text-[5rem] font-dongle leading-none">
          Preschool Management. <br />
          <span className="text-[#2BA197] text-[5rem]">Simplified.</span>
        </h1>

        <p className="text-[#6B7280] font-poppins mt-64 md:mt-6 text-sm md:text-lg max-w-xl mx-auto">
          One smart dashboard to handle enrollment, billing, attendance, parent
          messaging, and more — so you can focus on the kids, not the chaos.
        </p>

        <div className="mt-8">
          <button className="bg-[#2BA197] text-white px-6 py-3 rounded-xl shadow-xl hover:scale-105 transition duration-300">
            Join the Waitlist
          </button>
        </div>
      </div>

      {/* Image Section - Centered with respect to outer div */}
      <div className="mt-6 flex flex-col justify-center items-center w-full px-4">
        <div className="relative w-full lg:max-w-4xl 2xl:max-w-[1500px] flex justify-center mb-6">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 w-full">
            <img src={TAB} alt="App Preview" className="w-full h-auto" />
          </div>
        </div>

        <div className="bg-[#CCFBF1] text-center font-poppins px-6 py-2 rounded-lg flex items-center gap-2 text-[#6B7280] text-sm font-medium max-w-2xl">
          <img src={INFO} alt="Info icon" />
          <span>
            We'll send you early access, sneak peeks, and exclusive bonuses — no
            spam.
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
