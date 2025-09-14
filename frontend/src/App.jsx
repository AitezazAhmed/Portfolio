// src/App.jsx
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { scroller, Events, scrollSpy } from "react-scroll";
import Services from "./components/Services";
import { Toaster } from "react-hot-toast";
import Works from "./components/Works";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
    useEffect(() => {
    scrollSpy.update();   // 🔑 tells react-scroll to mark current section
  }, []);
  return (

    <>
      <Navbar />        {/* fixed navbar */}
      <main>
        <Home />
        <Services/>
        <Works/>
        <Experience/>
        <Contact/>
      </main>
       <Toaster position="top-center" reverseOrder={false} />

       
    </>
  );
}

export default App;

