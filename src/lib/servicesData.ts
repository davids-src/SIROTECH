export interface ServiceDetail {
  slug: string;
  brand: string;
  accentColor: string; // hex
  borderClass: string;
  bgClass: string;
  heading_hu: string;
  heading_en: string;
  body_hu: string;
  body_en: string;
  chips_hu: string[];
  chips_en: string[];
  primary_cta_hu: string;
  primary_cta_en: string;
  href: string; // outbound specialist domain
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  informatika: {
    slug: "informatika",
    brand: "SIRONIC",
    accentColor: "#E8271A",
    borderClass: "border-sironic-red/50 hover:border-sironic-red text-sironic-red",
    bgClass: "bg-sironic-red/10",
    heading_hu: "Informatikai háttér, ami együtt nő a vállalkozással.",
    heading_en: "IT infrastructure that scales seamlessly with your business.",
    body_hu: "Hálózat, Wi-Fi, szerver, Microsoft 365, támogatás és üzemeltetés — specialistánk a SIRONIC.",
    body_en: "Managed IT, Wi-Fi, servers, Microsoft 365, support, and operation — handled by our specialist SIRONIC.",
    chips_hu: [
      "Rendszergazdai felügyelet",
      "Strukturált Cat6A / Optikai hálózat",
      "Zavarmentes vállalati Wi-Fi (Ubiquiti/Aruba)",
      "Microsoft 365 & Felhő migráció",
      "Szerver- és rack környezet kiépítés",
      "7/24 IT támogatás és SLA"
    ],
    chips_en: [
      "System Administrator Operations",
      "Structured Cat6A / Fiber Cabling",
      "Enterprise Wi-Fi Coverage (Ubiquiti/Aruba)",
      "Microsoft 365 & Cloud Migration",
      "Server Room & Rack Engineering",
      "24/7 IT Support & SLA Contracts"
    ],
    primary_cta_hu: "Tovább a SIRONIC oldalára",
    primary_cta_en: "Visit SIRONIC Website",
    href: "https://sironic.eu",
  },
  biztonsagtechnika: {
    slug: "biztonsagtechnika",
    brand: "SIRO-VÉD",
    accentColor: "#1A6BE8",
    borderClass: "border-siroved-blue/50 hover:border-siroved-blue text-siroved-blue",
    bgClass: "bg-siroved-blue/10",
    heading_hu: "Biztonságtechnika, ami nem különálló sziget.",
    heading_en: "Security technology that integrates seamlessly.",
    body_hu: "Kamera, riasztó, beléptetés és fizikai védelem — specialistánk a SIRO-VÉD.",
    body_en: "CCTV, alarm, access control, and physical asset protection — handled by our specialist SIRO-VÉD.",
    chips_hu: [
      "Nagy felbontású IP kamerarendszerek",
      "Intelligens Grade 3 behatolásjelzők",
      "Kártyás és biometrikus beléptetők",
      "Rendszámfelismerő kapurendszerek",
      "Diszpécserközponti távfelügyelet",
      "Periméter védelmi infrasorompók"
    ],
    chips_en: [
      "High-Resolution IP CCTV Systems",
      "Grade 3 Intrusion Alarms",
      "RFID Card & Biometric Access Control",
      "License Plate Recognition (LPR) Gates",
      "Central Monitoring Station Telemetry",
      "Perimeter Infrared Beam Barriers"
    ],
    primary_cta_hu: "Tovább a SIRO-VÉD oldalára",
    primary_cta_en: "Visit SIRO-VÉD Website",
    href: "https://siroved.hu",
  },
  villanyszereles: {
    slug: "villanyszereles",
    brand: "SIROVILL",
    accentColor: "#F5B81C",
    borderClass: "border-sirovill-yellow/50 hover:border-sirovill-yellow text-sirovill-yellow",
    bgClass: "bg-sirovill-yellow/10",
    heading_hu: "Villamos alapok a működő infrastruktúrához.",
    heading_en: "Solid electrical foundations for active facilities.",
    body_hu: "Új kialakítás, bővítés, hibakeresés és kivitelezés — specialistánk a SIROVILL.",
    body_en: "New installations, expansions, troubleshooting, and electrical builds — handled by our specialist SIROVILL.",
    chips_hu: [
      "Ipari és irodai villanyszerelés",
      "Fő- és alelosztók tervezése és építése",
      "Szünetmentes tápellátás (UPS) kiépítés",
      "Villamos biztonsági és felülvizsgálatok",
      "Túlfeszültség és villámvédelem",
      "Kábeltálcázás és nyomvonalépítés"
    ],
    chips_en: [
      "Industrial & Commercial Electrical Builds",
      "Main & Sub-Distribution Panel Assembly",
      "Uninterrupted Power Supply (UPS) Circuits",
      "Electrical Safety Compliance Audits",
      "Surge & Lightning Protection Arresters",
      "Cable Tray & Pathway Installations"
    ],
    primary_cta_hu: "Tovább a SIROVILL oldalára",
    primary_cta_en: "Visit SIROVILL Website",
    href: "https://sirovill.hu",
  },
  szoftverfejlesztes: {
    slug: "szoftverfejlesztes",
    brand: "SIROSOFT",
    accentColor: "#1AE87B",
    borderClass: "border-sirosoft-green/50 hover:border-sirosoft-green text-sirosoft-green",
    bgClass: "bg-sirosoft-green/10",
    heading_hu: "Szoftver, ami a folyamathoz alkalmazkodik.",
    heading_en: "Software engineered around your business workflows.",
    body_hu: "Egyedi üzleti rendszerek, integráció és automatizálás — specialistánk a SIROSOFT.",
    body_en: "Custom business software, API integration, and automation — handled by our specialist SIROSOFT.",
    chips_hu: [
      "Egyedi webes vállalati alkalmazások",
      "API és adatbázis integráció",
      "Üzleti folyamatautomatizálás",
      "Felhős backend rendszerek",
      "Gyártási és raktári adategyeztetés",
      "Reszponzív ügyfélszolgálati portálok"
    ],
    chips_en: [
      "Custom Web & Enterprise Applications",
      "API & Database Systems Integration",
      "Business Process Automation",
      "Cloud Backend & Serverless Architecture",
      "Manufacturing & Logistics Data Feeds",
      "Responsive Client Portal Dashboards"
    ],
    primary_cta_hu: "Tovább a SIROSOFT oldalára",
    primary_cta_en: "Visit SIROSOFT Website",
    href: "https://sirosoft.hu",
  }
};
