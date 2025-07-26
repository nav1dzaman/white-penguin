import React, { useState } from "react";
import {
  MdCalendarToday,
  MdNotificationsNone,
  MdPayments,
  MdMenuBook,
  MdChatBubbleOutline,
  MdEmojiEmotions,
} from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
const features = [
  { icon: MdCalendarToday, label: "Easy Apply" },
  { icon: MdNotificationsNone, label: "Messages" },
  { icon: FaShieldAlt, label: "Payments" },
  { icon: MdMenuBook, label: "Updates" },
  { icon: MdChatBubbleOutline, label: "Communication" },
  { icon: MdEmojiEmotions, label: "Reminders" },
];

const PhoneFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-[3rem] md:text-[4rem] font-semibold font-dongle text-gray-900 mb-2">
        Peace of Mind, Right on Your Phone.
      </h2>
      <p className="text-gray-500 mb-8 font-poppins">What parents can expect</p>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-x-4 max-w-4xl mx-auto">
        {features.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = index === activeIndex;

          return (
            <React.Fragment key={index}>
              <div
                className="cursor-pointer flex flex-col items-center px-4"
                onClick={() => setActiveIndex(index)}
              >
                <IconComponent
                  size={28}
                  className={`mb-1 transition-colors ${
                    isActive ? "text-purple-600" : "text-gray-800"
                  }`}
                />
                <span
                  className={`text-sm ${
                    isActive ? "text-purple-600 font-medium" : "text-black"
                  }`}
                >
                  {item.label}
                </span>
                {isActive && (
                  <div className="h-[2px] w-10 bg-purple-600 mt-1 rounded-sm" />
                )}
              </div>

              {index < features.length - 1 && (
                <div className="hidden md:block h-8 w-px bg-gray-200 mx-2" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default PhoneFeatures;
