import React from "react";
import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "@/styles/globals.css";
export default function Layout({ children }: { children: ReactNode }) {
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
