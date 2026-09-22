"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export const BeforeAfterSystemMap = () => {
  const { locale } = useI18n();
  const isEn = locale === "en";
  const [activeStep, setActiveStep] = useState<"before" | "center" | "after">("center");

  const leftLabel = isEn ? "Current System" : "Jelenlegi rendszer";
  const centerLabel = isEn ? "Survey & Decision" : "Felmérés és döntés";
  const rightLabel = isEn ? "Upgraded System" : "Fejlesztett rendszer";

  return (
    <div className="w-full bg-panel/40 border border-line/60 rounded-2xl p-6 shadow-xl backdrop-blur-sm select-none">
      <div className="text-xs font-mono text-muted uppercase tracking-wider mb-4 text-center">
        {isEn ? "INTERACTIVE SYSTEM MODERNISATION MAP" : "ELŐTTE-UTÁNA RENDSZERÁBRA"}
      </div>
      
      <svg viewBox="0 0 600 300" className="w-full h-auto">
        {/* Left Node: Current System */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActiveStep("before")}
          onClick={() => setActiveStep("before")}
        >
          <rect
            x="40"
            y="70"
            width="140"
            height="160"
            rx="10"
            fill="#111116"
            stroke={activeStep === "before" ? "#E8271A" : "#2A2A35"}
            strokeWidth={activeStep === "before" ? "2.5" : "1.5"}
            className="transition-all duration-300"
          />
          <text x="110" y="105" fontSize="12" fill={activeStep === "before" ? "#E8271A" : "#8888A0"} textAnchor="middle" fontWeight="bold">
            {leftLabel}
          </text>
          {/* Tangled / Old System Lines */}
          <line x1="60" y1="130" x2="160" y2="150" stroke="#8888A0" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="60" y1="160" x2="160" y2="130" stroke="#8888A0" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="60" y1="190" x2="160" y2="180" stroke="#8888A0" strokeWidth="1" />
          <circle cx="60" cy="130" r="4" fill="#E8271A" />
          <circle cx="160" cy="150" r="4" fill="#F5B81C" />
        </g>

        {/* Center Node: Survey & Decision */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActiveStep("center")}
          onClick={() => setActiveStep("center")}
        >
          <path d="M180 150 L230 150" stroke="#E8271A" strokeWidth="2" strokeDasharray="4 2" />
          <rect
            x="230"
            y="90"
            width="140"
            height="120"
            rx="12"
            fill="#18181F"
            stroke={activeStep === "center" ? "#F0F0F5" : "#2A2A35"}
            strokeWidth={activeStep === "center" ? "2.5" : "1.5"}
            className="transition-all duration-300"
          />
          <text x="300" y="125" fontSize="11" fill="#F0F0F5" textAnchor="middle" fontWeight="bold">
            {centerLabel}
          </text>
          <text x="300" y="145" fontSize="9" fill="#8888A0" textAnchor="middle">SIROTECH Audit</text>
          <text x="300" y="165" fontSize="8" fill="#1AE87B" textAnchor="middle">Megőrzés vs Csere</text>
          <path d="M370 150 L420 150" stroke="#1AE87B" strokeWidth="2" strokeDasharray="4 2" />
        </g>

        {/* Right Node: Upgraded System */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActiveStep("after")}
          onClick={() => setActiveStep("after")}
        >
          <rect
            x="420"
            y="70"
            width="140"
            height="160"
            rx="10"
            fill="#111116"
            stroke={activeStep === "after" ? "#1AE87B" : "#2A2A35"}
            strokeWidth={activeStep === "after" ? "2.5" : "1.5"}
            className="transition-all duration-300"
          />
          <text x="490" y="105" fontSize="12" fill={activeStep === "after" ? "#1AE87B" : "#8888A0"} textAnchor="middle" fontWeight="bold">
            {rightLabel}
          </text>
          {/* Clean Parallel Backbone */}
          <line x1="440" y1="130" x2="540" y2="130" stroke="#1AE87B" strokeWidth="2" />
          <line x1="440" y1="160" x2="540" y2="160" stroke="#1A6BE8" strokeWidth="2" />
          <line x1="440" y1="190" x2="540" y2="190" stroke="#F5B81C" strokeWidth="2" />
          <circle cx="540" cy="130" r="4" fill="#1AE87B" />
          <circle cx="540" cy="160" r="4" fill="#1A6BE8" />
          <circle cx="540" cy="190" r="4" fill="#F5B81C" />
        </g>
      </svg>
    </div>
  );
};
