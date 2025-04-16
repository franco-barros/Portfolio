"use client";
import React from "react";
import styles from "../../styles/service/Services.module.css";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../../data/service/ServiceData";

const Services: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5492645878987", "_blank");
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Services</h2>

      <div className={styles.servicesContainer}>
        {servicesData.map((service) => {
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

          return (
            <ServiceCard
              key={service.title}
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
