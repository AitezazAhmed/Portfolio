import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "services", label: "Services" },
  { to: "works", label: "Works" },
  { to: "experience", label: "Experience" },
  { to: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(29, 78, 216, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(186,230,253,0.12)" : "none",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.18)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="home"
            spy smooth
            offset={-70}
            duration={500}
            className="cursor-pointer flex items-center gap-1 select-none"
          >
            <span className="text-white font-black text-xl tracking-tight">
              AITEZAZ
            </span>
            <span
              className="text-xs font-bold px-1.5 py-0.5 rounded-md ml-0.5"
              style={{
                background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                color: "white",
                letterSpacing: "0.05em",
              }}
            >
              .DEV
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  activeClass="active-nav"
                  className="cursor-pointer relative px-4 py-2 text-sm font-medium text-blue-100/80 rounded-xl transition-all duration-200 hover:text-white hover:bg-white/10 nav-link"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Hire Me CTA */}
            <Link to="contact" spy smooth offset={-70} duration={500}>
              <button
                className="hidden sm:flex items-center gap-1.5 text-sm font-semibold px-5 py-2 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #e0f2fe, #bae6fd)",
                  color: "#1e3a5f",
                  boxShadow: "0 4px 18px rgba(186, 230, 253, 0.3)",
                }}
              >
                Hire Me
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-xl border border-white/15 bg-white/10 gap-1.5 transition hover:bg-white/20"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-4 h-px bg-white transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none" }}
              />
              <span
                className="block w-4 h-px bg-white transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-4 h-px bg-white transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none" }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300 pointer-events-none"
        style={{ opacity: menuOpen ? 1 : 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          style={{ pointerEvents: menuOpen ? "auto" : "none" }}
        />

        {/* Drawer */}
        <div
          className="absolute top-0 right-0 h-full w-72 flex flex-col pt-20 pb-8 px-6 transition-transform duration-300"
          style={{
            background: "linear-gradient(160deg, #1d4ed8 0%, #1e40af 60%, #0369a1 100%)",
            borderLeft: "1px solid rgba(186,230,253,0.12)",
            boxShadow: "-8px 0 40px rgba(0,0,0,0.3)",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            pointerEvents: menuOpen ? "auto" : "none",
          }}
        >
          {/* Mobile logo */}
          <p className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-6">Navigation</p>

          <ul className="flex flex-col gap-1">
            {navLinks.map(({ to, label }, i) => (
              <li key={to}>
                <Link
                  to={to}
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  activeClass="active-nav-mobile"
                  className="cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl text-blue-100/80 font-medium text-sm transition-all duration-200 hover:text-white hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-sky-400/60 flex-shrink-0"
                  />
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <Link to="contact" spy smooth offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
              <button
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #e0f2fe, #bae6fd)",
                  color: "#1e3a5f",
                  boxShadow: "0 4px 18px rgba(186, 230, 253, 0.25)",
                }}
              >
                Hire Me
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Active link styles injected globally */}
      <style>{`
        .active-nav {
          color: white !important;
          background: rgba(255,255,255,0.12) !important;
        }
        .active-nav::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #7dd3fc;
        }
        .active-nav-mobile {
          color: white !important;
          background: rgba(255,255,255,0.1) !important;
        }
      `}</style>
    </>
  );
}