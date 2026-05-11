import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaBrain,
  FaMobileAlt,
  FaBriefcase,
} from "react-icons/fa";

export default function Experience() {
const experiences = [
  {
    year: "Jul - Dec 2024",
    title: "MERN Stack Foundations",
    desc: "Started my development journey with MERN stack. Learned React, Node.js, Express, and MongoDB while building small practice projects and strengthening core concepts.",
    icon: <FaLaptopCode />,
    color: "bg-sky-500",
  },
  {
    year: "Jan - Jun 2025",
    title: "Full-Stack Project Development",
    desc: "Built real-world projects including a Chat App, E-commerce Store, and AI Assistant with authentication, JWT, Redis, and real-time features.",
    icon: <FaProjectDiagram />,
    color: "bg-blue-600",
  },
{
  year: "Jul 2025 - Present",
  title: "Client Project - Digital Wealth (Ongoing)",
  desc: "Started working on a real client project 'Digital Wealth' in July 2025 and continue to actively maintain and improve it. Handling updates, backend optimizations, API enhancements, and new feature development.",
  icon: <FaBriefcase />,
  color: "bg-sky-600",
},
  {
    year: "Jan - Jun 2026",
    title: "React Native & Mobile Development",
    desc: "Learned React Native and started building cross-platform mobile apps like Bookworm, focusing on UI, navigation, and API integration.",
    icon: <FaMobileAlt />,
    color: "bg-cyan-500",
  },
];

  return (
    <section
      id="experience"
      className="min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center py-20 px-6"
    >
      <motion.h2
        className="text-4xl font-extrabold text-blue-600 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience Timeline
      </motion.h2>

      <div className="relative w-full max-w-3xl">
        {/* Vertical Line */}
        <div
          className="absolute
                   left-5 sm:left-1/2
                   transform sm:-translate-x-1/2
                   top-0 bottom-0
                   w-1 bg-gradient-to-b from-blue-400 to-sky-500"
        ></div>

        {/* Timeline Items */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`flex items-center mb-12 relative ${
              index % 2 === 0
                ? "sm:flex-row"
                : "sm:flex-row-reverse"
            } flex-col sm:flex-row`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? 100 : -100,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Content Box */}
            <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl p-6 w-[85%] sm:w-72 border border-gray-100">
              <h3 className="text-xl font-bold text-blue-600">
                {exp.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {exp.desc}
              </p>

              <p className="mt-3 text-sm font-semibold text-sky-500">
                {exp.year}
              </p>
            </div>

            {/* Icon Circle */}
            <div
              className={`z-10 w-14 h-14 flex items-center justify-center rounded-full text-white text-xl shadow-lg ${exp.color}`}
            >
              {exp.icon}
            </div>

            <div className="flex-1 hidden sm:block"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}