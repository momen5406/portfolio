import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


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
    <html lang="en" className="scroll-smooth">
      <body className="font-inter">
        <div>{children}</div>
      </body>
    </html>
  );
}
