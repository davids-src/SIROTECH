export type Brand = {
  id: "sironic" | "siroved" | "sirosoft" | "sirovill";
  name: string;
  color: string;
  href: string;
  logo: string;
};

export const BRANDS: Brand[] = [
  {
    id: "sironic",
    name: "SIRONIC",
    color: "#E8271A",
    href: "https://sironic.hu",
    logo: "/logos/sironic.svg",
  },
  {
    id: "siroved",
    name: "SIRO-VÉD",
    color: "#1A6BE8",
    href: "https://siroved.hu",
    logo: "/logos/siroved.svg",
  },
  {
    id: "sirosoft",
    name: "SIROSOFT",
    color: "#1AE87B",
    href: "https://sirosoft.hu",
    logo: "/logos/sirosoft.svg",
  },
  {
    id: "sirovill",
    name: "SIROVILL",
    color: "#F5B81C",
    href: "https://sirovill.hu",
    logo: "/logos/sirovill.svg",
  },
];
