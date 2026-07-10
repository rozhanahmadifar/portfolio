import type { Metadata } from "next";
import { Inter, Fraunces, Mrs_Saint_Delafield } from "next/font/google";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["500", "600"],
  subsets: ["latin"],
});

const mrsSaintDelafield = Mrs_Saint_Delafield({
  variable: "--font-mrs-saint-delafield",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rozhan Ahmadifar | Product Designer",
  description: "Product design case studies and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${mrsSaintDelafield.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <header className="sticky top-0 z-50 border-b border-hairline bg-bg">
          <div className="mx-auto flex h-[90px] max-w-[1200px] items-center justify-between px-10">
            <Link
              href="/"
              className="text-[28px] leading-none !text-teal-deep"
              style={{ fontFamily: "var(--font-mrs-saint-delafield)" }}
            >
              RA
            </Link>
            <NavLinks />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-hairline py-8 text-center">
          <p className="text-caption not-italic">
            {`© ${new Date().getFullYear()} Rozhan Ahmadifar`}
          </p>
        </footer>
      </body>
    </html>
  );
}
