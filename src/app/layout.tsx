import type { Metadata } from "next";
import { Inter, Fraunces, Mrs_Saint_Delafield } from "next/font/google";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import ContactLinks from "@/components/ContactLinks";
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

const SITE_URL = "https://rozhanahmadifar.com";
const SITE_TITLE = "Rozhan Ahmadifar | Product Designer";
const SITE_DESCRIPTION =
  "Product Designer with a background in Interaction Design, most recently working in fintech. I make complex things feel simple and trustworthy enough to act on with confidence.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Rozhan Ahmadifar",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
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
        <footer className="border-t border-hairline py-12 text-center">
          <p className="text-eyebrow mb-3">Get in touch</p>
          <div className="flex justify-center">
            <ContactLinks />
          </div>
          <p className="text-caption not-italic mt-8">
            {`© ${new Date().getFullYear()} Rozhan Ahmadifar`}
          </p>
        </footer>
      </body>
    </html>
  );
}
