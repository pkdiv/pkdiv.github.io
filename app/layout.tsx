import type { Metadata, Viewport } from "next";
import "./globals.css";
import { getPortfolioData } from "@/lib/data";
import { LayoutShell } from "@/components/layout-shell";

export const metadata: Metadata = {
  title: "Divyesh P K | DevOps & Security Engineer",
  description: "DevOps & Security Engineer building secure and scalable systems.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = getPortfolioData();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <LayoutShell data={data}>{children}</LayoutShell>
      </body>
    </html>
  );
}
