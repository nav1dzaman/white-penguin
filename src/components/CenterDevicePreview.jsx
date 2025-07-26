import React from "react";
import TAB from "../assets/svg/tab.svg";
import INFO from "../assets/svg/info.svg";

const CenterDevicePreview = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-2">
      {/* Centered Device Frame */}
      <div className="relative max-w-5xl w-full flex justify-center mb-6">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          <img src={TAB} alt="App Preview" className="w-full h-auto" />
        </div>
      </div>

      <div className="bg-[#CCFBF1] text-center px-6 py-2 rounded-lg flex items-center gap-2 text-[#6B7280] text-sm font-medium shadow-sm">
        <img src={INFO} />
        <span>
          We’ll send you early access, sneak peeks, and exclusive bonuses — no
          spam.
        </span>
      </div>
    </div>
  );
};

export default CenterDevicePreview;
