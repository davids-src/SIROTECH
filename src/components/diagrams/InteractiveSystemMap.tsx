"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

interface DisciplineNode {
  id: string;
  hu: string;
  en: string;
  color: string;
  angle: number;
}

const DISCIPLINE_NODES: DisciplineNode[] = [
  { id: "elec", hu: "Villamos infrastruktúra", en: "Electrical Infrastructure", color: "#F5B81C", angle: -90 },
  { id: "net", hu: "Hálózat és Wi-Fi", en: "Network & Wi-Fi", color: "#E8271A", angle: -18 },
  { id: "sec", hu: "Biztonságtechnika", en: "Security Systems", color: "#1A6BE8", angle: 54 },
  { id: "it", hu: "IT rendszerek", en: "IT Systems", color: "#C0C0D0", angle: 126 },
  { id: "soft", hu: "Szoftver / integráció", en: "Software & Integration", color: "#1AE87B", angle: 198 },
];

export const InteractiveSystemMap = () => {
  const { locale } = useI18n();
  const isEn = locale === "en";
  const [activeId, setActiveId] = useState<string | null>(null);

  const centerLabel = isEn ? "Your Location" : "Az Ön helyszíne";
  const cx = 300;
  const cy = 200;
  const radius = 130;

  return (
    <div className="w-full bg-panel/40 border border-line/60 rounded-2xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden">
      <div className="text-xs font-mono text-muted uppercase tracking-wider mb-2 text-center">
        {isEn ? "INTERACTIVE SYSTEM MAP" : "INTERAKTÍV RENDSZERÁBRA"}
      </div>
      <svg
        viewBox="0 0 600 400"
        className="w-full h-auto select-none"
        aria-label={isEn ? "System integration map" : "Szakági integrációs rendszerábra"}
      >
        <defs>
          <radialGradient id="mapCenterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8271A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#18181F" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Center Glow */}
        <circle cx={cx} cy={cy} r="90" fill="url(#mapCenterGlow)" />
        <ellipse cx={cx} cy={cy} rx={radius} ry={radius} fill="none" stroke="#2A2A35" strokeWidth="1" strokeDasharray="4 4" />

        {/* Central Hub */}
        <circle cx={cx} cy={cy} r="48" fill="#111116" stroke="#C0C0D0" strokeWidth="1.5" />
        <text x={cx} y={cy - 4} fontSize="13" fill="#F0F0F5" textAnchor="middle" fontWeight="bold">
          {centerLabel}
        </text>
        <text x={cx} y={cy + 14} fontSize="9" fill="#8888A0" textAnchor="middle" fontWeight="500">
          SIROTECH Hub
        </text>

        {/* Nodes */}
        {DISCIPLINE_NODES.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const nx = cx + radius * Math.cos(rad);
          const ny = cy + radius * Math.sin(rad);
          const isActive = activeId === node.id;
          const label = isEn ? node.en : node.hu;

          // Align text
          const isRight = nx > cx + 10;
          const isLeft = nx < cx - 10;
          let textAnchor = "middle";
          let tx = nx;
          let ty = ny > cy ? ny + 24 : ny - 16;

          if (isRight) {
            textAnchor = "start";
            tx = nx + 18;
            ty = ny + 4;
          } else if (isLeft) {
            textAnchor = "end";
            tx = nx - 18;
            ty = ny + 4;
          }

          return (
            <g
              key={node.id}
              className="cursor-pointer group"
              onMouseEnter={() => setActiveId(node.id)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(node.id)}
              onBlur={() => setActiveId(null)}
              tabIndex={0}
              role="button"
              aria-label={label}
            >
              {/* Radial Line */}
              <line
                x1={cx}
                y1={cy}
                x2={nx}
                y2={ny}
                stroke={isActive ? node.color : "#2A2A35"}
                strokeWidth={isActive ? "2.5" : "1"}
                strokeDasharray={isActive ? undefined : "3 3"}
                className="transition-all duration-300"
              />

              {/* Node Circle */}
              <circle
                cx={nx}
                cy={ny}
                r={isActive ? "9" : "6"}
                fill={isActive ? node.color : "#18181F"}
                stroke={node.color}
                strokeWidth="2"
                className="transition-all duration-300 group-hover:scale-125"
              />

              {/* Node Label */}
              <text
                x={tx}
                y={ty}
                fontSize="12"
                fill={isActive ? "#F0F0F5" : "#C0C0D0"}
                textAnchor={textAnchor}
                fontWeight={isActive ? "700" : "500"}
                className="transition-colors duration-200"
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
