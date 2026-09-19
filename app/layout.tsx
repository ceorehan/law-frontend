import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ZA Law Associates — Expert Tax, Legal & Financial Solutions for Pakistan",
    template: "%s | ZA Law Associates",
  },
  description:
    "FBR-compliant tax filing, legal advisory, corporate compliance, bookkeeping and strategic financial advisory for individuals and businesses across Pakistan.",
  metadataBase: new URL("https://zalawassociates.pk"),
  openGraph: {
    title: "ZA Law Associates",
    description: "Expert Tax, Legal & Financial Solutions for Pakistan",
    siteName: "ZA Law Associates",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
