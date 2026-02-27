"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== HERO SECTION ===== */}
        <div className="text-center mb-14 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6">
            About <span className="text-blue-500">RespawnEdge</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2">
            RespawnEdge is a next-generation gaming platform and innovation hub 
            empowering game developers, studios, and creators to level up their ideas. 
            We accelerate growth through mentorship, strategic support, industry 
            connections, and access to global gaming opportunities.
          </p>
        </div>

        {/* ===== MISSION SECTION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-400">
              Our Mission
            </h2>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Our mission is to build a thriving gaming ecosystem where creators 
              can innovate, scale, and succeed. We support studios by providing 
              expert guidance, technical mentorship, networking access, and 
              strategic growth opportunities in the gaming and XR industry.
            </p>
          </div>

          <div className="bg-blue-900/20 p-6 sm:p-8 rounded-xl border border-blue-800/40">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
              What We Provide
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li>🎮 Industry Mentorship & Expert Guidance</li>
              <li>🚀 Accelerator Programs for Studios</li>
              <li>🤝 Networking & Global Partnerships</li>
              <li>💰 Investor Access & Funding Support</li>
              <li>🌍 Exposure to International Markets</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}