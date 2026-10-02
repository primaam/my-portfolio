import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prima Maharyono — Full-Stack Developer",
  description:
    "Portfolio of Prima Anugerah Maharyono — Full-Stack Developer specializing in frontend architecture, performance optimization, React, and modern web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${jetbrainsMono.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
