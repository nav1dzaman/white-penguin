import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="border rounded-lg p-4 mb-2 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <span className="text-[#111827] font-poppins">{question}</span>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {isOpen && <p className="mt-2 text-[#111827] font-poppins ">{answer}</p>}
    </div>
  );
};

export default FAQItem;
