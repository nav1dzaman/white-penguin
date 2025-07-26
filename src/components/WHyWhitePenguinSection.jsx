import CurrentRealityCard from "./CurrentRealityCard";
import WhitePenguinCard from "./WhitePenguinCard";

export default function WhyWhitePenguinSection() {
  return (
    <section className="relative bg-white py-12 px-4 md:px-16 text-center">
      {/* Decorative Circles */}
      <div className="hidden md:block absolute left-8 top-48 w-12 h-12 bg-[#FCE7F3]  rounded-full z-0"></div>
      <div className="hidden md:block absolute right-8 -bottom-10 w-16 h-16 bg-[#CCFBF1]  rounded-full z-0"></div>
      <p className="text-sm text-gray-600 mb-2">
        Why{" "}
        <span className="text-[#FF7C80] font-poppins text-xl">
          White Penguin
        </span>
        ?
      </p>
      <h2 className="text-[4rem] sm:text-[4rem] md:text-[5rem] font-bold mb-4 font-dongle leading-none md:leading-tight">
        Managing a school shouldn't feel like{" "}
        <span className="text-teal-700">managing</span>
        <br />
        <span className="text-teal-700">5 apps and a filing cabinet.</span>
      </h2>
      <p className="text-[#4B5563] text-xl font-segoeSymbol max-w-xl mx-auto mb-10">
        White Penguin brings everything together, so you can finally ditch the
        paper, the WhatsApp chaos, and the late-night admin work.
      </p>

      <div className="grid md:grid-cols-2 gap-6 justify-center items-stretch">
        <CurrentRealityCard />
        <WhitePenguinCard />
      </div>
    </section>
  );
}
