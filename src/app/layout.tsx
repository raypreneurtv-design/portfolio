import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "InsightOperator | Private, Local AI Setup & Training for Your Business",
  description: "Private AI installed on your own systems, your team trained to run it, and your data staying in-house. Hardware and tool audits, done-for-you installs, on-site training, and n8n automation pipelines. Remote or on-site.",
  keywords: [
    "local AI setup",
    "private AI for business",
    "self-hosted AI",
    "on-premise AI",
    "AI implementation partner",
    "AI team training",
    "Ollama setup",
    "n8n automations",
    "AI receptionist",
    "AI hardware audit",
  ],
  openGraph: {
    title: "InsightOperator | Private, Local AI Setup & Training for Your Business",
    description: "Own your AI instead of renting it. Installed on your own systems, your team trained to run it, your data staying in-house. Remote or on-site.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "InsightOperator | Private, Local AI for Your Business",
    description: "Own your AI instead of renting it. Installed on your systems, your team trained, your data in-house.",
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
      <body className={`${dmSans.variable} font-sans antialiased`}>
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
