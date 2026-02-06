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

export const metadata: Metadata = {
  metadataBase: new URL("https://ashok-kumar-v1.vercel.app"),

  title: "Ashok Kumar | Full Stack Developer",
  description:
    "Ashok Kumar – Full Stack Developer specializing in React, Next.js, Angular, Java, and scalable web applications.",

  keywords: [
    "Ashok Kumar",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "Java Developer",
    "Full Stack Developer Portfolio",
  ],

  authors: [{ name: "Ashok Kumar" }],

  openGraph: {
    title: "Ashok Kumar | Full Stack Developer",
    description:
      "Portfolio of Ashok Kumar – building scalable modern web applications.",
    url: "https://ashok-kumar-v1.vercel.app",
    siteName: "Ashok Kumar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashok Kumar | Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ashok Kumar | Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern frontend and scalable web applications.",
    images: ["/og-image.png"],
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
