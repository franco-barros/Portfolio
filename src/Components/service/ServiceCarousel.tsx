"use client";

import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ServiceCard from "./ServiceCard";
import type { Service } from "../../types/service";
import styles from "../../styles/service/ServiceCarousel.module.css";

interface ServiceCarouselProps {
  services: Service[];
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ services }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Detectar tamaño de pantalla para activar carrusel solo en mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Configurar el carrusel
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 15,
      },
      mode: "free-snap",
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    []
  );

  // Auto-play cada 10 segundos y vuelve al inicio
  useEffect(() => {
    if (!slider.current) return;
    const interval = setInterval(() => {
      const nextSlide = currentSlide + 1;
      if (nextSlide < services.length) {
        slider.current?.moveToIdx(nextSlide);
      } else {
        slider.current?.moveToIdx(0);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, services.length, slider]);

  // Vista desktop: grid estático
  if (!isMobile) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.5rem",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 1rem",
          justifyItems: "center",
        }}
      >
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            features={service.features}
            cta={service.cta}
            onClick={service.onClick}
            icon={service.icon}
          />
        ))}
      </div>
    );
  }

  // Vista mobile: carrusel con dots
  return (
    <>
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{ padding: "0 1rem" }}
      >
        {services.map((service) => (
          <div className="keen-slider__slide" key={service.title}>
            <ServiceCard
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              features={service.features}
              cta={service.cta}
              onClick={service.onClick}
              icon={service.icon}
            />
          </div>
        ))}
      </div>

      <div className={styles.dotsWrapper}>
        {services.map((service, idx) => (
          <button
            key={service.title}
            className={`${styles.dot} ${
              currentSlide === idx ? styles.active : ""
            }`}
            onClick={() => slider.current?.moveToIdx(idx)}
          />
        ))}
      </div>
    </>
  );
};

export default ServiceCarousel;
