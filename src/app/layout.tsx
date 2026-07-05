import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: "700",
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
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-body">
        <header className="border-b border-border">
          <div className="mx-auto max-w-6xl px-10 md:px-14 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight !text-accent visited:!text-accent no-underline"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              RA
            </Link>
            <nav className="flex gap-8">
              <Link
                href="/"
                className="body !text-heading visited:!text-heading no-underline hover:!text-accent"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="body !text-heading visited:!text-heading no-underline hover:!text-accent"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="body !text-heading visited:!text-heading no-underline hover:!text-accent"
              >
                About
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border">
          <div className="mx-auto max-w-6xl px-10 md:px-14 py-8">
            <p className="caption">
              {`© ${new Date().getFullYear()} Portfolio. Built with Next.js & Tailwind CSS.`}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
