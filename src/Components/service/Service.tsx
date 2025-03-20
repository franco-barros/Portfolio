"use client";
import React from "react";
import styles from "../../styles/service/Services.module.css";
import ServiceCard from "./ServiceCard"; // Asegúrate de que la ruta sea la correcta

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
  return (
    <section id="services" className={styles.servicesSection}>
      {/* Aquí se usa la clase global definida en el CSS global */}
      <h2 className="globalTitle">Services</h2>
      <div className={styles.servicesContainer}>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            features={service.features}
            cta={service.cta}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
