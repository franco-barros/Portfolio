"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "../../../styles/animations/AnimatedSphere.module.css";

const AnimatedSphere: React.FC = () => {
  const flipControls = useAnimation();
  const verticalControls = useAnimation();
  const [flipped, setFlipped] = useState(false);

  // Controla la animación del flip (giro) al hacer click.
  useEffect(() => {
    flipControls.start({
      rotateY: flipped ? 180 : 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [flipControls, flipped]);

  // Inicia la oscilación vertical (subir y bajar).
  useEffect(() => {
    verticalControls.start({
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    });
  }, [verticalControls]);

  // Al pasar el cursor, se detiene la oscilación vertical.
  const handleMouseEnter = () => {
    verticalControls.stop();
  };

  // Al retirar el cursor, se reanuda la oscilación vertical.
  const handleMouseLeave = () => {
    verticalControls.start({
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    });
  };

  // Al hacer click, se invierte el estado de flip.
  const handleClick = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div
      className={styles.container}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Contenedor vertical: mantiene el tamaño y posición de la esfera */}
      <motion.div
        animate={verticalControls}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "20px", // Ajusta este valor para bajar la esfera
          left: 0,
        }}
      >
        {/* Contenedor interno para el flip */}
        <motion.div
          className={`${styles.sphere} ${flipped ? styles.flipped : ""}`}
          animate={flipControls}
        >
          <div className={styles.front}></div>
          <div className={styles.back}>
            <Image
              src="/assets/images/fotoperfil.png"
              alt="My Photo"
              width={200}
              height={200}
              className={styles.image}
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedSphere;
