import "./globals.css";
import Head from 'next/head';

export const metadata = {
  title: "Number Translate",
  description: "Translate numbers to English with ease. Simply enter a number and get its English equivalent.",
  keywords: "number translate, translate numbers, english translation",
  og: {
    title: "Number Translate",
    description: "Translate numbers to English with ease. Simply enter a number and get its English equivalent.",
    type: "website",
    url: "https://number-translate.vercel.app/",
    image: "https://number-translate.vercel.app/og-image.png"
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Number Translate",
    description: "Translate numbers to English with ease. Simply enter a number and get its English equivalent.",
    image: "https://number-translate.vercel.app/og-image.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:image" content={metadata.og.image} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        
        <link rel="canonical" href={metadata.og.url} />
      </Head>
      <body className="w-full h-screen bg-zinc-800 flex justify-center items-center">
        {children}
      </body>
    </html>
  );
}
