import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaProjectDiagram, FaBrain } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      year: "2023",
      title: "Started MERN Development",
      desc: "Began my journey with React, Node.js, and MongoDB while building small practice projects.",
      icon: <FaLaptopCode />,
      color: "bg-sky-500",
    },
    {
      year: "2024",
      title: "Projects & Growth",
      desc: "Built a real-time Chat App and a complete E-commerce Store with authentication, JWT, and Redis.",
      icon: <FaProjectDiagram />,
      color: "bg-blue-600",
    },
    {
      year: "2025",
      title: "Exploring AI SaaS",
      desc: "Started AutoGenie 🚀, an AI-powered SaaS tool combining content, code, and image generation.",
      icon: <FaBrain />,
      color: "bg-sky-400",
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
  <div className="absolute 
                  left-3 sm:left-1/2 
                  transform sm:-translate-x-1/2 
                  top-0 bottom-0 
                  w-1 bg-gradient-to-b from-blue-400 to-sky-500">
  </div>

  {/* Timeline Items */}
  {experiences.map((exp, index) => (
    <motion.div
      key={index}
      className={`flex items-center mb-12 ${
        index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
      } flex-col sm:flex-row`}
      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Content Box */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-72">
        <h3 className="text-xl font-bold text-blue-600">{exp.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{exp.desc}</p>
        <p className="mt-3 text-sm font-semibold text-sky-500">
          {exp.year}
        </p>
      </div>

      {/* Icon Circle */}
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full text-white shadow-md ${exp.color}`}
      >
        {exp.icon}
      </div>

      <div className="flex-1"></div>
    </motion.div>
  ))}
</div>

    </section>
  );
}
