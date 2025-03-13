"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Greeting from "../Components/greeting/Greeting";
import Hero from "../Components/hero";
import AboutMe from "../Components/aboutme";
import Projects from "../Components/projects";
import Skills from "../Components/skills/Skills";
import MouseEffect from "../Components/mouseeffect";

const HomePage: React.FC = () => {
  const [showGreeting, setShowGreeting] = useState(true);

  const handleGreetingComplete = () => {
    setShowGreeting(false);
  };

  return (
    <MouseEffect>
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            key="greetingOverlay"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 1 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 10000,
              backgroundColor: "#f9f9f9",
            }}
          >
            <Greeting onComplete={handleGreetingComplete} />
          </motion.div>
        )}
      </AnimatePresence>

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
    </MouseEffect>
  );
};

export default HomePage;
