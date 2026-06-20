import { useId } from "react";

/** Animated stock-chart SVG background with grid + neon line. */
export function StockBackground() {
  const id = useId();
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial-neon)" }}
      />
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[60%] w-full opacity-70"
        aria-hidden
      >
        <defs>
          <linearGradient id={`grad-${id}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#39ff14" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,500 L80,470 L160,490 L240,420 L320,440 L400,360 L480,380 L560,300 L640,330 L720,240 L800,260 L880,180 L960,210 L1040,130 L1120,150 L1200,80 L1200,600 L0,600 Z"
          fill={`url(#grad-${id})`}
        />
        <path
          className="chart-line"
          d="M0,500 L80,470 L160,490 L240,420 L320,440 L400,360 L480,380 L560,300 L640,330 L720,240 L800,260 L880,180 L960,210 L1040,130 L1120,150 L1200,80"
          fill="none"
          stroke="#39ff14"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 8px rgba(57,255,20,0.7))" }}
        />
      </svg>
    </div>
  );
}
