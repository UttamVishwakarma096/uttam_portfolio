import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uttam Vishwakarma — Full-stack developer",
  description: "Portfolio of Uttam Vishwakarma, a MERN stack developer from Mumbai.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
