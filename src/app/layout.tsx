"use client";
import { useState } from "react";
import { ThemeProvider } from "../Context/ThemeContext";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import ThemeToggle from "../Components/themetoggle";
import ChatbotModal from "../Components/chatbot/ChatBotModal";
import Greeting from "../Components/greeting/Greeting"; // Importamos Greeting
import "@/styles/globals.css";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [showUI, setShowUI] = useState<boolean>(false);

  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          {/* Mostrar Greeting antes de cargar los otros componentes */}
          {!showUI && <Greeting onComplete={() => setShowUI(true)} />}

          {/* Renderiza Navbar, ThemeToggle y Chatbot cuando Greeting termine */}
          {showUI && (
            <>
              <Navbar />
              <ThemeToggle />
              <ChatbotModal />
            </>
          )}

          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
