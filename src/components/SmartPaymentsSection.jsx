import React from "react";
import PHONE from "../assets/svg/phone2.svg";
import Tick from "../assets/svg/star-2.svg";

const features = [
  "Tour schools and apply online in minutes",
  "Receive real-time messages about your child’s day",
  "Get invoices, pay securely, and access receipts",
  "View updates, milestones, and teacher notes",
  "Communicate concerns easily with the school",
];

const SmartPaymentsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text content */}
        <div className="md:w-1/2 md:ml-16">
          <h2 className="text-[3rem] md:text-[4rem] font-semibold  text-[#131313] font-dongle mb-6 leading-none">
            Smart Payments: Invoices, <br />
            Security & Receipts Made Easy
          </h2>

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <img
                  src={Tick}
                  alt="Check"
                  className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
                />
                <p className="text-[#111827] text-sm font-poppins">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <div className="h-80 w-80 md:w-96 md:h-96 bg-[#FFEAEB] rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <div className="w-80 h-80 md:w-96 md:h-96 bg-[#FFEAEB66] rounded-full absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <img
            src={PHONE}
            alt="Phone mockup"
            className="w-64 md:w-80 h-auto relative z-30"
          />
        </div>
      </div>
    </section>
  );
};

export default SmartPaymentsSection;
