import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(() => {
        toast.success("Message sent successfully 🚀");
        setLoading(false);
        e.target.reset();
      })
      .catch(() => {
        toast.error("Something went wrong ❌");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col overflow-hidden items-center justify-center py-20 px-6"
      style={{ background: "linear-gradient(180deg, #f0f7ff 0%, #e8f4fd 50%, #f0f7ff 100%)" }}
    >
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
              <span className="text-sm font-semibold text-blue-600 tracking-wide">Contact</span>
            </motion.div>
      {/* Heading */}
 <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight"
          >
            Get In{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #2563eb, #38bdf8)" }}
            >
              Touch
            </span>
          </motion.h2>
      <motion.p
        className="text-gray-600 max-w-xl text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I’d love to hear from you! Whether you have a project idea, want to
        collaborate, or just say hi, feel free to reach out 🚀
      </motion.p>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-gray-50 shadow-lg rounded-2xl p-8 space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
            className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows="4"
            required
            className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-sky-500 text-white py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-70"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </motion.form>

      {/* Contact Info */}
      <div className="flex flex-col items-center mt-12 space-y-4 text-gray-700">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-blue-600" />
          <span>stoneghold4103@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="text-blue-600" />
          <span>+92 306 3305700</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-8 text-white">
        <a
          href="https://www.linkedin.com/in/aitezaz-ahmed-888b9233a/"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-blue-600 hover:bg-sky-500 transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/AitezazAhmed"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/itx_aitezaz/"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-sky-500 hover:bg-blue-600 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}


