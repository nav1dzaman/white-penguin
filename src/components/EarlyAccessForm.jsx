import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EarlyAccessStudent from "../assets/svg/earlyaccess.svg";

const EarlyAccessForm = () => {
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [agree, setAgree] = useState(true);
  const [error, setError] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    console.log({ email, school, agree });
    toast.success("Successfully submitted your information!");

    // Reset form
    setEmail("");
    setSchool("");
    setAgree(true);
    setError("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="bg-[#147C75] text-white p-8 rounded-xl max-w-5xl w-full shadow-xl relative">
        <h2 className="text-[4rem] font-bold text-center font-dongle leading-[0.85] m-0">
          Built for Preschools and Daycares.
          <br />
          Ready to Try It First?
        </h2>
        <p className="text-center text-sm mb-6 font-poppins">
          Be one of the first to experience the simplicity of White Penguin.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center space-y-4 mb-6">
            <input
              type="email"
              placeholder="Type your Best E-mail"
              className="w-full md:max-w-lg p-3 rounded-lg border border-gray-200  bg-[#147C75] text-white placeholder:font-poppins placeholder-white focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <span className="text-red-300 text-sm ml-4 md:whitespace-nowrap md:text-right md:w-auto w-full mt-2 md:mt-0 font-poppins">
                {error}
              </span>
            )}
            <input
              type="text"
              placeholder="School name (optional)"
              className="w-full md:max-w-lg p-3 rounded-lg border border-gray-200 bg-[#147C75] text-white placeholder:font-poppins placeholder-white focus:outline-none"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </div>

          <div className="w-full md:max-w-lg mx-auto flex flex-row justify-between -mt-2">
            <label className="flex items-center text-sm mb-4 font-poppins text-gray">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="mr-2 w-5 h-5 appearance-none bg-white border border-gray-300 rounded-sm checked:bg-white checked:border-[#147C75] relative checked:after:content-[''] checked:after:block checked:after:w-[6px] checked:after:h-[12px] checked:after:border-[#147C75] checked:after:border-r-2 checked:after:border-b-2 checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:rotate-45"
              />
              Yes, I Want Early Access
            </label>
            <p className="text-[#FF7C80] font-poppins text-sm opacity-70">
              Please enter a valid email.
            </p>
          </div>

          <div className="w-full md:max-w-lg mx-auto flex justify-center">
            <button
              type="submit"
              className="max-w-[200px] bg-[#FF7C80] text-white px-2 py-3 rounded-lg font-semibold hover:bg-[#f95c5c] transition"
            >
              Join the Waitlist
            </button>
          </div>
          <p className="text-center text-xs mt-2 text-white opacity-70 font-poppins">
            Takes less than 30 seconds.
          </p>
        </form>

        <div className="absolute [bottom:53px] left-4 translate-y-1/2">
          <img src={EarlyAccessStudent} alt="Character" className="h-28" />
        </div>
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
};

export default EarlyAccessForm;
