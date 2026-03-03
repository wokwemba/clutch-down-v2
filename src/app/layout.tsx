import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Car-diology | On-Demand Car Service Platform",
  description: "Find a mechanic near you, order spare parts, and book workshops — all in one app. Fast, reliable, transparent. Available 24/7.",
  keywords: "car service, mechanic on demand, spare parts, workshop booking, towing service, roadside assistance",
  openGraph: {
    title: "Car-diology | On-Demand Car Service Platform",
    description: "Don't get stranded. Find a mechanic near you, order spare parts, and book workshops instantly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
