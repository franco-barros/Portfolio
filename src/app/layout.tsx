import { ReactNode } from "react";
import { ThemeProvider } from "../Context/ThemeContext";
import SetViewportHeight from "../Components/utils/setviewportheight";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import WhatsAppButton from "../Components/utils/whatsappbutton";
import Greeting from "../Components/animations/greeting/Greeting";
import MouseEffect from "../Components/mouseeffect";
import "@/styles/globals.css";

export const metadata = {
  title: "Franco Barros Portfolio",
  description: "My porfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="relative layoutBody">
        <SetViewportHeight />
        <ThemeProvider>
          <div className="fixed inset-0 z-0 layerBackground" />
          <Greeting />
          <MouseEffect className="fixed inset-0 z-10 pointer-events-none" />
          <div className="relative z-20">
            <Navbar />
            <WhatsAppButton />
            <main className="layerContent">{children}</main>
            <Footer className="layerFooter" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
