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
            RespawnEdge Gaming Hub is a premium esports and console gaming
            destination built for passionate gamers. We provide high-performance
            gaming PCs, PS5 setups, and a competitive environment designed to
            elevate every player's experience.
            <br className="hidden sm:block" />
            Our goal is to create a strong gaming community where skills,
            strategy, and passion come together.
            <br />
            <span className="text-blue-400 font-semibold">
              Play Hard. Compete Smart. Respawn Stronger.
            </span>
          </p>
        </div>

        {/* ===== MISSION SECTION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-400">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
              Our mission is simple — we aim to build a powerful gaming ecosystem
              with premium infrastructure, competitive events, and strong
              support for emerging esports talent.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-400">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              To become the leading gaming hub that nurtures esports talent and
              builds a thriving competitive gaming community.
            </p>
          </div>

          <div className="bg-blue-900/20 p-6 sm:p-8 rounded-xl border border-blue-800/40">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
              Why Choose Us?
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li>💻 High-Performance Gaming PCs</li>
              <li>🎮 PS5 Premium Console Experience</li>
              <li>🏆 Tournament-Ready Atmosphere</li>
              <li>🛋️ Comfortable Gaming Zone</li>
              <li>💰 Affordable Hourly Pricing</li>
              <li>⚡ High-Speed Internet & Zero Lag Gameplay</li>
            </ul>
          </div>
        </div>

        {/* ===== FRANCHISE SECTION ===== */}
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-800/40 rounded-2xl p-8 sm:p-10 text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-400">
            Franchise Opportunity 
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Want to start your own gaming hub? Partner with RespawnEdge
            and build a powerful esports destination in your city.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-10 text-gray-300 text-sm sm:text-base">
            <div>• Premium Branding</div>
            <div>• Gaming PCs & Console Setup Support</div>
            <div>• Launch Marketing Campaign Support</div>
            <div>• Social Media Growth Strategy</div>
            <div>• Continuous Technical Assistance</div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-base sm:text-lg font-semibold mb-4 text-white">
              Interested in starting your own gaming hub?
            </p>

            <p className="text-gray-300 text-sm sm:text-base mb-2">
              Partner with <span className="text-blue-400 font-semibold">RespawnEdge</span>
            </p>

            <p className="text-gray-400 text-sm sm:text-base">
               Call / WhatsApp: <span className="text-white font-medium">+91 6282 909 128</span>
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
               Email: <span className="text-white font-medium">respawnedge6@gmail.com</span>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}