import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Social Bloom for Lenders | More Qualified Borrower Appointments",
  description:
    "Social Bloom helps lending companies generate qualified borrower appointments for purchase, refinance, and home equity offers without adding more headcount.",
  metadataBase: new URL("https://socialbloom.io"),
  openGraph: {
    title: "Social Bloom for Lenders | More Qualified Borrower Appointments",
    description:
      "Social Bloom helps lending companies generate qualified borrower appointments for purchase, refinance, and home equity offers without adding more headcount.",
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
        className={`${figtree.variable} font-body flex min-h-dvh flex-col overflow-x-hidden bg-sb-bg text-sb-text`}
      >
        {children}
      </body>
    </html>
  );
}
