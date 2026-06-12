/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0C",
        surface: "#111116",
        panel: "#18181F",
        line: "#2A2A35",
        ink: "#F0F0F5",
        muted: "#8888A0",
        silver: "#C0C0D0",
        sironic: "#E8271A",
        siroved: "#1A6BE8",
        sirosoft: "#1AE87B",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        site: "1280px",
      },
    },
  },
  plugins: [],
};
