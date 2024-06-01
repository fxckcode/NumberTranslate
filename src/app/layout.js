import "./globals.css";

export const metadata = {
  title: "Number Translate",
  description: "Translate numbers to English with ease. Simply enter a number and get its English equivalent.",
  keywords: "number translate, translate numbers, english translation",
  og: {
    title: "Number Translate",
    description: "Translate numbers to English with ease. Simply enter a number and get its English equivalent.",
    type: "website",
    url: "https://your-app-url.com",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-screen bg-zinc-800 flex justify-center items-center">{children}</body>
    </html>
  );
}
