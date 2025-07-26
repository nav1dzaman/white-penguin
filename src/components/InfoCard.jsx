import React from "react";
import STAR_1 from "../assets/svg/star-1.svg";
import STAR_2 from "../assets/svg/star-2.svg";

const InfoCard = ({ bgColor, textColor, imageSrc, title, items }) => {
  console.log("textColor prop:", textColor);
  let starIcon = null;
  if (textColor === "#FF7C80" || textColor === "text-[#FF7C80]") {
    starIcon = STAR_1;
  } else if (textColor === "#15803D" || textColor === "text-[#15803D]") {
    starIcon = STAR_2;
  }
  return (
    <div className={`rounded-2xl ${bgColor} w-full p-4 mx-auto`}>
      <div className="mb-4">
        <img src={imageSrc} alt="Illustration" className="h-24 w-auto" />
      </div>
      <h3
        className={`text-2xl font-poppins font-semibold mb-4 px-4 text-left ${textColor}`}
      >
        {title}
      </h3>
      <ul className="space-y-3 text-sm px-4 md:text-lg">
        {items.map((item, idx) => (
          <li key={idx} className={`${textColor} flex items-start gap-3`}>
            {starIcon && (
              <img src={starIcon} alt="star" className="h-5 w-5 mt-1" />
            )}
            <span className="font-poppins">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
