import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechFlow - Professional Business Solutions",
  description: "Modern business solutions with cutting-edge technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-br from-purple-700 to-red-700 text-white font-sans">
        {children}
      </body>
    </html>
  );
}
