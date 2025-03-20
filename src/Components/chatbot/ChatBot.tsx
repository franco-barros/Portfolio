import React, { useState } from "react";
import styles from "../../styles/chatbot/Chatbot.module.css";

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  // Lee la API key desde la variable de entorno o usa un valor por defecto.
  const apiKey = process.env.NEXT_PUBLIC_API_KEY_OPENAI || "Version123";

  const handleSendMessage = async () => {
    const url =
      "https://magicloops.dev/api/loop/16568f11-5b7c-4517-b7f3-2c5d56684792/run";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      console.log("Respuesta del chatbot:", data);
      // Ajusta según la respuesta real de la API
      setResponseMsg(data.response || "No se recibió respuesta.");
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setResponseMsg("Error al enviar el mensaje.");
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      <h2 className={styles.heading}>Chatbot</h2>
      <div className={styles.chatContent}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className={styles.input}
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>
          Enviar
        </button>
      </div>
      {responseMsg && (
        <div className={styles.responseBox}>
          <strong>Respuesta:</strong>
          <p>{responseMsg}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
