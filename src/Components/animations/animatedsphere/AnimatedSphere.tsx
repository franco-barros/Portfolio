"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "../../../styles/animations/AnimatedSphere.module.css";

const AnimatedSphere: React.FC = () => {
  const flipControls = useAnimation();
  const verticalControls = useAnimation();
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    flipControls.start({
      rotateY: flipped ? 180 : 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [flipControls, flipped]); // ✅ agregado flipControls

  useEffect(() => {
    verticalControls.start({
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    });
  }, [verticalControls]); // ✅ agregado verticalControls

  const handleMouseEnter = () => verticalControls.stop();

  const handleMouseLeave = () => {
    verticalControls.start({
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    });
  };

  const handleClick = () => setFlipped((prev) => !prev);

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Esfera animada con foto de perfil"
      className={styles.buttonReset}
    >
      <motion.div className={styles.container} animate={verticalControls}>
        <motion.div className={styles.sphere} animate={flipControls}>
          <div className={styles.front}></div>
          <div className={styles.back}>
            <Image
              src="/assets/images/fotoperfil.png"
              alt="Foto de perfil"
              width={200}
              height={200}
              className={styles.image}
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </button>
  );
};

export default AnimatedSphere;
