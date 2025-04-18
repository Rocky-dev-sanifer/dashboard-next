import { inter } from "./ui/fonts";

import type { Metadata } from "next";

import "./globals.css";

/*
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Exercice dasboard avec NextJs",
};
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
