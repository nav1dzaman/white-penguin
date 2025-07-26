import React from "react";
import InfoCard from "./InfoCard";
import ADMIN from "../assets/svg/admin.svg";
import PARENT from "../assets/svg/parent.svg";

const BuiltForSchools = () => {
  return (
    <section className="relative px-4 py-16 max-w-6xl mx-auto text-center">
      <div className="hidden md:block absolute left-0 top-32 w-16 h-16 bg-[#CCFBF1] opacity-4 rounded-full z-0"></div>

      <div className="hidden md:block absolute -right-4 bottom-2 w-12 h-12 bg-[#FCE7F3] opacity-2 rounded-full z-10"></div>
      <h2 className="text-6xl sm:text-[5rem] font-dongle font-bold md:text-[5rem] mb-4">
        <span className="text-[#FF7C80] text-[5rem] sm:text-[5rem] font-dongle font-bold">
          Built for Schools
        </span>{" "}
        That Care
      </h2>
      <p className="text-[#4B5563] font-poppins text-18px mb-12 max-w-2xl mx-auto">
        Whether you run a preschool, daycare, or enrichment center, White
        Penguin adapts to your flow — from admissions to graduation.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl  mx-auto gap-4 px-4">
        <InfoCard
          bgColor="bg-[#FF7C801A]"
          textColor="text-[#FF7C80]"
          imageSrc={ADMIN}
          title="For School Owners & Admins"
          items={[
            "Enrollment automation",
            "Online fee collection",
            "Attendance + staff management",
            "Customizable reports",
            "WhatsApp reminders + parent portal",
          ]}
        />
        <InfoCard
          bgColor="bg-[#1665341A]"
          textColor="text-[#15803D]"
          imageSrc={PARENT}
          title="For Parents"
          items={[
            "Easy enrollment + tour booking",
            "Real-time updates on their child",
            "Automated fee collection",
            "Secure payment portal",
            "Personalized messages + report cards",
          ]}
        />
      </div>
    </section>
  );
};

export default BuiltForSchools;
