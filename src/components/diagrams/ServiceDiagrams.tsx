"use client";

interface ServiceDiagramProps {
  slug: string;
}

export const ServiceDiagram = ({ slug }: ServiceDiagramProps) => {
  switch (slug) {
    case "informatika":
      return (
        <svg viewBox="0 0 540 320" className="w-full h-auto rounded-2xl bg-panel/40 border border-sironic-red/40 p-6 shadow-2xl" aria-hidden="true">
          <rect x="20" y="20" width="500" height="280" rx="12" fill="#111116" stroke="#2A2A35" strokeWidth="1.5" />
          <text x="40" y="50" fontSize="13" fill="#E8271A" fontWeight="bold">SIRONIC IT INFRASTRUKTÚRA TOPOLÓGIA</text>

          {/* Flow: Rack -> Firewall -> Switch -> Wi-Fi -> Endpoints */}
          <rect x="40" y="90" width="80" height="180" rx="6" fill="#18181F" stroke="#E8271A" strokeWidth="1.5" />
          <text x="80" y="120" fontSize="10" fill="#F0F0F5" textAnchor="middle" fontWeight="bold">RACK</text>
          <rect x="50" y="140" width="60" height="20" rx="3" fill="#111116" stroke="#E8271A" strokeWidth="1" />
          <text x="80" y="154" fontSize="8" fill="#E8271A" textAnchor="middle">SERVER</text>

          <line x1="120" y1="180" x2="160" y2="180" stroke="#E8271A" strokeWidth="2" strokeDasharray="3 3" />

          <rect x="160" y="150" width="80" height="60" rx="6" fill="#18181F" stroke="#E8271A" strokeWidth="1.5" />
          <text x="200" y="184" fontSize="9" fill="#F0F0F5" textAnchor="middle" fontWeight="bold">FIREWALL</text>

          <line x1="240" y1="180" x2="280" y2="180" stroke="#E8271A" strokeWidth="2" />

          <rect x="280" y="150" width="80" height="60" rx="6" fill="#18181F" stroke="#E8271A" strokeWidth="1.5" />
          <text x="320" y="184" fontSize="9" fill="#F0F0F5" textAnchor="middle" fontWeight="bold">SWITCH</text>

          <line x1="360" y1="180" x2="400" y2="180" stroke="#E8271A" strokeWidth="2" strokeDasharray="3 3" />

          <circle cx="440" cy="180" r="24" fill="#18181F" stroke="#E8271A" strokeWidth="1.5" />
          <text x="440" y="184" fontSize="9" fill="#F0F0F5" textAnchor="middle" fontWeight="bold">Wi-Fi AP</text>
        </svg>
      );

    case "biztonsagtechnika":
      return (
        <svg viewBox="0 0 540 320" className="w-full h-auto rounded-2xl bg-panel/40 border border-siroved-blue/40 p-6 shadow-2xl" aria-hidden="true">
          <rect x="20" y="20" width="500" height="280" rx="12" fill="#111116" stroke="#2A2A35" strokeWidth="1.5" />
          <text x="40" y="50" fontSize="13" fill="#1A6BE8" fontWeight="bold">SIRO-VÉD TÖBBRÉTEGŰ FIZIKAI VÉDELEM</text>

          {/* Concentric Layers */}
          <circle cx="270" cy="180" r="110" fill="none" stroke="#1A6BE8" strokeWidth="1" strokeDasharray="6 4" strokeOpacity="0.4" />
          <text x="270" y="82" fontSize="9" fill="#1A6BE8" textAnchor="middle">1. RÉTEG: Periméter Kerítés & Rendszámfelismerő</text>

          <circle cx="270" cy="180" r="75" fill="none" stroke="#1A6BE8" strokeWidth="1.5" strokeOpacity="0.7" />
          <text x="270" y="120" fontSize="9" fill="#1A6BE8" textAnchor="middle">2. RÉTEG: Épülethéj, Riasztó & CCTV</text>

          <circle cx="270" cy="180" r="40" fill="#18181F" stroke="#1A6BE8" strokeWidth="2" />
          <text x="270" y="176" fontSize="9" fill="#F0F0F5" textAnchor="middle" fontWeight="bold">3. RÉTEG</text>
          <text x="270" y="190" fontSize="8" fill="#8888A0" textAnchor="middle">Kártyás Beléptetés</text>
        </svg>
      );

    case "villanyszereles":
      return (
        <svg viewBox="0 0 540 320" className="w-full h-auto rounded-2xl bg-panel/40 border border-sirovill-yellow/40 p-6 shadow-2xl" aria-hidden="true">
          <rect x="20" y="20" width="500" height="280" rx="12" fill="#111116" stroke="#2A2A35" strokeWidth="1.5" />
          <text x="40" y="50" fontSize="13" fill="#F5B81C" fontWeight="bold">SIROVILL ERŐS- ÉS GYENGEÁRAMÚ ELOSZTÁS</text>

          {/* Main Distribution Panel */}
          <rect x="50" y="90" width="100" height="180" rx="8" fill="#18181F" stroke="#F5B81C" strokeWidth="2" />
          <text x="100" y="120" fontSize="10" fill="#F5B81C" textAnchor="middle" fontWeight="bold">FŐELOSZTÓ</text>

          <path d="M150 140 L260 140 L340 100" stroke="#F5B81C" strokeWidth="2" />
          <path d="M150 180 L260 180 L340 180" stroke="#F5B81C" strokeWidth="2" />
          <path d="M150 220 L260 220 L340 260" stroke="#F5B81C" strokeWidth="2" />

          <circle cx="370" cy="100" r="20" fill="#18181F" stroke="#F5B81C" strokeWidth="1.5" />
          <text x="370" y="104" fontSize="8" fill="#F0F0F5" textAnchor="middle">Áramkör A</text>

          <circle cx="370" cy="180" r="20" fill="#18181F" stroke="#F5B81C" strokeWidth="1.5" />
          <text x="370" y="184" fontSize="8" fill="#F0F0F5" textAnchor="middle">Áramkör B</text>

          <circle cx="370" cy="260" r="20" fill="#18181F" stroke="#F5B81C" strokeWidth="1.5" />
          <text x="370" y="264" fontSize="8" fill="#F0F0F5" textAnchor="middle">Áramkör C</text>
        </svg>
      );

    case "szoftverfejlesztes":
      return (
        <svg viewBox="0 0 540 320" className="w-full h-auto rounded-2xl bg-panel/40 border border-sirosoft-green/40 p-6 shadow-2xl" aria-hidden="true">
          <rect x="20" y="20" width="500" height="280" rx="12" fill="#111116" stroke="#2A2A35" strokeWidth="1.5" />
          <text x="40" y="50" fontSize="13" fill="#1AE87B" fontWeight="bold">SIROSOFT SZOFTVER ARCHITEKTÚRA</text>

          <rect x="50" y="130" width="80" height="60" rx="6" fill="#18181F" stroke="#1AE87B" strokeWidth="1.5" />
          <text x="90" y="164" fontSize="9" fill="#1AE87B" textAnchor="middle" fontWeight="bold">USER / UI</text>

          <line x1="130" y1="160" x2="180" y2="160" stroke="#1AE87B" strokeWidth="2" strokeDasharray="3 3" />

          <rect x="180" y="130" width="90" height="60" rx="6" fill="#18181F" stroke="#1AE87B" strokeWidth="1.5" />
          <text x="225" y="164" fontSize="9" fill="#F0F0F5" textAnchor="middle" fontWeight="bold">WORKFLOW</text>

          <line x1="270" y1="160" x2="320" y2="160" stroke="#1AE87B" strokeWidth="2" />

          <rect x="320" y="130" width="80" height="60" rx="6" fill="#18181F" stroke="#1AE87B" strokeWidth="1.5" />
          <text x="360" y="164" fontSize="9" fill="#1AE87B" textAnchor="middle" fontWeight="bold">REST API</text>

          <line x1="400" y1="160" x2="440" y2="160" stroke="#1AE87B" strokeWidth="2" strokeDasharray="3 3" />

          <circle cx="475" cy="160" r="22" fill="#18181F" stroke="#1AE87B" strokeWidth="1.5" />
          <text x="475" y="164" fontSize="9" fill="#F0F0F5" textAnchor="middle" fontWeight="bold">DB</text>
        </svg>
      );

    default:
      return null;
  }
};
