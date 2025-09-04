import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Extracurricular from "./components/Extracurricular";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Education/>
      <Skills />
      <Projects />
      <Extracurricular/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
