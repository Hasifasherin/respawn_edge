"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
    return (
    <>
      {/* Animated mesh gradient base */}
      <div className="fixed inset-0 z-0 animated-mesh" />

      {/* Grid pattern */}
      <div className="fixed inset-0 z-0 grid-pattern opacity-40" />

      {/* Radial overlays */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 600px 400px at 15% 40%, rgba(123,44,191,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 500px 300px at 85% 20%, rgba(0,217,255,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 400px 300px at 60% 85%, rgba(255,0,110,0.06) 0%, transparent 70%)
          `,
        }}
      />

      {/* Scan line effect */}
      <div
        className="fixed inset-x-0 z-0 pointer-events-none"
        style={{
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(0,217,255,0.08), transparent)",
          animation: "scan-line 8s linear infinite",
          top: 0,
        }}
      />

      {/* Corner decorations */}
      <div className="fixed top-0 left-0 z-0 pointer-events-none" style={{ width: 120, height: 120 }}>
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full opacity-20">
          <path d="M0 40 L0 0 L40 0" stroke="#00d9ff" strokeWidth="1" />
          <path d="M0 50 L0 5" stroke="#00d9ff" strokeWidth="0.5" opacity="0.5" />
          <path d="M5 0 L50 0" stroke="#00d9ff" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>
      <div className="fixed top-0 right-0 z-0 pointer-events-none" style={{ width: 120, height: 120 }}>
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full opacity-20">
          <path d="M120 40 L120 0 L80 0" stroke="#ff006e" strokeWidth="1" />
        </svg>
      </div>
      <div className="fixed bottom-0 left-0 z-0 pointer-events-none" style={{ width: 120, height: 120 }}>
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full opacity-20">
          <path d="M0 80 L0 120 L40 120" stroke="#7b2cbf" strokeWidth="1" />
        </svg>
      </div>
      <div className="fixed bottom-0 right-0 z-0 pointer-events-none" style={{ width: 120, height: 120 }}>
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full opacity-20">
          <path d="M120 80 L120 120 L80 120" stroke="#00d9ff" strokeWidth="1" />
        </svg>
      </div>
    </>
  );
}
