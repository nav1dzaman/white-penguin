// src/components/WaitlistSection.jsx
import React from "react";
import Card1 from "./Card1";

// Example icons (replace with real paths or URLs)
import lightningIcon from "../assets/svg/W-1.svg";
import starIcon from "../assets/svg/W-2.svg";
import cardIcon from "../assets/svg/card.svg";
import bellIcon from "../assets/svg/W-4.svg";

const WaitlistSection = () => {
  const cards = [
    { img: lightningIcon, text: "Priority access when we launch" },
    { img: starIcon, text: "Free setup for your school" },
    {
      img: cardIcon,
      text: "Discounted premium subscription for early adopters",
    },
    { img: bellIcon, text: "First look at beta features" },
  ];

  return (
    <section className="bg-[#0E8077] py-16 px-4 text-center relative">
      {/* Circle 1: Left side, aligned with heading, with text */}
      <div
        className="absolute left-0 top-16 flex items-center"
        style={{ transform: "translateY(-50%)" }}
      >
        <div className="relative flex items-center justify-center w-16 h-16 ml-8">
          <div className="flex items-center justify-center  w-16 h-16 bg-[#0E8077]  bg-slate-300opacity-30 border-2  border-white/30 rounded-full text-[#0E8077] font-bold text-sm shadow-lg z-10  "></div>
        </div>
      </div>
      <h2 className="text-[4rem] md:text-[4rem] font-bold font-dongle text-white mb-12">
        Join the Waitlist
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mb-10 relative">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            <Card1 img={card.img} text={card.text} />
            {/* Circle 2: Top right of fourth card */}
            {index === 3 && (
              <div className="absolute -top-8 -right-8 w-12 h-12 border-2 border-white/30 bg-opacity-30 rounded-full shadow-md flex items-center justify-center">
                {/* Decorative only, no text */}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="absolute left-16 md:left-64 bottom-20 w-8 h-8 border-2 border-white/30 bg-opacity-30 rounded-full shadow-md"></div>
      <div className="flex items-center justify-center">
        <button className="bg-[#FF7C80] text-white font-poppins px-6 py-3 rounded-lg hover:bg-pink-500 transition">
          Join the Waitlist
        </button>
      </div>

      <p className="text-white text-sm mt-4 font-poppins italic">
        Only the first 200 schools get the discounted offer.
      </p>
    </section>
  );
};

export default WaitlistSection;
