"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "../../styles/service/Services.module.css";
import ServiceCarousel from "./ServiceCarousel";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../../data/service/ServiceData";

const Services: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5492645878987", "_blank");
  };

  const servicesWithOnClick = servicesData.map((service) => {
    let onClick;

    switch (service.cta) {
      case "Get a quote":
      case "Explore solutions":
      case "Build your site":
      case "Start your app":
        onClick = () => handleScrollTo("contactme");
        break;
      case "Let’s talk":
        onClick = handleWhatsApp;
        break;
      case "See portfolio":
        onClick = () => handleScrollTo("projects");
        break;
      default:
        onClick = undefined;
    }

    return { ...service, onClick };
  });

  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Services</h2>

      {isMobile ? (
        <ServiceCarousel services={servicesWithOnClick} />
      ) : (
        <div className={styles.servicesContainer}>
          {servicesWithOnClick.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
