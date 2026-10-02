import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prima Maharyono — Frontend Developer",
  description:
    "Portfolio of Prima Anugerah Maharyono — Frontend Developer specializing in React, React Native, and modern web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
