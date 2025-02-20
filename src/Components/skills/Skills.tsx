"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
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
import styles from "../../styles/Skills.module.css";

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
          transition: { duration: 20, ease: "linear" },
        });
        controls.set({ x: 0 });
        animateCarousel();
      };
      animateCarousel();
    }
  }, [containerWidth, controls]);

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.heading}>Tools</h2>
      <div className={styles.carousel} ref={carouselRef}>
        <motion.div className={styles.inner} animate={controls}>
          {duplicatedSkills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <Image
                src={skill.icon}
                alt={`Skill ${index + 1}`}
                width={48}
                height={48}
                className={styles.skillIcon}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
