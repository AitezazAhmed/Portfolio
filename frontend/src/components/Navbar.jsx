// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 shadow-md z-50 flex justify-between items-center px-6 md:px-10 py-4 text-white">
      <h1 className="text-2xl font-bold">AITEZAZ<span>.COM</span></h1>

      <ul className="hidden md:flex gap-8 font-semibold">
        <li>
 <Link to="home" spy={true} smooth={true} offset={-70} duration={500}
                activeClass="text-yellow-400" className="cursor-pointer">
  HOME
</Link>
        </li>

        <li>
          <Link to="services" spy={true} smooth={true} offset={-70} duration={500}
                activeClass="text-yellow-400" className="cursor-pointer">
            SERVICES
          </Link>
        </li>

        <li>
          <Link to="works" spy={true} smooth={true} offset={-70} duration={500}
                activeClass="text-yellow-400" className="cursor-pointer">
            WORKS
          </Link>
        </li>

        <li>
          <Link to="experience" spy={true} smooth={true} offset={-70} duration={500}
                activeClass="text-yellow-400" className="cursor-pointer">
            EXPERIENCE
          </Link>
        </li>

        <li>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}
                activeClass="text-yellow-400" className="cursor-pointer">
            CONTACT
          </Link>
        </li>
      </ul>
<Link to="contact">
      <button
       className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold  md:block">
        HIRE ME →
      </button>
      </Link>
    </nav>
  );
}
