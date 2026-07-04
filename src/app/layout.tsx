import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Case studies and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-body">
        <header className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 md:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="h3 !text-heading no-underline">
              Portfolio
            </Link>
            <nav className="flex gap-8">
              <Link
                href="/"
                className="body font-medium !text-body no-underline hover:!text-accent"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="body font-medium !text-body no-underline hover:!text-accent"
              >
                About
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border">
          <div className="mx-auto max-w-5xl px-6 md:px-8 py-8">
            <p className="caption">
              {`© ${new Date().getFullYear()} Portfolio. Built with Next.js & Tailwind CSS.`}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
