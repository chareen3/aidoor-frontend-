import type { Metadata } from "next";
import "./globals.css";
import { clsx } from "clsx";

export const metadata: Metadata = {
  title: "AIDoor — Ideas with AI",
  description: "AIDoor helps creators and brands turn ideas into scalable AI-driven influencer content systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(
        "bg-warm-50 text-charcoal-950 dark:bg-charcoal-950 dark:text-warm-50",
        "transition-colors duration-300"
      )}>
        {children}
      </body>
    </html>
  );
}
