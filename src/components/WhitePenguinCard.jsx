import CALENDER from "../assets/svg/calender.svg";
import STUDENT from "../assets/svg/student.svg";
import GRAPH from "../assets/svg/graph.svg";
import MGS from "../assets/svg/msg.svg";
import STAR_2 from "../assets/svg/star-2.svg";
export default function WhitePenguinCard() {
  return (
    <div className="flex flex-col items-start w-full">
      {/* Header outside the card */}
      <div className="flex items-center justify-between w-full mb-2">
        <h3 className="text-[#15803D] font-poppins font-semibold text-lg">
          White Penguin
        </h3>
        <span className="text-xs bg-[#E8F0EB] text-green-700 px-3 py-2 rounded-full flex items-center gap-2">
          <img src={STAR_2} alt="star" className="w-4 h-4" /> All in one place
        </span>
      </div>

      {/* Card box */}
      <div className="border-2 border-[#15803D80] rounded-lg bg-white shadow-md w-full h-[320px] p-6 flex flex-col justify-center">
        <div className="space-y-4 text-[#15803D] text-base font-poppins">
          <div className="flex items-center gap-3">
            <img src={STUDENT} alt="Student" className="w-6 h-6" />
            <span className="font-semibold">Student Management</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={MGS} alt="Communication" className="w-6 h-6" />
            <span className="font-semibold">Communication Hub</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={GRAPH} alt="Analytics" className="w-6 h-6" />
            <span className="font-semibold">Analytics and Reports</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={CALENDER} alt="Schedule" className="w-6 h-6" />
            <span className="font-semibold">Schedule Management</span>
          </div>
        </div>
      </div>
    </div>
  );
}
