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
      className="min-h-screen overflow-hidden  flex flex-col items-center py-20 px-6"
      style={{ background: "linear-gradient(180deg, #f0f7ff 0%, #e8f4fd 50%, #f0f7ff 100%)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border"
        style={{
          background: "rgba(37,99,235,0.06)",
          borderColor: "rgba(37,99,235,0.15)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "linear-gradient(135deg,#2563eb,#38bdf8)" }}
        />
        <span className="text-sm font-semibold text-blue-600 tracking-wide">Experience</span>
      </motion.div>
    <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight"
          >
            Experience{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #2563eb, #38bdf8)" }}
            >
              Timeline
            </span>
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