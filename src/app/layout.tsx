import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PyIndore — Python Community in Indore",
  description: "The official Python community in Indore, India. Join early, help shape the culture, and grow alongside fellow developers.",
  keywords: "Python, Indore, Community, Programming, Developers, Technology, Software Engineering, Data Science",
  authors: [{ name: "PyIndore Community" }],
  openGraph: {
    title: "PyIndore — Python Community in Indore",
    description: "Join Indore's growing Python community",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${inter.variable} ${outfit.className} bg-dark-bg text-dark-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
