"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Greeting from "../Components/greeting/Greeting";
import Hero from "../Components/hero";
import AboutMe from "../Components/aboutme";
import Projects from "../Components/projects";
import Skills from "../Components/skills/Skills";
import MouseEffect from "../Components/mouseeffect"; // Importa MouseEffect

const HomePage: React.FC = () => {
  const [showGreeting, setShowGreeting] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

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
            <Greeting />
          </motion.div>
        )}

        <div
          style={{
            opacity: showGreeting ? 0 : 1,
            transition: "opacity 1s ease-in-out",
          }}
        >
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
      </AnimatePresence>
    </MouseEffect>
  );
};

export default HomePage;
