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
   <video autoPlay muted loop playInline className = "bg-video">
    <source src = "/videos/142815-780943566_small.mp4" type = "video/mp4" />
   </video>
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
