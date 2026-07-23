import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-Gen Expertise For Your Enterprise",
  description:
    "Cultivate high-performance teams through expert learning. Tailored corporate training programs, industry insights, and expert guidance from Accredian Enterprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
