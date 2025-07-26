import React from "react";
import Card from "./Card";
import F_1 from "../assets/svg/F-1.svg";
import F_2 from "../assets/svg/F-2.svg";
import F_3 from "../assets/svg/F-3.svg";
import F_4 from "../assets/svg/F-4.svg";
import F_5 from "../assets/svg/F-5.svg";
import F_6 from "../assets/svg/F-6.svg";
import F_7 from "../assets/svg/F-7.svg";
import F_8 from "../assets/svg/F-8.svg";
import F_9 from "../assets/svg/F-9.svg";

const FeaturesSection = () => {
  return (
    <section className="py-12 px-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-[4rem] font-bold font-dongle text-[#111827] mb-2 leading-none">
          Powerful Features. Designed With <br /> You in Mind.
        </h2>
        <p className="text-[#4B5563] font-poppins mb-8">
          Every feature is built to save you time and make you more money
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            imgSrc={F_1}
            title="Admissions & Tour Booking"
            items={[
              "Let parents book visits and apply online, no back-and-forth needed.",
              "They pick a time, get reminders, and you get notified.",
            ]}
          />
          <Card
            imgSrc={F_2}
            title="Billing & Payments"
            items={[
              "Send school fees straight to parents' phones.",
              "They can pay by card, bank transfer, or USSD, no stress.",
              "Need part payments or discounts? We've got you.",
            ]}
          />
          <Card
            imgSrc={F_3}
            title="Check-In & Attendance"
            items={[
              "See who came in and when, students and staff.",
              "See who picked up each child, and when.",
              "It's all tracked, no paper logs, no guessing.",
            ]}
          />
          <Card
            imgSrc={F_4}
            title="Parent Messaging"
            items={[
              "Send updates, reminders, or birthday messages right to WhatsApp.",
              "No more chasing parents one by one.",
              "Everything is saved so you never lose the thread.",
            ]}
          />
          <Card
            imgSrc={F_5}
            title="Smart Reports"
            items={[
              "See fee payments, absences, or class sizes in one click.",
              "Need a report for inspection? It's already done.",
            ]}
          />
          <Card
            imgSrc={F_6}
            title="Curriculum & Lesson Planning"
            items={[
              "Plan your term once, and reuse it each year.",
              "Upload your own curriculum or use our ready-made templates.",
            ]}
          />
          <Card
            imgSrc={F_7}
            title="Daily Learning & Activity Logs"
            items={[
              "Let parents know what their child did each day, naps, meals, mood, everything.",
              "Teachers can log notes quickly and privately.",
            ]}
          />
          <Card
            imgSrc={F_8}
            title="CEO Dashboard"
            items={[
              "See how your school is doing without touching Excel.",
              "Track payments, attendance, and parent feedback in one view.",
              "Get alerts if something looks off, before it becomes a problem.",
            ]}
          />
          <Card
            imgSrc={F_9}
            title="Parent Portal"
            items={[
              "Parents get one link to see fees, messages, and daily updates.",
              "No more ‘I didn’t see the message’ replies.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
