import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ray D. Ndaula | AI Automation Consultant & Full-Stack Developer",
  description: "Specializing in Claude AI, n8n workflows, and custom automation systems that drive real business results.",
  keywords: ["AI automation", "Claude AI", "n8n", "workflow automation", "full-stack developer", "Next.js", "Python"],
  openGraph: {
    title: "Ray D. Ndaula | AI Automation Consultant",
    description: "AI-powered automation systems that increase efficiency and revenue.",
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
