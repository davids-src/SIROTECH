"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useMediaQuery } from "@/lib/useMediaQuery";

interface LifecycleNode {
  id: string;
  hu: string;
  en: string;
  microcopy_hu: string;
  microcopy_en: string;
}

const NODES: LifecycleNode[] = [
  {
    id: "planning",
    hu: "Tervezés",
    en: "Planning",
    microcopy_hu: "Igények, helyszín, műszaki koncepció.",
    microcopy_en: "Requirements, site survey, technical concept.",
  },
  {
    id: "implementation",
    hu: "Kivitelezés",
    en: "Implementation",
    microcopy_hu: "Összehangolt szakági megvalósítás.",
    microcopy_en: "Coordinated multi-disciplinary execution.",
  },
  {
    id: "expansion",
    hu: "Bővítés",
    en: "Expansion",
    microcopy_hu: "Új végpontok, területek és funkciók.",
    microcopy_en: "New endpoints, areas and capabilities.",
  },
  {
    id: "maintenance",
    hu: "Karbantartás",
    en: "Maintenance",
    microcopy_hu: "Megelőző ellenőrzés és üzembiztonság.",
    microcopy_en: "Preventive checks & operational security.",
  },
  {
    id: "repair",
    hu: "Javítás",
    en: "Repair",
    microcopy_hu: "Hibafeltárás és helyreállítás.",
    microcopy_en: "Fault diagnosis and restoration.",
  },
  {
    id: "modernization",
    hu: "Korszerűsítés",
    en: "Modernisation",
    microcopy_hu: "Elavult rendszerek megújítása.",
    microcopy_en: "Upgrading legacy systems.",
  },
];

export const SystemLifecycleOrbit = () => {
  const { locale } = useI18n();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const isEn = locale === "en";

  const eyebrow = isEn
    ? "THE COMPLETE SYSTEM LIFECYCLE"
    : "A RENDSZER TELJES ÉLETCIKLUSA";
  const heading = isEn
    ? "We join where you need us."
    : "Ott kapcsolódunk be, ahol szükség van ránk.";
  const body = isEn
    ? "Whether you are planning a new system, expanding an existing one, solving a fault or looking for a long-term partner, SIROTECH can support the full lifecycle."
    : "Új rendszert tervez, meglévőt bővít, hibát javíttat vagy hosszú távú partnert keres? A SIROTECH a teljes életciklusban képes támogatást adni.";

  // SVG dimensions for 16:9 view box: 960 x 540
  const cx = 480;
  const cy = 270;
  const rx = 340; // horizontal radius for orbit
  const ry = 190; // vertical radius for orbit

  return (
    <section className="py-20 border-t border-line/50 overflow-hidden relative bg-gradient-to-b from-bg to-surface/40">
      <div className="mx-auto max-w-site px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-sironic-red uppercase font-semibold block mb-3">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl mb-4">
            {heading}
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            {body}
          </p>
        </div>

        {isDesktop ? (
          <div className="relative mx-auto w-full max-w-5xl aspect-[16/9] bg-panel/30 rounded-2xl border border-line/60 p-4 shadow-2xl overflow-hidden backdrop-blur-sm">
            <svg
              viewBox="0 0 960 540"
              className="w-full h-full select-none"
              aria-label={isEn ? "Interactive system lifecycle orbit diagram" : "Interaktív rendszer életciklus diagram"}
            >
              <defs>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E8271A" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#18181F" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E8271A" />
                  <stop offset="100%" stopColor="#C0C0D0" />
                </linearGradient>
              </defs>

              {/* Background Orbit Ring */}
              <ellipse
                cx={cx}
                cy={cy}
                rx={rx}
                ry={ry}
                fill="none"
                stroke="#2A2A35"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />

              {/* Central Glow & Core Hub */}
              <circle cx={cx} cy={cy} r="110" fill="url(#centerGlow)" />
              <circle
                cx={cx}
                cy={cy}
                r="64"
                fill="#111116"
                stroke="#2A2A35"
                strokeWidth="2"
                className="transition-all duration-300"
              />
              <circle
                cx={cx}
                cy={cy}
                r="56"
                fill="#18181F"
                stroke="#E8271A"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />

              {/* Seal logo in center hub */}
              <image
                href="/brand/sirotech_seal.svg"
                x={cx - 42}
                y={cy - 42}
                width={84}
                height={84}
                clipPath="circle()"
              />

              {/* Connecting Lines & Nodes */}
              {NODES.map((node, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const nx = cx + rx * Math.cos(angle);
                const ny = cy + ry * Math.sin(angle);
                const isActive = activeNodeId === node.id;

                const nodeLabel = isEn ? node.en : node.hu;
                const nodeDesc = isEn ? node.microcopy_en : node.microcopy_hu;

                // Text alignment and offsets based on position
                const isRight = nx > cx + 20;
                const isLeft = nx < cx - 20;

                let textAnchor = "middle";
                let tx = nx;
                let ty = ny > cy ? ny + 32 : ny - 24;

                if (isRight) {
                  textAnchor = "start";
                  tx = nx + 24;
                  ty = ny + 4;
                } else if (isLeft) {
                  textAnchor = "end";
                  tx = nx - 24;
                  ty = ny + 4;
                }

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer group"
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    onMouseLeave={() => setActiveNodeId(null)}
                    onFocus={() => setActiveNodeId(node.id)}
                    onBlur={() => setActiveNodeId(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${nodeLabel}: ${nodeDesc}`}
                  >
                    {/* Radial Connecting Line */}
                    <line
                      x1={cx}
                      y1={cy}
                      x2={nx}
                      y2={ny}
                      stroke={isActive ? "url(#activeLineGrad)" : "#2A2A35"}
                      strokeWidth={isActive ? "2.5" : "1"}
                      strokeOpacity={isActive ? "1" : "0.5"}
                      className="transition-all duration-300"
                    />

                    {/* Outer Pulse effect on active */}
                    {isActive && (
                      <circle
                        cx={nx}
                        cy={ny}
                        r="20"
                        fill="#E8271A"
                        fillOpacity="0.15"
                        stroke="#E8271A"
                        strokeOpacity="0.4"
                        strokeWidth="1"
                        className="animate-pulse"
                      />
                    )}

                    {/* Node Dot */}
                    <circle
                      cx={nx}
                      cy={ny}
                      r={isActive ? "10" : "7"}
                      fill={isActive ? "#E8271A" : "#18181F"}
                      stroke={isActive ? "#F0F0F5" : "#C0C0D0"}
                      strokeWidth={isActive ? "2.5" : "1.5"}
                      className="transition-all duration-300 group-hover:scale-125"
                    />

                    {/* Node Number indicator inside dot */}
                    <text
                      x={nx}
                      y={ny + 3}
                      fontSize="9"
                      fill={isActive ? "#FFFFFF" : "#8888A0"}
                      textAnchor="middle"
                      fontWeight="bold"
                      className="pointer-events-none"
                    >
                      {i + 1}
                    </text>

                    {/* Node Title */}
                    <text
                      x={tx}
                      y={ty}
                      fontSize="14"
                      fill={isActive ? "#F0F0F5" : "#C0C0D0"}
                      textAnchor={textAnchor}
                      fontWeight={isActive ? "700" : "600"}
                      className="transition-colors duration-200"
                    >
                      {nodeLabel}
                    </text>

                    {/* Hover Microcopy tooltip / subtext */}
                    <text
                      x={tx}
                      y={ty + 18}
                      fontSize="11"
                      fill={isActive ? "#E8271A" : "#8888A0"}
                      textAnchor={textAnchor}
                      fontWeight="400"
                      className="transition-opacity duration-200"
                      opacity={isActive ? 1 : 0.75}
                    >
                      {nodeDesc}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        ) : (
          /* Mobile Timeline View */
          <div className="relative pl-6 sm:pl-8 max-w-lg mx-auto">
            <div className="absolute left-[15px] sm:left-[23px] top-4 bottom-4 w-0.5 bg-line"></div>
            <div className="flex flex-col gap-6">
              {NODES.map((node, i) => {
                const nodeLabel = isEn ? node.en : node.hu;
                const nodeDesc = isEn ? node.microcopy_en : node.microcopy_hu;
                const isActive = activeNodeId === node.id;

                return (
                  <div
                    key={node.id}
                    className="relative flex items-start gap-4 cursor-pointer"
                    onClick={() => setActiveNodeId(activeNodeId === node.id ? null : node.id)}
                  >
                    <div
                      className={`absolute left-[-29px] sm:left-[-37px] top-1.5 h-6 w-6 rounded-full border flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                        isActive
                          ? "bg-sironic-red border-sironic-red text-white"
                          : "bg-surface border-line text-muted"
                      }`}
                    >
                      {i + 1}
                    </div>

                    <div
                      className={`rounded-xl border p-5 w-full transition-all ${
                        isActive
                          ? "border-sironic-red/60 bg-panel shadow-lg"
                          : "border-line/70 bg-surface/80 hover:border-line"
                      }`}
                    >
                      <span className="text-[11px] font-mono tracking-wider text-sironic-red uppercase font-semibold mb-1 block">
                        Fázis 0{i + 1}
                      </span>
                      <h3 className="font-display text-lg font-bold text-ink mb-1">
                        {nodeLabel}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {nodeDesc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
