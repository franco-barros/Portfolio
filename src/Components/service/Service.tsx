"use client";
import React from "react";
import styles from "../../styles/service/Services.module.css";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    title: "Web Development",
    subtitle: "Custom Solutions",
    description:
      "Need a modern web app, a sleek marketing site, or a cross-platform solution? Let’s chat and create something tailored to your needs.",
    features: [
      "Unique, modern designs",
      "Fully responsive & accessible",
      "Optimized for performance",
      "Smooth animations & interactions",
      "Scalable backend solutions (or integrate your own)",
      "Multi-platform compatibility",
    ],
    cta: "Get a quote",
  },
  {
    title: "Tech Consulting",
    subtitle: "Expert Advice",
    description:
      "Get guidance on modern technologies, best practices, and strategies to take your project to the next level.",
    features: [
      "Personalized recommendations",
      "Process optimization",
      "Strategic tech solutions",
    ],
    cta: "Let’s talk",
  },
  {
    title: "UI/UX Design",
    subtitle: "User-Centered Approach",
    description:
      "Creating beautiful, intuitive, and user-friendly designs that enhance user experience and engagement.",
    features: [
      "Intuitive interfaces",
      "Optimized user experience",
      "Modern, sleek design",
    ],
    cta: "See portfolio",
  },
  {
    title: "Mobile Development",
    subtitle: "Cross-Platform & Native",
    description:
      "Build high-performance native or hybrid mobile apps for iOS and Android that provide a seamless user experience.",
    features: [
      "Native & hybrid development",
      "Optimized for speed & performance",
      "API & backend integration",
      "Smooth, fluid experience",
    ],
    cta: "Explore solutions",
  },
];

const Services: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank"); // Reemplaza con tu número real
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className="globalTitle">Services</h2>
      <div className={styles.servicesContainer}>
        {servicesData.map((service, index) => {
          let onClick;

          switch (service.cta) {
            case "Get a quote":
              onClick = () => handleScrollTo("contact");
              break;
            case "Let’s talk":
              onClick = handleWhatsApp;
              break;
            case "See portfolio":
              onClick = () => handleScrollTo("projects");
              break;
            case "Explore solutions":
              onClick = () => handleScrollTo("contact");
              break;
            default:
              onClick = undefined;
          }

          return (
            <ServiceCard
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              features={service.features}
              cta={service.cta}
              onClick={onClick}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
