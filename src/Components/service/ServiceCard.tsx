"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "../../styles/service/ServicesCard.module.css";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  cta?: string;
  onClick?: () => void;
  icon?: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  description,
  features,
  cta,
  onClick,
  icon: Icon,
}) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.titleWrapper}>
        {Icon && <Icon className={styles.serviceIcon} />}
        <h3 className={styles.serviceTitle}>{title}</h3>
      </div>

      {subtitle && <h4 className={styles.serviceSubtitle}>{subtitle}</h4>}

      <p className={styles.serviceDescription}>{description}</p>

      {features && features.length > 0 && (
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
        <button onClick={onClick} className={styles.ctaButton} type="button">
          {cta}
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
