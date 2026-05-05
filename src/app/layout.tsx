import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JMSS Practice Suite",
  description: "Student and admin practice platform for JMSS entrance preparation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto min-h-screen max-w-7xl p-5 md:p-8">{children}</main>
      </body>
    </html>
  );
}
