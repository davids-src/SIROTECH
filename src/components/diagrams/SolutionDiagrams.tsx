"use client";

interface SolutionDiagramProps {
  slug: string;
}

export const SolutionDiagram = ({ slug }: SolutionDiagramProps) => {
  switch (slug) {
    case "uj-telephely":
      return (
        <svg viewBox="0 0 600 340" className="w-full h-auto rounded-xl bg-panel/50 border border-line p-4 shadow-inner">
          <rect x="20" y="20" width="560" height="300" rx="10" fill="#111116" stroke="#2A2A35" strokeWidth="2" />
          
          {/* Site boundary */}
          <rect x="40" y="40" width="220" height="150" rx="6" fill="#18181F" stroke="#E8271A" strokeWidth="1.5" />
          <text x="50" y="65" fontSize="12" fill="#F0F0F5" fontWeight="bold">Iroda & Rack Helyiség</text>
          <circle cx="210" cy="70" r="14" fill="#111116" stroke="#E8271A" strokeWidth="1.5" />
          <text x="210" y="74" fontSize="8" fill="#E8271A" textAnchor="middle" fontWeight="bold">RACK</text>

          {/* Parking & Gate */}
          <rect x="300" y="40" width="240" height="100" rx="6" fill="#18181F" stroke="#1A6BE8" strokeWidth="1.5" />
          <text x="310" y="65" fontSize="12" fill="#F0F0F5" fontWeight="bold">Parkoló & Bejárati Kapu</text>
          <circle cx="500" cy="70" r="10" fill="#111116" stroke="#1A6BE8" strokeWidth="1.5" />
          <text x="500" y="73" fontSize="7" fill="#1A6BE8" textAnchor="middle">CCTV</text>

          {/* Industrial Hall */}
          <rect x="40" y="210" width="500" height="100" rx="6" fill="#18181F" stroke="#F5B81C" strokeWidth="1.5" />
          <text x="50" y="235" fontSize="12" fill="#F0F0F5" fontWeight="bold">Üzemcsarnok & Raktár</text>
          <circle cx="200" cy="260" r="10" fill="#111116" stroke="#F5B81C" strokeWidth="1.5" />
          <text x="200" y="263" fontSize="7" fill="#F5B81C" textAnchor="middle">Wi-Fi</text>
          <circle cx="400" cy="260" r="10" fill="#111116" stroke="#1AE87B" strokeWidth="1.5" />
          <text x="400" y="263" fontSize="7" fill="#1AE87B" textAnchor="middle">POWER</text>

          {/* Interconnecting Lines */}
          <path d="M210 84 L210 210" stroke="#E8271A" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M260 115 L300 115" stroke="#1A6BE8" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      );

    case "uj-iroda":
      return (
        <svg viewBox="0 0 600 340" className="w-full h-auto rounded-xl bg-panel/50 border border-line p-4 shadow-inner">
          <rect x="20" y="20" width="560" height="300" rx="10" fill="#111116" stroke="#2A2A35" strokeWidth="2" />
          {/* Office Layout Zones */}
          <rect x="40" y="40" width="240" height="130" rx="6" fill="#18181F" stroke="#2A2A35" strokeWidth="1.5" />
          <text x="50" y="65" fontSize="11" fill="#8888A0" fontWeight="bold">Open Space Munkaállomások</text>
          <circle cx="100" cy="110" r="12" fill="#111116" stroke="#E8271A" strokeWidth="1.5" />
          <text x="100" y="113" fontSize="8" fill="#E8271A" textAnchor="middle">LAN</text>
          <circle cx="180" cy="110" r="12" fill="#111116" stroke="#E8271A" strokeWidth="1.5" />
          <text x="180" y="113" fontSize="8" fill="#E8271A" textAnchor="middle">LAN</text>

          <rect x="300" y="40" width="240" height="130" rx="6" fill="#18181F" stroke="#E8271A" strokeWidth="1.5" />
          <text x="310" y="65" fontSize="11" fill="#E8271A" fontWeight="bold">Tárgyaló & AV Rendszer</text>
          <circle cx="420" cy="110" r="16" fill="#111116" stroke="#E8271A" strokeWidth="1.5" />
          <text x="420" y="114" fontSize="8" fill="#F0F0F5" textAnchor="middle">Wi-Fi AP</text>

          <rect x="40" y="190" width="160" height="110" rx="6" fill="#18181F" stroke="#1A6BE8" strokeWidth="1.5" />
          <text x="50" y="215" fontSize="11" fill="#1A6BE8" fontWeight="bold">Recepció & Bejárat</text>
          <rect x="60" y="240" width="40" height="20" rx="3" fill="#111116" stroke="#1A6BE8" strokeWidth="1" />
          <text x="80" y="253" fontSize="7" fill="#1A6BE8" textAnchor="middle">Beléptető</text>

          <rect x="220" y="190" width="320" height="110" rx="6" fill="#18181F" stroke="#C0C0D0" strokeWidth="1.5" />
          <text x="230" y="215" fontSize="11" fill="#F0F0F5" fontWeight="bold">Csendes IT Szerverszoba</text>
          <rect x="340" y="230" width="80" height="40" rx="4" fill="#111116" stroke="#E8271A" strokeWidth="1.5" />
          <text x="380" y="254" fontSize="9" fill="#E8271A" textAnchor="middle" fontWeight="bold">RACK & UPS</text>
        </svg>
      );

    case "uj-csarnok":
      return (
        <svg viewBox="0 0 600 340" className="w-full h-auto rounded-xl bg-panel/50 border border-line p-4 shadow-inner">
          <rect x="20" y="20" width="560" height="300" rx="10" fill="#111116" stroke="#2A2A35" strokeWidth="2" />
          <text x="40" y="50" fontSize="14" fill="#F0F0F5" fontWeight="bold">Csarnok Optikai Gerinchálózat & Magaslati AP-k</text>
          
          {/* Main Fiber Trunk */}
          <path d="M50 170 L550 170" stroke="#E8271A" strokeWidth="3" />
          <text x="300" y="160" fontSize="9" fill="#E8271A" textAnchor="middle" fontWeight="bold">OPTICAL FIBER BACKBONE</text>

          {/* High bay APs */}
          <circle cx="120" cy="100" r="16" fill="#18181F" stroke="#1AE87B" strokeWidth="1.5" />
          <text x="120" y="104" fontSize="8" fill="#1AE87B" textAnchor="middle">AP 01</text>
          <line x1="120" y1="116" x2="120" y2="170" stroke="#1AE87B" strokeWidth="1.5" strokeDasharray="3 3" />

          <circle cx="300" cy="100" r="16" fill="#18181F" stroke="#1AE87B" strokeWidth="1.5" />
          <text x="300" y="104" fontSize="8" fill="#1AE87B" textAnchor="middle">AP 02</text>
          <line x1="300" y1="116" x2="300" y2="170" stroke="#1AE87B" strokeWidth="1.5" strokeDasharray="3 3" />

          <circle cx="480" cy="100" r="16" fill="#18181F" stroke="#1AE87B" strokeWidth="1.5" />
          <text x="480" y="104" fontSize="8" fill="#1AE87B" textAnchor="middle">AP 03</text>
          <line x1="480" y1="116" x2="480" y2="170" stroke="#1AE87B" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* CCTV & Power */}
          <rect x="80" y="220" width="120" height="60" rx="6" fill="#18181F" stroke="#1A6BE8" strokeWidth="1.5" />
          <text x="140" y="255" fontSize="9" fill="#1A6BE8" textAnchor="middle" fontWeight="bold">PTZ CCTV</text>

          <rect x="380" y="220" width="140" height="60" rx="6" fill="#18181F" stroke="#F5B81C" strokeWidth="1.5" />
          <text x="450" y="255" fontSize="9" fill="#F5B81C" textAnchor="middle" fontWeight="bold">FŐELOSZTÓ</text>
        </svg>
      );

    case "uzletnyitas":
      return (
        <svg viewBox="0 0 600 340" className="w-full h-auto rounded-xl bg-panel/50 border border-line p-4 shadow-inner">
          <rect x="20" y="20" width="560" height="300" rx="10" fill="#111116" stroke="#2A2A35" strokeWidth="2" />
          <text x="40" y="45" fontSize="13" fill="#F0F0F5" fontWeight="bold">Üzlettéri POS, Wi-Fi & Vagyonvédelmi Topológia</text>
          
          <rect x="40" y="65" width="240" height="230" rx="8" fill="#18181F" stroke="#F5B81C" strokeWidth="1.5" />
          <text x="50" y="90" fontSize="11" fill="#F5B81C" fontWeight="bold">Eladótér & Pénztárak</text>
          <rect x="60" y="110" width="90" height="50" rx="4" fill="#111116" stroke="#F5B81C" strokeWidth="1" />
          <text x="105" y="138" fontSize="8" fill="#F0F0F5" textAnchor="middle">POS Kassza 1</text>
          <rect x="170" y="110" width="90" height="50" rx="4" fill="#111116" stroke="#F5B81C" strokeWidth="1" />
          <text x="215" y="138" fontSize="8" fill="#F0F0F5" textAnchor="middle">POS Kassza 2</text>
          <circle cx="160" cy="220" r="16" fill="#111116" stroke="#1A6BE8" strokeWidth="1.5" />
          <text x="160" y="224" fontSize="8" fill="#1A6BE8" textAnchor="middle">Kassza CCTV</text>

          <rect x="310" y="65" width="230" height="230" rx="8" fill="#18181F" stroke="#E8271A" strokeWidth="1.5" />
          <text x="320" y="90" fontSize="11" fill="#E8271A" fontWeight="bold">Raktár & IT Hub</text>
          <rect x="330" y="110" width="190" height="60" rx="4" fill="#111116" stroke="#E8271A" strokeWidth="1" />
          <text x="425" y="145" fontSize="9" fill="#E8271A" textAnchor="middle" fontWeight="bold">Fali Rack & Switch</text>
          <rect x="330" y="190" width="190" height="80" rx="4" fill="#111116" stroke="#1AE87B" strokeWidth="1" />
          <text x="425" y="235" fontSize="9" fill="#1AE87B" textAnchor="middle" fontWeight="bold">Riasztóközpont & 4G Failover</text>
        </svg>
      );

    case "gyartotelephely":
      return (
        <svg viewBox="0 0 600 340" className="w-full h-auto rounded-xl bg-panel/50 border border-line p-4 shadow-inner">
          <rect x="20" y="20" width="560" height="300" rx="10" fill="#111116" stroke="#2A2A35" strokeWidth="2" />
          <text x="40" y="45" fontSize="13" fill="#F0F0F5" fontWeight="bold">Gyártósori Ipari Hálózat & OT/IT Szeparálás</text>

          {/* Production Line */}
          <rect x="40" y="70" width="520" height="80" rx="6" fill="#18181F" stroke="#1AE87B" strokeWidth="1.5" />
          <text x="60" y="95" fontSize="11" fill="#1AE87B" fontWeight="bold">Gyártósor #1 - SCADA / PLC Hálózat</text>
          <circle cx="120" cy="120" r="10" fill="#111116" stroke="#1AE87B" strokeWidth="1" />
          <circle cx="260" cy="120" r="10" fill="#111116" stroke="#1AE87B" strokeWidth="1" />
          <circle cx="400" cy="120" r="10" fill="#111116" stroke="#1AE87B" strokeWidth="1" />

          {/* Security & Access */}
          <rect x="40" y="175" width="240" height="120" rx="6" fill="#18181F" stroke="#1A6BE8" strokeWidth="1.5" />
          <text x="50" y="200" fontSize="11" fill="#1A6BE8" fontWeight="bold">Üzemi Forgókapuk & CCTV</text>
          <rect x="60" y="220" width="200" height="50" rx="4" fill="#111116" stroke="#1A6BE8" strokeWidth="1" />
          <text x="160" y="250" fontSize="9" fill="#1A6BE8" textAnchor="middle">Beléptető Terminál</text>

          {/* Central Power & Rack */}
          <rect x="300" y="175" width="260" height="120" rx="6" fill="#18181F" stroke="#F5B81C" strokeWidth="1.5" />
          <text x="310" y="200" fontSize="11" fill="#F5B81C" fontWeight="bold">Ipari Elosztó & Szünetmentes Táp</text>
          <rect x="320" y="220" width="220" height="50" rx="4" fill="#111116" stroke="#F5B81C" strokeWidth="1" />
          <text x="430" y="250" fontSize="9" fill="#F5B81C" textAnchor="middle">Redundáns UPS</text>
        </svg>
      );

    case "raktar-logisztika":
      return (
        <svg viewBox="0 0 600 340" className="w-full h-auto rounded-xl bg-panel/50 border border-line p-4 shadow-inner">
          <rect x="20" y="20" width="560" height="300" rx="10" fill="#111116" stroke="#2A2A35" strokeWidth="2" />
          <text x="40" y="45" fontSize="13" fill="#F0F0F5" fontWeight="bold">Magaspolcos Raktár Wi-Fi Roaming & Kamera Lefedettség</text>

          {/* Racking Aisles */}
          <rect x="40" y="70" width="60" height="220" rx="4" fill="#18181F" stroke="#2A2A35" strokeWidth="1" />
          <rect x="140" y="70" width="60" height="220" rx="4" fill="#18181F" stroke="#2A2A35" strokeWidth="1" />
          <rect x="240" y="70" width="60" height="220" rx="4" fill="#18181F" stroke="#2A2A35" strokeWidth="1" />

          {/* Wi-Fi APs in Aisles */}
          <circle cx="110" cy="100" r="14" fill="#111116" stroke="#E8271A" strokeWidth="1.5" />
          <text x="110" y="104" fontSize="7" fill="#E8271A" textAnchor="middle">AP1</text>
          <circle cx="210" cy="220" r="14" fill="#111116" stroke="#E8271A" strokeWidth="1.5" />
          <text x="210" y="224" fontSize="7" fill="#E8271A" textAnchor="middle">AP2</text>

          {/* Handheld Terminal Forklift */}
          <rect x="330" y="70" width="230" height="100" rx="6" fill="#18181F" stroke="#1AE87B" strokeWidth="1.5" />
          <text x="340" y="95" fontSize="11" fill="#1AE87B" fontWeight="bold">WMS Kézi Terminálok & Targoncák</text>
          <text x="340" y="125" fontSize="9" fill="#8888A0">Zökkenőmentes Roaming (802.11r)</text>

          {/* Dock Door CCTV */}
          <rect x="330" y="190" width="230" height="100" rx="6" fill="#18181F" stroke="#1A6BE8" strokeWidth="1.5" />
          <text x="340" y="215" fontSize="11" fill="#1A6BE8" fontWeight="bold">Rampa Kapuk & Dóm Kamerák</text>
          <text x="340" y="245" fontSize="9" fill="#8888A0">Be- és kirakodási felvétel rögzítés</text>
        </svg>
      );

    case "rendelo":
      return (
        <svg viewBox="0 0 600 340" className="w-full h-auto rounded-xl bg-panel/50 border border-line p-4 shadow-inner">
          <rect x="20" y="20" width="560" height="300" rx="10" fill="#111116" stroke="#2A2A35" strokeWidth="2" />
          <text x="40" y="45" fontSize="13" fill="#F0F0F5" fontWeight="bold">Orvosi Rendelő & Diagnosztikai Hálózati Mátrix</text>

          <rect x="40" y="70" width="240" height="100" rx="6" fill="#18181F" stroke="#1A6BE8" strokeWidth="1.5" />
          <text x="50" y="95" fontSize="11" fill="#1A6BE8" fontWeight="bold">Recepció & Váróterem</text>
          <text x="50" y="120" fontSize="9" fill="#8888A0">Vendég Wi-Fi + Pánikgomb</text>

          <rect x="300" y="70" width="240" height="100" rx="6" fill="#18181F" stroke="#1AE87B" strokeWidth="1.5" />
          <text x="310" y="95" fontSize="11" fill="#1AE87B" fontWeight="bold">Kezelőhelyiségek</text>
          <text x="310" y="120" fontSize="9" fill="#8888A0">Orvosi LAN + PACS Képátvitel</text>

          <rect x="40" y="190" width="500" height="100" rx="6" fill="#18181F" stroke="#F5B81C" strokeWidth="1.5" />
          <text x="50" y="215" fontSize="11" fill="#F5B81C" fontWeight="bold">Orvostechnikai Tápszűrés & Szünetmentes Táp</text>
          <text x="50" y="245" fontSize="9" fill="#8888A0">Leválasztott, zajmentes villamos áramkörök</text>
        </svg>
      );

    case "epitkezes":
      return (
        <svg viewBox="0 0 600 340" className="w-full h-auto rounded-xl bg-panel/50 border border-line p-4 shadow-inner">
          <rect x="20" y="20" width="560" height="300" rx="10" fill="#111116" stroke="#2A2A35" strokeWidth="2" />
          <text x="40" y="45" fontSize="13" fill="#F0F0F5" fontWeight="bold">Szerkezetkész Építkezés Falmetszeti Csövezés</text>

          {/* Wall cross section */}
          <rect x="60" y="70" width="480" height="220" rx="6" fill="#18181F" stroke="#2A2A35" strokeWidth="1.5" />
          
          {/* High Voltage Duct */}
          <path d="M80 120 L520 120" stroke="#F5B81C" strokeWidth="4" />
          <text x="90" y="110" fontSize="9" fill="#F5B81C" fontWeight="bold">ERŐSÁRAMÚ VÉDŐCSŐ (230V/400V)</text>

          {/* Low Voltage Ethernet / Alarm Duct */}
          <path d="M80 190 L520 190" stroke="#E8271A" strokeWidth="4" />
          <text x="90" y="180" fontSize="9" fill="#E8271A" fontWeight="bold">GYENGEÁRAMÚ VÉDŐCSŐ (Cat6A / CCTV)</text>

          {/* Spare Duct for Future */}
          <path d="M80 250 L520 250" stroke="#1AE87B" strokeWidth="3" strokeDasharray="6 4" />
          <text x="90" y="240" fontSize="9" fill="#1AE87B" fontWeight="bold">TARTALÉK JÖVŐBELI VÉDŐCSŐ (KAPU / NAPELEM)</text>
        </svg>
      );

    case "cegkoltozes":
      return (
        <svg viewBox="0 0 600 340" className="w-full h-auto rounded-xl bg-panel/50 border border-line p-4 shadow-inner">
          <rect x="20" y="20" width="560" height="300" rx="10" fill="#111116" stroke="#2A2A35" strokeWidth="2" />
          <text x="40" y="45" fontSize="13" fill="#F0F0F5" fontWeight="bold">Cégköltözés: Régi Iroda &rarr; Migráció &rarr; Új Helyszín</text>

          {/* Legacy Site */}
          <rect x="40" y="80" width="160" height="200" rx="6" fill="#18181F" stroke="#2A2A35" strokeWidth="1.5" />
          <text x="50" y="110" fontSize="11" fill="#8888A0" fontWeight="bold">Régi Telephely</text>
          <text x="50" y="140" fontSize="9" fill="#8888A0">Péntek 18:00 Leállítás</text>
          <rect x="60" y="160" width="120" height="40" rx="4" fill="#111116" stroke="#8888A0" strokeWidth="1" />
          <text x="120" y="184" fontSize="8" fill="#8888A0" textAnchor="middle">Mentés &amp; Csomagolás</text>

          {/* Migration Bridge */}
          <path d="M200 180 L400 180" stroke="#E8271A" strokeWidth="3" strokeDasharray="6 4" />
          <polygon points="395,175 405,180 395,185" fill="#E8271A" />
          <text x="300" y="165" fontSize="9" fill="#E8271A" textAnchor="middle" fontWeight="bold">SZOMBATI IT KÖLTÖZTETÉS</text>

          {/* New Site */}
          <rect x="400" y="80" width="160" height="200" rx="6" fill="#18181F" stroke="#1AE87B" strokeWidth="1.5" />
          <text x="410" y="110" fontSize="11" fill="#1AE87B" fontWeight="bold">Új Iroda</text>
          <text x="410" y="140" fontSize="9" fill="#1AE87B">Hétfő 08:00 Éles Üzem</text>
          <rect x="420" y="160" width="120" height="40" rx="4" fill="#111116" stroke="#1AE87B" strokeWidth="1" />
          <text x="480" y="184" fontSize="8" fill="#F0F0F5" textAnchor="middle">Beüzemelt Rack &amp; Net</text>
        </svg>
      );

    default:
      return null;
  }
};
