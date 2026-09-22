"use client";

import { useMediaQuery } from "@/lib/useMediaQuery";

const STAGES = [
  "Tervezés",
  "Kivitelezés",
  "Bővítés",
  "Karbantartás",
  "Hibajavítás",
  "Korszerűsítés"
];

export const Lifecycle = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section className="py-24 border-t border-line/50 overflow-hidden relative">
      <div className="mx-auto max-w-site px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">A rendszer teljes életciklusa</h2>
        </div>

        {isDesktop ? (
          <div className="relative mx-auto w-full max-w-3xl aspect-square">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Center Node */}
              <circle cx="100" cy="100" r="25" fill="#18181F" stroke="#C0C0D0" strokeWidth="1" />
              <text x="100" y="102" fontSize="6" fill="#F0F0F5" textAnchor="middle" fontWeight="bold" letterSpacing="1">SIROTECH</text>
              
              {/* Dashed Circle Path */}
              <circle cx="100" cy="100" r="70" fill="none" stroke="#2A2A35" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Nodes and Text */}
              {STAGES.map((stage, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const x = 100 + 70 * Math.cos(angle);
                const y = 100 + 70 * Math.sin(angle);
                const textX = 100 + 90 * Math.cos(angle);
                const textY = 100 + 90 * Math.sin(angle);
                
                return (
                  <g key={stage}>
                    <line x1="100" y1="100" x2={x} y2={y} stroke="#2A2A35" strokeWidth="0.5" />
                    <circle cx={x} cy={y} r="4" fill="#C0C0D0" />
                    <text 
                      x={textX} 
                      y={textY + 2} 
                      fontSize="7" 
                      fill="#F0F0F5" 
                      textAnchor={textX < 90 ? "end" : textX > 110 ? "start" : "middle"}
                      fontWeight="500"
                    >
                      {stage}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        ) : (
          <div className="relative pl-6">
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-line"></div>
            <div className="flex flex-col gap-8">
              {STAGES.map((stage, i) => (
                <div key={stage} className="relative flex items-center gap-6">
                  <div className="absolute left-[-29px] h-3 w-3 rounded-full bg-silver ring-4 ring-bg"></div>
                  <div className="rounded-lg border border-line bg-surface p-4 flex-1">
                    <span className="text-xs font-mono text-muted mb-1 block">Fázis 0{i + 1}</span>
                    <h3 className="font-semibold text-ink">{stage}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
