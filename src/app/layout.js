import "./globals.css";
import Head from 'next/head';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

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
      </Head>
      <body className="w-full h-screen bg-zinc-800 flex justify-center items-center">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
