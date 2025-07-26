import FAQItem from "./FAQItem";
import React from "react";
const FAQList = () => {
  const faqs = [
    {
      question: "When will it launch?",
      answer: "2026 — waitlist gets first access.",
    },
    {
      question: "Is it mobile-friendly?",
      answer: "100% responsive — works on any device.",
    },
    {
      question: "What does it cost?",
      answer:
        "We offer a free plan with all the essentials to get started. For schools that want extra tools like reporting or the CEO dashboard, we have premium plans — with discounts for early adopters.",
    },
    {
      question: "Can I use it too?",
      answer: "Yes — there’s a full parent portal and update system.",
    },
    {
      question: "Do I need a tech person?",
      answer: "Nope. It’s plug-and-play with support included.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-[4rem] font-bold text-center font-dongle">
        Got Questions?
      </h2>
      <p className="text-center text-[#4B5563] mb-4 -mt-6 font-poppins">
        Everything you need to know about White Penguin.
      </p>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
