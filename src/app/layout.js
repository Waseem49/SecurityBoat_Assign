import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/page";
import Footer from "@/components/footer/page";
import { MyContextProvider } from "@/context/mycontext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Security boat",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bodycontainer">
        <MyContextProvider>
          <Header />
          {children}
          <Footer />
        </MyContextProvider>
      </body>
    </html>
  );
}
