import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";

import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AnimeGS",
  description: "Website Anime public API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* tempat menyimpan class page lainnya yang otomatis sudah dimpan di next.js */}
      <body
        className={`${gabarito.className} bg-color-dark ${geistMono.variable} antialiased`}
      >
        {/* kalau ingin membuat halaman terus menerus ada, maka simpan di layout*/}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
