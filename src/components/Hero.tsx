"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, ShieldCheck, Zap, Code } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BRANDS } from "@/lib/brands";
import { trackEvent } from "@/lib/gtag";
import Link from "next/link";
import { useState } from "react";

const BRAND_ALTS: Record<string, string> = {
  sironic: "SIRONIC – IT üzemeltetés és rendszergazda szolgáltatás Székesfehérváron és Fejér megyében",
  siroved: "SIRO-VÉD – Kamerarendszer telepítés, biztonságtechnika és riasztók Székesfehérváron",
  sirosoft: "SIROSOFT – Egyedi szoftverfejlesztés, CRM és ERP rendszer bevezetés cégeknek",
  sirovill: "SIROVILL – Villanyszerelés, erősáramú kivitelezés Fejér megyében és Budapesten",
};

export const Hero = () => {
  const { t } = useI18n();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const nodes = [
    { id: "it", label: "Informatika", color: "#E8271A", icon: Server, desc: "Szerverek, hálózat, munkaállomások", cx: 20, cy: 20 },
    { id: "sec", label: "Biztonságtechnika", color: "#1A6BE8", icon: ShieldCheck, desc: "Kamerák, beléptető, riasztó", cx: 80, cy: 20 },
    { id: "elec", label: "Villanyszerelés", color: "#F5B81C", icon: Zap, desc: "Erős- és gyengeáramú hálózatok", cx: 20, cy: 80 },
    { id: "dev", label: "Szoftverfejlesztés", color: "#1AE87B", icon: Code, desc: "Egyedi vállalatirányítási rendszerek", cx: 80, cy: 80 },
  ];

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div
        className="absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(closest-side, #C0C0D0, transparent)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-site px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="label text-silver"
              data-testid="hero-eyebrow"
            >
              SIROTECH • Informatika • Biztonságtechnika • Villany • Szoftver
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
              data-testid="hero-headline"
            >
              Egy partner. Az infrastruktúrája teljes életciklusára.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base text-muted md:text-lg"
              data-testid="hero-subheadline"
            >
              Új rendszer építése, meglévő bővítése, javítása vagy hosszú távú üzemeltetése — cégeknek és magánügyfeleknek Székesfehérvárról, Fejér vármegyében, Budapesten és Közép-Dunántúlon.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/kapcsolat"
                onClick={() => trackEvent("hero_cta_primary", "engagement", "Contact")}
                className="rounded bg-silver px-6 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-ink"
              >
                Beszéljük át a feladatot
              </Link>
              <Link
                href="/megoldasok"
                onClick={() => trackEvent("hero_cta_secondary", "engagement", "Solutions")}
                className="rounded border border-line px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-silver"
              >
                Megoldások megtekintése
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Interactive SVG Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto w-full max-w-md aspect-square"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              {/* Lines from center to nodes */}
              {nodes.map((node) => (
                <g key={`line-${node.id}`}>
                  <line 
                    x1="50" y1="50" x2={node.cx} y2={node.cy} 
                    stroke={node.color} 
                    strokeWidth="1.5" 
                    className="opacity-40"
                  />
                  <line 
                    x1="50" y1="50" x2={node.cx} y2={node.cy} 
                    stroke={node.color} 
                    strokeWidth="1.5"
                    className="opacity-60"
                  >
                    <animate attributeName="stroke-dasharray" values="0, 100; 100, 0" dur="3s" repeatCount="indefinite" />
                  </line>
                </g>
              ))}

              {/* Central Building Node */}
              <circle cx="50" cy="50" r="14" fill="#18181F" stroke="#F0F0F5" strokeWidth="2" />
              <path d="M45,54 L45,46 L50,42 L55,46 L55,54 Z" fill="none" stroke="#F0F0F5" strokeWidth="1.5" strokeLinejoin="round" />
              
              {/* Outer Nodes */}
              {nodes.map((node) => {
                const Icon = node.icon;
                return (
                  <g 
                    key={node.id} 
                    className="cursor-pointer group"
                    onMouseEnter={() => setActiveTooltip(node.id)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    onFocus={() => setActiveTooltip(node.id)}
                    onBlur={() => setActiveTooltip(null)}
                    tabIndex={0}
                  >
                    <circle 
                      cx={node.cx} 
                      cy={node.cy} 
                      r="10" 
                      fill="#111116" 
                      stroke={node.color} 
                      strokeWidth="1.5"
                      className="transition-all duration-300 group-hover:scale-110"
                    />
                    <foreignObject x={node.cx - 5} y={node.cy - 5} width="10" height="10">
                      <div className="w-full h-full flex items-center justify-center text-ink pointer-events-none" style={{ color: node.color }}>
                        <Icon size={12} strokeWidth={2} />
                      </div>
                    </foreignObject>
                    
                    {/* Pulsing ring */}
                    <circle cx={node.cx} cy={node.cy} r="10" fill="none" stroke={node.color} strokeWidth="1">
                      <animate attributeName="r" values="10; 16" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8; 0" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* Tooltips */}
            {nodes.map((node) => (
              <div 
                key={`tooltip-${node.id}`}
                className={`absolute w-48 p-3 rounded-lg border bg-surface/90 backdrop-blur-md shadow-xl transition-all duration-300 z-10 ${activeTooltip === node.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                style={{
                  left: `calc(${node.cx}%)`,
                  top: `calc(${node.cy}%)`,
                  transform: `translate(${node.cx > 50 ? '-110%' : '10%'}, ${node.cy > 50 ? '-110%' : '10%'})`,
                  borderColor: `${node.color}40`
                }}
              >
                <p className="text-sm font-bold text-ink mb-1" style={{ color: node.color }}>{node.label}</p>
                <p className="text-xs text-muted leading-tight">{node.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
