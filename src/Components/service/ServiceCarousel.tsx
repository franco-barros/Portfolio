"use client";

import React, { useState, useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ServiceCard from "./ServiceCard";
import type { Service } from "../../types/service";
import styles from "../../styles/service/ServiceCarousel.module.css";

interface ServiceCarouselProps {
  services: Service[];
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ services }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 20 },
    mode: "snap",
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  useEffect(() => {
    if (!slider.current) return;

    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      slider.current?.next();
    }, 6000);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [slider]);

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {services.map((service) => (
          <div className="keen-slider__slide" key={service.title}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>

      <div className={styles.dotsWrapper}>
        {services.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${
              currentSlide === idx ? styles.active : ""
            }`}
            onClick={() => slider.current?.moveToIdx(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default ServiceCarousel;
