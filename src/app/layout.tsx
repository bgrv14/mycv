import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Front-End Developer",
  description: "Front-End Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
