import type { Metadata } from "next";
import { Orbitron, Rajdhani, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { MatrixBackground } from "@/components/MatrixBackground";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-cyber-display",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cyber-body",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cyber-mono",
  display: "swap",
});

const siteUrl = "https://hackhalt-content-intelligence.vercel.app";
const title = "HackHalt's Biggest Vulnerability Isn't Technical | Content Security Audit";
const description =
  "A structured content security audit of HackHalt Academy's social media ecosystem — scoping the exposure, tracing the discovery gap to its root cause, and designing a repeatable content, workflow and measurement system to close it.";

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
  headline: "HackHalt's Biggest Vulnerability Isn't Technical. It's Discoverability.",
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
    <html
      lang="en"
      className={`${orbitron.variable} ${rajdhani.variable} ${shareTechMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <CustomCursor />
        <MatrixBackground />
        {children}
      </body>
    </html>
  );
}
