import React from "react";

const Card1 = ({ img, text }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md w-64 h-44 text-center text-white hover:scale-105 transition">
      <img src={img} alt="icon" className="mx-auto mb-4 h-8 w-8" />
      <p className="font-poppins">{text}</p>
    </div>
  );
};

export default Card1;
