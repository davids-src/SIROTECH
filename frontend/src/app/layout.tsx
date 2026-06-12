import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const display = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
});
const body = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
});
const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "SIROTECH – IT üzemeltetés, biztonságtechnika, szoftverfejlesztés",
  description:
    "IT üzemeltetés, biztonságtechnika és egyedi szoftverfejlesztés — specialistáktól, egy kézből. SIRONIC · SIRO-VÉD · SIROSOFT.",
  openGraph: {
    title: "SIROTECH – IT Operations, Security Systems & Software Development",
    description:
      "One partner. Every layer of your infrastructure. SIRONIC · SIRO-VÉD · SIROSOFT.",
    url: "https://sirotech.hu",
    siteName: "SIROTECH",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SIROTECH Informatikai és Biztonságtechnikai Kft.",
  url: "https://sirotech.hu",
  email: "info@sirotech.hu",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Budapest",
    addressCountry: "HU",
  },
  subOrganization: [
    { "@type": "Organization", name: "SIRONIC", url: "https://sironic.hu" },
    { "@type": "Organization", name: "SIRO-VÉD", url: "https://siroved.hu" },
    { "@type": "Organization", name: "SIROSOFT", url: "https://sirosoft.hu" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-bg text-ink`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
