import React from "react";

const FeatureItem = ({ icon, label, isActive = false }) => {
  return (
    <div className="flex flex-col items-center px-4">
      <img src={icon} alt={label} className="h-6 mb-2" />
      <span
        className={`text-sm ${
          isActive
            ? "text-purple-600 font-medium underline underline-offset-4"
            : "text-gray-800"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export default FeatureItem;
