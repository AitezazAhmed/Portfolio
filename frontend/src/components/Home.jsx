import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const socials = [
  { icon: <FaFacebookF size={15} />, href: "https://web.facebook.com/profile.php?id=100036949600449", label: "Facebook" },
  { icon: <FaInstagram size={15} />, href: "https://www.instagram.com/itx_aitezaz/", label: "Instagram" },
  { icon: <FaGithub size={15} />, href: "https://github.com/AitezazAhmed", label: "GitHub" },
  { icon: <FaLinkedinIn size={15} />, href: "https://www.linkedin.com/in/aitezaz-ahmed-888b9233a/", label: "LinkedIn" },
];
const Home = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #1e40af 40%, #0369a1 100%)" }}>

      {/* ── Background decorations ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large blurred orb top-right */}
        <div
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }}
        />
        {/* Small orb bottom-left */}
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #7dd3fc 0%, transparent 70%)" }}
        />
        {/* Grid texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Diagonal accent line */}
        <div
          className="absolute top-0 right-0 h-full w-[2px] opacity-10"
          style={{ background: "linear-gradient(to bottom, transparent, #bae6fd, transparent)" }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">

          {/* ── LEFT: Text ── */}
          <motion.div
            className="flex-1 text-white text-center md:text-left"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-sky-300/60" />
              <span className="text-sky-300 text-xs font-semibold tracking-[0.2em] uppercase">
                Hi, I am Aitezaz
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.02] tracking-tight"
            >
              Full Stack & Mobile<br />
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "2px rgba(186, 230, 253, 0.7)",
                }}
              >
                Developer
              </span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              variants={fadeUp}
              className="w-12 h-1 rounded-full mt-6 mb-5"
              style={{ background: "linear-gradient(to right, #38bdf8, #7dd3fc)" }}
            />

            {/* Body */}
            <motion.p
              variants={fadeUp}
              className="text-blue-100/80 max-w-md leading-relaxed text-sm sm:text-base"
            >
            I’m a passionate full-stack and mobile developer focused on building modern web and mobile applications. I work with technologies like React, React Native (Expo), Node.js, and MongoDB to create scalable and user-friendly digital products. From developing chat applications and e-commerce platforms to exploring AI-powered solutions, I combine creativity with strong technical skills to deliver real-world, impactful experiences across both web and mobile platforms.
            </motion.p>

            {/* CTA + Socials row */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-5"
            >
              {/* CTA buttons */}
              <div className="flex gap-3">
             <Link
  to="works"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-blue-900 transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer"
  style={{
    background: "linear-gradient(135deg, #e0f2fe, #bae6fd)",
    boxShadow: "0 4px 18px rgba(186, 230, 253, 0.35)",
  }}
>
  View Projects
</Link>

<Link
  to="contact"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-sky-200 border border-sky-400/40 hover:bg-white/10 transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer"
>
  Contact Me
</Link>
              </div>

              {/* Divider dot */}
              <span className="hidden sm:block w-1 h-1 rounded-full bg-blue-300/40 self-center" />

              {/* Social icons */}
              <div className="flex gap-2.5">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white border border-white/10 transition-all duration-200 hover:scale-110 active:scale-95"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                    whileHover={{ backgroundColor: "rgba(56,189,248,0.25)", borderColor: "rgba(125,211,252,0.5)" }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Image ── */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {/* Image frame */}
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-3 rounded-3xl opacity-40 blur-xl"
                style={{ background: "linear-gradient(135deg, #38bdf8, #818cf8)" }}
              />
              {/* Decorative corner bracket */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-sky-300/60 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-sky-300/60 rounded-br-lg" />

              <motion.img
                src="/profile.jpeg"
                alt="Aitezaz Ahmed"
                className="relative z-10 rounded-2xl object-cover"
                style={{
                  width: "240px",
                  height: "300px",
                  border: "2px solid rgba(186,230,253,0.25)",
                  boxShadow: "0 24px 64px -12px rgba(0,0,0,0.4)",
                }}
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              />

              {/* Floating stack chip */}
              <motion.div
                className="absolute -top-4 -right-8 z-20 bg-white rounded-2xl px-3 py-2 flex items-center gap-2"
                style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.12)" }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.5 }}
              >
                <span className="text-base">⚡</span>
                <div>
                  <p className="text-gray-800 text-xs font-bold leading-tight">Full Stack</p>
                  <p className="text-gray-400 text-[10px] leading-tight">Web & Mobile</p>
                </div>
              </motion.div>
            </div>

            {/* Sub-headline under image */}
            <motion.p
              className="text-sky-200/70 text-sm text-center font-medium tracking-wide max-w-[240px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              Building Full-Stack Web & Mobile Apps with React, React Native & Node.js
            </motion.p>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-sky-300/50 text-[10px] tracking-[0.18em] uppercase font-medium">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-sky-300/40 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Home;