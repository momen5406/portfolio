import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Momen Hussein",
  description: "Front End Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="container px-5">{children}</div>
      </body>
    </html>
  );
}
