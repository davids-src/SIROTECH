import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Script from "next/script";

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
  title: {
    default:
      "SIROTECH – IT üzemeltetés, biztonságtechnika, szoftverfejlesztés | Székesfehérvár",
    template: "%s | SIROTECH",
  },
  description:
    "IT üzemeltetés, rendszergazda szolgáltatás, kamerarendszer telepítés, egyedi szoftverfejlesztés és villanyszerelés – Székesfehérváron, Fejér megyében és Budapesten. Egy partner, minden technológiai réteghez.",
  keywords: [
    "IT üzemeltetés",
    "rendszergazda szolgáltatás",
    "informatikai outsourcing",
    "managed IT services",
    "NIS2 tanácsadás",
    "IT support",
    "kamerarendszer telepítés",
    "biztonságtechnika",
    "riasztórendszer",
    "tűzjelző rendszer",
    "beléptető rendszer",
    "egyedi szoftverfejlesztés",
    "ERP rendszer",
    "CRM fejlesztés",
    "webalkalmazás fejlesztés",
    "villanyszerelés",
    "ipari villanyszerelés",
    "érintésvédelmi mérés",
    "székesfehérvári IT szolgáltató",
    "fejér megyei rendszergazda",
    "székesfehérvári biztonságtechnika",
    "fejér megyei kamerarendszer telepítő",
    "székesfehérvári szoftverfejlesztő",
    "székesfehérvári villanyszerelő cég",
    "közép-dunántúli IT partner",
    "IT outsourcing Magyarország",
    "hálózatépítés KKV",
  ],
  authors: [{ name: "SIROTECH Informatikai és Biztonságtechnikai Kft." }],
  creator: "SIROTECH Kft.",
  publisher: "SIROTECH Kft.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://sirotech.hu",
  },
  openGraph: {
    title:
      "SIROTECH – IT üzemeltetés, biztonságtechnika, szoftverfejlesztés | Székesfehérvár",
    description:
      "Egy partner az infrastruktúrája minden rétegéhez. IT üzemeltetés, kamerarendszer telepítés, egyedi szoftver, villanyszerelés – Fejér megye, Budapest és a Közép-Dunántúl.",
    url: "https://sirotech.hu",
    siteName: "SIROTECH",
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIROTECH – IT, biztonságtechnika, szoftverfejlesztés | Székesfehérvár",
    description:
      "Egy partner az infrastruktúrája minden rétegéhez – Székesfehérvár, Fejér megye, Budapest.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "SIROTECH Informatikai és Biztonságtechnikai Kft.",
  legalName: "SIROTECH Informatikai és Biztonságtechnikai Kft.",
  taxID: "33056151-2-07",
  url: "https://sirotech.hu",
  email: "info@sirotech.hu",
  logo: "https://sirotech.hu/brand/sirotech_seal.svg",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lövölde utca 24",
    addressLocality: "Székesfehérvár",
    postalCode: "8000",
    addressRegion: "Fejér",
    addressCountry: "HU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "47.1885",
    longitude: "18.4231",
  },
  areaServed: [
    { "@type": "City", name: "Székesfehérvár" },
    { "@type": "AdministrativeArea", name: "Fejér megye" },
    { "@type": "City", name: "Dunaújváros" },
    { "@type": "City", name: "Bicske" },
    { "@type": "City", name: "Mór" },
    { "@type": "City", name: "Gárdony" },
    { "@type": "City", name: "Martonvásár" },
    { "@type": "City", name: "Sárbogárd" },
    { "@type": "City", name: "Velence" },
    { "@type": "City", name: "Polgárdi" },
    { "@type": "City", name: "Aba" },
    { "@type": "City", name: "Bodajk" },
    { "@type": "City", name: "Enying" },
    { "@type": "City", name: "Budapest" },
    { "@type": "City", name: "Győr" },
    { "@type": "City", name: "Veszprém" },
    { "@type": "City", name: "Tatabánya" },
    { "@type": "City", name: "Kecskemét" },
    { "@type": "City", name: "Érd" },
    { "@type": "City", name: "Dunaharaszti" },
    { "@type": "AdministrativeArea", name: "Pest megye" },
    { "@type": "AdministrativeArea", name: "Közép-Dunántúl" },
  ],
  serviceType: [
    "IT üzemeltetés és rendszergazda szolgáltatás",
    "Hálózati infrastruktúra kiépítés",
    "NIS2 megfelelőségi tanácsadás és audit-felkészítés",
    "Kamerarendszer telepítés és biztonságtechnika",
    "Tűzjelző rendszer kiépítés és karbantartás",
    "Beléptető rendszer telepítés",
    "Egyedi szoftverfejlesztés és webalkalmazás fejlesztés",
    "ERP és CRM rendszer bevezetés és integráció",
    "Villanyszerelés és érintésvédelmi mérés",
    "Ipari elektromos kivitelezés",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Hatósági bizonyítvány – Biztonságtechnikai szerelői engedély",
      identifier: "07010-822/7987/2026. SZv.",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Építési nyilvántartás",
      identifier: "17C03049",
    },
  ],
  subOrganization: [
    {
      "@type": "Organization",
      name: "SIRONIC",
      description:
        "IT üzemeltetés, rendszergazda szolgáltatás, hálózatépítés, NIS2 megfelelőségi tanácsadás – Székesfehérvár és Fejér megye",
      url: "https://sironic.hu",
    },
    {
      "@type": "Organization",
      name: "SIRO-VÉD",
      description:
        "Biztonságtechnika: kamerarendszer telepítés, riasztórendszer, tűzjelző, beléptető rendszer – Székesfehérvár és Fejér megye",
      url: "https://siroved.hu",
    },
    {
      "@type": "Organization",
      name: "SIROSOFT",
      description:
        "Egyedi szoftverfejlesztés, ERP rendszer, CRM, webalkalmazás fejlesztés – KKV-knak Magyarországon",
      url: "https://sirosoft.hu",
    },
    {
      "@type": "Organization",
      name: "SIROVILL",
      description:
        "Villanyszerelés, ipari elektromos kivitelezés, érintésvédelmi mérés – Székesfehérvár és Fejér megye",
      url: "https://sirovill.hu",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <head>
        <meta name="geo.region" content="HU-FE" />
        <meta name="geo.placename" content="Székesfehérvár, Fejér, Hungary" />
        <meta name="geo.position" content="47.1885;18.4231" />
        <meta name="ICBM" content="47.1885, 18.4231" />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-bg text-ink`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X17WZ915P9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X17WZ915P9');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
