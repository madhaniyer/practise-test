import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JMSS Practice Suite",
  description: "Year 10 entrance exam practice for John Monash Science School",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
