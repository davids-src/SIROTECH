import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";
import { SITE } from "@/lib/config";

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
    "IT üzemeltetés, rendszergazda szolgáltatás, kamerarendszer telepítés, egyedi szoftverfejlesztés és villanyszerelés – Fejér megyében, Budapesten és a Közép-Dunántúlon. Egy partner, minden technológiai réteghez.",
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
    "székesfehérvári IT szolgáltató",
    "fejér megyei rendszergazda",
    "székesfehérvári biztonságtechnika",
    "fejér megyei kamerarendszer telepítő",
    "székesfehérvári szoftverfejlesztő",
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
      "Egy partner az infrastruktúrája minden rétegéhez – Fejér megye, Budapest, Közép-Dunántúl.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "SIROTECH Informatikai és Biztonságtechnikai Kft.",
  legalName: "SIROTECH Informatikai és Biztonságtechnikai Kft.",
  taxID: "33056151-2-07",
  identifier: "07-09-037603",
  url: "https://sirotech.hu",
  telephone: "+36 70 273 5532",
  email: "hello@sironic.hu",
  logo: "https://sirotech.hu/brand/sirotech_seal.svg",
  foundingDate: "2021",
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
    { "@type": "AdministrativeArea", name: "Fejér megye" },
    { "@type": "City", name: "Székesfehérvár" },
    { "@type": "City", name: "Budapest" },
    { "@type": "AdministrativeArea", name: "Közép-Dunántúl" },
  ],
  serviceType: [
    "IT üzemeltetés és rendszergazda szolgáltatás",
    "Hálózati infrastruktúra kiépítés",
    "NIS2 megfelelőségi tanácsadás",
    "Kamerarendszer telepítés és biztonságtechnika",
    "Tűzjelző rendszer kiépítés és karbantartás",
    "Beléptető rendszer telepítés",
    "Egyedi szoftverfejlesztés és webalkalmazás fejlesztés",
    "ERP és CRM rendszer bevezetés és integráció",
    "Villanyszerelés",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Rendőrhatósági biztonságtechnikai engedély",
      identifier: "07010-822/7987/2026. SZv.",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Építőipari nyilvántartás",
      identifier: "17C03049",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Tűzvédelmi szakvizsga",
      identifier: "Érvényes",
    },
  ],
  subOrganization: [
    {
      "@type": "Organization",
      name: "SIRONIC",
      description:
        "IT üzemeltetés, rendszergazda szolgáltatás, hálózatépítés, NIS2 megfelelőségi tanácsadás – Fejér megye és Budapest",
      url: "https://sironic.eu",
    },
    {
      "@type": "Organization",
      name: "SIRO-VÉD",
      description:
        "Biztonságtechnika: kamerarendszer telepítés, riasztórendszer, tűzjelző, beléptető rendszer – Fejér megye és Budapest",
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
        "Villanyszerelés, ipari elektromos kivitelezés – Fejér megye és Budapest",
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
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <I18nProvider>
          {children}
          <CookieBanner />
        </I18nProvider>
      </body>
    </html>
  );
}
