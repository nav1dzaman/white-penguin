import TOP_1 from "../assets/svg/top-1.svg";
import TOP_2 from "../assets/svg/top-2.svg";
import Buttom_1 from "../assets/svg/bottom-1.svg";
import Buttom_2 from "../assets/svg/bottom-2.svg";
import BOOKS from "../assets/svg/books.svg";

export default function CurrentRealityCard() {
  return (
    <div className="flex flex-col items-start w-full">
      <h3 className="text-[#FF7C80] font-semibold font-poppins text-lg mb-3">
        The Current Reality
      </h3>

      <div className="relative border-2 border-[#FF7C8080] rounded-lg bg-white shadow-md w-full h-[320px] flex flex-col items-center justify-center px-4 py-6 text-center">
        {/* Corner Images */}
        <img
          src={TOP_1}
          alt="Top Left"
          className="absolute top-3 left-3 w-16 h-16"
        />
        <img
          src={TOP_2}
          alt="Top Right"
          className="absolute top-3 right-3 w-16 h-16"
        />
        <img
          src={Buttom_1}
          alt="Bottom Left"
          className="absolute bottom-3 left-3 w-16 h-16"
        />
        <img
          src={Buttom_2}
          alt="Bottom Right"
          className="absolute bottom-3 right-3 w-16 h-16"
        />

        {/* Center Image */}
        <img src={BOOKS} alt="Center Icon" className="w-16 h-16 mb-4" />

        {/* Text */}
        <h4 className="text-2xl font-semibold text-[#4B5563] font-poppins mb-2">
          Late night admin work
        </h4>
        <p className="text-sm text-[#4B5563] font-poppins mb-2">
          WhatsApp notification: 47 Unread
        </p>
        <p className="text-sm text-[#4B5563] font-poppins">
          5 Different apps to check daily
        </p>
      </div>
    </div>
  );
}
