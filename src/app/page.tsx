// src/pages/HomePage.tsx
"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Greeting from "../Components/animations/greeting/Greeting";
import Hero from "../Components/hero";
import AboutMe from "../Components/aboutme";
import Projects from "../Components/projects";
import Skills from "../Components/skills";
import WorkedSection from "../Components/worked";
import Service from "../Components/service";
import ContactMe from "../Components/utils/contactme";

const HomePage: React.FC = () => {
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem("alreadyVisited");
    if (!alreadyVisited) {
      setShowGreeting(true);
    }
  }, []);

  const handleGreetingComplete = () => {
    localStorage.setItem("alreadyVisited", "true");
    setShowGreeting(false);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
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
        <Hero scrollToSection={scrollToSection} />
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
      <section id="worked">
        <WorkedSection />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="contactme">
        <ContactMe />
      </section>
    </>
  );
};

export default HomePage;
