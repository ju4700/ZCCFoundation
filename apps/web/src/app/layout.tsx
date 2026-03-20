import type { Metadata } from "next";
import { Inter, Petrona, Questrial } from "next/font/google";
import "./globals.css";

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const petrona = Petrona({
  variable: "--font-petrona",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "ZCC Foundation",
  description: "Design language preview and implementation workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${questrial.variable} ${inter.variable} ${petrona.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
