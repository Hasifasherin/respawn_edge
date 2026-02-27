'use client';

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "../../components/ui/table";

export default function PricingPage() {
  const [isMd, setIsMd] = useState(false);

  // Detect window width on client only
  useEffect(() => {
    const handleResize = () => setIsMd(window.innerWidth >= 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const modes = [
    {
      name: "Single Mode",
      accent: "#f97316",
      glow: "hover:shadow-orange-500/40",
      plans: [
        ["Express Slot (15 Min)", "₹50"],
        ["30 Min Session", "₹90"],
        ["1 Hr Session", "₹160"],
        ["30 Min Extension", "₹80"],
        ["1 Hr Extension", "₹130"],
      ],
    },
    {
      name: "Dual Mode",
      accent: "#2563eb",
      glow: "hover:shadow-blue-500/40",
      plans: [
        ["Express Slot (15 Min)", "₹80 (₹40 per person)"],
        ["30 Min Session", "₹140 (₹70 per person)"],
        ["1 Hr Session", "₹250 (₹125 per person)"],
        ["30 Min Extension", "₹120 (₹60 per person)"],
        ["1 Hr Extension", "₹190 (₹95 per person)"],
      ],
    },
    {
      name: "Big Mode",
      accent: "#16a34a",
      glow: "hover:shadow-green-500/40",
      plans: [
        ["Express Slot (15 Min)", "₹120"],
        ["30 Min Session", "₹220"],
        ["1 Hr Session", "₹380"],
        ["30 Min Extension", "₹200"],
        ["1 Hr Extension", "₹340"],
      ],
    },
    {
      name: "SimDrive",
      accent: "#eab308",
      glow: "hover:shadow-yellow-500/40",
      plans: [
        ["One Session (15 Min)", "₹90"],
        ["Extension (15 Min)", "₹80"],
        ["Pro Session (1 Hr)", "₹290"],
      ],
    },
  ];

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-20 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          RespawnEdge Pricing
        </h1>

        <div className="space-y-8 md:space-y-12">
          {modes.map((mode, index) => (
            <div
              key={index}
              className={`group flex flex-col md:flex-row border border-white/10 rounded-xl overflow-hidden
              transition-all duration-300 transform
              hover:-translate-y-2 hover:shadow-2xl ${mode.glow}`}
            >

              {/* LEFT LABEL */}
              <div
                className="text-black font-bold flex items-center justify-center 
                px-4 py-4 md:px-6 md:py-10 tracking-wider text-sm md:text-base"
                style={{
                  writingMode: isMd ? "vertical-rl" : "horizontal-tb",
                  transform: isMd ? "rotate(180deg)" : "none",
                  backgroundColor: mode.accent,
                }}
              >
                {mode.name.toUpperCase()}
              </div>

              {/* RIGHT TABLE */}
              <div className="flex-1 bg-[#0f172a] p-4 md:p-8 overflow-x-auto">
                <Table>
                  <TableBody>
                    {mode.plans.map((plan, i) => (
                      <TableRow
                        key={i}
                        className="border-b border-white/5 hover:bg-white/5 transition-all duration-300"
                      >
                        <TableCell className="relative pl-6 md:pl-8 text-gray-300 text-sm md:text-base">
                          <span
                            className="absolute left-0 top-0 h-full w-[3px] opacity-80"
                            style={{
                              background: mode.accent,
                              boxShadow: `0 0 8px ${mode.accent}`,
                            }}
                          />
                          <div className="flex items-center gap-2 md:gap-3">
                            <span
                              className="w-2 h-2 rounded-full animate-pulse"
                              style={{
                                background: mode.accent,
                                boxShadow: `0 0 8px ${mode.accent}`,
                              }}
                            />
                            {plan[0]}
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-semibold text-white pr-4 md:pr-6 text-sm md:text-base whitespace-nowrap">
                          {plan[1]}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

            </div>
          ))}
        </div>

        {/* NOTES */}
        <div className="mt-12 md:mt-16 bg-red-600/20 border border-red-500 rounded-xl p-4 md:p-6 text-xs sm:text-sm hover:bg-red-600/30 transition">
          <p>• Seat sharing is not allowed in a single session.</p>
          <p>• ₹80 per extra person will be charged for shared SimDrive session.</p>
        </div>

      </div>
    </div>
  );
}