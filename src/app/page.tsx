import React from "react";
import Hero from "@/components/hero";
import AboutMe from "@/components/aboutme";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

const HomePage = () => {
  return (
    <div>
      <section id="inicio">
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
