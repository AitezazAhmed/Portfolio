import React from 'react'
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <section
    id="home"
    >
    <div
      className="min-h-screen bg-blue-600 text-white flex flex-col overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 px-10 pt-28">
        {/* Left Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            MERN STACK <br /> DEVELOPER
          </h2>
          <p className="mt-6 font-semibold">HI, I AM AITEZAZ</p>
          <p className="mt-2 text-gray-200 max-w-md">
            I’m a passionate developer with a journey built around crafting
            projects in frontend and backend development. From building chat
            apps and e-commerce platforms to exploring AI-powered solutions, I
            blend creativity with technical expertise to deliver impactful
            digital experiences.
          </p>
        </motion.div>

        {/* Image + Right Text */}
        <motion.div
          className="flex-1 flex flex-col items-center mt-10 md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="/profile.JPG"
            alt="profile"
            className="rounded-xl shadow-lg w-50 md:w-55 border-4"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mt-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            
            Building Full-Stack <br />  Web Apps with MERN 
          </motion.h2>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="https://web.facebook.com/profile.php?id=100036949600449"
              className="p-3 bg-white/20 rounded-full hover:bg-yellow-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/itx_aitezaz/"
              className="p-3 bg-white/20 rounded-full hover:bg-yellow-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/AitezazAhmed"
              className="p-3 bg-white/20 rounded-full hover:bg-yellow-400 transition"
            >
              <FaGithub/>
            </a>
            <a
              href="https://www.linkedin.com/in/aitezaz-ahmed-888b9233a/"
              className="p-3 bg-white/20 rounded-full hover:bg-yellow-400 transition"
            >
              <FaLinkedinIn />
            </a>
          </motion.div>

          
        </motion.div>
      </div>
    </div>
    </section>
  );
};


export default Home
