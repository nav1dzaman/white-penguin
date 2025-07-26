import React, { useRef, useState, useLayoutEffect } from "react";
import Slider from "react-slick";
import Card2 from "./Card2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user1 from "../assets/svg/user1.svg";
import user2 from "../assets/svg/user2.svg";
import user3 from "../assets/svg/user3.svg";
import user4 from "../assets/svg/user4.svg";

const TestimonialsSection = () => {
  const sliderRef = useRef();
  const [current, setCurrent] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [slidesPerPage, setSlidesPerPage] = useState(3);

  const cards = [
    {
      img: user1,
      text: "Finally, someone is building software that understands African preschools. I'm excited for this.",
      author: "— Early Access User, Lagos",
    },
    {
      img: user2,
      text: "It replaces our paper registers and payment tracking. I'm in. We need this.",
      author: "— School Proprietor, Abuja",
    },
    {
      img: user3,
      text: "Admissions and parent updates in one place? White Penguin is solving real problems.",
      author: "— Preschool Director, Abuja",
    },
    {
      img: user4,
      text: "I saw it and couldn't wait to roll it out. Smart solution!",
      author: "— School Owner, Port Harcourt",
    },
    {
      img: user1,
      text: "This is a game-changer for managing my preschool!",
      author: "— Early Access User, Enugu",
    },
    {
      img: user4,
      text: "I saw it and couldn't wait to roll it out. Smart solution!",
      author: "— School Owner, Port Harcourt",
    },
  ];

  // Dynamically update total pages and slidesPerPage
  const updatePagination = () => {
    const width = window.innerWidth;
    const perPage = width >= 1024 ? 3 : width >= 768 ? 2 : 1;
    setSlidesPerPage(perPage);
    setTotalPages(Math.ceil(cards.length / perPage));
  };

  useLayoutEffect(() => {
    updatePagination();
    window.addEventListener("resize", updatePagination);
    return () => window.removeEventListener("resize", updatePagination);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesPerPage,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => setCurrent(Math.floor(index / slidesPerPage)),
  };

  // Pagination logic
  let displayNumbers = [];

  displayNumbers.push(0); // always show first

  if (current > 2) displayNumbers.push("...");

  const start = Math.max(1, current - 1);
  const end = Math.min(totalPages - 2, current + 1);

  for (let i = start; i <= end; i++) {
    displayNumbers.push(i);
  }

  if (current < totalPages - 3) displayNumbers.push("...");

  if (totalPages > 1) displayNumbers.push(totalPages - 1); // always show last

  return (
    <section className="bg-[#FFF5F0] py-16 px-4 text-center relative">
      <h2 className="text-[4rem] font-bold text-[#111827] font-dongle">
        Built with Schools Like Yours
      </h2>
      <p className="text-[#4B5563] mb-8 font-poppins">
        Over 50 school owners have already joined our early access list.
      </p>

      <div className="max-w-6xl mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-2">
              <Card2 img={card.img} text={card.text} author={card.author} />
            </div>
          ))}
        </Slider>

        <div className="flex items-center justify-center space-x-2 mt-6">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="text-gray-800 hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-xl transition"
            aria-label="Previous"
          >
            &#8592;
          </button>

          {displayNumbers.map((num, idx) =>
            num === "..." ? (
              <span key={idx} className="text-gray-500 px-1 text-sm">
                ...
              </span>
            ) : (
              <button
                key={idx}
                onClick={() => sliderRef.current.slickGoTo(num * slidesPerPage)}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition ${
                  num === current
                    ? "bg-gray-800 text-white"
                    : "text-gray-900 hover:bg-gray-200"
                }`}
              >
                {num + 1}
              </button>
            )
          )}

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="text-gray-800 hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-xl transition"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
