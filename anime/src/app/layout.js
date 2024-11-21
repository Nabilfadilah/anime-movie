import localFont from "next/font/local";
import "./globals.css";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* kalau ingin membuat halaman terus menerus ada, maka simpan di layout*/}
        <h1>TESTING</h1>
        {children}
      </body>
    </html>
  );
}
