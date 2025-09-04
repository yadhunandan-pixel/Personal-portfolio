import React from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Education from "./components/education";
import Extracurricular from "./components/extracurricular";
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
