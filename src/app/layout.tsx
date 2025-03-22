"use client";
import { useState } from "react";
import { ThemeProvider } from "../Context/ThemeContext";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import ThemeToggle from "../Components/utils/themetoggle";
import WhatsAppButton from "../Components/utils/whatsappbutton";
// import ChatbotModal from "../Components/chatbot/ChatBotModal"; // Comentado temporalmente
import Greeting from "../Components/animations/greeting/Greeting";
import MouseEffect from "../Components/mouseeffect";
import "@/styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showUI, setShowUI] = useState<boolean>(false);

  return (
    <ThemeProvider>
      <html lang="en">
        <body className="relative layoutBody">
          {/* Capa de fondo */}
          <div className="fixed inset-0 z-0 layerBackground" />

          {/* Mostrar Greeting antes de cargar la UI */}
          {!showUI && <Greeting onComplete={() => setShowUI(true)} />}

          {/* Capa intermedia: MouseEffect (sin bloquear eventos) */}
          <MouseEffect className="fixed inset-0 z-10 pointer-events-none" />

          {/* Capa superior: Interfaz de usuario */}
          {showUI && (
            <div className="relative z-20">
              <Navbar />
              <ThemeToggle />
              {/* <ChatbotModal /> */}
              <WhatsAppButton /> {/* Botón de WhatsApp */}
              <main className="layerContent">{children}</main>
              <Footer className="layerFooter" />
            </div>
          )}
        </body>
      </html>
    </ThemeProvider>
  );
}
