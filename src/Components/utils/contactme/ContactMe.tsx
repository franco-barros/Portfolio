"use client";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "../../../styles/utils/ContactMe.module.css";
import { FadeInOnScroll } from "../../shared/fadeInonscroll";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [isSending, setIsSending] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearStatus = () => {
    setTimeout(() => {
      setStatusMessage("");
      setStatusType("");
    }, 5000); // 5 seconds
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");
    setStatusType("");

    const token = await recaptchaRef.current?.getValue();

    if (!token) {
      setStatusMessage("❌ Please confirm you're not a robot.");
      setStatusType("error");
      setIsSending(false);
      clearStatus();
      return;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const forbiddenPatterns = /(asd|test|example|fake)/i;

    if (
      !emailRegex.test(formData.email) ||
      forbiddenPatterns.test(formData.email)
    ) {
      setStatusMessage("❌ Please enter a valid email address.");
      setStatusType("error");
      setIsSending(false);
      clearStatus();
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      if (response.ok) {
        setStatusMessage("✅ Message sent successfully!");
        setStatusType("success");
        setFormData({ name: "", email: "", message: "" });
        recaptchaRef.current?.reset();
      } else {
        const resData = await response.json();
        setStatusMessage(`❌ ${resData.error || "Failed to send message."}`);
        setStatusType("error");
      }
    } catch (error) {
      console.error("Error submitting message:", error);
      setStatusMessage("❌ Something went wrong. Please try again later.");
      setStatusType("error");
    } finally {
      setIsSending(false);
      clearStatus();
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <FadeInOnScroll>
        <h2 className={styles.heading}>Get in Touch</h2>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.15}>
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

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
          />

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </FadeInOnScroll>

      {statusMessage && (
        <p
          className={
            statusType === "success"
              ? styles.successMessage
              : styles.errorMessage
          }
        >
          {statusMessage}
        </p>
      )}
    </section>
  );
};

export default ContactMe;
