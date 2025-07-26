import React from "react";

const Card = ({ imgSrc, title, items }) => {
  return (
    <div className="bg-white rounded-lg  p-6 text-left border border-gray-200">
      <img src={imgSrc} alt={`${title} icon`} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold text-[#111827] font-poppins mb-4">
        {title}
      </h3>
      <ul className="text-gray-600 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#4B5563] font-poppins text-base mr-2">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
