"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Greeting from "../Components/animations/greeting/Greeting";
import Hero from "../Components/hero";
import AboutMe from "../Components/aboutme";
import Projects from "../Components/projects";
import Skills from "../Components/skills";
import Service from "../Components/service";
import ContactMe from "../Components/utils/contactme";
import CompletedApps from "../Components/completedapps/CompletedApps";
import CollaboratorComments from "../Components/collaboratorcomments/CollaboratorComments";

const HomePage: React.FC = () => {
  const [showGreeting, setShowGreeting] = useState<boolean | null>(null);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem("alreadyVisited");
    const fromProjects = sessionStorage.getItem("scrollToProjects");

    if (!alreadyVisited) {
      setShowGreeting(true);
    } else {
      setShowGreeting(false);
    }

    if (fromProjects) {
      const waitThenScroll = setTimeout(() => {
        const section = document.getElementById("projects");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
        sessionStorage.removeItem("scrollToProjects");
      }, 1000);

      return () => clearTimeout(waitThenScroll);
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
      <AnimatePresence mode="wait">
        {showGreeting && (
          <motion.div
            key="greetingOverlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 10000,
              backgroundColor: "#000",
            }}
          >
            <Greeting onComplete={handleGreetingComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      {showGreeting === false && (
        <>
          <section id="home">
            <Hero scrollToSection={scrollToSection} />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="apps">
            <CompletedApps />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="collaborators">
            <CollaboratorComments />
          </section>
          <section id="service">
            <Service />
          </section>
          <section id="contactme">
            <ContactMe />
          </section>
        </>
      )}
    </>
  );
};

export default HomePage;
