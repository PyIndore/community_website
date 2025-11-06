import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PyIndore - Python Community Indore",
  description: "Python Indore, the leading and official community dedicated to Python programming in Indore, India. Join our vibrant, active, and rapidly growing hub for Python enthusiasts.",
  keywords: "Python, Indore, Community, Programming, Developers, Technology, Software Engineering, Data Science",
  authors: [{ name: "PyIndore Community" }],
  openGraph: {
    title: "PyIndore - Python Community Indore",
    description: "Join the leading Python community in Indore, India",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}