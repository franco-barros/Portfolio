"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "../../styles/service/ServicesCard.module.css";

interface ServiceCardProps {
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  cta?: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  description,
  features,
  cta,
  onClick,
}) => {
  return (
    <div className={styles.serviceCard}>
      <h3 className={styles.serviceTitle}>{title}</h3>
      {subtitle && <h4 className={styles.serviceSubtitle}>{subtitle}</h4>}
      <p className={styles.serviceDescription}>{description}</p>

      {features && (
        <ul className={styles.featuresList}>
          {features.map((feature) => (
            <li key={`${title}-${feature}`} className={styles.featureItem}>
              <FaCheck className={styles.checkIcon} />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {cta && (
        <button onClick={onClick} className={styles.ctaButton}>
          {cta}
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
