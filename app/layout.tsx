import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashok Kumar | Full Stack Developer",
  description:
    "Ashok Kumar – Full Stack Developer specializing in React, Next.js, Angular, and scalable web applications.",
  keywords: [
    "Ashok Kumar",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer Portfolio",
  ],
  authors: [{ name: "Ashok Kumar" }],
  openGraph: {
    title: "Ashok Kumar | Full Stack Developer",
    description:
      "Portfolio of Ashok Kumar – building scalable modern web applications.",
    url: "https://your-domain.vercel.app",
    siteName: "Ashok Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashok Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
