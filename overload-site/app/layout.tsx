import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Get to know the band Overload and their concerts and songs." />
        <meta name="keywords" content="Overload, metal, rock, band, music, shows, portfolio" />

      {/* Open Graph */}
      <meta property="og:title" content="Overload" />
      <meta property="og:description" content="Get to know the band Overload and their concerts and songs." />
      <meta property="og:image" content="https://overload-eta.vercel.app/home.webp" />
      <meta property="og:url" content="https://overload-eta.vercel.app" />
      <meta property="og:type" content="website" />

        <title>Overload</title>
      </head>
      <body>{children}</body>
    </html>
  );
}