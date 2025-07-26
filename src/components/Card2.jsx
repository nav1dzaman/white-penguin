import React from "react";
import { FaStar } from "react-icons/fa";

const Card2 = ({ img, text, author }) => {
  return (
    <div className="bg-white border border-[#E5D6FF] rounded-lg p-4 w-full h-64 md:h-60 text-left shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div className="flex items-center mb-3">
        <img src={img} alt="User" className="w-8 h-8 mr-2" />
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
      <p className="text-sm text-[#374151] mb-2 font-poppins">"{text}"</p>
      <p className="text-xs text-[#6B7280] font-poppins">{author}</p>
    </div>
  );
};

export default Card2;
