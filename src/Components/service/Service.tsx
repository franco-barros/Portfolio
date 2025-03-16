// Services.tsx
"use client";
import React from "react";
import styles from "../../styles/Services.module.css";
import ServiceCard from "./ServiceCard"; // Asegúrate de que la ruta sea la correcta

const servicesData = [
  {
    title: "Desarrollo Web",
    subtitle: "Custom Quote",
    description:
      "Tailored web apps, paired with a marketing website, or cross-platform solutions. Let's get together and discuss your vision to provide a custom quote.",
    features: [
      "Modern, custom design",
      "Responsive & accessible",
      "Optimized performance",
      "Animations & interactions",
      "Scalable backend solutions or bring your own backend",
      "Multi-platform support",
    ],
    cta: "Secure your package now",
  },
  {
    title: "Consultoría",
    subtitle: "Expert Guidance",
    description:
      "Asesoramiento en tecnologías modernas y mejores prácticas para impulsar tu proyecto.",
    features: [
      "Asesoría personalizada",
      "Optimización de procesos",
      "Estrategias tecnológicas",
    ],
    cta: "Contacta ahora",
  },
  {
    title: "Diseño UI/UX",
    subtitle: "User Focused",
    description:
      "Diseños atractivos y fáciles de usar para mejorar la experiencia del usuario.",
    features: [
      "Interfaz intuitiva",
      "Experiencia de usuario optimizada",
      "Diseño moderno",
    ],
    cta: "Ver portafolio",
  },
  {
    title: "Desarrollo Móvil",
    subtitle: "Cross-Platform",
    description:
      "Aplicaciones móviles nativas o híbridas para iOS y Android con alto rendimiento.",
    features: [
      "Desarrollo nativo e híbrido",
      "Alto rendimiento",
      "Integración con APIs y backend",
      "Experiencia fluida",
    ],
    cta: "Explora soluciones",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.heading}>Servicios</h2>
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
