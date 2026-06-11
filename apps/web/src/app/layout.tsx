import type { Metadata } from "next";
import { Inter, Petrona, Questrial } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import SplashScreen from "../components/SplashScreen";

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
  title: "ZCC Foundation - Bangladesh",
  description: "Empowering the next generation of chemists across Bangladesh through scholarships and the Chemistry Olympiad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${questrial.variable} ${inter.variable} ${petrona.variable} antialiased min-h-screen bg-brand-base flex flex-col`}>
        <SplashScreen>
          {/* Header / Navigation */}
        <header className="sticky top-0 z-50 w-full border-b border-brand-border-light bg-brand-base/80 backdrop-blur">
          <div className="container mx-auto px-6 py-4 md:px-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-brand-text flex items-center justify-center text-brand-base font-display font-bold">
                Z
              </div>
              <span className="font-display text-xl font-bold text-brand-text">ZCC Foundation</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 font-ui text-sm font-medium text-brand-text-secondary">
              <Link href="/" className="hover:text-brand-text transition-colors">Home</Link>
              <Link href="/about" className="hover:text-brand-text transition-colors">About Us</Link>
              <Link href="/olympiad" className="hover:text-brand-text transition-colors">Chemistry Olympiad</Link>
              <Link href="/scholarships" className="hover:text-brand-text transition-colors">Scholarships</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="rounded-brand-lg bg-brand-text px-5 py-2.5 font-ui text-sm text-brand-base transition-colors hover:opacity-90"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </header>

        {children}

          {/* Footer */}
          <footer className="bg-brand-base py-12 mt-auto">
            <div className="container mx-auto px-6 md:px-10 border-t border-brand-border-light pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-brand-text flex items-center justify-center text-brand-base font-display text-xs font-bold">
                    Z
                  </div>
                  <span className="font-display text-lg font-bold text-brand-text">ZCC Foundation</span>
                </div>
                <div className="flex gap-6 font-ui text-sm text-brand-text-secondary">
                  <Link href="/about" className="hover:text-brand-text transition-colors">Privacy Policy</Link>
                  <Link href="/about" className="hover:text-brand-text transition-colors">Terms of Service</Link>
                  <Link href="/contact" className="hover:text-brand-text transition-colors">Contact</Link>
                </div>
              </div>
              <div className="text-center md:text-left mt-8 font-ui text-xs text-brand-text-muted">
                &copy; {new Date().getFullYear()} ZCC Foundation. All rights reserved. Empowering education in chemistry in Bangladesh.
              </div>
            </div>
          </footer>
        </SplashScreen>
      </body>
    </html>
  );
}
