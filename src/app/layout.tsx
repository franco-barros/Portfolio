import React, { ReactNode } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer/Footer";
import "@/styles/globals.css";

// Definimos las props como solo lectura
interface LayoutProps {
  readonly children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
