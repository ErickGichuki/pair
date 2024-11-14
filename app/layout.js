import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
