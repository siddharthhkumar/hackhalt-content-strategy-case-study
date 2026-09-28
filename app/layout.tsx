import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-plex",
  display: "swap",
});

const siteUrl = "https://hackhalt-content-intelligence.vercel.app";
const title = "From Posting Content to Building a Content System | HackHalt Case Study";
const description =
  "A strategic review of HackHalt Academy's social media ecosystem — diagnosing the discovery gap and designing a repeatable cybersecurity content, workflow and measurement system.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "HackHalt",
    "HackHalt Academy",
    "cybersecurity content strategy",
    "cybersecurity social media strategy",
    "content strategy for cybersecurity education",
    "social media growth strategy",
    "cybersecurity education marketing",
    "content operations workflow",
    "social media content workflow",
    "content automation",
    "content repurposing strategy",
  ],
  authors: [{ name: "Siddharth Kumar" }],
  openGraph: {
    title,
    description,
    type: "article",
    url: siteUrl,
    siteName: "HackHalt Content Intelligence",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "From Posting Content to Building a Content System",
  description,
  about: {
    "@type": "Organization",
    name: "HackHalt Academy",
  },
  author: {
    "@type": "Person",
    name: "Siddharth Kumar",
  },
  articleSection: [
    "Context",
    "Diagnosis",
    "Content Strategy",
    "Workflow",
    "Automation",
    "Measurement",
    "Growth Loop",
  ],
  keywords:
    "cybersecurity content strategy, social media growth strategy, content operations workflow, content automation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
