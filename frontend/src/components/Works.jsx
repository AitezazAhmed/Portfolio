import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Chat App",
    img: "/chatapp.png",
    desc: "A real-time chat application with user authentication and messaging powered by Node.js, MongoDB, and Socket.io.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    live: "https://talk-shak-p5bw.vercel.app/",
    github: "https://github.com/AitezazAhmed/Talk-Shak",
  },
  {
    title: "E-Commerce Store",
    img: "ecom.png",
    desc: "A full-stack e-commerce platform with cart, authentication, and admin panel using MERN stack.",
     tech: ["React", "Node.js", "MongoDB", "JWT & Redis"],
    live: "https://e-commerce-store-5c9i.vercel.app/",
    github: "https://github.com/AitezazAhmed/E-COMMERCE-STORE",
  },
  {
    title: "AutoGenie AI SaaS",
    img: "auto.png",
    desc: "An AI-powered SaaS platform for content, image, and code generation integrated with OpenAI APIs.",
    tech: ["React", "Node.js", "MongoDB", "Grok AI"],
    live: "https://auto-genie-gq5p.vercel.app/",
    github: "https://github.com/AitezazAhmed/AutoGenie",
  },
];

const Works = () => {
  return (
    <section
      id="works"
      className="min-h-screen overflow-hidden bg-white flex flex-col items-center py-20"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-600 mb-6"
      >
        My Works
      </motion.h2>
      <p className="text-gray-600 mb-12 max-w-2xl text-center">
        Here are some of my recent projects where I combined creativity,
        functionality, and performance.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-sky-100 hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            {/* Project Image */}
            <div className="relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-42 object-cover"
              />
              <span className="absolute top-3 left-3 bg-sky-400 text-white px-3 py-1 text-sm font-bold rounded-lg shadow-md">
                {project.title}
              </span>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <p className="text-gray-700 mb-4">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-sky-100 text-sky-700 px-3 py-1 text-sm rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-sky-400 text-white px-4 py-2 rounded-lg hover:bg-sky-500 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Works;

