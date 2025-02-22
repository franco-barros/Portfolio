"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import styles from "../../styles/Skills.module.css";

import ReactIcon from "../../../public/assets/icons/react.png";
import CssIcon from "../../../public/assets/icons/css.png";
import HtmlIcon from "../../../public/assets/icons/html.png";
import JavaScriptIcon from "../../../public/assets/icons/javascript.png";
import NestIcon from "../../../public/assets/icons/nest-js-icon.png";
import TypeScriptIcon from "../../../public/assets/icons/typescript.png";
import NextIcon from "../../../public/assets/icons/next-js-logo.png";
import TailwindIcon from "../../../public/assets/icons/tailwind.png";
import ExpressIcon from "../../../public/assets/icons/express-js-logo.png";
import JavaIcon from "../../../public/assets/icons/java-logo.png";

const Skills = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [containerWidth, setContainerWidth] = useState(0);

  const skillsData = [
    { icon: ReactIcon },
    { icon: CssIcon },
    { icon: HtmlIcon },
    { icon: JavaScriptIcon },
    { icon: NestIcon },
    { icon: TypeScriptIcon },
    { icon: NextIcon },
    { icon: TailwindIcon },
    { icon: ExpressIcon },
    { icon: JavaIcon },
  ];

  const duplicatedSkills = [...skillsData, ...skillsData];

  useEffect(() => {
    if (carouselRef.current) {
      setContainerWidth(carouselRef.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    if (containerWidth > 0) {
      const animateCarousel = async () => {
        await controls.start({
          x: -containerWidth,
          transition: { duration: 15, ease: "linear", repeat: Infinity },
        });
      };
      animateCarousel();
    }
  }, [containerWidth, controls]);

  return (
    <section id="skills" className={styles.skillsSection}>
      {/* Fondo interactivo sin lógica de mouse; se controlará globalmente */}
      <div className={styles.backgroundEffect}></div>

      <h2 className={styles.heading}>Tools</h2>

      <div className={styles.carouselWrapper}>
        <div className={styles.gradientLeft}></div>
        <div className={styles.carousel} ref={carouselRef}>
          <motion.div className={styles.inner} animate={controls}>
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={index}
                className={styles.skillCard}
                whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={skill.icon}
                  alt={`Skill ${index + 1}`}
                  width={60}
                  height={60}
                  className={styles.skillIcon}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className={styles.gradientRight}></div>
      </div>
    </section>
  );
};

export default Skills;
