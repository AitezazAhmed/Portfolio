import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiOpenai } from "react-icons/si";

const services = [
  {
    icon: <FaReact size={50} className="text-blue-500" />,
    title: "Frontend Development",
    desc: "Building modern, responsive UIs with React, TailwindCSS, and animations using GSAP/Framer Motion.",
  },
  {
    icon: <FaNodeJs size={50} className="text-green-600" />,
    title: "Backend Development",
    desc: "Developing secure and scalable APIs with Node.js and Express. Implementing JWT authentication and Redis.",
  },
  {
    icon: <SiMongodb size={50} className="text-green-700" />,
    title: "Database Management",
    desc: "Managing and structuring data with MongoDB for fast, scalable, and flexible applications.",
  },
  {
    icon: <SiTailwindcss size={50} className="text-sky-400" />,
    title: "Styling & UI/UX",
    desc: "Designing clean, modern, and fully responsive layouts with Tailwind CSS.",
  },
  {
    icon: <SiOpenai size={50} className="text-purple-600" />,
    title: "AI-Powered Apps",
    desc: "Integrating AI into apps like AutoGenie for content, image, and code generation using AI APIs.",
  },
  {
    icon: <SiExpress size={50} className="text-gray-800" />,
    title: "Full Stack Solutions",
    desc: "Delivering end-to-end projects like Chat Apps, E-commerce Stores, and SaaS platforms.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-b overflow-hidden from-gray-50 to-gray-200 flex flex-col items-center py-20"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-blue-600 mb-6"
      >
        What I Do
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-600 mb-12 max-w-2xl text-center"
      >
        I specialize in crafting full-stack applications, combining clean UI/UX
        with powerful backend systems and AI-powered solutions.
      </motion.p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.02 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
