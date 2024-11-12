import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import WorkExprience from "./components/WorkExprience";
import Footer from "./components/Footer";
import BG_GRADIENT from "./assets/blue.jpg";

const App = () => {
  return (
    <div className="bg-background">
      <div
        style={{
          backgroundImage: `url(${BG_GRADIENT})`,
          backgroundPosition: `50% 50%`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <NavBar />
        <Hero />
      </div>
      <Skills />
      <WorkExprience />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
