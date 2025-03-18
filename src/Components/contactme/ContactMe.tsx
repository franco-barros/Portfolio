"use client";
import React, { useState } from "react";
import styles from "../../styles/ContactMe.module.css";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.heading}>Get in Touch</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.textAreaField}
        />
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
