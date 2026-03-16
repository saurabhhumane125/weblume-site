import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weblume — Software Development Agency",
  description:
    "We design and build websites, mobile apps, and digital systems for businesses and startups. Clean code, thoughtful design, reliable delivery.",
  openGraph: {
    title: "Weblume — Software Development Agency",
    description:
      "We design and build websites, mobile apps, and digital systems for businesses and startups.",
    images: ["/og-image.png"],
    type: "website",
    siteName: "Weblume",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weblume — Software Development Agency",
    description:
      "We design and build websites, mobile apps, and digital systems for businesses and startups.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
