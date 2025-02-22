"use client";
import { ThemeProvider } from "../Context/ThemeContext";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import ThemeToggle from "../Components/themetoggle";
import "@/styles/globals.css";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <Navbar />
          <ThemeToggle />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
