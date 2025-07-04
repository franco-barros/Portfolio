"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dinámicas para evitar SSR issues
const AnimatedAbout = dynamic(
  () => import("../../animations/about/animatedyingyang"),
  { ssr: false }
);
const CloudsAnimation = dynamic(
  () => import("../../animations/about/animatedcloud"),
  { ssr: false }
);
const CaptainShieldAnimation = dynamic(
  () => import("../../animations/about/animatedcaptainshield"),
  { ssr: false }
);
const TriangleTesseractAnimation = dynamic(
  () => import("../../animations/about/animatedtriangletesseract"),
  { ssr: false }
);
const TesseractAnimation = dynamic(
  () => import("../../animations/about/animatedtesseract"),
  { ssr: false }
);
const IronManReactorAnimation = dynamic(
  () => import("../../animations/about/animatedironmanreactor"),
  { ssr: false }
);

const AnimationCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const animations = [
    <AnimatedAbout key="about" />,
    <CloudsAnimation key="clouds" />,
    <CaptainShieldAnimation key="shield" />,
    <TriangleTesseractAnimation key="triangletesseract" />,
    <TesseractAnimation key="tesseract" />,
    <IronManReactorAnimation key="reactor" />,
  ];

  const total = animations.length;

  const goNext = () => setCurrentIndex((i) => (i + 1) % total);
  const goPrev = () => setCurrentIndex((i) => (i - 1 + total) % total);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* Contenedor flex para flechas y animación */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 12,
          width: "100%",
          maxWidth: 360,
          justifyContent: "center",
        }}
      >
        {/* Flecha izquierda fuera del cuadro animación */}
        <button
          onClick={goPrev}
          aria-label="Previous animation"
          type="button"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronLeft size={28} color="#00e5ff" />
        </button>

        {/* Cuadro solo para animación */}
        <div
          style={{
            width: 320,
            height: 220,
            borderRadius: 12,
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(6px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          {animations[currentIndex]}
        </div>

        {/* Flecha derecha fuera del cuadro animación */}
        <button
          onClick={goNext}
          aria-label="Next animation"
          type="button"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronRight size={28} color="#00e5ff" />
        </button>
      </div>

      {/* Indicadores esferas abajo, centrados */}
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          width: "100%",
          maxWidth: 360,
        }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to animation ${i + 1}`}
            type="button"
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              border: "none",
              backgroundColor: i === currentIndex ? "#00e5ff" : "#555",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimationCarousel;
