import React from "react";
import SectionTitle from "../Section Title/SectionTitle";
import CustomSlider from "../Custom Slider/CustomSlider";

import l from "@/assets/image-1.png";
import w from "@/assets/unnamed.png";
import d from "@/assets/web-development-image.webp";
import c from "@/assets/cover.jpg";

const SLIDEITEMS = [
  {
    title: "FinancePro",
    label: "Financial Dashboard",
    description:
      "A streamlined financial management interface to keep track of expenses, budgets, and forecasts. Monitor real-time data with customizable visualizations.",
    img: c,
  },
  {
    title: "HealthTrack",
    label: "Health & Wellness Dashboard",
    description:
      "Track your fitness goals and wellness metrics in one place. Monitor daily activities, calorie intake, and health trends over time with user-friendly analytics.",
    img: w,
  },
  {
    title: "EduMaster",
    label: "Education Platform",
    description:
      "An interactive dashboard for students and educators to manage courses, assignments, and progress. Includes grading insights and collaboration tools.",
    img: d,
  },
  {
    title: "TravelPlan",
    label: "Travel Itinerary",
    description:
      "Organize your trips and adventures with ease. Track your bookings, set reminders for important dates, and explore recommendations for your destinations.",
    img: w,
  },
  {
    title: "SalesBoost",
    label: "Sales Analytics",
    description:
      "Gain insights into sales performance with real-time data analytics, customizable reports, and growth trends. Perfect for monitoring KPIs and revenue streams.",
    img: l,
  },
];

const Projects = () => {
  return (
    <section className="mb-48 container mx-auto">
      <div className="py-12">
        <SectionTitle title="Some Recent Projects" />
      </div>
      <div className="flex items-center justify-center w-full">
        {/* <CustomSlider items={SLIDEITEMS} /> */}
      </div>
    </section>
  );
};

export default Projects;
