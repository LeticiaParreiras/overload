import type { Metadata } from "next";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Overload</title>
      <body
      >
        {children}
      </body>
    </html>
  );
}
