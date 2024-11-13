import localFont from "next/font/local";
import "./globals.css";
import Footer from "./footer/page";
import Navbar from "./navbar/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
