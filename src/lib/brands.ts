export type Brand = {
  id: "sironic" | "siroved" | "sirosoft" | "sirovill";
  name: string;
  color: string;
  href: string;
  logo: string;
  comingSoon?: boolean;
};

export const BRANDS: Brand[] = [
  {
    id: "sironic",
    name: "SIRONIC",
    color: "#E8271A",
    href: "https://sironic.eu",
    logo: "/brand/sironic_logo.svg",
  },
  {
    id: "siroved",
    name: "SIRO-VÉD",
    color: "#1A6BE8",
    href: "https://siroved.hu",
    logo: "/brand/siroved_logo.svg",
  },
  {
    id: "sirosoft",
    name: "SIROSOFT",
    color: "#1AE87B",
    href: "https://sirosoft.hu",
    logo: "/brand/sirosoft_logo.svg",
  },
  {
    id: "sirovill",
    name: "SIROVILL",
    color: "#F5B81C",
    href: "https://sirovill.hu",
    logo: "/brand/sirovill_logo.svg",
  },
];
