"use client";

import { useI18n } from "@/lib/i18n";

export const PartnerEcosystemDiagram = () => {
  const { locale } = useI18n();
  const isEn = locale === "en";

  const centerLabel = isEn ? "Project" : "Projekt";
  const node1 = isEn ? "General Contractor" : "Generálkivitelező";
  const node2 = isEn ? "Architect / Planner" : "Építész / tervező";
  const node3 = isEn ? "Real Estate / Facility" : "Ingatlan / facility";
  const node4 = isEn ? "SIROTECH Disciplines" : "SIROTECH szakágak";

  return (
    <div className="w-full bg-panel/40 border border-line/60 rounded-2xl p-6 shadow-xl backdrop-blur-sm select-none">
      <div className="text-xs font-mono text-muted uppercase tracking-wider mb-4 text-center">
        {isEn ? "PARTNER ECOSYSTEM DIAGRAM" : "PARTNER ÖKOSZISZTÉMA DIAGRAM"}
      </div>
      <svg viewBox="0 0 500 340" className="w-full h-auto">
        {/* Central Project Hub */}
        <circle cx="250" cy="170" r="45" fill="#111116" stroke="#F0F0F5" strokeWidth="2" />
        <text x="250" y="174" fontSize="13" fill="#F0F0F5" textAnchor="middle" fontWeight="bold">
          {centerLabel}
        </text>

        {/* Node 1: General Contractor */}
        <line x1="250" y1="170" x2="110" y2="90" stroke="#8888A0" strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x="30" y="60" width="160" height="50" rx="8" fill="#18181F" stroke="#2A2A35" strokeWidth="1.5" />
        <text x="110" y="90" fontSize="10" fill="#F0F0F5" textAnchor="middle" fontWeight="bold">{node1}</text>

        {/* Node 2: Architect / Planner */}
        <line x1="250" y1="170" x2="390" y2="90" stroke="#8888A0" strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x="310" y="60" width="160" height="50" rx="8" fill="#18181F" stroke="#2A2A35" strokeWidth="1.5" />
        <text x="390" y="90" fontSize="10" fill="#F0F0F5" textAnchor="middle" fontWeight="bold">{node2}</text>

        {/* Node 3: Real Estate / Facility */}
        <line x1="250" y1="170" x2="110" y2="250" stroke="#8888A0" strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x="30" y="220" width="160" height="50" rx="8" fill="#18181F" stroke="#2A2A35" strokeWidth="1.5" />
        <text x="110" y="250" fontSize="10" fill="#F0F0F5" textAnchor="middle" fontWeight="bold">{node3}</text>

        {/* Node 4: SIROTECH Disciplines */}
        <line x1="250" y1="170" x2="390" y2="250" stroke="#E8271A" strokeWidth="2.5" />
        <rect x="310" y="220" width="160" height="50" rx="8" fill="#18181F" stroke="#E8271A" strokeWidth="2" />
        <text x="390" y="250" fontSize="10" fill="#E8271A" textAnchor="middle" fontWeight="bold">{node4}</text>
      </svg>
    </div>
  );
};
