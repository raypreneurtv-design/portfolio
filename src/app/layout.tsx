import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "InsightOperator | AI Quote System & Receptionist for Home Service Businesses",
  description: "Turn website visitors into booked jobs with AI-powered instant quotes, 24/7 AI receptionist, and smart chat systems. Built for HVAC, plumbing, roofing, landscaping, and electrical businesses.",
  keywords: [
    "AI quote system",
    "AI receptionist",
    "home service lead generation",
    "HVAC lead generation",
    "plumbing leads",
    "roofing leads",
    "contractor website",
    "instant quote system",
    "24/7 receptionist",
    "AI chatbot for contractors",
  ],
  openGraph: {
    title: "InsightOperator | AI Quote System & Receptionist for Home Service Businesses",
    description: "Turn website visitors into booked jobs in 60 seconds. AI-powered instant quotes, 24/7 receptionist, and smart chat for home service businesses.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "InsightOperator | AI Lead Generation for Home Services",
    description: "3x your leads with AI-powered instant quotes, 24/7 receptionist, and smart chat systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(0, 0, 0, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
}
