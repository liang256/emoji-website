import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./conponents/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emoji Website",
  description: "Explore and copy various emojis by category",
  openGraph: {
    title: "Emoji Website",
    description: "Explore and copy various emojis by category",
    type: "website",
    url: "https://emoji.liangyu.dev",
    images: "https://emoji.liangyu.dev/og-image.jpg"
  }
};

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
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description ?? ""} />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Emoji Website" />
        <meta property="og:description" content="Explore and copy various emojis by category" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emoji.liangyu.dev" />
        <meta property="og:image" content="https://emoji.liangyu.dev/og-image.jpg" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emoji Website" />
        <meta name="twitter:description" content="Explore and copy various emojis by category" />
        <meta name="twitter:image" content="https://emoji.liangyu.dev/twitter-image.jpg" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Website",
              "url": metadata.openGraph?.url ?? "",
              "name": metadata.title,
              "description": metadata.description,
              "image": metadata.openGraph?.images ?? ""
            }),
          }}
        />
      </head>
      <body>
        <header>
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-center mt-8 text-green-500">Emoji Picker</h1>
            <p className="text-center p-2 text-gray-800">Click on an emoji to copy it to clipboard.</p>
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
