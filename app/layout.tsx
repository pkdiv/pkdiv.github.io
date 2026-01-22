import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google"
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Divyesh P K",
  description: "Divyesh's portfolio website",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
