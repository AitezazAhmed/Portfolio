import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Chat App",
    img: "/chatapp.png",
    desc: "A real-time chat application with user authentication and messaging powered by Node.js, Socket.io.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    live: "https://talk-shak-p5bw.vercel.app/",
    github: "https://github.com/AitezazAhmed/Talk-Shak",
    badge: "Real-time",
    gradient: "from-blue-600 to-sky-400",
  },
  {
    title: "E-Commerce Store",
    img: "/ecom.png",
    desc: "A full-stack e-commerce platform with cart, authentication, and admin panel using MERN stack.",
    tech: ["React", "Node.js", "MongoDB", "JWT & Redis"],
    live: "https://e-commerce-store-5c9i.vercel.app/",
    github: "https://github.com/AitezazAhmed/E-COMMERCE-STORE",
    badge: "Full Stack",
    gradient: "from-sky-500 to-cyan-400",
  },
  {
    title: "AutoGenie AI SaaS",
    img: "/auto.png",
    desc: "An AI-powered SaaS platform for content, image, and code generation integrated with OpenAI APIs.",
    tech: ["React", "Node.js", "MongoDB", "Grok AI"],
    live: "https://auto-genie-gq5p.vercel.app/",
    github: "https://github.com/AitezazAhmed/AutoGenie",
    badge: "AI Powered",
    gradient: "from-blue-700 to-blue-400",
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const Works = () => {
  return (
    <section
      id="works"
      className="relative min-h-screen overflow-hidden bg-white py-24 px-4"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-50 opacity-70 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-sky-50 opacity-60 blur-3xl" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px opacity-10"
          style={{
            background: "linear-gradient(to right, transparent, #3b82f6, transparent)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
         

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            My{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #2563eb, #38bdf8)" }}>
              Works
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Here are some of my recent projects where I combined creativity,
            functionality, and performance.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300"
              style={{
                boxShadow: "0 4px 24px -4px rgba(59, 130, 246, 0.08), 0 1px 3px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 48px -8px rgba(59, 130, 246, 0.18), 0 4px 12px rgba(0,0,0,0.06)";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 24px -4px rgba(59, 130, 246, 0.08), 0 1px 3px rgba(0,0,0,0.04)";
                e.currentTarget.style.transform = "translateY(0px)";
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden" style={{ height: "210px" }}>
                {/* Gradient overlay on image */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`}
                />
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Top gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />

                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span
                    className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                    {project.badge}
                  </span>
                </div>

                {/* Title overlay on bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 z-20 px-5 pb-4">
                  <h3 className="text-white font-bold text-lg tracking-tight drop-shadow-sm">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col gap-4">
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-600 px-2.5 py-1 text-xs font-medium rounded-lg border border-blue-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-50" />

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-95"
                    style={{
                      background: "linear-gradient(135deg, #2563eb, #38bdf8)",
                      boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)",
                    }}
                  >
                    Live Demo
                    <ArrowIcon />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 text-gray-700 text-sm font-semibold py-2.5 px-4 rounded-xl border border-gray-200 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 active:scale-95"
                  >
                    <GithubIcon />
                    Code
                  </a>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;