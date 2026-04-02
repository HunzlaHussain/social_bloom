import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Social Bloom | $250M Growth Engine — Guaranteed Sales-Qualified Leads",
  description:
    "Social Bloom delivers guaranteed sales-qualified leads booked directly on your calendar. 100% Done-For-You outbound engine. Pay only $250 per SQL.",
  metadataBase: new URL("https://socialbloom.io"),
  openGraph: {
    title: "Social Bloom | Stop Searching For Leads. Start Closing Them.",
    description:
      "We deliver guaranteed sales-qualified leads booked directly on your sales calendar. 100% Done-For-You.",
    type: "website",
    url: "https://socialbloom.io",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${figtree.variable} min-h-full flex flex-col font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
