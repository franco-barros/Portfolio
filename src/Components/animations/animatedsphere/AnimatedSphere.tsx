"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "../../../styles/AnimatedSphere.module.css";

const AnimatedSphere = () => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={`${styles.sphere} ${flipped ? styles.flipped : ""}`}>
        <div className={styles.front}></div>
        <div className={styles.back}>
          <Image
            src="/assets/images/fotoperfil.png"
            alt="Mi Foto"
            width={200}
            height={200}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedSphere;
