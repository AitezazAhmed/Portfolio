import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiOpenai } from "react-icons/si";

const services = [
  {
    icon: <FaReact size={28} />,
    iconColor: "#38bdf8",
    iconBg: "rgba(56,189,248,0.12)",
    tag: "Frontend",
    title: "Frontend Development",
    subtitle: "Web & Mobile",
    desc: "Building modern, responsive UIs using React for web and React Native (Expo) for mobile apps with smooth animations using Framer Motion.",
  },
  {
    icon: <FaNodeJs size={28} />,
    iconColor: "#22c55e",
    iconBg: "rgba(34,197,94,0.1)",
    tag: "Backend",
    title: "Backend Development",
    subtitle: "APIs & Auth",
    desc: "Developing secure and scalable REST APIs using Node.js and Express with authentication (JWT) and real-time systems.",
  },
  {
    icon: <SiMongodb size={28} />,
    iconColor: "#16a34a",
    iconBg: "rgba(22,163,74,0.1)",
    tag: "Database",
    title: "Database Management",
    subtitle: "MongoDB",
    desc: "Designing and managing MongoDB databases for scalable web and mobile applications.",
  },
  {
    icon: <SiTailwindcss size={28} />,
    iconColor: "#0ea5e9",
    iconBg: "rgba(14,165,233,0.1)",
    tag: "Design",
    title: "UI/UX Design",
    subtitle: "Tailwind CSS",
    desc: "Creating clean, modern, and fully responsive designs for both web apps and mobile apps using Tailwind CSS.",
  },
  {
    icon: <SiOpenai size={28} />,
    iconColor: "#a78bfa",
    iconBg: "rgba(167,139,250,0.1)",
    tag: "AI",
    title: "AI-Powered Apps",
    subtitle: "OpenAI & Grok",
    desc: "Integrating AI features into web and mobile apps like AutoGenie for content, image, and code generation using AI APIs.",
  },
  {
    icon: <SiExpress size={28} />,
    iconColor: "#94a3b8",
    iconBg: "rgba(148,163,184,0.1)",
    tag: "Full Stack",
    title: "Full Stack Development",
    subtitle: "MERN & Mobile",
    desc: "Building scalable full-stack web applications and cross-platform mobile apps using MERN stack and React Native (Expo).",
  },
];

const cardVariant = {
  initial: { opacity: 0, y: 36 },
  whileInView: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden py-24 px-4"
      style={{ background: "linear-gradient(180deg, #f0f7ff 0%, #e8f4fd 50%, #f0f7ff 100%)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #bae6fd 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #93c5fd 0%, transparent 70%)" }}
        />
        {/* Subtle dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#1d4ed8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
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
            <span className="text-sm font-semibold text-blue-600 tracking-wide">What I Do</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight"
          >
            My{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #2563eb, #38bdf8)" }}
            >
              Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            I specialize in crafting full-stack applications, combining clean
            UI/UX with powerful backend systems and AI-powered solutions.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariant}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl p-6 flex flex-col gap-4 border transition-all duration-300 cursor-default"
              style={{
                borderColor: "rgba(219,234,254,0.8)",
                boxShadow: "0 2px 16px -4px rgba(59,130,246,0.07), 0 1px 3px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 48px -8px rgba(37,99,235,0.15), 0 4px 12px rgba(0,0,0,0.06)";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "rgba(147,197,253,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 2px 16px -4px rgba(59,130,246,0.07), 0 1px 3px rgba(0,0,0,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(219,234,254,0.8)";
              }}
            >
              {/* Top row: icon + tag */}
              <div className="flex items-start justify-between">
                {/* Icon box */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: service.iconBg,
                    color: service.iconColor,
                    border: `1px solid ${service.iconColor}22`,
                  }}
                >
                  {service.icon}
                </div>

                {/* Tag badge */}
                <span
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide"
                  style={{
                    background: "rgba(37,99,235,0.07)",
                    color: "#2563eb",
                    border: "1px solid rgba(37,99,235,0.12)",
                  }}
                >
                  {service.tag}
                </span>
              </div>

              {/* Title block */}
              <div>
                <h3 className="text-gray-900 font-bold text-base leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold mt-0.5" style={{ color: service.iconColor }}>
                  {service.subtitle}
                </p>
              </div>

              {/* Divider */}
              <div className="w-8 h-px rounded-full" style={{ background: service.iconColor + "55" }} />

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {service.desc}
              </p>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to right, ${service.iconColor}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

    
      </div>
    </section>
  );
};

export default Services;