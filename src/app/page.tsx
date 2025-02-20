import React from "react";
import Hero from "../Components/hero";
import AboutMe from "../Components/aboutme";
import Projects from "../Components/Projects";
import Skills from "../Components/skills/Skills";

const HomePage = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
};

export default HomePage;
