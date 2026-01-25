import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Automate What Matters | InsightOperator",
  description: "We deploy AI automation systems that replace repetitive work, accelerate your workflows, and multiply your team's output by 10x.",
  keywords: ["AI automation", "AI receptionist", "lead generation", "AI consulting", "workflow automation", "n8n", "Claude AI"],
  openGraph: {
    title: "Automate What Matters | InsightOperator",
    description: "AI automation systems that replace repetitive work and multiply your team's output by 10x.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
