import styles from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Bienvenido a Mi Portafolio</h1>
        <p className={styles.description}>
          Desarrollador apasionado por la tecnología y la innovación.
        </p>
        <button className={styles.ctaButton}>Ver proyectos</button>
      </div>
    </section>
  );
};

export default Hero;
