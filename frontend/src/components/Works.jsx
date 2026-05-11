import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const webProjects = [
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
    {
    title: "Digital Wealth",
    img: "/digitalwealth.png",
    desc: "Developed and continuously managed a client-based digital wealth platform for digital asset investment, earnings tracking, and portfolio management with secure authentication, NOWPayments crypto integration, and real-time updates.",
    tech: [ "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "JWT Auth",
"NOWPayments"],
    live: "https://www.digitalwealthpk.com/",
    github: "https://github.com/digitalwealth38-lab/DigitalWealth",
    badge: "Investment Platform",
    gradient: "from-blue-700 to-blue-400",
  },
];

// Add your React Native / Expo mobile projects here when ready
const appProjects = [
 {
  title: "BookWorm App",
  img: "/BookWorm.jpeg",
  desc: "A React Native (Expo) mobile app that helps users discover books, get recommendations, and view ratings. Includes authentication and personalized user experience powered by JWT-based login system.",
  tech: ["React Native (Expo)", "Node.js", "MongoDB", "JWT Authentication"],
  live: "https://drive.google.com/file/d/1ssCQ0cZcYp6-XPkzBaNVhsvrDMmYIXd8/view?usp=drivesdk",
  github: "https://github.com/AitezazAhmed/Book-Store-App",
  badge: "Book Recommendation",
  gradient: "from-purple-600 to-pink-500",
},
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const WebIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const AppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const ComingSoon = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="col-span-full flex flex-col items-center justify-center py-24 gap-5"
  >
    <div
      className="relative w-20 h-20 rounded-3xl flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(56,189,248,0.12))",
        border: "1px solid rgba(37,99,235,0.12)",
      }}
    >
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="url(#phoneGrad)" />
        <line x1="12" y1="18" x2="12.01" y2="18" stroke="url(#phoneGrad)" />
      </svg>
      <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-sky-400">
        <span className="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-60" />
      </span>
    </div>

    <div className="text-center">
      <h3 className="text-gray-800 font-bold text-xl mb-2">Mobile Apps Coming Soon</h3>
      <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
        Currently building React Native (Expo) mobile apps. Check back soon!
      </p>
    </div>

    <div className="w-48 h-1.5 rounded-full bg-blue-50 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: "linear-gradient(to right, #2563eb, #38bdf8)" }}
        initial={{ width: "0%" }}
        animate={{ width: "45%" }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />
    </div>
    <p className="text-xs text-blue-400 font-medium -mt-2">In Progress · 45%</p>
  </motion.div>
);

const Works = () => {
  const [activeTab, setActiveTab] = useState("web");

  const tabs = [
    { id: "web", label: "Web Projects", icon: <WebIcon />, count: webProjects.length },
    { id: "app", label: "App Projects", icon: <AppIcon />, count: appProjects.length },
  ];

  const activeProjects = activeTab === "web" ? webProjects : appProjects;

  return (
    <section
      id="works"
      className="relative min-h-screen overflow-hidden py-24 px-4"
      style={{ background: "linear-gradient(180deg, #f0f7ff 0%, #e8f4fd 50%, #f0f7ff 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-50 opacity-70 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-sky-50 opacity-60 blur-3xl" />
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
        <div className="text-center mb-12">
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
            <span className="text-sm font-semibold text-blue-600 tracking-wide">Recent Projects</span>
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

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div
            className="inline-flex p-1.5 rounded-2xl gap-1"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(147,197,253,0.4)",
              boxShadow: "0 4px 16px rgba(37,99,235,0.08)",
              backdropFilter: "blur(8px)",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200"
                style={{ color: activeTab === tab.id ? "white" : "#64748b" }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, #2563eb, #38bdf8)",
                      boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                  <span
                    className="px-1.5 py-0.5 rounded-md text-[10px] font-bold"
                    style={{
                      background: activeTab === tab.id ? "rgba(255,255,255,0.2)" : "rgba(37,99,235,0.08)",
                      color: activeTab === tab.id ? "white" : "#2563eb",
                    }}
                  >
                    {tab.count || "Soon"}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {activeProjects.length === 0 ? (
              <ComingSoon />
            ) : (
              activeProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300"
                  style={{
                    boxShadow: "0 4px 24px -4px rgba(59,130,246,0.08), 0 1px 3px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 20px 48px -8px rgba(59,130,246,0.18), 0 4px 12px rgba(0,0,0,0.06)";
                    e.currentTarget.style.transform = "translateY(-6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 24px -4px rgba(59,130,246,0.08), 0 1px 3px rgba(0,0,0,0.04)";
                    e.currentTarget.style.transform = "translateY(0px)";
                  }}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden ${
  activeTab === "app" ? "h-[440px]" : "h-[210px]"
}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`} />
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                    <div className="absolute top-4 left-4 z-20">
                      <span className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                        {project.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-20 px-5 pb-4">
                      <h3 className="text-white font-bold text-lg tracking-tight drop-shadow-sm">{project.title}</h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col gap-4">
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="bg-blue-50 text-blue-600 px-2.5 py-1 text-xs font-medium rounded-lg border border-blue-100">{t}</span>
                      ))}
                    </div>
                    <div className="w-full h-px bg-gray-50" />
                    <div className="flex items-center gap-3">
                    {activeTab === "web" ? (
  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="flex-1 flex items-center justify-center gap-2 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-95"
    style={{
      background: "linear-gradient(135deg, #2563eb, #38bdf8)",
      boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
    }}
  >
    Live Demo <ArrowIcon />
  </a>
) : (
  <a
    href={project.live}
    download
    className="flex-1 flex items-center justify-center gap-2 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-95"
    style={{
      background: "linear-gradient(135deg, #2563eb, #38bdf8)",
      boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
    }}
  >
    Download <ArrowIcon />
  </a>
)}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 text-gray-700 text-sm font-semibold py-2.5 px-4 rounded-xl border border-gray-200 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 active:scale-95"
                      >
                        <GithubIcon /> Code
                      </a>
                    </div>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Works;